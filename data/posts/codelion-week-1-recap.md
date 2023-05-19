# 3월 28일 ~ 4월 3일 주간 회고 🚩

---

<br><br><br><br>

## 무엇을 배웠을까?💡

---

### 1. HTML

#### HTML / CSS를 배워야 하는 이유

- 컴퓨터에는 사람의 생각을 화면에 시각화 해주는 도구(언어)가 굉장히 많다. 많은 시각화 도구(언어) 중 가장 빠르고, 간편하고 완벽하고 보편적인 것이 `HTML`, `CSS`이다.
- 아주 간단한 문법으로 내 생각과 의도를 정확하게 표현 가능하다.
- 기본적으로 설치되어 있는 브라우저로 인해 누구나 접속 가능한 웹 페이지다. 이처럼 강력한 접근성은 `HTML`, `CSS`를 돋보이게 하는 가장 큰 중요 포인트!

<br>

#### HTML Living Standard

- `HTML`을 개발하던 `W3C`와 `WHATWG`는 웹 표준의 방향에 대해 서로 다른 방향으로 발전 되기를 바라면서 결국 각자의 길을 걷게 되었다.
- 2019년 `W3C`는 `HTML5.3` 권고안을 내세우지만 `WHATWG`가 거부의사를 보이면서, 표준화 이슈가 다시 시작되었다.
- 결국 `W3C`는 `HTML5` 이후 버전의 표준발행을 포기하고 `WHATWG`의 방식을 수용하기로 합의 하였다.
- **2019년 부터 `HTML5` 대신 `HTML Living Standard`로 불리며 `WHATWG`가 주관하게 되었다.**

<br>

#### HTML Grouping Content

- HTML Grouping Content : HTML 콘텐츠를 분류하는 것.
- `<ol>, <ul>, <li>` : 순서가 있는 목록, 순서가 없는 목록, 각 항목들을 나열하는 태그(list item)
- `<dl>, <dt>, <dd>` : 역시 목록을 정의할 때 쓰인다. 차이점이 있다면 `<dl>, <dt>, <dd>` 는 사전처럼 어떠한 것을 정의할 때 쓰이는 목록이다. 정의 목록, 정의할 용어, 용어를 설명할 때 쓰는 태그
- `<div>` : 레이아웃을 나눌 때 사용하는 태그. 이 태그는 컨텐츠의 형태를 변형시키지는 않지만 하위에 있는 여러 요소를 묶어 스타일을 변경시킬 수 있다. **대용할 태그가 없을 경우에만 `<div>` 태그를 사용하자!**
- `<figure>, <figcaption>` : 이미지에 캡션(자막, 설명)을 넣어줄 때 쓰인다.
- `<p>` : 단락을 표시하는 태그다. 줄바꿈의 용도로 사용해서는 안되며, 자식 요소로 `<p>` 태그를 또 사용하지 않는다.
- `<pre>` : HTML에 작성한 내용 그대로 화면에 표현한다. 주로 컴퓨터 코드를 표현할 때 사용한다.
- `<blockquote>` : 인용 블록이다. 안쪽의 텍스트가 긴 인용문임을 나타낸다. 주로 들여쓰기를 한 것으로 그려진다.
- `<main>` : 문서의 주요 콘텐츠를 나타낸다.
- `<hr>` : 원래 가로줄을 표현하기 위해 사용했으나, HTML5 에 오면서 의미가 생긴 요소이다. 단락을 구분할 때 사용한다. `<p>` 태그 내 사용은 웹 표준에 어긋난다.

<br>

#### Embedded content

- Embedded content : 다른 소스를 가져오거나 삽입시키는 컨텐츠와 관련된 요소.
- `<img>` : HTML 페이지에 이미지를 삽입할 때 사용하는 태그
  - src(source) : `<img>` 태그는 `src` 라는 필수 속성을 가진다. `src` 속성은 브라우저에게 **이미지 파일의 위치 및 파일명**을 알려준다. 이때 이미지 파일 위치인 경로는 **절대경로, 상대경로** 2가지로 나뉜다.
  - alt(alternative text) : `alt` 속성은 이미지가 보이지 않을 때 `alt` 속성에 적힌 텍스트를 이미지 대신 보여준다. **브라우저에 이미지에 대한 정보를 전달함으로써 SEO(Search Engine Optimization)에 도움을 주기도 한다.**
- `srcset` : 이미지 소스의 세트라는 의미를 지니며 브라우저에게 이미지 선택권을 위임하는 속성이다. srcset 속성을 사용하면 여러 해상도에 대응하여 브라우저가 최상의 이미지를 로딩하는데 도움을 줄 수 있다. 다양한 크기를 가지는 동일 이미지를 최소 2개 이상 쓸 때 사용.
- `<picture>` : `<source>` 요소와 `<img>` 요소를 통해 각기 다른 디스플레이나 디바이스에 따라 조건에 맞는 이미지를 보여주는 요소다. `<img>` 요소의 `srcset`이 화면에 따른 이미지의 크기를 조절한다면 `<picture>` 요소는 이미지 포맷 자체를 변경 할 수 있다.

<br>

#### 점진적 향상 기법

- **크로스 브라우징 기법을 점진적 향상 기법이라고 한다.**
- 기본적으로 예전 기술 환경에서 동작할 수 있는 기능을 구현해 두고, 최신 기술을 사용할 수 있는 환경에서는 최신 기술을 제공하여 **더 나은 사용자 경험을 제공할 수 있는 방법**이다.

<br>

### 2. CSS

- `div` 에 `width` 값이 지정되어 있지 않다면 부모요소를 기준으로 영역이 가득차게 된다.
- 왼쪽 상단부터 컨텐츠가 표현되는 이유는, 문화권의 영향을 받았기 때문이다.
  (우리나라는 글을 읽을때 왼쪽에서 오른쪽 방향으로 읽어나감)
- 곤충의 구조가 머리, 가슴, 배로 구분되어 있듯이 웹 구조 또한 헤더, 메인(컨텐츠), 푸터 영역으로 구분된다.
- 블록 요소 보다는 블록 레벨 요소가 더 정확한 표현이다!
- 상속이 지원되는 속성은 초기화 해줄 때 inherit 속성을 쓰고 상속이 지원 안 되면 initial 속성을 쓴다. 단, initial 속성은 IE에서 지원하지 않기 때문에 피하는 게 좋다.
- `width: 100%` 와 `width: auto` 의 차이
  ![](https://media.vlpt.us/images/nu11/post/7cf2f08f-69f9-4093-b819-e0011d861aad/image.png)
- 블록레벨 엘리먼트에 인접한 상하단 `margin`은 겹친다.
  ![](https://media.vlpt.us/images/nu11/post/53afd56f-48bb-418d-b6be-81af82000667/image.png)
- 선택자 우선 순위란 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 css 속성을 우선 적용할 지 결정하는 방법.
  - 점수가 높은 선언이 우선된다.
  - 점수가 같으면, 가장 마지막에 해석된 선언이 우선된다.
  - 점수의 크기 비교 : !important > ID 선택자 > Class 선택자 > 태그 선택자 > 전체 선택자
- 이미지 스프라이트 기법이란 여러 이미지들을 하나의 이미지로 만들어 `background-position` 속성으로 이미지 좌표 값을 이용하여 사용하는 기법이다. 웹 페이지의 첫 로딩 속도를 줄여주는 여러 방법 중 하나다. [(참고 블로그)](https://velog.io/@rlatmdgns94/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%8A%A4%ED%94%84%EB%9D%BC%EC%9D%B4%ED%8A%B8-%EA%B8%B0%EB%B2%95)
  - HTTP 요청 횟수를 줄여 웹 페이지 로딩 시간을 절약 가능하다.
  - 하나의 이미지 파일만 관리하면 된다.
  - 모듈화가 가능하므로 컴포넌트화, 커스텀 가능
  - 이미지 용량이 크다면 로딩시 매우 오래 걸린다.
  - 이미지를 불러오기 위해선 해당 이미지의 positoin을 알아야 된다.

<br><br><br>

## 무엇을 몰랐을까? 📌

---

- URL, IP, PORT
- HTML Living Standard
- 점진적 향상 기법
- alt 속성의 중요성(웹 접근성과 SEO 최적화)
- url decode, encode
- gitmoji
- css initial, inherit 속성
- 이미지 스프라이트 기법

<br><br><br>

## 느낀점 ✏️

---

### 역시 예상대로 정해진 시간에 반드시 해야될 것들을 하는게 어려웠다.

특히 처음에 그렇게 많이 느꼈는데, 지금은 생각보다 할 만하다는 생각도 든다. TIL을 처음 작성했을 때는 무엇을 어떻게 써야될 지 서툴러서 시간 투자를 많이 했다. (지금도 생각해둔 시간보단 많이 들기는 하지만) 그리고 TIL를 작성하면서 정리를 하고 있는데도 머릿속은 정리가 안되는 느낌이었다.

근데 1일차, 2일차 TIL을 작성해 가면서 며칠 되지도 않았는데 적응이 됐는지 처음보다 많이 숙달 되었고 수업을 들으면서도 _'이부분 TIL에 작성해야지'_ 하는 부분도 생기기 시작했다. 그러다 보니 처음에는 정리가 아닌 작성을 위주로 머리를 써서 머릿속이 정리가 안되었는데, 지금은 정리를 위주로 작성해 나가다 보니 머릿속도 정리가 되고 있다.

이런 부분도 성장해 나가고 있다는게 느껴지니 확실히 기분은 좋다!

<br>

### 배운 것들을 활용하는 재미!

강사님이 잠깐 언급해 주셨던 `gitmoji`를 사용하면서 느낀건데 배운 것들을 바로 활용하는 것은 엄청난 재미를 주어서 행복함을 느낄 수 있다는 것이었다!

![](https://media.vlpt.us/images/nu11/post/e46d6989-4fb7-4065-b692-f3030740068f/image.png)

**새로운 걸 접하는 것에 스트레스를 받지않고 재미와 행복함을 느끼는게 중요한 포인트!**
물론, 너무 많은 것을 접하면 _'도대체 어떤 것을 골라야 정답일까?'_ 고민하며 스트레스를 받을 수도 있는데 정해져 있는 정답이란 없다. 하나씩 해나가면서 **나에게 맞는것을 찾아보는 태도를 가지자.**

![](https://media.vlpt.us/images/nu11/post/6d9578bb-1d8f-4814-a469-e47f068e9f4a/%EC%9C%A0%EB%8D%B0%EB%AF%B8-%EA%B0%95%EC%9D%984.png)
![](https://media.vlpt.us/images/nu11/post/df3a3a59-431f-4933-a4a8-79e385fca90f/%EC%9C%A0%EB%8D%B0%EB%AF%B8-%EA%B0%95%EC%9D%985.png)

<br><br><br>

## 앞으로는? ⏳

---

- 정해진 시간에 반드시 해야될 것들을 하는데 어려움을 느꼈다. 필요한 일 이외에 소모되는 시간을 줄여나가는걸 목표로 해야겠다.

- 절대 조급해지지 말고 끝까지 열정과 끈기를 가지자!

<br>

### 뛰어난 선수와 보통 선수의 차이는 무엇인가요?

**지루함을 견디는 것**입니다. 매일매일 훈련하다 보면 어느 시점 지루해집니다. 보통 선수는 이 지루함을 이기지 못하고 훈련을 소홀히 하기 시작합니다.

> <아주 작은 습관의 힘, 비즈니스북스, 제임스 클리어, 2019>