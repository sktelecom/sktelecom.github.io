---
title: "입력 형태별 SBOM 생성 시나리오"
linkTitle: "입력 시나리오"
weight: 2
type: docs
description: >
  소스가 GitHub URL·ZIP·로컬 디렉터리·기존 SBOM·펌웨어 등 어떤 형태로 있든 동일하게 3종 산출물(SBOM·고지문·위험분석보고서)을 생성하는 방법입니다.
---

## 개요

공급사 환경에 따라 분석 대상이 다양한 형태로 존재합니다. SKT SBOM Scanner는 **입력 형태와 무관하게 동일한 3종 산출물**을 생성합니다.

**3종 산출물**

| 산출물 | 파일 |
|--------|------|
| SBOM | `{프로젝트}_{버전}_bom.json` |
| 오픈소스 고지문 | `{프로젝트}_{버전}_NOTICE.{txt,html}` |
| 오픈소스위험분석보고서 | `{프로젝트}_{버전}_risk-report.{md,html}` |

**보편 규칙**: 어떤 입력이든 `--all --generate-only`를 붙이면 3종이 함께 생성됩니다.

## 한눈에 보기

| 입력 형태 | 핵심 명령(요약) |
|-----------|-----------------|
| GitHub URL | `./scan-sbom.sh --git <url> --project P --version V --all --generate-only` |
| 소스 ZIP | `./scan-sbom.sh --target app.zip --project P --version V --all --generate-only` |
| 로컬 디렉터리 | `cd <dir> && ./scan-sbom.sh --project P --version V --all --generate-only` |
| 기존 SBOM(JSON) | `./scan-sbom.sh --analyze sbom.json --project P --version V --generate-only` |
| 펌웨어 `.bin` | `./scan-sbom.sh --target dev.bin --firmware --project P --version V --all --generate-only` |

## 시나리오 1 — GitHub URL

수동 클론 없이 저장소 URL을 전달합니다(얕은 클론 후 분석).

```bash
./scan-sbom.sh --project myapp --version 1.0.0 \
  --git "https://github.com/org/myapp" \
  --all --generate-only
```

- 특정 브랜치/태그: `--branch v1.2.3`
- 비공개 저장소: `GIT_TOKEN=토큰 ./scan-sbom.sh ... --git <url> ...` (토큰은 로그에 남지 않음)

## 시나리오 2 — 소스 ZIP

압축을 수동으로 풀 필요 없이 아카이브를 그대로 전달합니다.

```bash
./scan-sbom.sh --project myapp --version 1.0.0 \
  --target "./myapp-src.zip" \
  --all --generate-only
```

지원 형식: `.zip`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tar.xz`, `.tar`

## 시나리오 3 — 로컬 소스 디렉터리

공유 폴더 등에서 받은 소스를 디렉터리 안에서 실행합니다.

```bash
cd /path/to/source
./scan-sbom.sh --project myapp --version 1.0.0 --all --generate-only
```

> **C/C++**: 패키지 매니저(Conan/vcpkg)가 있으면 의존성이 해석됩니다. 순수 CMake/Make 소스는 SBOM이 희소할 수 있으나 위험분석보고서는 생성되며, `--deep-license`로 1st-party 라이선스를 보강할 수 있습니다. 자세한 내용은 [언어별 가이드](../skt-language/#11-cc-제한적-지원)를 참고하세요.

## 시나리오 4 — 기존 SBOM(JSON)

소스가 없고 SBOM만 있는 경우, 검증하고 위험분석보고서를 생성합니다.

```bash
./scan-sbom.sh --project myapp --version 2.0.0 \
  --analyze "./myapp-sbom.json" \
  --generate-only
```

- CycloneDX·SPDX 모두 입력 가능(내부에서 CycloneDX로 변환).
- 고지문·보안이 자동으로 켜지므로 `--all`을 별도로 붙일 필요가 없습니다.
- 추가로 **포맷 적합성 보고서**(`_conformance.{json,md,html}`)가 생성됩니다.

## 시나리오 5 — 펌웨어 바이너리

빌드된 펌웨어를 언패킹 후 구성요소를 식별합니다.

```bash
./scan-sbom.sh --project myfw --version 1.0.0 \
  --target "./dev.bin" --firmware \
  --all --generate-only
```

- GPL 도구(unblob 등)를 포함하는 opt-in 펌웨어 이미지가 필요합니다(`SBOM_FIRMWARE_IMAGE`).
- 정적 링크 라이브러리·벤더 변형 squashfs는 탐지율이 제한적입니다.

## 웹 UI로 처리

CLI가 익숙하지 않으면 `./scan-sbom.sh --ui`로 브라우저 UI를 실행한 뒤, **입력 유형**(현재 디렉터리 / GitHub URL / ZIP 업로드 / SBOM 업로드 / 펌웨어 업로드 / Docker 이미지)을 선택해 동일하게 처리할 수 있습니다. 완료 후 3종 산출물을 화면에서 보거나 내려받습니다.

## 다음 단계

1. [검증 체크리스트](../../checklist/)로 산출물 확인
2. [제출 절차](../../submission/)에 따라 제출
