## 1.Destructure Nested Object

```js
// Extract age and city using destructuring
 const user = { name: "Alice",
   details: {
     age: 25,
      city: "Paris" 
    } };
const {age,city}=user.details;
```


## 2.Merge Objects
```js
Merge obj1 and obj2 so that obj2 values override obj1
 const obj1 = { a: 1, b: 2 };
 const obj2 = { b: 3, c: 4 };
 const merged = {...obj1,...obj2}
```

## 3.Convert Object to Array
```js
// Convert this object to an array of key-value pairs
const product = { id: 1, name: "Laptop", price: 1000 };
const arr =Object.entries(product)
//console.log(arr)
```

## 4.Update Nested Value Without Mutation
```js
// Create a new object with city changed to "Tokyo" (don’t mutate original)
 const person = { name: "John", address: { city: "London", zip: 12345 } };
  const person2 = {...person,address: { city: "Tokyo", zip: 12345 } }
  // person2.address.city = "Tokyo"
  //console.log(person2)
  //console.log(person)
  ```

## 5.Filter Object Keys by Condition
```js
// Create a new object with only students scoring 60 or above


 const scores = { Alice: 85, Bob: 58, Charlie: 90, Dave: 45 };
 const newscore = Object.fromEntries(
  Object.entries(scores).filter(([name,score])=>score>=60))
  //console.log(newscore)
 ```
## 6. Remove duplicates and return a unique array
```js
 const arr1 = [1, 2, 2, 3, 4, 4, 5];
 const newarr3 = arr1.filter((index,value)=>arr1.indexOf(index)===value)
 //console.log(newarr3)
```
## 7. Flatten this array to a single level
```js
 const arr4 = [1, [2, [3, [4, 5]]]];
 const newarr4 = arr4.flat(3)
 //console.log(newarr4)
```

## 8 Sort users by age (ascending)
```js
const users = [ 
  { name: "John", age: 30 },
   { name: "Alice", age: 25 },
    { name: "Bob", age: 28 }
   ];
   
   users.sort((a,b)=>a.age-b.age)
   //console.log(users)
```

## 9 Group people by gender (output an object with male/female arrays)
```js
const people = [ 
  { name: "Tom", gender: "male" },
  { name: "Sara", gender: "female" },
  { name: "Alex", gender: "male" }
];

const grouped = { male: [], female: [] };

people.forEach(person => {
  if (person.gender === "male") {
    grouped.male.push(person);
  } else if (person.gender === "female") {
    grouped.female.push(person);
  }
});

// console.log(grouped);
```
## 10. Transform Array of Objects
```js
// • Convert this to { 1: "John", 2: "Jane" }
const users1 = [
 { id: 1, name: "John" },
 { id: 2, name: "Jane" }
];

const user2={...users1}
// console.log(user2)
```