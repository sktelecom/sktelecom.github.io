# 파일 첨부와 이미지 보여주기

- [파일 첨부와 이미지 보여주기](#파일-첨부와-이미지-보여주기)
  - [파일 첨부](#파일-첨부)
  - [이미지 보여주기](#이미지-보여주기)
    - [Markdown 형태로 보여주기](#markdown-형태로-보여주기)
    - [html tag 사용하여 보여주기](#html-tag-사용하여-보여주기)
    - [hugo의 Image Processing 기능을 사용하여 보여주기](#hugo의-image-processing-기능을-사용하여-보여주기)

## 파일 첨부

1. 먼저 첨부할 파일을 파일을 첨부할 _index.md가 위치한 디렉토리내에 위치시키세요. 
2. 그리고, _index.md 에서 아래 예와 같이 첨부파일 다운로드 링크를 추가하면 됩니다.

```
[filename.pdf](filename.pdf)
```


## 이미지 보여주기

먼저 이미지 파일을 이지미를 보여줄 _index.md가 위치한 디렉토리(예: /content/ko/project/metatron/) 내에 위치시키세요. 

이미지 파일은 주로 다음 세가지 방식으로 보여줄 수 있습니다. 

### Markdown 형태로 보여주기 

다음과 같이 Markdown 방식으로 보여줄 수 있습니다. 이 경우 화면에 가득차게 보여집니다. 

```
![metatron0.jpg](metatron0.jpg)
```

### html tag 사용하여 보여주기

html tag를 사용하여 사이즈를 조절하며 보여줄 수 있습니다. 

``` 
# 폭의 90%만 채워서 보여주기
<div ><span class="image fit">
  <img src="metatron0.jpg" width="90%">
</span></div>

# 세개의 그림을 폭의 1/3씩 채워서 한 줄로 보여주기
<div ><span class="image fit">
  <img src="metatron0.jpg" width="30%">
  <img src="metatron0.jpg" width="30%">
  <img src="metatron0.jpg width="30%">
</span></div>

```

### hugo의 Image Processing 기능을 사용하여 보여주기

hugo의 [imgproc shortcode](https://www.docsy.dev/docs/adding-content/shortcodes/#imgproc)를 이용하여 이미지 사이즈 수정, 출처/라이선스 표시 등을 할 수 있습니다.

먼저 Index 페이지 파일 (예: _index.md)의 헤더 영역에 아래와 같이 이미지 파일을 resources에 추가합니다. 

```
resources:
- src: "**.{png,jpg}"
  title: "Image #:counter"
  params:
  byline: "Photo: Haksung Jang"
```

* src: 이미지 파일 이름을 작성합니다. 여러개의 파일인 경우, `"**.{png,jpg}"` 와 같이 표시할 수 있습니다. 
* byline: 이미지 파일 하단에 보여질 출처 및 라이선스를 작성합니다. 

그리고, Index 페이지 파일 (예: _index.md) 본문 내 이미지 파일을 보여주어야 할 부분에 아래와 같이 작성하여 이미지를 보여주세요. 

```
{{< imgproc (보여줄 파일 이름) Fit "900x600" >}}
(여기에 이미지 설명을 작성하면 이미지 하단에 함께 보여집니다.)
{{< /imgproc >}}
```
