# 오늘의 키워드📌

---

- flex, basis, shrink, grow,
  - flex basis
  - flex shrink
  - flex grwo
  - flex
  
- grid
  - display
  - grid-template-rows
  - grid-template-columns



## 1. flex, basis, shrink, grow
---

### 1-1. flex basis

자식요소에 사용한다. `flex item` 들의 크기를 지정한다. `width`, `height`와 다른점은 `axis` 방향에 따라 달라진다는 것과 내부의 콘텐츠에 따른 유연한 크기이다. 기본값은 `auto` 이며 `auto` 일 때는 `width`, `height` 값을 사용한다. `flex item`의 너비 기본값을 `px`, `%` 등의 단위로 지정한다.

![](https://velog.velcdn.com/images/nu11/post/29e71bff-3264-4f08-9fef-6c8f28550e91/image.png) 

```css
.flex-item {
  flex-basis: auto | <width>;
}
```

만약 `flex-basis` 값이 적용되어 있다면 `width`, `height` 값은 무시된다.

> 0외에 다른 상수값을 사용할 수 없다.


### 1-2. flex shrink
마찬가지로 자식요소에 사용한다. `flex-grow`에 반대되는 개념으로 `flex-basis`의 값에서 더 줄어들어도 되는지 지정하는 값이다. 크기를 고정하거나 줄이는 역할을 한다.

`0`의 값을 사용할 경우 컨테이너의 크기가 줄어도 값은 고정된다. 마이너스 숫자는 받아들이지 않으며 1은 기본값이다.

> 부모 요소에 `flex-wrap: wrap` 속성이 있는 경우 적용되지 않는다.

`flex item`의 너비에 대한 축소 인자(flex shrink factor)를 지정한다. 위에서 말했듯이, 기본값은 `1`이고 음수값은 무효하다. `0`을 지정하면 축소가 해제되어 원래의 너비를 유지한다.

```css
.flex-item {
  flex-shrink: 양의 정수값;
}
```


### 1-3. flex grow
자식요소에 사용한다. `flex-basis`의 값에서 더 늘어나도 되는지 지정하는 값으로, 할당된 값에 따라 자신을 감싸는 컨테이너의 공간을 할당하도록 한다.

- `flex-grow: 1` : 자식 요소들이 모두 동일한 크기의 공간을 할당 받는다.
- `flex-grow: 2` : 특정한 하나의 자식에게만 줄 경우 다른 자식요소보다 두 배의 여백 공간을 할당 받는다. 만약 자식요소들의 콘텐츠 크기가 존재한다면 그 콘텐츠의 넓이에 따라 할당받는 값이 달라진다.

> `flex-basis: 0`을 주게되면 엽개 공간이 아니라 전체 공간을 분할한다.

`flex item`의 너비에 대한 확대 인자(flex grow factor)를 지정한다. 기본값은 `0`이고 음수값은 무효하다.

```css
.flex-item {
  flex-grow: 양의 정수값;
}
```


모든 `flex item`이 동일한 `flex-grow` 속성값을 가지면 모든 `flex item`은 동일한 너비를 갖는다.

![](https://velog.velcdn.com/images/nu11/post/c9d6e0c9-a100-4bfd-b521-24d24a09bb80/image.png)

두 번째 `flex item`의 `flew-grow` 속성값을 3으로 지정하면 다른 `flex item`보다 더 넓은 너비를 갖는다.

![](https://velog.velcdn.com/images/nu11/post/981bcec7-53eb-4b59-88fb-e09842d0532b/image.png)



### 1-4. flex

flex-basis, flex-grow, flex-shrink 속성의 값을 **축약**하여 사용할 수 있는 것이 바로 `flex` 속성이다.

```css
/* flex: flex-grow, flex-shrink, flex-basis */
flex :1; /* flex-grow:1; flex-shrink:1; flex-basis:0; */
flex :1 1 300px; /* flex-grow:1; flex-shrink:1; flex-basis:300px; */

.flex-item {
  flex: none | auto | [ <flex-grow> <flex-shrink>? || <flex-basis> ];
}
```

즉, `flex-grow`, `flex-shrink`, `flex-basis` 속성의 shorthand이다. 기본값은 0 1 auto이다. **W3C에서는 이 속성을 사용하는 것 보다 개별적으로 기술하는 것을 추천하고 있다.**


## 2. grid
---

css grid(그리드)는 2차원(행과 열)의 레이아웃 시스템을 제공한다.
Flexible Box도 훌륭하지만 비교적 단순한 1차원 레이아웃을 위하며, 좀 더 복잡한 레이아웃을 위해 우리는 css grid를 사용할 수 있다.

> css grid는 예전부터 핵(hack)으로 불린 다양한 레이아웃 대체 방식들을 해결하기 위해 만들어진 특별한 css 모듈이다.


### 2-1. display
grid 컨테이너를 정의한다. 
정의된 컨테이너의 자식 요소들은 자동으로 grid items으로 정의된다.

```css
.container {
  display: grid;
}
```

- gird : block 특성의 grid container를 정의
- inline-grid : inline 특성의 grid container를 정의

gird를 사용하기 위해 컨테이너에 필수로 작성해야 한다.



### 2-2. grid-template-rows
명시적 행(track)의 크기를 정의한다. 동시에 라인(line)의 이름도 정의할 수 있다.
`fr`(fraction, 공간 비율) 단위를 사용할 수 있다. `repeat()` 함수를 사용할 수 있다.


```css
.container {
  display: grid;
  grid-template-rows: 1행크기 2행크기 ...;
  grid-template-rows: [선이름] 1행크기 [선이름] 2행크기 [선이름] ...;
}
```

```css
/* 각 행의 크기를 정의 */
.container {
  grid-template-rows: 100px 200px;
}

/* 동시에 각 라인의 이름도 정의할 수 있다. */
.container {
  grid-template-rows: [first] 100px [second] 200px [third];
}

/* 라인에 중복된 이름을 지정할 수 있다. */
.container {
  grid-template-rows: [row1-start] 100px [row1-end row2-start] 200px [row2-end];
  ```

각 라인은 행(row, track)과 열(column, track)의 개수대로 숫자(양수/음수) 라인 이름이 자동으로 지정되어 있어서, 꼭 필요한 경우가 아니면 라인 이름을 정의할 필요가 없다.

```css
.container {
  grid-template-rows: 100px 200px;
  /* grid-template-rows: [1 -3] 100px [2 -2] 200px [3 -1]; */
}
```

```css
.container {
  width: 400px;
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 1fr);
}
```
![](https://velog.velcdn.com/images/nu11/post/6e8ac55d-0fb4-447e-b864-0942a31a56a1/image.png)


### 2-3. grid-template-columns
명시적 열(track)의 크기를 정의한다. 동시에 라인(line)의 이름도 정의할 수 있다.
`fr`(fraction, 공간 비율) 단위를 사용할 수 있다. `repeat()` 함수를 사용할 수 있다.

```css
.container {
  display: grid;
  grid-template-columns: 1열크기 2열크기 ...;
  grid-template-columns: [선이름] 1열크기 [선이름] 2열크기 [선이름] ...;
}
```
만약 `1200px` 너비의 12컬럼 그리드 템플릿을 정의한다면 다음과 같이 작성할 수 있다.

```css
.container {
  width: 1200px;
  grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px 100px;
}
```

12개의 열(컬럼) 크기를 하나씩 지정했지만, 이 방법은 당연히 입력과 관리가 힘들다.
`repact()` 함수를 사용하면 위 예제를 아래와 같이 간소화 할 수 있다.

```css
.container {
  width: 1200px;
  grid-template-columns: repeat(12, 100px);
}
```

`repeact()` 함수는 2번째 인수를 반복하기 때문에 다음과 같이 활용할 수 있다.

```css
.container {
  grid-template-columns: repeat(4, 100px 200px 50px);
  /* grid-template-columns: 100px 200px 50px 100px 200px 50px 100px 200px 50px 100px 200px 50px; */
}
.container {
  grid-template-columns: repeat(4, 1fr 2fr 3fr);
  /* grid-template-columns: 1fr 2fr 3fr 1fr 2fr 3fr 1fr 2fr 3fr 1fr 2fr 3fr; */
}
```


grid와 관련된 더 많은 정보는 [heropy - CSS Grid 완벽 가이드](https://heropy.blog/2019/08/17/css-grid/) 에서 확인하자!



## 몰랐던 점 ✏️
---
`flex`와 `grid` 관련된 것은 아니지만 몇 주동안 고생했던 문제를 공유해보려 한다.

![](https://velog.velcdn.com/images/nu11/post/9bbfba3e-86ce-43be-9667-4d1a2fd95ee9/image.png)

`github pages`, `netlify`로 배포했을 때 이상하게 사기성 사이트 주의 페이지가 떠서 팀원 분들이나 동료 분들에게 `url`을 공유 할 때마다 문제였다. 사용자를 속이는 코드나 프로그램을 배포한 것도 아닌데 말이다..😂 검색을 통해 여러 방법을 시도 해보기도 했지만 확실한 해결 방법은 없었다. 그러다 문득, `github user name` 문제가 아닐까? 라는 생각이 들었고, 바로 `username`을 변경해 보았다.

그리고 `github pages`, `netlify` 에서 배포한 사이트 모두 정상적으로 접근 가능했다.
결국 `github`의 `username`이 문제였던 것으로 추측된다.
내 영문 이름을 적은건데..😅 왜 문제가 됐는지 의문이지만.. 해결이 되어서 다행이다!



## 2022.04.15 추가

일시적인 해결이었을 뿐 다시 문제가 발생했다.
도대체 원인이 뭘까........

## 2022.04.15 추가2

구글 크롬 브라우저 기준으로, 배포한 사이트에 접속했을때 사기성 사이트 주의 페이지가 뜨는 문제가 발생했다. 심지어 이번 클론코딩 `repo` 뿐만 아니고, `github` 연동해서 배포한 `repo` 모두 사기성 사이트 주의 페이지가 떠서 고민이 많아져 호준님께 질문을 드렸다.

여러가지 의견과 해결 방안들을 제시해 주셨고, 그 중에서 가장 의심되는 부분은 너~무 똑같이 클론해서 구글 세이프 브라우징이 식별한 게 아닌가 싶다!

![](https://velog.velcdn.com/images/nu11/post/92bf95c6-54f3-4dbe-b634-8ea61d554675/image.png)

생각해보면 완전 똑같이 클론해서 배포하는게 문제가 되는게 당연한 것인데 미처 생각을 못했다.
이번에는 꼭 해결이 됐으면 좋겠다!

## 2022.04.17 추가
지난 번에는 사이트가 배포된 지 하루만에 사기성 사이트로 식별되었는데, 인스타그램 클론 repo를 삭제한 이후에는 하루가 지나도 사기성 사이트로 식별되지 않고 있다.

아마 해결이 된 것 같다. 추후에 소셜 엔지니어링에 대해서 글을 작성해 보아야겠다!


## 오늘 하루를 정리하며.. 🌃
---
불필요한 시간을 줄이는데 노력해야겠다! 점점 날이 갈수록 시간 관리의 중요성을 깨닫고 있는 요즘이다. 운동하는 시간도 세트간 휴식시간을 줄여서 최대한 확보해야겠다!


---
## 참고 🔗
- [poiemaweb - Flex 및 사진 출처](https://poiemaweb.com/)
- [heropy - grid 사진 출처 및 CSS Grid 완벽 가이드](https://heropy.blog/2019/08/17/css-grid/)
