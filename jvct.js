const Mystring = "Hello World";
console.log(Mystring)


const Mystring2 = ('hello');
console.log(Mystring + Mystring2)




const Mystring3 = `${Mystring} ${Mystring2}`;
console.log(Mystring3)

const Mystring4 = Mystring.substring(-1);
console.log(Mystring4)
const Mystring5 = "hello";
const size = Mystring5.length;
const Mystring6 = Mystring.toLowerCase().indexOf("Amir".toLowerCase());
//  const Mystring7 = Mystring6 + size;
//  console.log(Mystring6)
//  console.log(Mystring7)
//  if(

//  )

console.log(Mystring6);
if (Mystring6 > -1) {
    const Mystring7 = Mystring6 + size;
    console.log(Mystring7);
}
else {
    console.log('if condition is not work')
}
let x= "5";
let z = 4;
if (!isNaN(x) && !isNaN(z)){

    if (typeof(x ==="5" && z == 4 && x>z)){
    console.log("x is greater than z")
    }else if(typeof(x ==="5" && z == 4 && x<z)){
    console.log("else if")
    }
    else{
    if(typeof(x!="num")){
     console.log (x= parseInt(x))
    }
    if( typeof (z!= Number)){
        console.log (z= parseInt(z))
    }
    }
}
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }