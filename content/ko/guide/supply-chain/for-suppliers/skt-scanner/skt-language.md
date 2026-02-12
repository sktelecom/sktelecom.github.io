---
title: "언어별 세부 사용 가이드"
linkTitle: "세부 사용 가이드"
weight: 1
type: docs
description: >
  SKT SBOM Scanner는 다양한 프로그래밍 언어와 빌드 시스템을 지원합니다.
---

## 지원 언어 및 도구

- Java: Maven, Gradle (Java 7, 8, 11, 17, 21)
- Python: pip, Poetry (Python 2.7, 3.x)
- Node.js: npm, Yarn, pnpm
- Ruby: Bundler, Gemfile
- PHP: Composer
- Rust: Cargo
- C/C++: Conan, vcpkg (제한적)
- Go: go.mod
- .NET: NuGet, project files



## 언어별 사용 가이드

### 1. Java (Maven)

#### 필수 파일
- `pom.xml`

#### 예시
```bash
cd /path/to/maven-project
./scan-sbom.sh --project "MyJavaApp" --version "1.0.0" --generate-only
```

#### 레거시 Java 7 프로젝트
```xml
<!-- pom.xml에서 Java 버전 명시 -->
<properties>
    <maven.compiler.source>1.7</maven.compiler.source>
    <maven.compiler.target>1.7</maven.compiler.target>
</properties>
```

스캔 시 Docker 컨테이너 내부에서 적절한 JDK를 자동 선택합니다.



### 2. Java (Gradle)

#### 필수 파일
- `build.gradle` 또는 `build.gradle.kts`

#### 예시
```bash
cd /path/to/gradle-project
./scan-sbom.sh --project "MyGradleApp" --version "1.0.0" --generate-only
```

#### Gradle Wrapper 사용
```bash
# gradlew가 있으면 자동으로 사용됨
./gradlew dependencies # 로컬에서 미리 확인 (선택)
./scan-sbom.sh --project "MyApp" --version "1.0.0" --generate-only
```



### 3. Python 3.x

#### 필수 파일
- `requirements.txt` (권장)
- `pyproject.toml` (Poetry)
- `Pipfile` (Pipenv)

#### 예시
```bash
cd /path/to/python-project
./scan-sbom.sh --project "MyPythonApp" --version "1.0.0" --generate-only
```

#### requirements.txt 생성
```bash
pip freeze > requirements.txt
./scan-sbom.sh --project "MyApp" --version "1.0.0" --generate-only
```

#### Poetry 프로젝트
```bash
# pyproject.toml이 있으면 자동 감지
./scan-sbom.sh --project "MyPoetryApp" --version "1.0.0" --generate-only
```



### 4. Python 2.x (레거시)

#### 필수 파일
- `requirements.txt`

#### 주의사항
Python 2.x는 2020년 지원 종료되었으므로, 가능한 Python 3.x로 마이그레이션을 권장합니다.

#### 예시
```bash
# requirements.txt 생성 (Python 2 환경)
python2 -m pip freeze > requirements.txt

# SBOM 생성
./scan-sbom.sh --project "LegacyPython2App" --version "1.0.0" --generate-only
```

#### Python 2 명시
```txt
# requirements.txt 상단에 추가
# python_version < "3"
Django==1.11.29
requests==2.27.1
```



### 5. Node.js

#### 필수 파일
- `package.json`
- `package-lock.json` (npm) 또는 `yarn.lock` (Yarn)

#### 예시
```bash
cd /path/to/nodejs-project

# package-lock.json 생성 (없는 경우)
npm install

# SBOM 생성
./scan-sbom.sh --project "MyNodeApp" --version "1.0.0" --generate-only
```

#### Yarn 프로젝트
```bash
# yarn.lock이 있으면 자동 감지
./scan-sbom.sh --project "MyYarnApp" --version "1.0.0" --generate-only
```

#### pnpm 프로젝트
```bash
# pnpm-lock.yaml이 있으면 자동 감지
./scan-sbom.sh --project "MyPnpmApp" --version "1.0.0" --generate-only
```



### 6. Ruby

#### 필수 파일
- `Gemfile`
- `Gemfile.lock` (권장)

#### 예시
```bash
cd /path/to/ruby-project

# Gemfile.lock 생성 (없는 경우)
bundle install

# SBOM 생성
./scan-sbom.sh --project "MyRailsApp" --version "1.0.0" --generate-only
```

#### Rails 프로젝트
```bash
cd /path/to/rails-app
bundle install
./scan-sbom.sh --project "MyRailsAPI" --version "1.0.0" --generate-only
```



### 7. PHP

#### 필수 파일
- `composer.json`
- `composer.lock` (권장)

#### 예시
```bash
cd /path/to/php-project

# composer.lock 생성 (없는 경우)
composer install

# SBOM 생성
./scan-sbom.sh --project "MyLaravelApp" --version "1.0.0" --generate-only
```

#### Laravel 프로젝트
```bash
cd /path/to/laravel-app
composer install --no-dev # 프로덕션 의존성만
./scan-sbom.sh --project "MyLaravelAPI" --version "1.0.0" --generate-only
```



### 8. Rust

#### 필수 파일
- `Cargo.toml`
- `Cargo.lock` (권장)

#### 예시
```bash
cd /path/to/rust-project

# Cargo.lock 생성 (없는 경우)
cargo generate-lockfile

# SBOM 생성
./scan-sbom.sh --project "MyRustApp" --version "1.0.0" --generate-only
```

#### Workspace 프로젝트
```bash
# 루트 디렉토리에서 실행
cd /path/to/rust-workspace
./scan-sbom.sh --project "MyRustWorkspace" --version "1.0.0" --generate-only
```



### 9. Go

#### 필수 파일
- `go.mod`
- `go.sum` (권장)

#### 예시
```bash
cd /path/to/go-project

# go.sum 생성 (없는 경우)
go mod download

# SBOM 생성
./scan-sbom.sh --project "MyGoApp" --version "1.0.0" --generate-only
```



### 10. .NET (C#)

#### 필수 파일
- `*.csproj` 또는 `*.sln`
- `packages.config` (레거시) 또는 PackageReference

#### 예시
```bash
cd /path/to/dotnet-project

# 의존성 복원 (선택)
dotnet restore

# SBOM 생성
./scan-sbom.sh --project "MyDotNetApp" --version "1.0.0" --generate-only
```



### 11. C/C++ (제한적 지원)

#### 지원 패키지 매니저
- Conan (`conanfile.txt`, `conanfile.py`)
- vcpkg (제한적)

#### 예시 (Conan)
```bash
cd /path/to/cpp-project

# conanfile.txt 예시
cat > conanfile.txt <<EOF
[requires]
boost/1.80.0
openssl/3.0.0

[generators]
cmake
EOF

# SBOM 생성
./scan-sbom.sh --project "MyCppApp" --version "1.0.0" --generate-only
```

주의: C/C++ 프로젝트는 패키지 매니저 없이 직접 의존성을 관리하는 경우가 많아, SBOM 생성이 제한적일 수 있습니다.



## 멀티 언어 프로젝트

### 모노레포 (Monorepo)

여러 언어가 혼합된 프로젝트의 경우:

```bash
# 루트 디렉토리에서 실행하면 모든 언어 자동 감지
cd /path/to/monorepo
./scan-sbom.sh --project "MyMonorepo" --version "1.0.0" --generate-only
```

### 마이크로서비스

각 서비스별로 개별 실행:

```bash
# 서비스 1 (Node.js)
cd services/api
../../scan-sbom.sh --project "MyAPI" --version "1.0.0" --generate-only

# 서비스 2 (Python)
cd ../worker
../../scan-sbom.sh --project "MyWorker" --version "1.0.0" --generate-only
```


## 참고

- cdxgen 공식 문서: https://github.com/CycloneDX/cdxgen
- CycloneDX 스펙: https://cyclonedx.org/
- 언어별 패키지 매니저: 각 언어의 공식 문서 참조
