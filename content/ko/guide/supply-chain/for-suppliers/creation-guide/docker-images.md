---
title: "Docker 이미지"
linkTitle: "Docker 이미지"
weight: 3
type: docs
description: >
  Syft 도구를 사용하여 컨테이너 이미지 및 파일시스템 내부를 분석하는 방법입니다.
---

## Syft 소개

`Syft`는 컨테이너 이미지 분석에 특화된 도구로, 이미지 레이어 내의 OS 패키지(APK, DEB, RPM)와 애플리케이션 라이브러리를 모두 식별합니다.

## 설치

```bash
# Linux / macOS
curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
```

## 사용 방법

### 1. Docker 이미지 스캔
로컬 Docker 데몬에 있는 이미지나 원격 레지스트리의 이미지를 분석합니다.

```bash
# CycloneDX JSON 형식으로 출력
syft "myapp:latest" -o cyclonedx-json=bom.json
```

### 2. 이미지 파일(.tar) 스캔
`docker save`로 저장된 타르볼 파일도 분석 가능합니다.

```bash
syft "docker-archive:myapp.tar" -o cyclonedx-json=bom.json
```

### 3. 디렉토리 스캔 (RootFS)
이미지 내부 파일시스템이나 특정 디렉토리를 스캔할 때 사용합니다.

```bash
syft "dir:./rootfs" -o cyclonedx-json=bom.json
```