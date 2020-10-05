# Module Based Structure

```
rts-back-folder-structure
 └─── src
      │
      └─── config
      │     │   env.js
      │     │
      │
      └─── api
      │     │
      │     └─── module
      │     │     │
      │     │     └───  board
      │     │     │       │   __tests__
      │     │     │       │   board.controller.js
      │     │     │       │   board.model.js
      │     │     │       │   board.route.js
      │     │     │       │   board.service.js
      │     │     └─── ...
      │     │
      │     └─── middleware
      │     │
      │     │   routes.js
      │     │   server.js
      │
      │ index.js

```

## Config
* Environment/global variable

## API

### Module
Each module represents a resource API.

#### Board
* __tests__: Unit Test folder
* board.controller.js: Function passed into routes, input is usually (req, res, next).
* board.model.js: Model class.
* board.route.js: Route connecting to controller.
* board.service.js: CRUD functions.

Reference: https://medium.com/swlh/how-i-structure-my-node-js-rest-apis-4e8904ccd2fb
