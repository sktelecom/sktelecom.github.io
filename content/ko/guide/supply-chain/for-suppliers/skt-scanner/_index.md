---
title: "SKT 제공 도구 활용 (Easy Mode)"
linkTitle: "SKT 제공 도구"
weight: 4
type: docs
description: >
  SK텔레콤 표준 스크립트를 활용하여 복잡한 설정 없이 SBOM을 생성하는 방법입니다.
---

## 도구 개요

SKT SBOM Scanner는 공급사가 별도의 도구 학습이나 환경 설정 없이도 즉시 표준 준수 SBOM을 생성할 수 있도록 제공되는 도구입니다.

> SKT SBOM Scanner는 오픈소스로 개발·운영되고 있습니다.
> 소스 코드, 이슈 트래커, 기여 방법 등 자세한 내용은 GitHub 저장소를 참고하세요.
>
> [github.com/sktelecom/sbom-tools](https://github.com/sktelecom/sbom-tools)
>
> 버그 제보, 기능 제안, Pull Request를 통한 기여를 환영합니다.


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

자세한 언어별 가이드는 [언어별 세부 사용 가이드](skt-language/)를 참조하세요.

## 납품 산출물 3종

SKT SBOM Scanner는 한 번의 실행으로 다음 **3종 산출물**을 생성합니다. `--all` 옵션을 붙이면 세 가지가 함께 만들어집니다.

| 산출물 | 파일 | 용도 |
|--------|------|------|
| **SBOM** | `{프로젝트}_{버전}_bom.json` | CycloneDX 1.6 구성요소 명세 (납품 기준 산출물) |
| **오픈소스 고지문** | `{프로젝트}_{버전}_NOTICE.{txt,html}` | 라이선스 의무 이행을 위한 고지문 |
| **오픈소스위험분석보고서** | `{프로젝트}_{버전}_risk-report.{md,html}` | 라이선스+취약점 위험 집계 (대응 기한: Critical 7일·High 30일) |

```bash
# 3종 한 번에 생성
./scan-sbom.sh --project "MyApp" --version "1.0.0" --all --generate-only
```

> 위험분석보고서는 기본 생성됩니다(라이선스·취약점 데이터를 집계하므로 고지문·보안 스캔이 자동 포함). 생략하려면 `--no-report`를 사용하세요.

## 입력 형태별 처리 (5가지 시나리오)

공급사 환경에 따라 소스가 다양한 형태로 존재할 수 있습니다. 어떤 형태든 동일하게 3종 산출물을 생성할 수 있습니다.

| 입력 형태 | 명령(요약) |
|-----------|-----------|
| GitHub URL | `./scan-sbom.sh --git <url> --project P --version V --all --generate-only` |
| 소스 ZIP | `./scan-sbom.sh --target app.zip --project P --version V --all --generate-only` |
| 로컬 소스 디렉터리 | `cd <dir> && ./scan-sbom.sh --project P --version V --all --generate-only` |
| 기존 SBOM(JSON) | `./scan-sbom.sh --analyze sbom.json --project P --version V --generate-only` |
| 펌웨어 `.bin` | `./scan-sbom.sh --target dev.bin --firmware --project P --version V --all --generate-only` |

각 시나리오의 상세 절차는 [입력 형태별 시나리오 가이드](scenarios/)를 참고하세요.

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
*   `--target`: (선택) 분석 대상 경로·Docker 이미지명·`.zip`/`.tar.gz` 아카이브. (기본값: 현재 디렉토리 `./`)
*   `--git <url>`: (선택) GitHub/git URL을 클론하여 소스 분석 (비공개 저장소: `GIT_TOKEN` 환경변수)
*   `--analyze <sbom>`: (선택) 기존 SBOM(CycloneDX/SPDX) 검증·분석
*   `--all`: (권장) 고지문 + 보안 보고서 함께 생성 (위험분석보고서 포함)
*   `--ui`: (선택) 브라우저 기반 웹 UI 실행
*   `--generate-only`: (필수) 포털 자동 업로드 없이 로컬에 파일만 생성


## 사용 예시

### 1. 소스코드 분석 (Java/Python/Node.js 등)

소스코드가 있는 디렉토리에서 실행하면 `pom.xml`, `package.json`, `requirements.txt` 등을 자동 감지합니다. `--all`을 붙이면 3종 산출물이 함께 생성됩니다.

```bash
cd /path/to/my-project
/path/to/scan-sbom.sh --project "MyWebApp" --version "1.0.0" --all --generate-only
```

- 결과: `MyWebApp_1.0.0_bom.json`, `MyWebApp_1.0.0_NOTICE.{txt,html}`, `MyWebApp_1.0.0_risk-report.{md,html}`

### 2. GitHub URL / 소스 ZIP 분석

수동 클론·압축 해제 없이 URL이나 아카이브를 그대로 전달합니다.

```bash
# GitHub URL (얕은 클론 후 분석)
./scan-sbom.sh --git "https://github.com/org/repo" --project "MyApp" --version "1.0.0" --all --generate-only

# 소스 ZIP (자동 해제 후 분석)
./scan-sbom.sh --target "./my-app.zip" --project "MyApp" --version "1.0.0" --all --generate-only
```

### 3. 기존 SBOM 분석 (검증 + 위험분석)

이미 보유한 SBOM(CycloneDX/SPDX)을 검증하고 위험분석보고서를 생성합니다.

```bash
./scan-sbom.sh --analyze "./supplier-sbom.json" --project "MyApp" --version "1.0.0" --generate-only
```

- 추가 결과: 포맷 적합성 보고서(`_conformance.{json,md,html}`)

### 4. Docker 이미지 분석

```bash
# 로컬 또는 레지스트리의 Docker 이미지 분석
./scan-sbom.sh --target "myapp:v1.0" --project "MyApp" --version "1.0" --generate-only
```

### 5. 펌웨어 / 바이너리 파일 분석

```bash
# 펌웨어 분석 (언패킹 후 구성요소 식별 — opt-in 펌웨어 이미지 필요)
./scan-sbom.sh --target dev.bin --firmware --project "RouterOS" --version "2.0" --all --generate-only

# 일반 실행 파일(ELF) 분석
./scan-sbom.sh --target ./app.elf --project "MyApp" --version "1.0" --all --generate-only
```

> `--firmware`는 GPL 도구(unblob 등)를 포함하는 opt-in 펌웨어 이미지가 필요합니다. 환경변수 `SBOM_FIRMWARE_IMAGE`로 지정하거나 기본 이미지를 받습니다.

지원 파일 형식:
- ELF 바이너리
- 펌웨어 이미지(`.bin`/`.img`/`.squashfs`/`.ubi` 등)

분석 한계:
- 컴파일된 바이너리는 기본 메타데이터만 추출 가능
- 내부 라이브러리나 의존성은 정적 링크 시 감지 불가능
- 정확한 SBOM 생성을 위해서는 소스 코드 레벨 분석을 권장
- 바이너리 분석 결과는 참고용으로만 활용

### 6. RootFS 디렉토리 분석

```bash
# 파일 시스템 전체 분석
./scan-sbom.sh --target ./rootfs/ --project "DeviceOS" --version "1.0" --all --generate-only
```

사용 사례:
- 임베디드 시스템 파일 시스템
- 언팩한 펌웨어 디렉토리
- 컨테이너 파일 시스템

## 웹 UI로 생성 (CLI가 익숙하지 않은 경우)

명령줄이 부담스럽다면 브라우저 기반 웹 UI를 사용할 수 있습니다.

```bash
# macOS / Linux — 산출물을 저장할 폴더에서 실행 (어디든 무방)
./scan-sbom.sh --ui            # http://localhost:8080 자동 열림
```

Windows에서는 `scripts\sbom-ui.bat`를 더블클릭합니다.

> 실행 위치(현재 폴더)는 **산출물이 저장되는 곳**이며, 입력 유형 **"현재 디렉터리"**를 골랐을 때만 그 폴더의 소스를 스캔합니다. GitHub URL·ZIP/SBOM/펌웨어 업로드·Docker 이미지를 쓸 거라면 입력을 UI에서 직접 주므로 **아무 폴더에서나** 실행해도 됩니다.

화면에서 **입력 유형**을 선택하고 형태에 맞게 입력/업로드합니다.

| 입력 유형 | 입력 방법 |
|-----------|-----------|
| 현재 디렉터리 | UI 실행 디렉터리의 소스 스캔 |
| GitHub URL | 저장소 URL 입력 |
| ZIP 업로드 | `.zip`/tar 파일 업로드 |
| SBOM 업로드 | 기존 SBOM(JSON) 업로드 → 검증·분석 |
| 펌웨어 업로드 | `.bin` 등 업로드 |
| Docker 이미지 | 이미지명 입력 |

실행하면 진행 로그가 실시간 표시되고, 완료 후 **SBOM·고지문·오픈소스위험분석보고서**(및 적합성)를 화면에서 보거나 내려받을 수 있습니다.

> 펌웨어 업로드 탭은 펌웨어 도구가 포함된 이미지에서 UI를 실행할 때만 활성화됩니다.

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

1. [검증 체크리스트](../checklist/)로 파일 확인
2. [제출 절차](../submission/)에 따라 SK텔레콤에 제출
3. 문제 발생 시 담당자에게 문의

## 관련 문서

- [입력 형태별 시나리오 가이드](scenarios/): GitHub·ZIP·로컬·SBOM·펌웨어 입력별 처리
- [제출 요구사항](../requirements/): SBOM에 포함되어야 할 필수 데이터 필드
- [언어별 세부 가이드](skt-language/): 언어/프레임워크별 상세 실행 예시
- [검증 체크리스트](../checklist/): 제출 전 확인 사항
- [오픈소스 도구 활용](../creation-guide/): SKT 도구 대신 오픈소스 도구를 직접 사용하는 경우
