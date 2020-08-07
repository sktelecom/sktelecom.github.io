# 기여하기
SK텔레콤 오픈소스 사이트는 여러분의 참여로 개선됩니다. 웹사이트 개선, 오픈소스 프로젝트 홍보, 기술 블로그 등록 등 다양한 활동을 하실 수 있습니다. 

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

준비한 자료를 제출하는 방법은 두가지 입니다.

1.  GitHub > New issue하여 위의 자료를 첨부하고, 프로젝트 추가를 요청합니다. : [https://github.com/sktelecom/sktelecom.github.io/issues](https://github.com/sktelecom/sktelecom.github.io/issues)
	-  관리자가 내용을 검토 후 사이트에 반영합니다. 
2.  로컬 PC에 개발환경을 구축하여 직접 프로젝트 추가를 해보고, 이를 Pull Request합니다. 이와같이 직접 할 경우, 본인이 원하는 형태로 구성하여 등록할 수 있다는 장점이 있습니다. 
	- 자세한 내용은 아래 Pull Request 방법을 참고하세요.

## Pull Request for Project
### 선행 작업
1.  로컬 PC에 개발 환경을 구축합니다. :
2.  소스 코드를 다운 받고 Branch를 생성합니다. :

### 코드 수정
1.  먼저 대표 이미지를 ./assets/images/project/ 하위에 위치시킵니다.
2.  ./index.html 내 89 line에 "<!-- Project section-->" 구간이 있습니다. 이 부분에 다음과 같은 프로젝트 하단에 내 프로젝트에 해당하는 내용을 추가합니다.  
    - 참고로, 아래 코드에서 <!-- H8L(Hwangsaeul) --> 은 기존 등록된 프로젝트의 코드 부분이고, <!-- My Project --> 부분이 신규로 등록하려는 프로젝트를 위한 샘플 코드입니다. (myopensourceproject 라고 된 부분을 실제 나의 프로젝트에 맞는 내용으로 변경하면 됩니다)

```
<!-- H8L(Hwangsaeul)  -->
<li class="col-xs-6 col-md-4 project">
  <figure>
    <div class="hovereffect">
      <img src="{{ BASE_PATH }}/assets/images/project/h8l.jpg" alt="">
      <div class="overlay">
        <div class="icons-link">
          <a class="right-link" href="https://hwangsaeul.github.io/" target="_blank"><i class="fa fa-plus"></i></a>
          <a class="left-link" href="https://github.com/hwangsaeul" target="_blank"><i class="fa fa-github"></i></a>
        </div>
      </div>
    </div>
  </figure>
  <div class="portfolio block">
    <h5>H8L(Hwangsaeul)</h5>
    <p class="project-description">H8L(Hwangsaeul) is a project to build SRT ecosystem. We are planning to build new streaming system for a cloud-based video surveillance service. In the new system, Secure Reliable Transport (SRT) will be used as a base protocol to archive the critical requirements; ultra-low latency, packet loss recovery. </p>
  </div>
</li>
<!-- End H8L -->

<!-- myopensourceproject  -->
<li class="col-xs-6 col-md-4 project">
  <figure>
    <div class="hovereffect">
      <img src="{{ BASE_PATH }}/assets/images/project/myopensourceproject.jpg" alt="">
      <div class="overlay">
        <div class="icons-link">
          <a class="right-link" href="https://myopensourceproject.com/" target="_blank"><i class="fa fa-plus"></i></a>
          <a class="left-link" href="https://github.com/myopensourceproject" target="_blank"><i class="fa fa-github"></i></a>
        </div>
      </div>
    </div>
  </figure>
  <div class="portfolio block">
    <h5>myopensourceproject</h5>
    <p class="project-description">myopensourceproject. myopensourceproject. myopensourceproject. myopensourceproject. myopensourceproject.  </p>
  </div>
</li>
<!-- End myopensourceproject -->

```

3. Local 서버에서 수정사항이 잘 반영되었는지 확인합니다. :

### Commit, Push & Pull Request
수정 사항을 Pull Request 합니다. :

# 2. 블로그 작가 등록

SK텔레콤 오픈소스 사이트에 작가 등록을 하고 기술 블로그를 작성하세요. 작가 등록을 하면 다음과 같이 SK텔레콤 오픈소스 사이트에서 작가 프로필과 작성 글을 확인할 수 있습니다. :  [https://sktelecom.github.io/authors/haksung](https://sktelecom.github.io/authors/haksung)

작가 등록 방법은 다음과 같습니다.

## 자료 준비

작가 등록을 위해 다음 사항을 준비합니다.

1.  (필수) 작가 계정명 (이메일주소에서 골뱅이(@) 앞부분)
2.  (필수) 작가 fullname (예: Haksung Jang (장학성) )
3.  (필수) Position (예: Data Scientist)
4.  (필수) 소속 (예: SK telecom)
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

## 작가 등록을 위한 Pull Request 방법

### 선행 작업

1.  로컬 PC에 개발 환경을 구축합니다. :
2.  소스 코드를 다운 받고 Branch를 생성합니다. :

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

    
4.  Local 서버에서 수정사항이 잘 반영되었는지 확인합니다. :

### Commit, Push & Pull Request

수정 사항을 Pull Request 합니다. :


# 3. 블로그 작성글 등록

SK텔레콤 오픈소스 사이트를 통해 기술 블로그를 공개할 수 있습니다. 이는 오픈소스 정신인 협업과 공유를 위한 기반이 될 뿐만 아니라 우수 기술을 문서화여 공개함으로 사회에 기여할 수 있는 좋은 방법입니다.

기술 블로그를 SK텔레콤 오픈소스 사이트에 등록하는 방법은 다음과 같습니다.

## 자료 준비

블로그 등록을 위해 다음 사항을 준비합니다. (최초 블로그 작성 시, 작가 등록을 먼저 하시기 바랍니다. : )

1.  (필수) 블로그 제목 (예: SK텔레콤 오픈소스 가이드)
2.  부제목 (예: 오픈소스의 사용, 기여 그리고 기여 방법에 대한 소개)
3.  (필수) 소개글 (블로그 내용을 한줄로 요약한 소개)
4.  (필수) 작가계정 (이메일의 @앞 부분)
5.  대표 이미지 (640*480)
6.  블로그 파일
    -   파일 생성
        -   샘플 파일을 복사해서 생성하세요. 블로그 샘플 파일은 여기에 있습니다 : ./_post/sample/2020-08-07-샘플-블로그-입니다.md
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
2.  로컬 PC에 개발환경을 구축하여 직접 블로그를 추가를 해보고, 이를 Pull Request합니다. 직접 할 경우, 본인이 원하는 형태로 구성하여 등록할 수 있다는 장점이 있습니다.
    -   자세한 내용은 아래 Pull Request 방법을 참고하세요.

## Blog 추가를 위한 Pull Request 방법

### 선행 작업

1.  로컬 PC에 개발 환경을 구축합니다. :
2.  소스 코드를 다운 받고 Branch를 생성합니다. :

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


# 개발 환경 설정

## 1. Ruby, Bundler와 Jekyll 설치

SK telecom 오픈소스 사이트는 Jekyll([https://jekyllrb-ko.github.io/](https://jekyllrb-ko.github.io/))을 이용하여 개발하고, Bundler([https://bundler.io/](https://bundler.io/))로 환경을 구성합니다. 이를 위해 먼저 Local PC에 macOS, Windows등 각 OS 환경에 맞게 Ruby([https://www.ruby-lang.org/en/](https://www.ruby-lang.org/en/))와 Bundler([https://bundler.io/](https://bundler.io/)), 그리고 Jekyll를 설치합니다.

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

![github-workflow-sktelecom.png](./asset/images/github-workflow-sktelecom.png)

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

로컬 PC에서 SK telecom 오픈소스 사이트를 구동해봅니다.
```
$ bundle exec jekyll server
```

[http://127.0.0.1:4000/](http://127.0.0.1:4000/) 에 접속하면 SK telecom 오픈소스 사이트에 접속하는 것을 확인할 수 있습니다.

# 수정 및 제출

## * 코드 수정

오픈소스 프로젝트 추가, 작가 등록, 블로그 작성 등 수정 사항을 반영합니다. 자세한 사항은 다음 안내를 참고합니다.

1.  Open Source Project 추가 :
2.  작가 등록 : 
3.  Blog 작성 :

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