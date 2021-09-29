# dogs

This project is a Node.js web server using the Koa framework. There is also a
plain web page that has already been written, located in `/public`, which will
be used as the UI.

Relevant documentation:

- Koa: https://koajs.com/
- @koa/router: https://github.com/koajs/router#koarouter
- koa-body: https://github.com/dlau/koa-body#usage-with-koa-router
- Dogs API: https://dog.ceo/dog-api/breeds-list
- Bored API: https://www.boredapi.com/

## Getting started

To run the server, you need [**Node.js >= 14**](https://nodejs.org/) installed.

You can check your current version of Node.js like this:

```sh
$ node --version
v14.16.0
```

If you have Node 14 or above, you can then run the following.

```sh
npm install
node index.js
```

If the server starts successfully, you will see this:

```sh
Server running on http://localhost:3011
```

Visiting this URL, you should see "hello!"

This is just a sample output. You will need to change this to serve the static assets. https://koajs.com/ is the best place to read up on how to do this.
