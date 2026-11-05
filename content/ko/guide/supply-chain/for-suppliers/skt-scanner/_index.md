---
title: "BomLens"
linkTitle: "BomLens"
weight: 2
type: docs
description: >
  BomLens로 SK텔레콤 정책에 맞는 SBOM을 생성하는 방법을 안내합니다.
---

## BomLens

BomLens는 공급사가 Docker 환경에서 SK텔레콤 정책에 맞는 산출물을 생성할 수 있는 오픈소스 도구입니다. 로컬에 언어별 도구를 따로 설치하지 않아도 여러 언어를 분석해 CycloneDX(JSON) 산출물을 만듭니다.

이 페이지는 제출과 관련된 산출물과 제출 전 점검만 다룹니다. 설치, 실행 방법, 전체 옵션, 웹 UI 등 사용법은 아래 BomLens 문서가 정본입니다.

> [github.com/sktelecom/bomlens](https://github.com/sktelecom/bomlens)
>
> 버그 제보, 기능 제안, Pull Request 기여를 환영합니다.

## 생성되는 산출물

한 번의 실행으로 다음 네 가지가 함께 `{프로젝트}_{버전}/` 하위 폴더에 생성됩니다(`--all` 옵션). 오픈소스위험분석보고서는 `--no-report`로 끌 수 있으며, 적합성 리포트는 항상 생성됩니다(현재 끄는 옵션 없음).

| 산출물 | 파일 | 용도 |
|--------|------|------|
| SBOM | `{프로젝트}_{버전}_bom.json` | CycloneDX 1.6 구성요소 명세 (납품 기준 산출물) |
| 오픈소스 고지문 | `{프로젝트}_{버전}_NOTICE.{txt,html}` | 라이선스 의무 이행을 위한 고지문 |
| 오픈소스위험분석보고서 | `{프로젝트}_{버전}_risk-report.{md,html}` | 라이선스와 취약점 위험 집계 |
| 적합성 리포트 | `{프로젝트}_{버전}_conformance.{json,md,html}` | 제출 품질 기준 충족 여부와 누락 항목 |

적합성 리포트 파일은 매 실행마다 생성되지만, 웹 UI의 통과/실패 판정 화면은 이미 만들어진 SBOM을 `--analyze`로 다시 넣었을 때만 나타납니다(방금 생성한 SBOM이 자기 자신을 채점하는 건 대부분의 항목에서 의미 있는 신호가 아니기 때문입니다). 제출 전 점검은 아래처럼 한 단계 더 거치세요.

```bash
./scripts/scan-sbom.sh --analyze myserver_1.0.0_bom.json --project myserver --version 1.0.0 --generate-only
```

## 시작하기

BomLens는 Docker 위에서 동작하므로 Docker 엔진 20.10 이상이 필요합니다. 설치와 첫 SBOM 생성은 [시작하기](https://sktelecom.github.io/bomlens/ko/start/first-scan/)를, 명령줄이 익숙하지 않다면 설치형 앱과 웹 UI를 안내하는 [명령줄 없이 시작하기](https://sktelecom.github.io/bomlens/ko/start/no-cli/)를 따릅니다. 제출 전까지는 `--generate-only` 옵션으로 로컬에 파일만 생성하기를 권장합니다.

## 더 알아보기

도구 사용법의 정본은 저장소 문서입니다.

| 주제 | 문서 |
|------|------|
| 설치, 첫 SBOM, 웹 UI | [시작하기](https://sktelecom.github.io/bomlens/ko/start/first-scan/) |
| 전체 옵션, 언어별, CI/CD | [CLI 레퍼런스](https://sktelecom.github.io/bomlens/ko/reference/cli/) |
| 입력 형태별 시나리오 | [입력 시나리오](https://sktelecom.github.io/bomlens/ko/guides/by-input/) |
| 고지문·보안 보고서 | [리포트 가이드](https://sktelecom.github.io/bomlens/ko/guides/reports/) |
| 서버(OS + 애플리케이션) 납품 | [서버 납품 가이드](https://sktelecom.github.io/bomlens/ko/guides/server-delivery/) |

## 다음 단계

SBOM을 생성한 뒤 [검증 체크리스트](../checklist/)로 파일을 확인하고 [제출 절차](../submission/)에 따라 제출합니다. 필수 데이터 필드는 [제출 요구사항](../requirements/), SKT 도구 대신 cdxgen, Syft 등을 직접 쓰는 방법은 [오픈소스 도구 활용](../creation-guide/)을 참고하세요.
