## firebase-roles

Firebase roles (claims) manipulation in the backend.

Users with the 'admin' claim can read all user claims and update them.

Use in conjunction with the `firebase-roles-editor` package in the frontend.

### Usage

Ensure `initializeApp` is called on your firebase admin instance before
anything else.

In your `index.js`:

```
const {endpoints} = require("firebase-roles");
```

Endpoints are returned in cranny syntax which looks like:
```
{
    type: 'get',
    route: '/endpointName',
    obj: Func
}
```

The `obj` is a function which you should set to run when the endpoint is hit.
For example, with express:

```
  for (const endpoint of endpoints) {
    app[endpoint.type](endpoint.route, endpoint.obj);
  }
```
