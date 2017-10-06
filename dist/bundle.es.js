import matches from 'matches-selector';

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

export default getTarget;
//# sourceMappingURL=bundle.es.js.map
