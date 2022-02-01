`Object.keys(varName)` -> get all keys (variable names) for an object

`objectVar['key']` = `objectVar.key`

declared outside function -> global

nested functions have access to their parent function's scope (as expected)

IIFE, Immediately Invoked Function Expression, is a common pattern for creating local scopes.
```js
(function () { // the function expression is surrounded by parenthesis
// variables defined here
// can't be accessed outside
})() // the function is immediately invoked
```