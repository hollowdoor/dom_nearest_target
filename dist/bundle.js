'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var matches = _interopDefault(require('matches-selector'));

function getTarget(target, targets){
    if ( targets === void 0 ) targets = [];


    for(var i=0; i<targets.length; i++){
        if(matches(target, targets[i])){
            return target;
        }

        if(target.children.length){
            var el = target.querySelector(targets[i]);
            if(el) { return el; }
        }
    }

    return null;
}

module.exports = getTarget;
//# sourceMappingURL=bundle.js.map
