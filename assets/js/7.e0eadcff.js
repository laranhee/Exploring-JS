(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_4-핵심-es6-기능"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-핵심-es6-기능","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 핵심 ES6 기능")]),t._v(" "),a("h2",{attrs:{id:"_4-1-var에서-const-let으로"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-var에서-const-let으로","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.1 "),a("code",[t._v("var")]),t._v("에서 "),a("code",[t._v("const/let")]),t._v("으로")]),t._v(" "),a("p",[t._v("ES5에서는, "),a("code",[t._v("var")]),t._v("를 통해 변수를 선언했다. 이 변수들은 "),a("em",[t._v("함수 스코프")]),t._v("이고, 변수의 스코프는 함수 안이다. "),a("code",[t._v("var")]),t._v("의 동작은 때론 혼란스럽다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("func")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("random")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// (A) scope: whole function")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// accesses the x from line A")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("func")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("p",[t._v("func()가 "),a("code",[t._v("undefined")]),t._v("를 반환하는 것이 놀라울 수 있다. 실제 코드는 다음과 같이 작동한다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("func")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("random")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("func")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("p",[t._v("ES6에서는, "),a("code",[t._v("let")]),t._v("과 "),a("code",[t._v("const")]),t._v("를 변수로 선언할 수 있다. 이 변수들은 "),a("em",[t._v("블록 스코프")]),t._v("이고, 변수의 스코프는 블록 안이다. "),a("code",[t._v("let")]),t._v("은 대략적으로 "),a("code",[t._v("var")]),t._v("의 "),a("em",[t._v("블록 스코프")]),t._v(" 버전이다. "),a("code",[t._v("const")]),t._v("는 "),a("code",[t._v("let")]),t._v("과 동일하게 작동하지만 생성된 변수의 값을 바꿀 수 없다.")]),t._v(" "),a("p",[a("code",[t._v("let")]),t._v("과 "),a("code",[t._v("const")]),t._v("는 좀 더 엄격하게 행동하고 더 많은 예외를 던진다(예: 스코프 안에서 변수가 선언되기 전에 접근하려 할 때). "),a("em",[t._v("블록 스코프")]),t._v("는 코드 조각의 영향을 좀 더 지역적으로 유지하는데 도움이 된다.")]),t._v(" "),a("p",[t._v("위 코드에서 "),a("code",[t._v("var")]),t._v("를 "),a("code",[t._v("let")]),t._v("으로 바꾸면 다른 결과를 얻는다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("func")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("random")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("func")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n")])])]),a("p",[t._v("이는 무턱대고 기존 코드의 "),a("code",[t._v("var")]),t._v("를 "),a("code",[t._v("let")]),t._v("으로 바꿀 수 없다는 것을 의미한다; 조심스럽게 리팩토링을 해야한다.")]),t._v(" "),a("p",[t._v("나의 조언은:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("const")]),t._v("를 선호하라. 값이 변하지 않는 모든 변수에 사용 할 수 있다.")]),t._v(" "),a("li",[t._v("그 외에는 "),a("code",[t._v("let")]),t._v("을 사용하라 - 값이 변하는 변수에.")]),t._v(" "),a("li",[a("code",[t._v("var")]),t._v("를 피하라.")])]),t._v(" "),a("p",[a("strong",[t._v("자세한 정보")]),t._v(" : 변수와 스코프 챕터 // TOOD FIXME")]),t._v(" "),a("h2",{attrs:{id:"_4-7-매개변수-기본값-다루기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-매개변수-기본값-다루기","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.7 매개변수 기본값 다루기")]),t._v(" "),a("p",[t._v("ES5에서는, 다음과 같이 매개변수의 기본값을 지정한다:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ···")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("ES6에는 멋진 구문이 있다:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ···")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("추가된 이점은, ES5 이전 코드에서는 falsy 값일 때 매개변수 기본값이 적용되는 반면, ES6에서는 "),a("code",[t._v("undefined")]),t._v(" 일 때만 매개변수 기본값이 적용된다는 것이다.")]),t._v(" "),a("p",[a("strong",[t._v("자세한 정보")]),t._v(" : 파라미터 디폴트 밸류 // TOOD FIXME")])])}],!1,null,null,null);o.options.__file="core-es6-features.md";s.default=o.exports}}]);