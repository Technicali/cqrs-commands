cqrs-commands
=============

cqrs-commands is a middleware for Connect / Express to create and manage commands.

## Installation

    $ npm install cqrs-commands

## Quick start

Basically, using cqrs-commands is easy.

### On Node.js

On the server-side all you need to do is to add a reference to it within your application, and register the commands you want to
provide.

So, first add the reference:

```javascript
var commands = require('cqrs-commands');
```

Now you can provide actual commands to the client. For that, register them within your application's configuration block. You can
specify an arbitrary number of commands within the parameter array. Additionally, you need to specify a callback that receives a
command from the client and stores it within a command bus. Once the command has been stored, the `callback` function is run. In
case of an error, simply specify it as a parameter.

```javascript
app.use(commands([ 'createFoo' ], function (command, callback) {
  // Store the command in the command bus.
  // [...]

  // Notify that this has been successful. If needed, provide an error as parameter.
  callback();
}));
```

### In the browser

Use

```html
<script type="text/javascript" src="/commands/Command.js"></script>
```

to get the client-side library of cqrs-commands. You do not need to provide this file manually, it is created by cqrs-commands on
the fly.

Now you are ready to create commands. For that, call the `Command` constructor and specify the command's type and its payload as
parameters to the constructor:

```javascript
var command = new Command('createFoo', { foo: 'bar' });
```

cqrs-commands now creates an object with the following structure:

```javascript
{
  id: '0480cf0b-82ea-477d-948f-100b884549a0',
  type: 'createFoo',
  payload: {
    foo: 'bar'
  }
}
```

*Note: The `id`, of course, will vary ;-).*

Now you can send the newly created command to the server using your favorite AJAX library, such as [http.js](https://github.com/goloroden/http.js).
For that, use a `POST` request and send the command to the `/commands` url using the `application/json` content-type. If the command
has successfully been stored within the command bus, cqrs-commands replies with an `202 Accepted` status code; otherwise the status
code `503 Service Unavailable` is returned.

*Note: In case you want to track the command at a later point in time, feel free to remember its `id`.*

That's it :-)!

## License

The MIT License (MIT)
Copyright (c) 2011-2012 Golo Roden.
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.