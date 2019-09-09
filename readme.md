# Cross Env Argv

> More convenient way to Identify params on 'cross-env'

``` javascript
// package.json

npm run dev port=3000

```

``` javascript

const argv = require('cross-env-argv')( process ); // { port: 3000 }

```
