var domNearestTarget = (function () {
'use strict';

var proto = typeof Element !== 'undefined' ? Element.prototype : {};
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

var matchesSelector = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (!el || el.nodeType !== 1) { return false; }
  if (vendor) { return vendor.call(el, selector); }
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) { return true; }
  }
  return false;
}

function getTarget(target, targets){
    if ( targets === void 0 ) targets = [];


    for(var i=0; i<targets.length; i++){
        if(matchesSelector(target, targets[i])){
            return target;
        }

        if(target.children.length){
            var el = target.querySelector(targets[i]);
            if(el) { return el; }
        }
    }

    return null;
}

return getTarget;

}());
//# sourceMappingURL=dom-nearest-target.js.map
