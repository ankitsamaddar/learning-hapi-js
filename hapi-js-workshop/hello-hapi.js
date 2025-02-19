let hapi = require('@hapi/hapi');
/*
Immediately Invoked Function Expression (IIFE).

1. **Function Expression**:
   ```javascript
   (async () => {
     // ...code...
   })
   ```
   This part defines an anonymous asynchronous function. The `async` keyword allows the use of `await` inside the function, enabling asynchronous operations.

2. **Immediately Invoked**:
   ```javascript
   (async () => {
     // ...code...
   })();
   ```
   The `()` at the end immediately invokes the function expression. This means the function is executed right after it is defined.

### Why Use an IIFE?

- **Scope Isolation**: Variables declared inside the IIFE are not accessible outside of it, preventing potential conflicts with other parts of the code.
- **Asynchronous Initialization**: In this case, the IIFE is used to handle asynchronous operations (like starting the server) in a clean and isolated manner.
- **Immediate Execution**: It ensures that the code runs immediately without needing to be called explicitly elsewhere.

When this code runs:
1. The anonymous async function is defined.
2. The function is immediately invoked and the message "This runs immediately!" is logged to the console.

*/
(async () => {
  try {
const server = hapi.server({
  host: "localhost",
  port: Number(process.argv[2]) || 8080,
});

server.route({
  path: "/",
  method: "GET",
  handler: (request, h) => {
    return "Hello hapi";
  },
});

await server.start();
console.log("Server running at:", server.info.uri);
  } catch (error) {
    console.log(error);
  }
})();
