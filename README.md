dom-nearest-target
-----

Get the nearest target which is what ever matches the given selector in an array of selectors. This will include the parent. The first selector that matches is the selector used to get the target (css selection).

Install
----

`npm install --save dom-nearest-target`

Usage
---

```html
<body>
    <div class="parent target">
        <p></p>
    </div>
    <div class="parent">
        <p class="target"></p>
    </div>
  <script src="code.js"></script>
</body>
```

```javascript
//code.js
import nearestTarget from 'dom-nearest-target';

let parents = document.querySelectorAll('.parent');
let targets = [];
for(let i=0; i<parents.length; i++){
    //The second argument to nearestTarget()
    //should be an array of potential selectors.
    targets.push(nearestTarget(parents[i], ['.target']));
}
console.log(targets); //[div.parent.target, p.target]
```
