## Higher Order Functions

Higher order functions are functions that take one or more functions as arguments, or return a function as their result.

```javascript
// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log("I am  a callback function");
}

// higher order function
function higherOrderFunction(func) {
  console.log("I am higher order function");
  func();
}

higherOrderFunction(callbackFunction);

function anotherHigherOrderFunc() {
  return () => {
    console.log("another higher order function");
  };
}
```

# `this` Keyword in Arrow Functions

In JavaScript, the `this` keyword is used to refer to the context in which a function is executed. However, arrow functions behave differently when it comes to the `this` keyword compared to regular functions.

Regular functions have their own `this` value, which is determined by how the function is called. For example, when a function is invoked as a method of an object, the `this` keyword inside the function refers to the object itself.

On the other hand, arrow functions do not have their own `this` value. Instead, they inherit the `this` value from the surrounding scope, which is the lexical scope. This means that the `this` keyword inside an arrow function refers to the `this` value of the outer scope where the arrow function is defined.

Here's an example to illustrate the difference:

```javascript
const obj = {
  name: "GitHub Copilot",
  sayHello: function() {
    console.log("Hello, " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Hello, " + this.name);
  }
};

obj.sayHello(); // Output: Hello, GitHub Copilot
obj.sayHelloArrow(); // Output: Hello, undefined
```

In the example above, `obj.sayHello()` correctly outputs "Hello, GitHub Copilot" because the `this` keyword inside the `sayHello` function refers to the `obj` object. However, `obj.sayHelloArrow()` outputs "Hello, undefined" because the `this` keyword inside the arrow function does not refer to the `obj` object, resulting in `this.name` being `undefined`.

This difference in behavior is due to the fact that arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the surrounding lexical context. In contrast, regular functions do have their own `this` context, which is set based on how the function is called.

Understanding this difference is crucial when working with JavaScript, as the use of `this` in an arrow function can lead to unexpected results if you're not aware of how `this` works in arrow functions.

Remember, when using arrow functions and accessing the `this` keyword, the `this` value comes from the outer scope, not from the object where the arrow function is defined.