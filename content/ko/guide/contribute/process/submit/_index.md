---
title: "기여 제출 세부 절차"
linkTitle: "기여 제출"
weight: 70
type: docs
description: >
  기여를 제출하는 세부 절차를 설명한다. 
---

{{% alert title="Reference" color="info" %}}
이 페이지는 [GitHub의 Open Source Guide](https://opensource.guide/)의 내용을 참고하였다. 
{{% /alert %}}

이제 기여를 제출하는 방법을 알아보자. 일반적인 오픈소스 프로젝트에 기여 제출 방법과 절차는 다음과 같다.

## 1. 이전 이력을 확인하라
제출하려고 하는 기여가 이전에 다뤄진 이력이 있는지 확인하라. 프로젝트의 README, 이슈, 메일링 리스트를 살펴봐라. 모든 문서를 다 확인할 필요 없이, 몇 가지 키워드를 검색하면 쉽게 확인할 수 있다.

이전 자료에서 관련 내용을 찾을 수 없다면 이슈를 열거나 Pull Request를 통해 커뮤니케이션을 시작할 단계이다. GitHub에서는 Issues와 Pull Request 기능을 제공한다.

* Issues : 대화나 토론을 시작할 수 있다.
* Pull Request : 문제에 대한 솔루션을 기여한다.

Issue 또는 Pull Request를 열기 전에 프로젝트가 제공하는 문서 (일반적으로 CONTRIBUTING 또는 README)를 확인하여 기여 절차 및 방법을 확인하라. 예를 들어 특정 템플릿을 따르도록 요구하거나, 사전 테스트를 요구할 수 있다.

기여를 위한 작업을 시작하기 전에 먼저 Issues를 오픈해서 커뮤니티 구성원에게 먼저 어떤 작업을 하려고 하는지 알리는 것도 좋은 방법이다. 때에 따라 불필요한 작업을 진행하지 않도록 도움을 받을 수 있다.

## 2. Issue를 생성하라
‌일반적으로 다음 상황에서 Issue를 생성한다.

* 스스로 해결할 수 없는 오류 보고
* 새로운 기능 또는 아이디어 제안
* 커뮤니티 비전, 또는 정책에 대한 토론

{{% alert title="커뮤니케이션 Tip" color="success" %}}
1. 다루고자 하는 오픈된 Issue가 있다면, 먼저 comment를 남겨서 다른 사람들이 중복으로 작업하지 않게 하라.
2. 오래전에 오픈된 Issue라면, 이미 해결된 것일 수 있다. 작업을 시작하기 전에 comment로 해결이 된 것은 아닌지 확인하라.
3. Issue를 오픈했지만, 나중에 스스로 답을 알아낸 경우, 해당 Issue에 대한 답을 다른 사람도 알 수 있도록 comment를 작성하고 이슈를 close 하라. 이렇게 문서화하는 것조차도 프로젝트에 기여하는 것이다.
{{% /alert %}}


## 3. Pull Request를 생성하라
기여할 파일이 모두 준비가 되다면, Pull Request를 통해 기여를 제출하라.

### Pull Request 시기
‌일반적으로 다음 상황에서 Pull Request를 생성한다. ‌

* 사소한 수정 사항 제출 (예: 오타, 링크 오류 등)
* Issue에서 이미 논의가 된 사항에 대한 작업 시작

Pull Request는 작업이 완료된 이후에 해야 하는 것은 아니다. 일반적으로 Pull Request를 일찍 오픈하여 다른 사람들의 피드백을 받는 게 좋다. 제목 줄에 "WIP" (Work in Progress)라고 표시하여 아직 진행 중인 작업이라고 표시하고, 나중에 언제든지 더 많은 Commit을 추가할 수 있다.

### GitHub에서의 Pull Request 절차
GitHub에 있는 프로젝트라면 Pull Request를 제출 시 다음 사항을 참고할 수 있다.

![pr](./pr.png)

#### Step 1. Fork
Upstream Repository를 자신의 GitHub 계정으로 Fork 한다.

#### Step 2. Clone
Fork한 Repository를 자산의 Local working directory로 Clone 한다.

~~~
$ mkdir -p $working_dir
$ cd $working_dir
$ git clone https://github.com/$user/[repository]
~~~

Upstream Repository를 Remote에 추가한다.

~~~
$ cd [repository]
$ git remote add upstream https://github.com/[upstream]/[repository]
 
# Confirm that your remotes make sense:
$ git remote -v
~~~

#### Step 3. Create a branch

먼저 main branch를 fetch와 rebase하여 최신 상태로 유지한다.

~~~
$ cd $working_dir/[repository]
$ git fetch upstream
$ git checkout main
$ git rebase upstream/main
~~~

그리고 개발용 branch (myfeature)를 생성한다.

~~~
$ git checkout -b myfeature
~~~

#### Step 4. Keep your branch in sync
Branch를 fetch와 rebase하여 최신 상태로 유지한다.

~~~
# While on your myfeature branch
$ git fetch upstream
$ git rebase upstream/main
~~~

그 상태에서 code 작업을 한다.

#### Step 5. Commit
수정 사항을 commit 한다.

~~~
$ git commit -a -m '[commit message]'
~~~

#### Step 6. Push
myfeature branch의 수정 사항을 자신의 GitHub Repository에 Push한다.

~~~
git push -f origin myfeature
~~~

#### Step 7. Create a pull request
GitHub에서 자신의 Repository에 가면 Compare & pull request 버튼이 활성화 된 것을 볼 수 있다. 이를 눌러서 Pull Request를 생성한다.

이후 Upstream Repository의 관리자는 요청된 Pull Request를 검토하여 Merge 여부를 결정한다.

{{% alert title="참고 자료" color="success" %}}
* Pull Request가 처음이라면 [Make a Pull Request](http://makeapullrequest.com/)(비디오 강의)를 참고하라. 또한, [First Contributions](https://github.com/Roshanjossey/first-contributions) 에서 Pull Request 만드는 것을 연습할 수 있다.
* 참고로, Kubernetes는 다음과 같은 Github workflow에 대한 설명 문서를 제공한다. : [github_workflow.md](https://github.com/kubernetes/community/blob/master/contributors/guide/github-workflow.md)

{{% /alert %}}

## 4. Feedback을 받아라
기여를 제출하면 프로젝트로부터 Feedback을 받게 됩니다. 일반적으로 Feedback은 개선이나 변경 사항이 어떤 방식으로 동작하는지, 왜 그런 방식을 채택하였는지 등에 대한 설명을 요구한다. 이 Feedback은 때로는 대응하기 어려울 수도 있지만, 기여의 수준을 높이는 과정이라고 받아들이는 것이 좋다.

Feedback은 보통 다음 네 가지 중 하나에 해당한다.

### (1) 응답이 없다?
기여하기 전에 프로젝트가 활발한지 먼저 [확인](/guide/contribute/good-project)하는 게 좋다. 어느 정도 활발한 프로젝트에서도 기여에 대해 응답을 받지 못할 수도 있다.

일주일 이상 응답을 받지 못한 경우, 동일한 스레드에 정중하게 누군가에게 검토를 요청하는 것이 좋다. 적절한 사람의 이름을 알고 있다면 @-멘션 기능을 이용하라.

{{% alert title="Warning" color="warning" %}}
단, 개인적으로 연락하지는 마라. 오픈소스 프로젝트에서 공개 커뮤니케이션은 필수이다.
{{% /alert %}}


그럼에도 여러 가지 이유가 있겠지만 아무도 반응하지 않을 수도 있다. 썩 좋은 기분은 아니지만 낙담할 필요는 없다. 이는 누구에게나 일어날 수 있는 일이다. 기여할 수 있는 다른 방법이나 다른 프로젝트를 찾아보라.‌

### (2) 수정을 요청한다?
아이디어에 대한 설명이나 코드를 수정하라는 요청을 받는 것은 일반적이다. 이렇게 누군가 수정을 요청했다면 바로 응답하라. 그는 자기 시간을 내서 우리 기여를 검토했다.

‌PR을 오픈한 상태로 응답하지 않고 남겨두는건 결례이다. 더 이상 문제를 해결할 여건이 아닌 경우라면, Maintainer에게 더 진행할 수 없다고 알리세요. 그렇게 PR을 Close 하거나 다른 사람이 인수하여 추가로 진행할 수도 있다.

### (3) 거절됐다?
우리 기여는 결국 수락될 수도 있고, 수락되지 않을 수도 있다. 수락되지 않은 이유가 잘 이해되지 않을 경우, Maintainer에게 설명을 요청하는 것도 합리적이다. 그러나 이것이 그들의 결정임을 존중해야 한다. 논쟁하거나 적대적으로 행동하지 마라. 끝까지 이견이 조율되지 않으면, 언제든지 Fork 하여 자신의 프로젝트에 작업할 수 있다.

{{% alert title="Warning" color="warning" %}}
코드가 승인되기까지 여러 차례의 반복적인 수정 과정을 거쳐야 할 수도 있으며, 때에 따라서는 거부될 수도 있다. 이때는 낙심하거나 포기하기보다는 거부된 이유에 대해 자세히 알아보고, 다음 기여가 향상되는 기회로 삼는 것이 좋다.
{{% /alert %}}

### (4) 수락됐다!‌

축하한다! 드디어 오픈소스 기여에 성공했다.