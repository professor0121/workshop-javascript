str1="listen"
str2="silent"

function check(str1,str2){
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()

    str1=str1.split('').sort().join('')
    str2=str2.split('').sort().join('')
    return str1===str2? true: false
}

console.log(check(str1,str2))


// sort array in assending order 

const arr=[2,6,4,8];
const temp=arr.sort((a,b)=>b-a)
console.log(temp)

const newfilter=arr.filter((val,ind)=>val>4&&ind)
console.log(newfilter)

const sum=arr.reduce((prev,curr)=>prev+=curr)
console.log(sum)


const newMpa=arr.map((arr)=>arr)
console.log(newMpa)

const element=arr.find((element,index)=>element===4)
console.log(element)

let person={
    name:"urvi",
    rollNo:900,
    behave:function(arg){
        return arg==="khush"?"achha behavior":"kharab behavior"
    }
}
Object.freeze(person)



let newobj=person
newobj.ro=90
person.roll=9899
console.log(person)