# 로컬에서 웹사이트 구동하기

로컬에서 웹사이트를 구동하여 변경 사항을 확인할 수 있습니다. 다음 가이드에 따라 필요한 작업을 수행하세요.

- [로컬에서 웹사이트 구동하기](#로컬에서-웹사이트-구동하기)
  - [Node.js 설치](#nodejs-설치)
  - [Go 설치](#go-설치)
  - [Fork \& Clone하고 로컬에서 웹서버 실행](#fork--clone하고-로컬에서-웹서버-실행)
  - [Useful docs](#useful-docs)

## Node.js 설치

이 웹사이트는 Hugo Extended와 [PostCSS](https://postcss.org/)로 빌드하며, 둘 다 npm으로 설치됩니다. 따라서 [Node.js](https://nodejs.org/) 22 이상이 필요합니다. 로컬 환경에 맞게 [설치](https://nodejs.org/ko/download/)하세요.

Hugo는 따로 설치하지 않아도 됩니다. 정확한 Hugo Extended 버전이 `package.json`에 고정되어 있어, 아래의 `npm ci`를 실행할 때 함께 설치됩니다.

시스템에 Hugo가 이미 설치되어 있더라도 `hugo` 명령을 직접 실행하지 마세요. 버전이 이 프로젝트가 요구하는 것과 다르면 Docsy 테마와 호환되지 않아 페이지 렌더링이 실패할 수 있습니다. 항상 `npm run serve`, `npm run build` 등 npm 스크립트로 실행해 고정된 버전을 사용하세요.

## Go 설치

Docsy 테마는 [Hugo 모듈](https://gohugo.io/hugo-modules/)([`go.mod`](../go.mod))로 받아오므로, 로컬에서 빌드하려면 [Go](https://go.dev/dl/) 툴체인이 별도로 설치되어 있어야 합니다. Go로 직접 코드를 작성하지는 않으며, Hugo가 모듈을 내려받을 때만 사용됩니다. PATH에서 `go` 명령을 쓸 수 있는지 확인하세요.

## Fork & Clone하고 로컬에서 웹서버 실행

일반적인 GitHub workflow에 따라 GitHub에서 repository를 Fork하고 로컬 PC에 Clone합니다.

1. GitHub UI에서 [sktelecom/sktelecom.github.io](https://github.com/sktelecom/sktelecom.github.io) Fork

2. 로컬 PC에 Clone(SSH 예시):

    ```
    git clone git@github.com:<your-github-username>/sktelecom.github.io.git
    cd sktelecom.github.io/
    ```

3. 의존성 설치(고정된 Hugo Extended와 PostCSS가 함께 설치됩니다):

    ```
    npm ci
    ```

4. 웹사이트 서버 시작:

    ```
    npm run serve
    ```

이제 브라우저를 열고 http://localhost:1313/ (bind address 127.0.0.1)로 접속하면 웹사이트의 초기화면을 볼 수 있습니다.

프로덕션 빌드를 확인하려면 `npm run build`를 실행하세요. 산출물은 `public/` 디렉토리에 생성됩니다.

## Useful docs
Hugo와 관련한 보다 자세한 내용은 다음 자료를 참고하실 수 있습니다.
- [User guide for the Docsy theme](https://www.docsy.dev/docs/getting-started/)
- [Hugo installation guide](https://gohugo.io/getting-started/installing/)
- [Hugo basic usage](https://gohugo.io/getting-started/usage/)
- [Hugo site directory structure](https://gohugo.io/getting-started/directory-structure/)
- [hugo server reference](https://gohugo.io/commands/hugo_server/)
