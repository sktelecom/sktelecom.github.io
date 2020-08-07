# 기여하기
SK텔레콤 오픈소스 사이트는 여러분의 참여로 개선됩니다. 웹사이트 개선, 오픈소스 프로젝트 홍보, 기술 블로그 등록 등 다양한 활동을 하실 수 있습니다. 

# 오픈소스 프로젝트 등록
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