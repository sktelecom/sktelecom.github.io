---
title: "언어별 가이드"
linkTitle: "언어별 가이드"
weight: 2
type: docs
description: >
  Java, Python, Node.js 등 주요 언어별 패키지 매니저 파일과 전용 도구 활용법을 안내합니다.
---

## 1. Java (Maven / Gradle)

Java 프로젝트는 빌드 도구의 플러그인을 사용하는 것이 가장 정확합니다.

### Maven
`pom.xml`에 플러그인을 추가하여 빌드 시 생성합니다.

```xml
<plugin>
    <groupId>org.cyclonedx</groupId>
    <artifactId>cyclonedx-maven-plugin</artifactId>
    <version>2.7.9</version>
</plugin>
```
*   실행: `mvn cyclonedx:makeAggregateBom`

### Gradle
`build.gradle`에 플러그인을 적용합니다.

```groovy
plugins {
    id 'org.cyclonedx.bom' version '1.7.4'
}
```
*   실행: `./gradlew cyclonedxBom`

## 2. Python (pip / Poetry)

### pip (requirements.txt)
가상환경이 활성화된 상태에서 실행하는 것이 좋습니다.

```bash
pip install cyclonedx-bom
cyclonedx-py requirements -o bom.json
```

### Poetry
```bash
poetry run cyclonedx-py poetry -o bom.json
```

## 3. Node.js (npm / Yarn)

`package.json`과 `package-lock.json`(또는 `yarn.lock`)이 있는 위치에서 실행합니다.

```bash
npm install -g @cyclonedx/cyclonedx-npm
cyclonedx-npm --output-file bom.json
```

## 4. Go (Go Modules)

`go.mod` 파일이 있는 위치에서 실행합니다.

```bash
go install github.com/CycloneDX/cyclonedx-gomod/cmd/cyclonedx-gomod@latest
cyclonedx-gomod app -json -output bom.json
```