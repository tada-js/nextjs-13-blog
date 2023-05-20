# 오늘의 키워드📌

---

- position
- `position` 속성중 `fixed`와 `sticy`의 차이점

## 1. position

---

### 1-1. position 이란?

`position` 이란 웹 페이지에서 만들었던 html 태그나 id, class 박스 등의 위치를 지정해 주는 속성이다. position 속성을 이용해 우리는 페이지의 레이아웃을 결정할 수 있다.

### 1-2. position 주요 속성

#### relative

자신이 있어야 하는 위치에 대해 상대적인 속성을 가지고 있다. `relative`는 그 누구보다도 자신이 원래 있던 자리를 기억하는 속성이다. 그래서 `position: relative` 값을 주고 `left: 50px` 으로 배치하면, 본인의 자리에서 왼쪽으로 50px만큼 떨어진 자리에 위치하게 된다.

#### absolute

`absolute` 속성의 특징을 한 단어로 설명하자면 **my way** 이다!
`position: absolute` 값을 준 뒤 `top : 20px; right: 30px` 으로 배치하면, 오른쪽 상단에 동떨어진 박스가 하나 놓여있는 것을 볼 수 있다. 이들은 기준점이 `html` 위치에 있기에, 왼쪽 제일 상단이 본래 자신의 위치라고 생각하고 움직이게 된다.

그러나 my way이던 `absolute`도 부모 요소 눈치를 본다. `relative`, `absolute`, `fixed` 같은 `position` 속성이 부모에 놓여있다면, `absolute`는 `position` 속성을 가진 **가장 가까운 부모의 박스 내를 기준으로 위치**하게 된다.

#### fixed

스크롤을 올리거나 내릴 때, 특정 박스가 고정되어 움직이지 않길 원한다면, `fixed` 속성을 사용하면 된다. `fixed`는 현재 사용자가 보고 있는 뷰포트를 기준으로 마치 화면에 붙은 것처럼 스크롤을 올리거나 내려도 그 자리에 계속해서 위치한다. 요즘 많은 사이트들이 페이지가 스크롤 되어도 중요한 정보(네비게이션 같은)를 화면에 계속 노출 시켜주기 위해 많이 사용하는 속성이다.

![](https://velog.velcdn.com/images/nu11/post/a9ad2bd4-c022-4991-8451-8130555787e8/image.png)

#### sticky

`sticky` 속성이 부여된 요소는 부모에 붙게 된다. 그리고 `sticky` 속성은 IE를 지원하지 않는다.

![](https://velog.velcdn.com/images/nu11/post/a125fc3e-667e-4b8e-b7d8-4a5a05a1120c/image.gif)

## stiky와 fixed 차이

---

`fixed`는 `viewport`에 고정되어서 스크롤을 올리거나 내려도 배치한 위치에 고정되어 있다.
반면에 `sticky`는 위치가 스크롤에 반응하여 움직이다가 내가 정한 `offset`에 닿으면 그 순간부터 `fixed`처럼 고정이 된다. 즉, `relative` 속성처럼 동작하다가 특정 지점 `offset`에 도달하면 `fixed` 속성처럼 동작하는 것이다.

![](https://velog.velcdn.com/images/nu11/post/562b457c-cd2c-47a1-8ac0-b9260a98318a/image.gif)

위 이미지처럼 `sticky`는 특정 지점 `offset`에 도달하면(닿으면) `fixed` 속성처럼 동작한다.

> **offset 이란?**
> 상대 주소, 즉 기준이 되는 주소로부터 얼마나 떨어져 있는지를 나타내는 값을 의미한다.

## 몰랐던 점 ✏️

---

- `stiky`와 `fixed`의 차이점

## 오늘 하루를 정리하며.. 🌃

---

css에는 정말 다양한 속성들이 있는거 같다! 같은 중앙 정렬을 해도 다양한 방법이 있듯이 요소마다 신경써야 될 부분들도 많고 헷갈리는 부분도 많은 거 같다! 수직 정렬, 수평 정렬 하는 속성들은 이해가 됐으면 필요할 때마다 바로 사용할 수 있게 암기해야겠다.

_'프로그래밍에 암기?!'_

라고 생각할 수도 있겠지만, 간단하게 외울 수 있는건 외우자! 모를 때마다 찾아보는 횟수 자체를 줄이는 것도 중요한 거 같다!
