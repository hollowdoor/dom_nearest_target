import nearestTarget from '../';

let parents = document.querySelectorAll('.parent');
let targets = [];
for(let i=0; i<parents.length; i++){
    targets.push(nearestTarget(parents[i], ['.target']));
}
console.log(targets); //[div.parent.target, p.target]
