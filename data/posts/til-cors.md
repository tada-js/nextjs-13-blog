# 💡개요

서버에 요청하려면 만나게 되어 있는 CORS(Cross-Origin Resource Sharing) 정책.
정책에 막혔을 때의 상황과 어떻게 허용해 주는지까지 쉽고 간단하게 알아보자.

> 본문에 잘못된 정보가 있다면 꼭! 알려주시면 감사하겠습니다.🐥

<br><br><br>

## 📄 CORS 정책?

CORS 정책이란, 서로 다른 오리진 간의 리소스 공유를 허용할지 결정하는 정책이다.

쉽게 설명하기 위해 클라이언트를 `localhost: 3000`, 서버를 `localhost: 4000`으로 비유하자. `localhost: 3000`과 `localhost: 4000`은 오리진이 다르다. 오리진은 `host`와 `port`를 포함한 데이터의 출처를 의미하는데 지금은 `port`가 다르기 때문에 출처가 다른 경우다.

즉, 오리진이 다르다는 것은 `localhost: 3000`에서 온 데이터와 `localhost: 4000`에서 온 데이터의 출처가 다르다는 것이다. 극단적으로 `naver.com`에서 온 데이터와 `google.com`에서 온 데이터는 서로 같을 수가 없다는 뜻이다. 왜냐하면 위에서 말했듯이 데이터의 출처가 다르기 때문이다.

그래서 웹 만든 사람은 오리진이 다르면 무조건 막고 보는 것을 기본으로 설정했는데 이것이 바로 CORS 정책이다! 정리하자면, **오리진이 다르면 데이터를 꺼내갈 수 없게 막는 것이 CORS정책이다.**

<br><br><br>

## 📄 그럼 오리진은 무엇이고 출처는 무엇인가?

`https://google.com` 같은 URL은 하나의 문자열이 아닌 Origin으로 구성되어 있다.
위에서 살펴본 `localhost: 3000`는 아래와 같은 구성을 가지고 있다.

- `https://` : 프로토콜(Protocol)
- `localhost` : 호스트(Host)
- `:3000` : 포트(Port)

프로토콜, 호스트, 포트를 모두 합친 것이 출처(Origin)이다.
**즉, `https://` + `localhost` + `:3000` = 출처(Origin)**

> `console.log(location.origin)`을 통해 Location 객체가 가지고 있는 origin 프로퍼티에 접근하여 현재 출처(Origin)을 알아낼 수도 있다.

<br><br><br>

## 📄 CORS 정책에 막히면 어떻게 될까?

먼저 발생하게 되는 현상을 살펴보자.

![](https://velog.velcdn.com/images/nu11/post/9dfaa71c-b8f8-4a4a-878b-5ac2f6212410/image.png)

![](https://velog.velcdn.com/images/nu11/post/6f6cb77b-4ee7-416e-8dfe-0151c2352924/image.png)

`CORS error`가 발생하게 된다. 현재 React 프로젝트인 클라이언트(포트3001)가 Express 서버(포트4000)에게 데이터를 요청하면 서버는 그걸 제공해주고 있는데, **CORS로 막아버린 정책은 누가 해결해줘야 될까? 클라이언트가 해결해야 될까? 아니면 서버가 해결해야 될까?**

은행에서 돈을 줄 지 말 지는 은행 창구직원이 정하듯이 **데이터를 줄 지 말 지는 서버가 정한다.**

<br><br><br>

## 📄 서버에 CORS 정책을 허용해주는 방법

오리진이 달라도 데이터를 꺼내갈 수 있도록 해주는 라이브러리가 있다.

1. [npm](https://www.npmjs.com/)에서 cors라고 검색을 한다.

![](https://velog.velcdn.com/images/nu11/post/d1de157a-f157-483f-88fe-fb3aa61dc0c1/image.png)

2. [최상단에 나오는 패키지](https://www.npmjs.com/package/cors)를 클릭

![](https://velog.velcdn.com/images/nu11/post/be7ff268-48cc-4e33-a575-704480b1a523/image.png)

3. 서버에서 `npm install cors`를 설치 해주고 `const cors = require('cors')`로 `import` 한 뒤에
   `app.use(cors())` 미들웨어를 추가해 주자.

![](https://velog.velcdn.com/images/nu11/post/2fc9eea7-3d44-4fa5-a42c-93b32e05c2f9/image.png)

4. 그리고 다시 실행해 보면 데이터가 잘 넘어온 것을 확인할 수 있다.

![](https://velog.velcdn.com/images/nu11/post/00495ff7-263d-4a23-ab31-d22fb82f3888/image.png)

![](https://velog.velcdn.com/images/nu11/post/d466eb87-3486-417a-a203-afdf97b159ca/image.png)

<br><br><br>

## 🔗참고

- [유튜브 라매개발자 - 프론트에서 서버에 데이터 요청하는 방법](https://youtu.be/d6suykcsNeY)
