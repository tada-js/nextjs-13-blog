# 오늘의 키워드📌
---

- IR 기법
- Sprite 기법
- 레티나 디스플레이 대응법


## 1. IR 기법
---

IR 기법이란? 이미지의 대체텍스트를 제공하기 위한 CSS 기법이다. 디자인적으로는 보이지 않지만 스크린리더나 브라우저를 위해 정보를 전달하는 텍스트를 html 곳곳에 숨겨두는 방법을 배워보자.

### 1-1. 카카오가 사용하는 방법들
####  PC용
사용된 이미지내 의미있는 텍스트의 대체텍스트를 제공할 때
```css
.ir_pm{
	display:block;
	overflow:hidden;
	Font-size:1px;
	line-height:0;
	text-indent:-9999px;
}
```


#### Mobile용
사용된 이미지내 의미있는 텍스트의 대체텍스트를 제공할 때
```css
.ir_pm{
	display:block;
	overflow:hidden;
	font-size:1px;
	line-height:0;
	color:transparent; 
  /* transparent 키워드는 IE9부터 사용 가능하기 때문에 PC에서는 빠져있음
 https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#transparent */
}
```


#### 마크업 구조상 필요한 경우
스크린리더가 읽을 필요는 없지만 마크업 구조상 필요한 경우
```css
.screen_out {
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
}
```
![](https://velog.velcdn.com/images/nu11/post/75c6ab41-387f-4018-b767-868c27335de0/image.png)



#### 대체 텍스트
중요한 이미지 대체텍스트로 이미지 off 경우에도 대체텍스트를 보여주고자 할 때
```css
.ir_wa{
	display:block;
	overflow:hidden;
	position:relative;
	z-index:-1;
	width:100%;
	height:100%
}
```

![](https://velog.velcdn.com/images/nu11/post/ec41fa73-dc0b-4526-bf68-dfdf84652bdc/image.png)


![](https://velog.velcdn.com/images/nu11/post/4732d0bf-805e-4625-8138-f0c177c15b34/image.png)


![](https://velog.velcdn.com/images/nu11/post/ade76ac5-529c-4ccf-b389-6bdfbde2edac/image.png)


### 1-2. 네이버가 사용하는 방법
```css
.blind {
	position: absolute;
	clip: rect(0 0 0 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
}
```
![](https://velog.velcdn.com/images/nu11/post/51575343-23e1-4759-9d50-69edd2caf6f4/image.png)



IE 구버전에서 인식을 못하는 경우가 있기 때문에 `margin: -1px` 을 사용한다.
`clip` 속성을 통해 요소를 잘라내는 것도 가능하다.


## 2. Sprite 기법
---

여러가지 이미지를 하나의 이미지 파일안에 배치하여 이미지로드 부담을 줄이는 방법이다.

![](https://velog.velcdn.com/images/nu11/post/82477236-b156-4b55-a2d3-e0f97b586444/image.png)

![](https://velog.velcdn.com/images/nu11/post/5e1d493d-22b3-4b5d-89a3-82d50ca74bd9/image.png)

이미지를 편집할 때는 온라인 에디터를 사용하거나 직접 에디팅 앱(포토샵, 피그마, 스케치 등)을 사용해 개발자가 직접 편집한다.

![](https://velog.velcdn.com/images/nu11/post/b66012d4-0105-4c09-b13b-46fee649784e/image.png)

![](https://velog.velcdn.com/images/nu11/post/a668f7e0-b1d9-46a6-88b9-5ce3eeb46ab7/image.png)

```css
.icon-google::before {
  width: 22px;
  height: 22px;
  background: url("./images/css_sprites.png") -10px -10px;
}

.icon-naver::before {
  width: 22px;
  height: 22px;
  background: url("./images/css_sprites.png") -10px -52px;
}

.icon-kakao::before {
  width: 22px;
  height: 22px;
  background: url("./images/css_sprites.png") -52px -10px;
}

.icon-facebook::before {
  width: 13px;
  height: 24px;
  margin-left: 2px;
  background: url("./images/css_sprites.png") -94px -10px;
}
```


#### 참고

[image sprite generator](https://www.toptal.com/developers/css/sprite-generator/)

[제주코딩베이스캠프 - 이미지 스프라이트 기법](https://www.youtube.com/watch?v=fKyLCIqWjIY)


## 3. 레티나 디스플레이 대응법
---

### 3-1. 레티나?
특정한 시야 거리에서 인간의 눈으로는 화소를 구분할 수 없는 화소 밀도(300 PPI 넘을 경우)를 가진 애플 IPS LCD와 OLED 제품의 브랜드 이름이다.

### 3-2. 다른 제조업체에서의 용어
레티나라는 개념의 단어는 애플이 만들어낸 용어이기 때문에 다른 제조업체에서는 각각의 용어를 사용하고 있다. 삼성의 경우 디지타이저가 내장된 OLED 패널을 묘사할 때 "슈퍼 AMOLED 디스플레이"를 즐겨 사용한다.

### 3-3. 발생하는 원인
레티나(고해상도 화면)로 넘어오면서 논리픽셀과 물리픽셀의 차이가 발생한다. 

- 논리픽셀 : css에서 표현하는 화소의 기본 단위
- 물리픽셀 : 디바이스가 실제로 처리할 수 있는 화소의 기본 단위

그러나 브라우저는 css에서 정의한 픽셀만큼 이미지를 렌더링 해야하기 때문에 물리픽셀에 맞게 렌더링된 이미지가 논리픽셀 만큼 커져버리게 된다.

![](https://velog.velcdn.com/images/nu11/post/902dd52c-3286-4799-bcce-b7b8c63b5da8/image.png)

즉, 100px의 크기를 가진 원본 이미지를 보여준다고 할 때, 레티나 디스플레이는 물리적인 200px을 이용해서 논리적인 100px을 나타내게 된다. 논리적 100px을 나타내기 위해서 물리적 200px을 채우면 물 먹은 것처럼 뿌옇게 보인다.

### 3-4. 해결 방법

1. 다운샘플링 : 화면에 우리가 그리고자 하는 사이지의 2배 되는 이미지를 준비한 다음, 다시 1/2 크기로 강제 축소(html resize)하여 제공한다. (문제를 해결할 수 있지만 과도하게 사용하면 페이지 로드 성능을 떨어뜨리는 문제가 발생한다.)

2. image-rendering : CSS WD(Working Draft) 속성 중 하나로써 이미지 안티 알리어싱을 강제로 금지시키는 속성을 적용하여 이미지 품질을 다소 개선시킬 수 있다. `image-rendering: crisp-edges`
	 [can i use : image-rendering](https://caniuse.com/?search=image-rendering)
 ![](https://velog.velcdn.com/images/nu11/post/6c5de7e8-a20e-4e1a-b145-f089d4a640b8/image.png)



3. retina.js : 레티나 디스플레이인 경우, 이미지에 대한 네트웍 요청이 2배로 늘어나서 권장하지 않는다.


4. @media 
	```css
	.rtna { background:url(retina1.png); }
	 @media (min-resolution:192dpi) {
	   .rtna { background:url(retina2.png); }
	 }
	```
  	인치당 css 픽셀 수가 192개를 넘어가면 `retina2.png` 이미지를 배경으로 표시한다.(이미지를 중복 요청하지 않는다.)
 
    
 5. `<picture> [draft]`
 
 
## 몰랐던 점 ✏️
---

- 레티나 디스플레이
- 카카오, 네이버가 사용하는 IR 기법
 
 
 
 ## 오늘 하루를 정리하며.. 🌃
 ---
 
 멋쟁이 사자처럼 FE 스쿨에서 교육을 안 듣고 혼자 공부 했으면 레티나 디스플레이 대응, 이미지 스프라이트, IR 기법을 포함해서 다양한 정보와 지식들을 놓쳤을 거 같다. 
 
강사님들의 다양한 경험담, 실무에서 쓰이는 예제들로 더욱 더 깊이있는 학습을 할 수 있어서 좋다! 정말 멋쟁이 사자처럼을 선택한 건 최고의 선택이었고, 교육생으로 선발되었는 건 최고의 행운이었다! 

**나도 하루 빨리 좋은 정보들을 알려주는 멋진 개발자가 되고 싶다!**