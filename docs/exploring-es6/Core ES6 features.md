# 4. 핵심 ES6 기능

## 4.1 `var`에서 `const/let`으로

ES5에서는, `var`를 통해 변수를 선언했다. 이 변수들은 *함수 스코프*이고, 변수의 스코프는 함수 안이다. `var`의 동작은 때론 혼란스럽다.

```js
var x = 3;
function func(randomize) {
  if (randomize) {
    var x = Math.random(); // (A) scope: whole function
    return x;
  }
  return x; // accesses the x from line A
}
func(false); // undefined
```

func()가 `undefined`를 반환하는 것이 놀라울 수 있다. 실제 코드는 다음과 같이 작동한다.

```js
var x = 3;
function func(randomize) {
  var x;
  if (randomize) {
    x = Math.random();
    return x;
  }
  return x;
}
func(false); // undefined
```

ES6에서는, `let`과 `const`를 변수로 선언할 수 있다. 이 변수들은 *블록 스코프*이고, 변수의 스코프는 블록 안이다. `let`은 대략적으로 `var`의 _블록 스코프_ 버전이다. `const`는 `let`과 동일하게 작동하지만 생성된 변수의 값을 바꿀 수 없다.

`let`과 `const`는 좀 더 엄격하게 행동하고 더 많은 예외를 던진다(예: 스코프 안에서 변수가 선언되기 전에 접근하려 할 때). *블록 스코프*는 코드 조각의 영향을 좀 더 지역적으로 유지하는데 도움이 된다.

위 코드에서 `var`를 `let`으로 바꾸면 다른 결과를 얻는다.

```js
let x = 3;
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}
func(false); // 3
```

이는 무턱대고 기존 코드의 `var`를 `let`으로 바꿀 수 없다는 것을 의미한다; 조심스럽게 리팩토링을 해야한다.

나의 조언은:
- `const`를 선호하라. 값이 변하지 않는 모든 변수에 사용 할 수 있다.
- 그 외에는 `let`을 사용하라 - 값이 변하는 변수에.
- `var`를 피하라.

**자세한 정보** : 변수와 스코프 챕터 // TOOD FIXME
