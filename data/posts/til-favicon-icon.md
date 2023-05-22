# 개요

예전에 스타벅스 홈페이지 클론코딩 한 것을 살펴보다가 갑자기 궁금한 점이 생겼다. `favicon`을 모든 페이지마다 불러오려면 모든 `index.html` 파일에 `link` 태그를 써야될까? 아니면 메인페이지 `index.html`에만 `link` 태그를 쓰면 될까? (프로젝트를 HTML, CSS, JavaScript로만 구성했다고 가정)

## 1. 파일 구조

```
📦starbucks
 ┣ 📂css
 ┣ 📂images
 ┣ 📂js
 ┣ 📂signin
 ┣ 📑index.html
 ┣ 📑README.md
 ┣ 🖼️favicon.png
 ┣ 🖼️favicon.icon
```

## 2. 문제 발견

![](https://velog.velcdn.com/images/nu11/post/0519eb0b-03a2-4cb4-b6b7-19365d2daaea/image.png)

![](https://velog.velcdn.com/images/nu11/post/b90f2491-6eaf-4247-8d8a-85fdc0800211/image.png)

최상위 폴더에 있는 `index.html` 와 `signin` 폴더에 있는 `index.html` 에서 `favicon.png`을 불러오고 있는데 모두 주석처리 하여도 favicon이 브라우저에서 정상적으로 출력되었다.

![](https://velog.velcdn.com/images/nu11/post/289112ce-256f-48cb-bd09-ca5c2fb904e7/image.png)

(캐싱 된 게 있을까 싶어 캐시 비우기 및 강력 새로고침도 해보았다.)
`favicon`을 불러오는 `link` 태그를 주석처리 했는데 왜 정상적으로 출력이 될까?

## 3. 실험

메인페이지가 있는 최상위 디렉토리에서 `favicon.png`와 `favicon.icon` 파일을 지우고 캐시 비우기 및 강력 새로고침 후에 브라우저를 다시 살펴보았다.

![](https://velog.velcdn.com/images/nu11/post/56cabdad-8630-4d3b-a5b9-1944ec06819c/image.png)

위 사진에서 알 수 있듯이 favicon 이미지가 보이지 않는다.

### 3-1. 첫 번째 시도

그렇다면 이번에는 `favicon.png` 파일만 다시 폴더에 넣어보고, 캐시 비우기 및 강력 새로고침 후 다시 브라우저를 살펴보자.

![](https://velog.velcdn.com/images/nu11/post/684f3300-fa6b-40df-bf2a-ea76c512a58e/image.png)

여전히 favicon 이미지가 보이지 않는다.

### 3-2. 두 번째 시도

이번에는 `favicon.icon` 파일만 폴더에 넣어본 뒤, 캐시 비우기 및 강력 새로고침 후 다시 브라우저를 살펴보자.

![](https://velog.velcdn.com/images/nu11/post/eab54b13-4880-44c9-a3b6-a29be9cdc755/image.png)

**엥?**
**엥??**

![](https://velog.velcdn.com/images/nu11/post/1289d4b7-f3c3-49c8-abaa-1ef49e48540e/image.png)

좋다! `favicon.icon` 파일만 폴더에 넣어보았더니 이미지가 정상적으로 출력된다.

### 3-3. 세 번째 시도

그럼 이번에는 `favicon.icon` 파일과 `favicon.png` 파일 모두를 넣어보고 브라우저를 살펴보자.

![](https://velog.velcdn.com/images/nu11/post/b0bc8e1a-c556-4339-8870-c47441113348/image.png)

결과는 정상 출력이다.

## 4. 결론

위의 시도를 통해 알 수 있는것은 `index.html` 파일에

```html
<!-- <link rel="icon" href="./favicon.png" /> -->
```

위와 같이 favicon을 불러오는 `link` 태그가 주석처리 되어져 있어도 `favicon.icon` 파일만 잘 들어있다면 favicon 이미지는 정상적으로 보여진다. 왜 이런 현상이 생길까? 내가 생각하는 원인은 **브라우저가 알아서 잘 깔끔하고 센스있게 favicon 이미지를 보여주는게 아닐까?** 싶다.

> 어디까지나 저의 개인적인 의견입니다. 혹시 틀린 내용이 있다면 알려주시면 감사하겠습니다!😁
> (브라우저, 버전, 배포 등 환경마다 다르게 동작할 수 있습니다!)
