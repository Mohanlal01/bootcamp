// // function add(x , y) {

// //     if (!x || !y ){
// //         throw"please provide valid argument";
// //     }
// //     return x + y ;

// // }
// function add(x , y) {

//     if (isNaN (x) || isNaN (y)  ){
//         throw"please provide valid argument";
//     }
//     return x + y ;

// }
// // console.log(add(5,6));
// // console.log(add('5' , 6));
// // console.log(add( null , 6));
// // try {
// //     function add(x , y) {
// //         return x + y ;

// //     }
// //     // console.log(add(5,6));
// //     // console.log(add('5' , 6));
// //     console.log(add( , 6));
// //   }
// //   catch(err) {
// //     console.log("error is occurred")
// //   }
// // let x=0;
// // let y=5;

// // try {
// //     console.log(add(x , y));
// // } catch (e) {
// //     console.log(e);
// // }

// let x= 5;
// let y= 0;
// const divide = (x, y) => {
//     return x/y;
// }




// try {
//     console.log(divides(x , y))


// } catch (e) {
//     console.log("error")
// }



////////////////////////array////////////////////////////////

const arr = [1, 5, 6];
console.log(...arr)
let [num] = arr
console.log(num)
arr.push(7);
arr.length;
console.log(arr)


for (let index in arr) {
    // code block to be executed
    if (arr[index] === 6)
        arr[index] += 2;

}
console.log(arr)
//////////////////////////filter function/////////////////////


function getEvent(arr) {
    if (arr && arr.length > 0) {
        return arr.filter(function (x) {
            return x % 2 === 0
        })
    }
    []
}
console.log(getEvent(arr))
////////////////////////////////////////////////////////////////
// palandrome function
// data mutation


function palindrome(input) {
    // let rev= "ABCBA";
    let rev = input.split("").reverse().join("");
    return rev === input;


}
console.log(palindrome("ABCBAX"))
//////counting sort/////////////////



let arry = [1, 22, 46, 40, 100, 1, 5, 25, 10];

let sorted =arry.sort (function (a, b) { return b - a });
console.log(sorted)

