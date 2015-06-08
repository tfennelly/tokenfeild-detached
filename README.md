NPM module that allows you to add an instance of Bootstrap Tokenfield 0.12.x to an instance of jQuery. 

Install Package:

```
npm install --save tokenfield-detached-0.12
```

# Usage

The idea is that this module would be used in conjunction with jquery-detached.

E.g.:

```javascript
var $ = require('jquery-detached-2.1.4').newJQuery();            
var tokenfield = require('tokenfield-detached-0.12');

tokenfield.addToJQuery($);

```

This pattern can be extended to allow you to create a "private" jQuery instance having a controlled
set of jQuery plugins/extensions.