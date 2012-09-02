cqrs-commands
=============

cqrs-commands is a middleware for Connect / Express to create and manage commands.

## Installation

    $ npm install cqrs-commands

## Quick start

Basically, using cqrs-commands is easy. All you need to do is to add a reference to it within your application:

### On Node.js

```javascript
var commands = require('cqrs-commands');
```

Additionally, you need to register any commands you want to provide within your application's configuration block. You can specify
an arbitrary number of commands within the parameter array:

```javascript
app.use(commands([ 'createFoo' ]));
```

### In the browser

Use

```html
<script type="text/javascript" src="/commands/Command.js"></script>
```

to get the client-side library of cqrs-commands. Now you are ready to create commands. For that call the `Command` constructor
and specify the command's type and its payload:

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

Now you can send that command to the server using your favorite AJAX library, such as [http.js](https://github.com/goloroden/http.js).

That's it :-)!

## License

The MIT License (MIT)
Copyright (c) 2011-2012 Golo Roden.
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.