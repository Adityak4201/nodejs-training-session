# Pre-requisites

- Primitive and non-primitive data types
- Functions and callbacks
- Operators
- Variables - var, let and const
- Promises and async await
- What is node, npm and yarn?
- Why NodeJS?
- HTTP requests
- Rest API basics - [Best Practices for Rest API Design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

# JS Topics

- Hoisting
- Closure
- Mutation in object - [Memory Management Complete Guide](https://codedamn.com/news/javascript/memory-management-complete-guide), [Simple Explanation of Objects and Memory References in JavaScript](https://medium.com/dev-proto/simple-explanation-of-objects-and-memory-references-in-javascript-1b2310c36c31), [Arrays, Objects and Mutations](https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa)
- IIFEs, anonymous functions
- Callback hell
- Logical operators and short circuiting
- Variables - var, let and const
- Passing object reference
- Scope and nested scopes
- JS inbuilt functions
- ES6 updates
- == vs ===
- Call stack
- Higher Order Functions
- this Keyword in Arrow Functions
- Event loop - [What the heck is the event loop anyway? | Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=488s&ab_channel=JSConf), [Working](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
- Heap memory and garbage collection - [Javascript Info](https://javascript.info/garbage-collection), [Rising Stack Blog](https://blog.risingstack.com/node-js-at-scale-node-js-garbage-collection/)

# NodeJS Topics

- Setting up folder structure for a Node Project
- Concept of threads - [NodeJS Threads](https://www.digitalocean.com/community/tutorials/how-to-use-multithreading-in-node-js)
- module.exports vs export
- require vs import
- NPM package.json
- Installing packages using NPM
- URLs and Query Strings Modules
- Buffers and String Decoders
- Process API in Node
- Paths in Node.JS
- OS API
- Working with filesystems in Node
- Node.JS Events
- Event Emitters and Event Targets
- Multithreading with Node - Libuv
- Thread Pool and OS Operations
- Worker Threads in Node.JS
- Streams in Node.JS
- Webstreams in Node.JS
- Clustering in Node JS
- Cryptography in Node.JS
- Other Node Performance Optimization Techniques
- Testing Frameworks - Jest, Chai, Mocha

# TypeScript Topics

- Interfaces
- Enum
- Classes
- Decorators

# Assignment

1. Create two APIs in NodeJS:
   - Develop an API that retrieves information from the public API https://jsonplaceholder.typicode.com/posts and then stores this data in a file on the server.
   - Create a separate API that accepts an id parameter, searches for the corresponding data in the locally saved file on the server. If the data is not found in the file, the API further queries the original API. If the data is located, it is appended to the file, and the information is returned.
