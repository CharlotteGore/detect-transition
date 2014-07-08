# detect-transition

Feature detection and property finder for CSS3 transition, transform and transition-timing-function properties.

## Installation

NPM/Browserify

```sh
$ npm install --save detect-transition
```

## API

Run the detector and get the correct properties by requiring the module.

```js
var transforms = require('detect-transition');
```

### require('detect-transition').transition

Returns either the correct `transition` property for the browser or false. 

- transition
- -webkit-transition
- MozTransition
- msTransition

```js
  if (transforms.transition){
    el.style[transforms.transition] = "width 2s;"
  } else {
    // some fallback system... no css transitions supported
  }
```

### require('detect-transition').transform

Returns either the correct `transform` property for the browser or false. 

- transform
- -webkit-transform
- MozTransform
- msTransform

```js
  if (transforms.transform){
    el.style[transforms.transform] = "rotateY(15deg)";
  } else {
    // some fallback system ...
  }
```

### require('detect-transition').timingFunctions

Returns either the correct `timing-function` property for the browser or false. 

- transitionTimingFunction
- -webkit-transition-timing-function
- MozTransitionTimingFunction
- msTransitionTimingFunction

```js
  if (transforms.timingFunctions){
    el.style[transforms.timingFunctions] = "ease-in";
  } else {
    // some fallback system ...
  }
```

## License

  MIT
