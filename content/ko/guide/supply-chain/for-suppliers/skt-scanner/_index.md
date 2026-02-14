---
title: "SK텔레콤 제공 도구"
linkTitle: "SKT 제공 도구"
weight: 4
type: docs
description: >
  SK텔레콤 표준 스크립트를 활용하여 복잡한 설정 없이 SBOM을 생성하는 방법입니다.
---

## 도구 개요

SKT SBOM Scanner는 공급사가 별도의 도구 학습이나 환경 설정 없이도 즉시 표준 준수 SBOM을 생성할 수 있도록 제공되는 도구입니다.

### 주요 장점
*   환경 독립성: Docker 컨테이너 기반으로 동작하여 로컬에 Java, Python 등을 설치할 필요가 없습니다.
*   다중 언어 지원: 프로젝트 내의 여러 언어(Java, JS, Python 등)를 한 번에 분석합니다.
*   자동 표준 준수: SK텔레콤 정책에 맞는 CycloneDX JSON 파일을 자동으로 생성합니다.



### 지원 언어 상세

| 언어 | 패키지 매니저 | 필수 파일 | 비고 |
|------|--------------|-----------|------|
| Java | Maven, Gradle | pom.xml, build.gradle | Java 7-17 지원 (JDK 17) |
| Python | pip, Poetry | requirements.txt, pyproject.toml | Python 3.6+ 지원 |
| Node.js | npm, Yarn, pnpm | package.json, package-lock.json | - |
| Ruby | Bundler | Gemfile, Gemfile.lock | - |
| PHP | Composer | composer.json, composer.lock | - |
| Rust | Cargo | Cargo.toml, Cargo.lock | - |
| Go | Go modules | go.mod, go.sum | - |
| .NET | NuGet | *.csproj, packages.config | - |
| C/C++ | Conan, vcpkg | conanfile.txt, vcpkg.json | 제한적 지원 |

> - Java 21: 대부분 JDK 17에서 분석 가능하나, Java 21 전용 기능 사용 시 제한이 있을 수 있습니다.
> - Python 2: 2020년 공식 지원 종료로 더 이상 지원하지 않습니다. Python 3로 마이그레이션을 권장합니다.

### 참고사항:
- C/C++ 프로젝트: 패키지 매니저(Conan, vcpkg) 사용 시에만 의존성 분석 가능. 헤더 파일 직접 관리 방식은 분석 제한적.
- 바이너리/펌웨어 파일: 기본 메타데이터만 추출 가능. 컴파일된 바이너리의 내부 의존성 분석에는 한계가 있음.
- RootFS 분석: 파일 시스템 구조 분석은 가능하나, 정적 링크된 라이브러리는 감지 불가능.

자세한 언어별 가이드는 [언어별 세부 사용 가이드](skt-language.md)를 참조하세요.

## 사전 준비사항

* 운영체제: 
  - Linux (권장)
  - macOS
  - Windows 10/11 (scan-sbom.bat 사용)
* Docker: v20.10 이상 설치 및 실행 중일 것
* 디스크 공간: 약 4-5 GB (Docker 이미지)

> 첫 실행 시 주의: Docker 이미지 다운로드로 5-10분 소요될 수 있습니다.
> 이후 실행부터는 캐시된 이미지를 사용하여 빠르게 실행됩니다.

## 도구 설치

### Linux / macOS
```bash
# 스크립트 다운로드
curl -O https://raw.githubusercontent.com/sktelecom/sbom-tools/main/scripts/scan-sbom.sh
chmod +x scan-sbom.sh

# 설치 확인
./scan-sbom.sh --help
```

### Windows
```cmd
# 스크립트 다운로드
curl -O https://raw.githubusercontent.com/sktelecom/sbom-tools/main/scripts/scan-sbom.bat

# 설치 확인
scan-sbom.bat --help
```

## 사용 방법

### 1. 스크립트 실행
다운받은 `scan-sbom.sh` 파일을 프로젝트 루트 디렉토리에 위치시키고 실행합니다.

```bash
./scan-sbom.sh --project "프로젝트명" --version "버전" --generate-only
```

### 2. 주요 옵션 설명
*   `--project`: (필수) 납품하는 프로젝트(애플리케이션)의 이름
*   `--version`: (필수) 납품하는 프로젝트의 버전
*   `--target`: (선택) 분석 대상 경로 또는 Docker 이미지명. (기본값: 현재 디렉토리 `./`)
*   `--generate-only`: (필수) 포털 자동 업로드 없이 로컬에 파일만 생성


## 사용 예시

### 1. 소스코드 분석 (Java/Python/Node.js 등)

소스코드가 있는 디렉토리에서 실행하면 `pom.xml`, `package.json`, `requirements.txt` 등을 자동 감지합니다.

```bash
cd /path/to/my-project
/path/to/scan-sbom.sh --project "MyWebApp" --version "1.0.0" --generate-only
```

- 결과: `MySpringApp_1.0.0_bom.json` 생성


### 2. Docker 이미지 분석

```bash
# 로컬 또는 레지스트리의 Docker 이미지 분석
./scan-sbom.sh --target "myapp:v1.0" --project "MyApp" --version "1.0" --generate-only
```

### 3. 바이너리 파일 분석 (펌웨어 등)

```bash
# 펌웨어 또는 실행 파일 분석
./scan-sbom.sh --target firmware.bin --project "RouterOS" --version "2.0" --generate-only
```

지원 파일 형식:
- ELF 바이너리
- 펌웨어 이미지

분석 한계:
- 컴파일된 바이너리는 기본 메타데이터만 추출 가능
- 내부 라이브러리나 의존성은 정적 링크 시 감지 불가능
- 정확한 SBOM 생성을 위해서는 소스 코드 레벨 분석을 권장
- 바이너리 분석 결과는 참고용으로만 활용

### 4. RootFS 디렉토리 분석

```bash
# 파일 시스템 전체 분석
./scan-sbom.sh --target ./rootfs/ --project "DeviceOS" --version "1.0" --generate-only
```

사용 사례:
- 임베디드 시스템 파일 시스템
- 언팩한 펌웨어 디렉토리
- 컨테이너 파일 시스템



## SKT SBOM 관리 포털 업로드 (향후 지원 예정)

### 자동 업로드 (권장)
`--generate-only` 옵션을 제거하면 SBOM이 자동으로 SBOM 관리 포털 업로드에 업로드됩니다.

```bash
./scan-sbom.sh --project "MyApp" --version "1.0.0"
```

### 업로드 설정
스크립트 내부의 다음 변수를 수정하세요:
```bash
SERVER_URL="http://your-sbom-server:8081"
DEFAULT_API_KEY="YOUR_API_KEY_HERE"
```

또는 환경변수로 설정:
```bash
export API_KEY="YOUR_API_KEY_HERE"
./scan-sbom.sh --project "MyApp" --version "1.0.0"
```

## 다음 단계

SBOM 파일 생성 완료 후:

1. [검증 체크리스트](/guide/supply-chain/for-suppliers/checklist/)로 파일 확인
2. [제출 절차](/guide/supply-chain/for-suppliers/submission/)에 따라 SK텔레콤에 제출
3. 문제 발생 시 담당자에게 문의


### 관련 문서
- [SBOM 제출 요구사항](/guide/supply-chain/for-suppliers/requirements/)
- [언어별 세부 가이드](/guide/supply-chain/for-suppliers/skt-scanner/skt-language/)
- [검증 체크리스트](/guide/supply-chain/for-suppliers/checklist/)