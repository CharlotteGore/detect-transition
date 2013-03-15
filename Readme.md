# detect-transition

  Returns the correctly prefixed CSS3 transition, transform and transition-timing-function strings.

## Installation

    $ component install charlottegore/detect-transition

## API

### .transition

  In IE10
  
    > require('detect-transition').transition
    > "msTransition"

  In Chrome
  
    > require('detect-transition').transition
    > "WebKitTransition"

  In unsupported browser
  
    > require('detect-transition').transition
    > false

### .timingFunction

  In IE10
  
    > require('detect-transition').timingFunction
    > "msTransitionTimingFunction"
  
  In Chrome

    > require('detect-transition').timingFunction
    > "WebkitTransitionTimingFunction"

  In unsupported..

    > require('detect-transition').timingFunction
    > false

### .transform

  In IE10
  
    > require('detect-transition').timingFunction
    > "msTransform"
  
  In Chrome

    > require('detect-transition').timingFunction
    > "WebkitTransform"

  In unsupported..

    > require('detect-transition').transform
    > false

## License

  MIT
