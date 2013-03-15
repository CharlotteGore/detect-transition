var transitions = ["transition", "WebkitTransition", "MozTransition", "msTransition", "OTransition"];
var timingFunctions = ["TransitionTimingFunction", "WebkitTransitionTimingFunction", "MozTransitionTimingFunction", "msTransitionTimingFunction"];
var transforms = ["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"];
var element = document.createElement("div").style;

module.exports.transition = (function () {
    var index = transitions.length;
    while (index--) {
        if (transitions[index] in element) {
            return transitions[index];
        }
    }
    return false;
})();

module.exports.timingFunction = (function(){
    var index = timingFunctions.length;
    while (index--) {
        if (timingFunctions[index] in element) {
            return timingFunctions[index];
        }
    }
    return false;
})();

module.exports.transform = (function(){
    var index = transforms.length;
    while (index--) {
        if (transforms[index] in element) {
            return transforms[index];
        }
    }
    return false;
})();