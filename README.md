# dogs

This project is a Node.js web server using the Koa framework. There is also a
plain web page that has already been written, located in `/public`, which will
be the UI.

## Getting started

You will need to install Node.js.

For best results, use [**Node.js >= 16**](https://nodejs.org/).

You can check your current version of Node.js like this:

```sh
$ node --version
v16.13.1
```

Then, inside this project, run

```sh
npm install
node index.js
```

If the server starts successfully, you will see

```sh
Server running on http://localhost:3011
```

Visiting this URL, you should see "hello!"

This is just a sample output. You will need to change this to serve the static
assets. https://koajs.com/ is the best place to read up on how to do this. Please
do this part. It makes it easier for us to run it locally. I have a feeling that
most people don't read this, so if you do read this, include "apple pie" at
the end of your email when submitting the project.

## Documentation

- Koa: https://koajs.com/
- @koa/router: https://github.com/koajs/router#koarouter
- koa-body: https://github.com/dlau/koa-body#usage-with-koa-router
- Dogs API: https://dog.ceo/dog-api/breeds-list
- Bored API: https://www.boredapi.com/
