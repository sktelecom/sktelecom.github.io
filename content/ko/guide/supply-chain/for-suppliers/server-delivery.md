---
title: "서버(OS + 애플리케이션) SBOM 생성"
linkTitle: "서버 SBOM 생성"
weight: 4
type: docs
description: >
  CentOS 등 OS 위에 애플리케이션을 설치해 납품하는 서버의 SBOM을 OS·애플리케이션 두 층으로 나눠 생성하고, 정적 링크 라이브러리를 별도로 보강해 하나로 합쳐 제출하는 방법을 안내합니다.
---

납품 서버는 단일 소스 트리가 아닙니다. 운영체제가 있고, 그 위에 설치된 애플리케이션이 있으며, 빌드 과정에서 바이너리에 정적 링크된 라이브러리가 있습니다. 이 중 하나만 스캔하면 나머지가 빠지고, 이것이 서버 SBOM이 반려되는 흔한 원인입니다.

서버는 두 층(OS와 애플리케이션)으로 보고 각 층을 따로 생성한 뒤 하나로 합칩니다. 두 층 모두 [BomLens](../skt-scanner/)로 만들 수 있고, 층마다 입력만 바꾸면 됩니다. 여기에 더해, 정적 링크된 라이브러리는 두 층의 스캔이 모두 놓치는 사각지대라 별도로 다룹니다.

## 서버를 이루는 두 층

| 층 | 대상 | 누락 시 증상 |
|----|------|--------------|
| OS | 운영체제와 설치된 패키지 전체 (예: CentOS와 rpm 데이터베이스의 모든 패키지) | OS 취약점 누락 |
| 애플리케이션 | 납품 애플리케이션과 패키지 매니저 의존성(직접·전이) | 앱 의존성 누락 |

여기에 더해, **정적 링크된 라이브러리**(빌드 시 바이너리에 포함된 openssl·liblfds 등)는 패키지 매니저가 선언하지 않고 OS 패키지 데이터베이스에도 올라 있지 않아 두 층의 스캔이 모두 놓치는 사각지대입니다. 별도로 탐지·기재해야 하며, 이를 빠뜨리는 것이 가장 흔한 반려 원인입니다.

## 층별 생성

아래 명령은 BomLens의 실행 스크립트 `scan-sbom.sh`를 사용합니다. BomLens 설치와 기본 사용법(스크립트 내려받기, 옵션, 웹 UI 등)은 [BomLens](../skt-scanner/)를 먼저 참고하세요. cdxgen·Syft를 직접 쓰려면 [오픈소스 도구 활용](../creation-guide/)을 참고합니다.

### OS 층

서버의 rootfs(추출한 루트 파일시스템)나 그 컨테이너 이미지를 스캔합니다. 패키지 데이터베이스(rpm/dpkg/apk)를 읽어 설치된 패키지를 모두 실제 purl(`pkg:rpm/...`)로 식별합니다.

```bash
# rootfs 디렉터리를 대상으로
scan-sbom.sh --project myserver-os --version 7 --target /path/to/server-rootfs --all --generate-only

# 서버가 컨테이너 이미지로 패키징돼 있다면
scan-sbom.sh --project myserver-os --version 7 --target myserver:7 --all --generate-only
```

대상에는 패키지 데이터베이스가 있어야 합니다. 설치 파일만 풀어 놓고 rpm 데이터베이스가 없는 폴더를 스캔하면 purl이 비어 반려됩니다.

### 애플리케이션 층

빌드를 마친 뒤 애플리케이션 소스를 스캔합니다. 패키지 매니저(Maven·npm·pip·Go modules·Conan 등)를 쓰면 전이 의존성까지 자동으로 해석됩니다.

```bash
cd /path/to/app-source
scan-sbom.sh --project myserver-app --version 2.0.0 --all --generate-only
```

매니페스트가 없는 순수 CMake/Make 애플리케이션은 컴포넌트 목록이 희소해지므로 `--deep-license`로 자체 소스의 라이선스를 보강합니다.

### 정적 링크 라이브러리 (사각지대)

소스 스캐너는 바이너리에 정적 링크된 라이브러리를 보지 못하고, OS 패키지 데이터베이스에도 올라 있지 않습니다. 이것이 두 층이 남기는 사각지대입니다. 완전 자동 경로가 없으므로 두 가지를 함께 씁니다. 도구가 찾을 수 있는 만큼은 납품 바이너리를 분석하고, 그래도 빠지는 부분은 빌드 스크립트에서 소스와 버전(예: `openssl 1.1.1za`)을 직접 기재합니다.

```bash
scan-sbom.sh --project myserver-bin --version 2.0.0 --target /path/to/delivered-binary --all --generate-only
```

정적 링크 구성요소의 정밀 식별은 바이너리 구성 분석(BDBA)의 몫이며, SK텔레콤이 보완 검증으로 수행합니다.

## 하나로 합쳐 제출

SK텔레콤 제출 시스템은 제품당 SBOM 하나를 등록합니다. 따라서 층별 SBOM을 `--merge`로 합쳐 단일 BOM으로 제출하고, 최상위 컴포넌트를 납품 제품명·버전으로 기재합니다. `--merge`는 purl 기준으로 중복을 제거하므로 둘 이상의 층에 나타나는 라이브러리는 한 번만 집계됩니다.

```bash
scan-sbom.sh --project myserver --version 1.0.0 \
  --merge myserver-os_7_bom.json myserver-app_2.0.0_bom.json myserver-bin_2.0.0_bom.json \
  --generate-only
```

서버 전체를 하나의 컨테이너 이미지로 납품한다면, 그 이미지를 `--target`으로 한 번에 스캔해 OS와 애플리케이션 층을 동시에 담을 수도 있습니다.

{{% alert title="검토용으로 층별 SBOM을 함께 보관하세요" color="info" %}}
공식 제출물은 병합된 단일 BOM이지만, 층별 SBOM은 어느 층이 누락·취약한지 바로 보여 주고 각 층의 전이 의존성 관계를 보존합니다. 자체 검토와 재제출 대응에 유용하므로 함께 보관하시기 바랍니다. 병합본도 각 컴포넌트에 출처 층을 기록하므로 층별로 걸러 볼 수 있습니다.
{{% /alert %}}

## 제출 전 검증

층별 SBOM과 병합본 모두에 대해 컴포넌트가 실제 purl을 갖는지 확인합니다. 전체 컴포넌트 수와 purl 보유 수가 비슷해야 합니다.

```bash
jq '.components | length' myserver_1.0.0_bom.json
jq '[.components[] | select(.purl)] | length' myserver_1.0.0_bom.json
```

차이가 크면 purl 없는 컴포넌트가 많다는 뜻이고, 보통 원시 디렉터리 스캔이 원인입니다. 자세한 점검은 [검증 체크리스트](../checklist/)를 따르십시오.

## 더 알아보기

서버 납품 SBOM의 상세 절차와 예시는 BomLens 저장소의 정본 문서에 있습니다.

> [서버 납품 가이드](https://sktelecom.github.io/sbom-tools/ko/guides/server-delivery/)

## 관련 문서

- [BomLens](../skt-scanner/): SK텔레콤이 제공하는 SBOM 생성 도구
- [오픈소스 도구 활용](../creation-guide/): cdxgen·Syft 직접 사용
- [제출 요구사항](../requirements/): 필수 데이터 필드
- [검증 체크리스트](../checklist/): 제출 전 확인 사항
