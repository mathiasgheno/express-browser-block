# Express Browser Block

Express middleware to block browsers requests that do not satisfies the conditions

## Instalation

```shell
npm install express-browser-block
```

## Usage

```js

import express from 'express';
import { blockRequestIfBrowserIsNot } from 'express-browser-block';
const app = express();

app.use(blockRequestIfBrowserIsNot());
// see API definitions to overwirite default values

app.get('/hello', (req, res) => {
  res.send('world');
})

app.listen(3000);

```

## API

The `blockRequestIfBrowserIsNot` functions accepts two parameters: `conditions` and `html`. 

The `conditions` parameter follows the definition of the [Browser](https://github.com/lancedikson/bowser#filtering-browsers) dependency. 

The `html` is what is going to be send to your user when it doesn't satisfies the `conditions` parameter.   
