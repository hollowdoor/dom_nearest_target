import matches from 'matches-selector';

export default function getTarget(target, targets = []){

    for(let i=0; i<targets.length; i++){
        if(matches(target, targets[i])){
            return target;
        }

        if(target.children.length){
            let el = target.querySelector(targets[i]);
            if(el) return el;
        }
    }

    return null;
}
