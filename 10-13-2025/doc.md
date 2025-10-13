
## The phenomena of event contect
```mermaid
graph LR
a[callback]-->b[web apis]
b[web apis]-->c[call back queue]
```

## creating a promise 
```js
function add(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },0)
    })
}

add(10,12)
```