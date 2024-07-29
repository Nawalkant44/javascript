// var a=10
// a=20
// var a=30
// console.log(a)

// let b=100
// b=200
// console.log(b)

// const c=400
// console.log(c)  
// var a=10
// a=20
// var a=30
// console.log(a)

// function printme(){
//     console.log("welcome")
 
// }
// printme()

// function add(a,b){
//     let c=a+b
//     console.log(c)
//     return c
// }
// let total=add(10,20)
// console.log(total)

// let max=0
// function fax(n){
//     for(let i=0; i<=99; i++){
//         if(i%2===0){
//             if(max<i){
//                 max=i
//             }
//         }
//     }
//     return max
// }
// fax(1)
// console.log(max)

// let min=0
// function cax(n){
//         for(let i=0; i<=99; i++){
//             if(i%2===0){
//                 if(min>i){
//                     min=i
//                 }
//             }
//         }
//         return min
//     }
//     cax(1)
//     console.log(min)

// let arr=['hi',55,true,null]
// console.log(arr)
// console.log(arr[2])

// let arr=[true,false,true,false]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==true){
//         console.log(arr[i] +10)
//     }
//     else{
//         console.log(arr[i] -10)
//     }
// }
//  push 
//  Pop
//  shift
//  unshift
//  slice
//  reverse
//  splice
//  toString
//  join
//  includes

// let arr=[33,'hi',88,true]
// console.log("before",arr)
// // arr.push('hello')
// let poppedElement=arr.pop()
// console.log(poppedElement)
// console.log(arr)

// let arr=[true,'hi',32,null,'hello']
// // arr.unshift('im here')
// // arr.shift()
// arr.splice(1,1, 'hbgtrgroi')
// console.log(arr)

// let arr=[true,'hello',32,null,'hi']
// // arr.reverse();
// // let newArr=arr.slice(1,2)
// // console.log(arr)
// // let newArr=arr.toString()
// let newArr=arr.join(" ")
// console.log(newArr)

// let arr=[true,'hello',32,null,'hi']
// let newEle=arr.includes(null)
// console.log(newEle)

class empname{
    constructor(id,name,sal,role){
        this.id=id
        this.name=name
        this.sal=sal
        this.role=role
    }
}
// let e1=new empname(4,'Nawal',50000,'s.e')
// console.log(e1)



// class hrs extends empname{
//     constructor(hid,hname,id,name,sal,role){
//         super(id,name,sal,role)
//         this.hid=hidthis.hname=hname
//     }
// }
// let he1=new empname(14,'mansa',4,'Nawal',50000,'s.e')
// console.log(he1)

// (function(a,b){
//     console.log(a+b)
//     console.log('hi')
// })(10,20)

// let mul=function(c,d)
// {
//     console.log("value of : ",c*d);
//     return c*d;
// }
// mul(9,3)


//arrow funtion 
// let add=(a,b)=>{
//     console.log(a+b);
//     return a+b;
// }
// let c=add(12,5)
// console.log(c);

let a=document.getElementById("hi")
a.innerText="welcom to dom"

let b=document.getElementsByClassName('ji')
b[0].innerText="Welcome dc"
b[0].style.backgroundColor="yellow"

let c=document.getElementsByTagName('h2')
c[0].innerText="welcome to dt"
c[0].style.backgroundColor="orange"