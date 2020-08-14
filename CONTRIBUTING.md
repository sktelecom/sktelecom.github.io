# 기여하기
SK텔레콤 오픈소스 사이트는 여러분의 참여로 개선됩니다. 웹사이트 개선, 오픈소스 프로젝트 홍보, 기술 블로그 등록 등 다양한 활동을 하실 수 있습니다. 

- [1. 오픈소스 프로젝트 등록](#1-오픈소스-프로젝트-등록)  
- [2. 블로그 작가 등록](#2-블로그-작가-등록)
- [3. 블로그 작성글 등록](#3-블로그-작성글-등록)
- [4. 컴플라이언스 산출물 등록](#4-컴플라이언스-산출물-등록)
- [개발 환경 설정](#개발-환경-설정)
- [Git Workflow](#git-workflow)
    - [소스 코드 Clone 및 Branch 생성](#소스-코드-clone-및-branch-생성)
	- [로컬 PC에서 사이트 구동](#-로컬-pc에서-사이트-구동)
	- [수정 및 제출](#수정-및-제출)
- [Support](#Support)

# 1. 오픈소스 프로젝트 등록
SK텔레콤 오픈소스 사이트에 등록하여 홍보하고자 하는 오픈소스 프로젝트가 있다면 다음의 방법으로 사이트에 등록할 수 있습니다.

## 자료 준비
먼저 다음 자료를 준비합니다.
1.  (필수) 프로젝트 이름
2.  (필수) 대표 이미지 (640*480)
3.  (필수) 프로젝트 설명 문구 (2-3줄 이내, 영문)
4.  (필수) GitHub URL
5.  홈페이지 URL

## 자료 제출

SK텔레콤 오픈소스 사이트에 오픈소스 프로젝트를 등록하기 위해 자료를 제출하는 방법은 두가지 입니다.
1. GitHub > New issue하여 위의 자료를 첨부하고, 프로젝트 추가를 요청합니다. : [https://github.com/sktelecom/sktelecom.github.io/issues](https://github.com/sktelecom/sktelecom.github.io/issues)
- 관리자가 내용을 검토 후 사이트에 반영합니다.

2. 로컬 PC에 개발환경을 구축하여 직접 프로젝트 추가를 해보고, 이를 Pull Request합니다. 이와같이 직접 할 경우, 본인이 원하는 형태로 구성하여 등록할 수 있다는 장점이 있습니다.
- 자세한 내용은 아래 Pull Request 방법을 참고하세요.

자료 제출 관련 문의나 요청이 있을 경우, GitHub > New issue에서 이슈를 생성하거나, opensource@sk.com 으로 연락주시기 바랍니다.

  

## 오픈소스 프로젝트 등록을 위한 Pull Request 방법

### 선행 작업
1. 로컬 PC에 개발 환경을 구축합니다. : [개발 환경 설정](#개발-환경-설정)
2. 소스 코드를 다운 받고 Branch를 생성합니다. : [소스 코드 Clone 및 Branch 생성](#소스-코드-clone-및-branch-생성)

### 코드 수정
1. 먼저 대표 이미지를 ./assets/images/project/ 하위에 위치시킵니다.
2. ./_data/project.yml 파일을 열고 최하단에 다음과 같이 등록하려는 오픈소스 프로젝트의 정보를 추가합니다. (홈페이지가 없는 경우 homepage-url은 공란으로 둡니다.)

```
$ vi ./_data/project.yml
- name : Metatron Discovery
  image : metatron.png
  description : Metatron Discovery is a big data analysis platform supports overall process from data cleansing to visualization. Where more than 10 billion of large volume data are processed in seconds, analyze data on variety of levels, discover insights and apply it on your business right away.
  github-url : https://github.com/metatron-app/metatron-discovery
  homepage-url : https://metatron.app/
```
이렇게 추가하면 코드 수정이 완료됩니다. 
  
3. Local 서버에서 수정사항이 잘 반영되었는지 확인합니다. : [로컬 PC에서 사이트 구동](#-로컬-pc에서-사이트-구동)

  
### Commit, Push & Pull Request

수정 사항을 제출합니다. : [수정 및 제출](#수정-및-제출)

# 2. 블로그 작가 등록

SK텔레콤 오픈소스 사이트에 작가 등록을 하고 기술 블로그를 작성하세요. 작가 등록을 하면 다음과 같이 SK텔레콤 오픈소스 사이트에서 작가 프로필과 작성 글을 확인할 수 있습니다. :  [https://sktelecom.github.io/authors/haksung](https://sktelecom.github.io/authors/haksung)

작가 등록 방법은 다음과 같습니다.

## 자료 준비

작가 등록을 위해 다음 사항을 준비합니다.

1.  (필수) 작가 계정명 (이메일주소에서 골뱅이(@) 앞부분)
2.  (필수) 작가 fullname (예: Haksung Jang (장학성) )
3.  (필수) Position (예: Data Scientist)
4.  (필수) 소속 (예: SK텔레콤)
5.  (필수) 작가 사진 (파일명 : "계정명".확장자, 사이즈 : 370*370)
6.  (필수) 소개글 (자신을 기술블로그 작가로써 적절히 표현할 수 있는 간략한 소개.)
7.  (필수) 이메일 주소
8.  홈페이지 url
9.  Github 계정
10.  Facebook 계정
11.  Instagram 계정
12.  Linkedin 계정
13.  Twitter 계정

## 자료 제출

준비한 자료를 제출하는 방법은 두가지 입니다.

1.  GitHub > New issue하여 위의 자료를 첨부하고, 작가 등록을 요청합니다. : [https://github.com/sktelecom/sktelecom.github.io/issues](https://github.com/sktelecom/sktelecom.github.io/issues)
    -   관리자가 내용을 검토하여 SK텔레콤 오픈소스 사이트에 작가 등록을 진행합니다.
2.  로컬 PC에 개발환경을 구축하여 직접 작가 등록을 수행해보고, 이를 Pull Request합니다. 직접 할 경우, 본인이 원하는 형태로 구성하여 등록할 수 있다는 장점이 있습니다.
    -   자세한 내용은 아래 Pull Request 방법을 참고하세요.

자료 제출 관련 문의나 요청이 있을 경우, GitHub > New issue에서 이슈를 생성하거나, opensource@sk.com 으로 연락주시기 바랍니다.

## 작가 등록을 위한 Pull Request 방법

### 선행 작업
1.  로컬 PC에 개발 환경을 구축합니다. : [개발 환경 설정](#개발-환경-설정)
2.  소스 코드를 다운 받고 Branch를 생성합니다. : [소스 코드 Clone 및 Branch 생성](#소스-코드-clone-및-branch-생성)

### 코드 수정

1.  작가 사진 이미지를 "계정명.jpg"란 이름으로 /assets/images/author/ 하위에 위치시킵니다.
2.  /author/하위의 sample_author.html을 복사해서 "계정명".html을 생성합니다.
```
    $ cd ./author/
    $ cp ./sample_author.html "계정명".html
```
3.  생성한 "계정명".html을 열어서 4 ~ 16 line의 다음 값을 자신의 정보에 맞게 수정합니다.
```
account : haksung
fullname : Haksung Jang (장학성)
position : Open Source Program Manager
company : SK telecom
image : haksung.jpg
intro : 기업이 오픈소스를 사용하면서 최대한의 가치를 창출하는 방법을 고민하며, 기업 전체에 올바른 오픈소스 문화 확산이 될 수 있도록 환경과 시스템을 구축하고 있습니다.
email : haksung@sk.com
homepage : https://haksungjang.github.io/
github : haksungjang
facebook : haksung.jang
instagram :
linkedin : haksung
twitter :
keywords: author
```

    
4.  Local 서버에서 수정사항이 잘 반영되었는지 확인합니다. : [로컬 PC에서 사이트 구동](#-로컬-pc에서-사이트-구동)

### Commit, Push & Pull Request

수정 사항을 제출 합니다. : [수정 및 제출](#수정-및-제출)


# 3. 블로그 작성글 등록

SK텔레콤 오픈소스 사이트를 통해 기술 블로그를 공개할 수 있습니다. 이는 오픈소스 정신인 협업과 공유를 위한 기반이 될 뿐만 아니라 우수 기술을 문서화여 공개함으로 사회에 기여할 수 있는 좋은 방법입니다.

기술 블로그를 SK텔레콤 오픈소스 사이트에 등록하는 방법은 다음과 같습니다.

## 자료 준비

블로그 등록을 위해 다음 사항을 준비합니다. (최초 블로그 작성 시, 작가 등록을 먼저 하시기 바랍니다. : [2. 블로그 작가 등록](#2-블로그-작가-등록))

1.  (필수) 블로그 제목 (예: SK텔레콤 오픈소스 가이드)
2.  부제목 (예: 오픈소스의 사용, 기여 그리고 기여 방법에 대한 소개)
3.  (필수) 소개글 (블로그 내용을 한줄로 요약한 소개)
4.  (필수) 작가계정 (이메일의 @앞 부분)
5.  대표 이미지 (640*480)
6.  블로그 파일
    -   파일 생성
        -   샘플 파일을 복사해서 생성하세요. 블로그 샘플 파일은 여기에 있습니다 : [./_posts/sample/2020-08-07-샘플-블로그-입니다.md](./_posts/sample/2020-08-07-샘플-블로그-입니다.md)
        -   파일 이름은 "작성년도-월-일-제목.md" 형태가 되어야 합니다. (예: 2020-08-06-Spring-Boot-애플리케이션-관리기법.md)
    -   파일 작성
        
        -   먼저 파일 상단에서 블로그 정보 (부제, 소개, 대표이미지, 작가계정)를 기재하고, 24 line 부터 Markdown 형태로 블로그를 작성합니다.
            
```
tagline: "오픈소스 사용,기여 그리고 공개"
intro: "SK텔레콤 오픈소스 가이드를 소개합니다."
img : markdown-samples.jpg
author : haksung
```

## 자료 제출

준비한 자료를 제출하는 방법은 두가지 입니다.

1.  GitHub > New issue하여 위의 자료를 첨부하고, 블로그 등록을 요청합니다. : [https://github.com/sktelecom/sktelecom.github.io/issues](https://github.com/sktelecom/sktelecom.github.io/issues)
    -   관리자가 내용을 검토하여 SK텔레콤 오픈소스 사이트에 작가 등록을 진행합니다.
2.  로컬 PC에 개발환경을 구축하여 직접 블로그를 추가를 해보고, 이를 Pull Request합니다. 직접 할 경우, 본인이 원하는 형태로 구성하여 등록할 수 있다는 장점이 있습니다.
    -   자세한 내용은 아래 Pull Request 방법을 참고하세요.

자료 제출 관련 문의나 요청이 있을 경우, GitHub > New issue에서 이슈를 생성하거나, opensource@sk.com 으로 연락주시기 바랍니다.

## 블로그 등록을 위한 Pull Request 방법

### 선행 작업
1.  로컬 PC에 개발 환경을 구축합니다. : [개발 환경 설정](#개발-환경-설정)
2.  소스 코드를 다운 받고 Branch를 생성합니다. : [소스 코드 Clone 및 Branch 생성](#소스-코드-clone-및-branch-생성)

### 코드 수정

1.  /assets/images/blog/하위에 자신의 계정명(이메일 주소에서 @앞 부분)으로 디렉토리를 생성하세요.
    
```
$ cd ./assets/images/blog/
$ mkdir "자신의 계정명"
```
    
2.  생성한 디렉토리에 대표 이미지와 블로그 작성 시 사용한 이미지를 위치시키세요.
3.  /_posts 하위에 블로그 내용을 작성할 md 파일을 생성합니다.
    -   파일명은 "작성년도-월-일-제목.md"로 구성합니다. (예: 2020-08-06-Spring-Boot-애플리케이션-관리기법.md)
    -   sample 파일을 복사하여 생성하세요.
```
$ cd _posts/"자신의 계정명"
$ cp ../sample/2020-08-07-샘플-블로그-입니다.md 2020-08-06-Spring-Boot-애플리케이션-관리기법.md
```        

4.  Local 서버에서 수정사항이 잘 반영되었는지 확인합니다. : [로컬 PC에서 사이트 구동](#-로컬-pc에서-사이트-구동)

### Commit, Push & Pull Request

수정 사항을 제출 합니다. : [수정 및 제출](#수정-및-제출)


# 4. 컴플라이언스 산출물 등록

SK텔레콤이 배포한 소프트웨어에 포함된 오픈소스에 대한 오픈소스 라이선스 의무 준수를 위해 컴플라이언스 산출물(Compliance Artifacts : 오픈소스 고지문 및 공개할 소스코드)를 등록할 수 있습니다. (등록한 산출물은 다음 페이지를 통해 공개됩니다. : [https://sktelecom.github.io/compliance.html](https://sktelecom.github.io/compliance.html) )

## 자료 준비
SK텔레콤 오픈소스 사이트을 통해 컴플라이언스 산출물을 공개하기 위해서는 다음 자료를 준비해야 합니다. 
1.  (필수) 사업 영역 (MNO, Media, Security, Commerce, AI 등)
2.  (필수) 배포하는 소프트웨어 이름 (예: T map)
3.  (필수) 배포하는 소프트웨어 버전 (예: 1.0)
4.  소프트웨어에 대한 부가 설명 (예: Android Application)
4.  (필수) 오픈소스 고지문 파일 (예: tmap-20-android-notice.html)
5.  공개할 소스코드 파일 (예: tmap-20-android-sourcecode.zip)
6.  (소스코드가 100MB 이상일 경우) 공개할 소스코드 다운로드 URL
    -   공개할 소스 코드의 사이즈가 100MB 이상일 경우, 별도의 저장 공간에 등록하고, 이를 다운로드 받을 수 있는 URL을 기재하세요. 
    -   혹은, 다음 repository에 디렉토리를 생성하여 소스 코드를 등록하고 (Pull Requset), 디렉토리의 위치 URL을 기재하세요. : [https://github.com/sktelecom/compliance-artifacts](https://github.com/sktelecom/compliance-artifacts)

## 자료 제출

준비한 자료를 제출하는 방법은 두가지 입니다.

1.  GitHub > New issue하여 위의 자료를 작성하여 등록을 요청합니다. : [https://github.com/sktelecom/sktelecom.github.io/issues](https://github.com/sktelecom/sktelecom.github.io/issues)
    -   관리자가 내용을 검토하여 SK텔레콤 오픈소스 사이트에 등록을 진행합니다.
2.  로컬 PC에 개발환경을 구축하여 직접 블로그를 추가를 해보고, 이를 Pull Request합니다. 직접 할 경우, 본인이 원하는 형태로 구성하여 등록할 수 있다는 장점이 있습니다.
    -   자세한 내용은 아래 Pull Request 방법을 참고하세요.

자료 제출 관련 문의나 요청이 있을 경우, GitHub > New issue에서 이슈를 생성하거나, opensource@sk.com 으로 연락주시기 바랍니다.

## 컴플라이언스 산출물 등록을 위한 Pull Request 방법

### 선행 작업

1. 로컬 PC에 개발 환경을 구축합니다. : [개발 환경 설정](#개발-환경-설정)
2. 소스 코드를 다운 받고 Branch를 생성합니다. : [소스 코드 Clone 및 Branch 생성](#소스-코드-clone-및-branch-생성)


### 코드 수정

1. 오픈소스 고지문 파일과 공개할 소스코드 파일을 ./compliance/"사업영역"/ 디렉토리 하위에 위치시킵니다. 
	  - 오픈소스 고지문 파일은 html 혹은 txt 형태로 등록합니다. 
	  - 공개할 소스 코드는 하나의 파일로 압축합니다. (zip, tar.gz 등)
```
$ cd ./compliance/"사업영역"/
$ cp 오픈소스고지문.html .
$ cp 공개할소스코드.zip .
```
2. ./_data/compliance.yml을 열어서 제일 밑에 다음과 같이 컴플라이언스 산출물의 정보를 추가합니다. (소스 코드 사이즈가 100MB 이하인 경우, url 란은 공란으로 두어도 됩니다.)
```
$ vi ./_data/complianceyml
- area : ai
  name : Nugu
  version : 1.0
  description : Android application
  notice : nugu-10-notice.html
  source : nugu-10-sourcecode.zip
  url :
```
그러면, compliance 페이지에 등록한 사항이 반영됩니다. 

3. Local 서버에서 수정사항이 잘 반영되었는지 확인합니다. : [로컬 PC에서 사이트 구동](#-로컬-pc에서-사이트-구동)

### Commit, Push & Pull Request

잘 반영이 되었다면, 수정 사항을 제출 합니다. : [수정 및 제출](#수정-및-제출)


# 개발 환경 설정

## 1. Ruby, Bundler와 Jekyll 설치

SK텔레콤 오픈소스 사이트는 Jekyll([https://jekyllrb-ko.github.io/](https://jekyllrb-ko.github.io/))을 이용하여 개발하고, Bundler([https://bundler.io/](https://bundler.io/))로 환경을 구성합니다. 이를 위해 먼저 Local PC에 macOS, Windows등 각 OS 환경에 맞게 Ruby([https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/))와 Bundler([https://bundler.io/](https://bundler.io/)), 그리고 Jekyll를 설치합니다.

세부 절차는 자신의 운영체제에 해당하는 가이드를 확인하세요. : [https://jekyllrb-ko.github.io/docs/installation/](https://jekyllrb-ko.github.io/docs/installation/)

## 2. 테스트 사이트 구동

개발 환경 설치를 완료했으면, 테스트용 Jekyll 사이트를 생성합니다.
```
$ jekyll new mysite
```

이상없이 생성이 완료되면 생성된 디렉토리로 이동하여 생성된 파일을 확인합니다.
```
$ cd mysite/
mysite $ ls
404.html    Gemfile     Gemfile.lock    _config.yml _posts      about.markdown  index.markdown
```

사이트를 빌드하고 로컬 서버에 적용합니다.
```
$ bundle exec jekyll server
Configuration file: /Users/haksung/project/mysite/_config.yml
            Source: /Users/haksung/project/mysite
       Destination: /Users/haksung/project/mysite/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 0.291 seconds.
 Auto-regeneration: enabled for '/Users/haksung/project/mysite'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

로컬PC의 브라우저로 [http://127.0.0.1:4000/](http://127.0.0.1:4000/) 에 접속하면 Jekyll이 생성한 페이지를 볼 수 있습니다.

이제 개발을 위한 환경 설정이 테스트까지 완료되었습니다.

Git Workflow에 따라 SK텔레콤 오픈소스 사이트의 소스 코드를 Clone하세요.


# Git Workflow

![github-workflow-sktelecom.png](./assets/images/github-workflow-sktelecom.png)

# 소스 코드 Clone 및 Branch 생성

## Step 1. Fork

1.  [https://github.com/sktelecom/sktelecom.github.io](https://github.com/sktelecom/sktelecom.github.io) 에 방문하여,
2.  화면 우상단의 Fork 버튼을 눌러 fork합니다.

## Step 2. Clone

Fork한 repository를 Local working directory로 Clone하고, Remote에 Upstream repository를 추가합니다.

```
$ git clone https://github.com/$user/sktelecom.github.io
Cloning into 'sktelecom.github.io'...
remote: Enumerating objects: 4373, done.
remote: Counting objects: 100% (4373/4373), done.
remote: Compressing objects: 100% (3470/3470), done.
remote: Total 4373 (delta 590), reused 4334 (delta 571), pack-reused 0
Receiving objects: 100% (4373/4373), 22.32 MiB | 3.41 MiB/s, done.
Resolving deltas: 100% (590/590), done.
 
$ cd sktelecom.github.io
$ git remote add upstream https://github.com/sktelecom/sktelecom.github.io.git
$ git remote -v                                                              
origin  https://github.com/haksungjang/sktelecom.github.io.git (fetch)
origin  https://github.com/haksungjang/sktelecom.github.io.git (push)
upstream    https://github.com/sktelecom/sktelecom.github.io.git (fetch)
upstream    https://github.com/sktelecom/sktelecom.github.io.git (push)
```


## Step 3. Fetch and Rebase

개발용 branch(develop)를 생성하기 전에 먼저 master를 최신 상태로 유지합니다.
```
$ git fetch upstream
$ git checkout master
$ git rebase upstream/master
```


## Step 4. Branch

그리고, 그 상태에서 develop branch를 생성합니다.
```
$ git checkout -b develop
```


## * 로컬 PC에서 사이트 구동

로컬 PC에서 SK텔레콤 오픈소스 사이트를 구동해봅니다. 이를 위해 먼저 bundle 환경설정 후 install을 합니다. 
```
// ./vendor/bundle/에 Gem을 설치하도록 bundle 설정하고 install
$ bundle config set path 'vendor/bundle'
$ bundle install
```
사이트를 빌드하고 로컬 서버에 적용합니다. 
```
$ bundle exec jekyll server
```

이제 [http://127.0.0.1:4000/](http://127.0.0.1:4000/) 에 접속하면 SK텔레콤 오픈소스 사이트에 접속하는 것을 확인할 수 있습니다.

# 수정 및 제출

## * 코드 수정

오픈소스 프로젝트 추가, 작가 등록, 블로그 작성 등 수정 사항을 반영합니다. 자세한 사항은 다음 안내를 참고합니다.

1.  오픈소스 프로젝트 등록 : [1. 오픈소스 프로젝트 등록](#1-오픈소스-프로젝트-등록)  
2.  작가 등록 : [2. 블로그 작가 등록](#2-블로그-작가-등록)
3.  블로그 등록 : [3. 블로그 작성글 등록](#3-블로그-작성글-등록)
4.  컴플라이언스 산출물 등록 : [4. 컴플라이언스 산출물 등록](#4-컴플라이언스-산출물-등록)

## Step 5. Commit

수정 사항을 Commit 합니다.
```
$ git commit
```

## Step 6. Push

Commit을 Origin의 develop branch에 Push합니다.
```
$ git push -f origin develop
```

## Step 7. Create a Pull Request

Fork된 GitHub 사이트로 갑니다. : [https://github.com/$user/sktelecom.github.io](https://github.com/$user/sktelecom.github.io)

그러면, "Compare & pull request" 버튼이 생성된 것을 볼 수 있습니다. 이를 눌러서 Upstream repository의 develop branch로 Create pull request를 생성하여 수정 사항을 제출합니다. 

# Support
SK텔레콤 오픈소스 사이트와 관련하여 문의나 요청이 있을 경우, GitHub > New issue에서 이슈를 생성하거나, opensource@sk.com 으로 연락주시기 바랍니다.

감사합니다. 
