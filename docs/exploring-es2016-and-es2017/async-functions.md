# 5. Async functions

## 5.1 개요

### 5.1.1 변형

async 함수에는 다음 변형이 있다. `async` 키워드는 어디에나 있을 수 있다.

- async 함수 정의: `async function foo() {}`
- async 함수 표현식: `const foo = async function () {};`
- async 메소드 정의: `let obj = { async foo() {} }`
- async arrow functions: `const foo = async () => {};`

### 5.1.2 async 함수는 항상 Promise를 반환한다.

async 함수의 Promise 처리하기:

```js
async function asyncFunc() {
  return 123;
}

asyncFunc()
  .then(x => console.log(x)); // 123
```

async 함수의 Promise 거부하기:

```js
async function asyncFunc() {
  throw new Error('Problem!');
}

asyncFunc()
  .catch(err => console.log(err)); // Error: Problem!
```

### 5.1.3 `await`을 통한 비동기 계산의 결과와 오류 처리

`await`(async 함수 내에서만 허용되는) 연산자는 피연산자인 Promise가 해결되기를 기다린다:

- Promise가 처리된다면, `await`의 결과는 처리 값이다.
- Promise가 거부된다면, `await`은 거부 값을 throw한다.

단일 비동기 결과 처리:

```js
async function asyncFunc() {
  const result = await otherAsyncFunc();
  console.log(result);
}

// 다음과 동등:
function asyncFunc() {
  return otherAsyncFunc()
    .then(result => {
      console.log(result);
    });
}
```

순차적으로 다중 비동기 결과 처리:

```js
async function asyncFunc() {
  const result1 = await otherAsyncFunc1();
  console.log(result1);
  const result2 = await otherAsyncFunc2();
  console.log(result2);
}

// 다음과 동등:
function asyncFunc() {
  return otherAsyncFunc1()
    .then(result1 => {
      console.log(result1);
      return otherAsyncFunc2();
    })
    .then(result2 => {
      console.log(result2);
    });
}
```

병렬로 다중 비동기 결과 처리:

```js
async function asyncFunc() {
  const [result1, result2] = await Promise.all([
    otherAsyncFunc1(),
    otherAsyncFunc2(),
  ]);
  console.log(result1, result2);
}

// 다음과 동등:
function asyncFunc() {
  return Promise.all([
      otherAsyncFunc1(),
      otherAsyncFunc2(),
    ])
    .then([result1, result2] => {
      console.log(result1, result2);
    });
}
```

에러 처리:

```js
async function asyncFunc() {
  try {
    await otherAsyncFunc();
  } catch (err) {
    console.error(err);
  }
}

// 다음과 동등:
function asyncFunc() {
  return otherAsyncFunc()
    .catch(err => {
      console.error(err);
    });
}
```

## 5.2 async 함수 이해하기
