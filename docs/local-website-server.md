# 로컬에서 웹사이트 구동하기

로컬에서 웹사이트를 구동하여 변경 사항을 확인할 수 있습니다. 다음 가이드에 따라 Hugo 설치 등 필요한 작업을 수행하세요.

- [로컬에서 웹사이트 구동하기](#로컬에서-웹사이트-구동하기)
  - [Hugo 설치](#hugo-설치)
  - [NodeJS 설치](#nodejs-설치)
  - [Fork & Clone하고 로컬에서 웹서버 실행](#fork--clone하고-로컬에서-웹서버-실행)
  - [Useful docs](#useful-docs)

## [Hugo](https://gohugo.io/) 설치

자신의 OS 환경에 맞게 최신 버전의 Hugo Extended 버전을 설치하세요. 최소 0.68.3 이상의 버전을 설치해야 합니다. 

먼저 최신 버전의 hugo_extended 파일을 다운 받으세요. 
1. [Hugo release](https://github.com/gohugoio/hugo/releases) 페이지로 이동
2. 최신 release에서 hugo_extended_0.xx_ 이 있는 리스트까지 Scroll Down
3. 자신의 운영체제에 맞는 파일 다운로드
4. 압축 해제

Linux에서의 설치를 예로 들면 다음과 같습니다. 

1.  Download `hugo_extended_0.68.3_Linux-64bit.tar.gz`
    (or the latest version) from the
    [Hugo releases](https://github.com/gohugoio/hugo/releases/tag/v0.68.3) page.

2.  Create a new directory:

        mkdir $HOME/hugo

3.  Extract the file you downloaded to `$HOME/hugo`.

        tar -zxvf hugo_extended_0.68.3_Linux-64bit.tar.gz

Hugo 설치에 대한 자세한 내용은 [Hugo 설치 가이드](https://gohugo.io/getting-started/installing/)를 참고하세요. 

## NodeJS 설치

Docsy의 CSS 리소스를 빌드하기 위해서는 [PostCSS](https://postcss.org/)가 필요한데요, PostCSS는 npm install로 설치하게 됩니다. 따라서, 먼저 [NodeJS](https://nodejs.org/en/)가 설치되어 있어야 합니다. 로컬 환경에 맞게 NodeJS를 [설치](https://nodejs.org/ko/download/)하세요.


## Fork & Clone하고 로컬에서 웹서버 실행

일반적인 GitHub workflow에 따라 GitHub에서 repository를 Fork하고 로컬 PC에 Clone합니다. 

1. GitHub UI에서 [sktelecom/sktelecom.github.io](https://github.com/sktelecom/sktelecom.github.io) Fork
   
2. 로컬 PC에 Clone 예(SSH cloning):

    ```
    mkdir sktelecom
    cd sktelecom/
    git clone git@github.com:<your-github-username>/sktelecom.github.io.git
    ```

3. PostCSS 설치

    ```
    cd sktelecom.github.io/
    sudo npm install -D --save autoprefixer
    sudo npm install -D --save postcss-cli
    ```

4. 웹사이트 서버 시작 :  `/sktelecom.github.io/` 디렉토리에서 다음 명령을 실행

    ```
    hugo server -D
    ```

이제 브라우저를 열고 http://localhost:1313/ (bind address 127.0.0.1)로 접속하면 웹사이트의 초기화면을 볼 수 있습니다. 


## Useful docs
Hugo와 관련한 보다 자세한 내용은 다음 자료를 참고하실 수 있습니다. 
- [User guide for the Docsy theme](https://www.docsy.dev/docs/getting-started/)
- [Hugo installation guide](https://gohugo.io/getting-started/installing/)
- [Hugo basic usage](https://gohugo.io/getting-started/usage/)
- [Hugo site directory structure](https://gohugo.io/getting-started/directory-structure/)
- [hugo server reference](https://gohugo.io/commands/hugo_server/)

