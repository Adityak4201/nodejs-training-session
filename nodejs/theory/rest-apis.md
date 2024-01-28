# RESTful API

RESTful API stands for Representational State Transfer Application Programming Interface. It is a set of constraints to be used for creating web services. Web services that conform to the REST architectural style, or RESTful web services, provide interoperability between computer systems on the internet.

RESTful APIs are stateless, meaning that each request from a client to a server must contain all the information needed to understand and process the request. The server should not store anything about the latest HTTP request the client made. It should treat each request as independent.

## How REST APIs work?

REST APIs communicate via HTTP requests to perform standard database functions like creating, reading, updating, and deleting records (also known as CRUD) within a resource. For example, a REST API would use a GET request to retrieve a record, a POST request to create one, a PUT request to update a record, and a DELETE request to delete one. All HTTP methods can be used in API calls. A well-designed REST API is similar to a website running in a web browser with built-in HTTP functionality.

The state of a resource at any particular instant, or timestamp, is known as the resource representation. This information can be delivered to a client in virtually any format including JavaScript Object Notation (JSON), HTML, XLT, Python, PHP, or plain text. JSON is popular because it’s readable by both humans and machines—and it is programming language-agnostic.


## Best Practices for Designing RESTful APIs

Designing a good RESTful API involves following a set of best practices to ensure that the API is consistent, readable, and easy to use. Here are some best practices:

1. **Use HTTP methods correctly**: Each resource should support the HTTP methods `GET`, `POST`, `PUT`, `DELETE`, as they map to create, read, update, delete (CRUD) operations.

2. **Use nouns for resources**: Resources should be nouns, not verbs. For example, use `/users` for a resource dealing with users.

3. **Use sub-resources for relations**: If a resource is related to another resource, use subresources. For example, `/users/123/posts` for a user's posts.

4. **Use HTTP status codes**: Use HTTP status codes to indicate the success or failure of a request.

5. **Version your API**: Make the API version mandatory and do not release an unversioned API. Use a simple ordinal number.

6. **Handle errors gracefully and return standard error codes**: Provide a useful error message along with the HTTP status code.

7. **Allow filtering, sorting, and pagination**: The API should allow clients to filter and sort data in a way that suits their needs.

## Authentication Methods in RESTful APIs

Authentication is a crucial part of most RESTful APIs. Here are some common methods used for authentication:

1. **Basic Authentication**: This is a simple authentication scheme built into the HTTP protocol. The client sends HTTP requests with the Authorization header that contains the word Basic followed by a space and a base64-encoded string username:password.

2. **Token-Based Authentication**: In this method, the client exchanges hard credentials (such as username and password) for a piece of data called token. For each request, instead of sending the hard credentials, the client will send the token to the server to get access.

3. **JWT (JSON Web Token)**: This is a standard for token-based authentication. In this scheme, the server generates a token that certifies the user identity, and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows that the request comes from a particular identity.

4. **OAuth**: This is a standard for access delegation. It provides client applications a 'secure delegated access' to server resources on behalf of a resource owner.