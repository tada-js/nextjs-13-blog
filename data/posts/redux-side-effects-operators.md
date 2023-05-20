## 1. 개요

리덕스를 처음 배울 때 주로 쉽게 만들 수 있는 counter 예제를 통해 학습하는데
counter 예제에서 그동안 잊고 있었던 전위, 후위 증가/감소 연산자의 특징을 만날 수 있어서 기록합니다.

> 틀린 내용이 있다면 수정하도록 하겠습니다. 댓글 부탁드립니다!

## 2. 증가/감소 연산자란?

증가/감소 연산자는 피연산자의 값을 변경하는 **부수 효과**가 있다.

```js
let x = 1;
x++; // x = x + 1

console.log(x); // 2
```

위 예제와 같이, 증가/감소 연산자를 통해 연산을 하게 되면 피연산자(x)의 값이 증가/감소되어 암묵적 할당이 이뤄지게 된다.

그리고 **증가/감소 연산자 위치에 따라 결과가 달라질 수도 있다.**

## 3. 전위 증가/감소 연산자

전위 증가/감소 연산자는 `++x`, `--x` 피연산자 앞에 위치한다.
**증가/감소 연산을 먼저 처리**한 뒤, 다른 연산을 진행한다.

```js
let x = 1;

document.write(++x); // 2
document.write(x); // 2
```

`++x` 연산을 먼저 처리한 뒤, `document.write` 메서드를 실행한다.

## 4. 후위 증가/감소 연산자

후위 증가/감소 연산자는 `x++`, `x--` 피연산자 뒤에 위치한다.
**다른 연산을 먼저 진행**한 뒤, 증가/감소 연산을 처리한다.

```js
let x = 1;

document.write(x++); // 1
document.write(x); // 2
```

전위 증가/감소 연산자와는 달리 `document.write` 메서드를 먼저 실행한 뒤, `x++` 연산을 처리한다. 때문에 첫 번째 출력값은 `1`이 출력되고 그다음 `document.write` 메서드를 실행하면 연산을 처리한 결괏값 `2`가 출력되는 것을 확인할 수 있다. 이와 같은 현상이 나타나는 이유는 위에서 언급했듯이, 다른 연산(예제에서는 document.write 메서드)을 먼저 진행한 뒤 증가/감소 연산을 처리하기 때문이다.

## 5. 리덕스 카운터 예제에서 만난 전위, 후위

### 5-1 카운터 예제 코드

```js

// 액션 타입 상수
const INCREMENT = 'INCREMENT';

// count 초기 상태
const initalState = {
  count: 0,
};

// reducer 함수
const reducer = (currentState = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...currentState, count: currentState.count++ };
    default:
      return currentState;
  }
};

// redux store 생성
const store = createStore(reducer);

.
.
.

const dispatch = useDispatch();

const onIncrease = () => {
  dispatch({ type: INCREMENT });
};
```

### 5-2 리덕스 데이터 흐름

`Action -> Dispatch -> Store -> View` 구조를 가진 `flux` 패턴에 따라 아래와 같은 데이터 흐름을 가지고 있다.

1. View에서 사용자의 입력이 발생한다.
2. 입력에 대한 Action 객체를 생성한다.
3. Dispatcher가 Action 객체를 받아 Store에 전달한다.
4. Store가 새로운 상태를 업데이트 하고, 변경 사항을 Controller-View에 전달한다.
5. Controller-View가 전달받은 상태를 읽은 뒤 View를 업데이트 한다.

따라서, 액션 타입이 `INCREMENT`일 경우 `count++` 연산을 처리하게 된다.

### 5-3 문제 발생

`onIncrease` 함수가 호출되었음에도 불구하고 `count` 값이 증가하지 않는 문제 발생.

```js
case INCREMENT:
	return { ...currentState, count: currentState.count++ };
```

액션 타입이 `INCREMENT`일 경우 전개 연산자를 통해 `currentState`를 복사한 뒤, count의 값을 후위 증가 연산을 해서 새로운 객체로 반환하는 코드에서 문제가 발생한 것이다.

### 5-4 문제 발생 원인

아래 내용들은 **개인적인 유추**입니다.

1. `currentState`는 `initalState`를 참조하고 있으며, `count`의 초기 상태 값은 0으로 할당되어 있다.

```js
const initalState = {
  count: 0,
};
```

2. `{ ...currentState, count: currentState.count++ }` 코드에서 현재 `currentState.count`는 `0`이며, 후위 증감 연산자이기 때문에 다른 연산을 먼저 진행한 뒤, 증가 연산을 처리한다. 따라서`0`을 먼저 반환한 뒤, 증가 연산을 처리한다.
3. 증가 연산 결괏값인 정수 리터럴 `1`은 아마 사용되지만 않을 뿐, 메모리 어딘가에 저장돼 있을 것이다.
4. 그리고 반환된 `0`을 화면에 렌더한다.
5. 액션이 발생하면 다시 1번으로 되돌아가서 진행하게 된다. 때문에 `count`가 증가하지 않는 것이다.

### 5-5 문제 해결

#### 적합한 방법

권장되는 방식이다.
이항 산술 연산자 사용 `count: currentState.count + 1`

```js
// reducer 함수
const reducer = (currentState = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...currentState, count: currentState.count + 1 };
    default:
      return currentState;
  }
};
```

`currentState.count`에 `1`을 더한 이항 산술 연산자를 사용한다.

#### 부적합한 방법1

전위 증감 연산자 사용 `count: ++currentState.count`

```js
// reducer 함수
const reducer = (currentState = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...currentState, count: ++currentState.count };
    default:
      return currentState;
  }
};
```

전위 증감 연산을 사용해 연산을 먼저 처리한 후, 나머지 연산을 진행하도록 한다. 증가 연산을 먼저 처리하기 때문에 `1`을 먼저 증가한 후 반환한다.

#### 부적합한 방법2

**이 방법은 redux의 상태 불변성 원칙에 어긋나는 방법이다.**
후위 증감 연산자를 사용하되, 순서 변경 `{ count: currentState.count++, ...currentState }`

```js
// reducer 함수
const reducer = (currentState = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: currentState.count++, ...currentState };
    default:
      return currentState;
  }
};
```

## 6. 결론

이렇듯 증가/감소 연산자는 피연산자의 값을 변경하는 **부수 효과**가 있으며, 증가/감소 연산자 위치에 따라 **결과가 달라질 수도 있기 때문에 순수 함수와는 어울리지 않다.** 부수 효과가 발생할 수 있는 부분을 인지하고 최소화하는 연습도 필요해 보인다!
