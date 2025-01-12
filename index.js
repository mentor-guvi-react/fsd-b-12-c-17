// function checker(cb){
//     cb();
//  }
 
//  function add(a,b, callback){
//     checker(callback)
//     return a+b;
// }

// const callbackFunction = () => {
//     console.log('I am a callback function');
// }

// const result = add(11, 22, callbackFunction );

// console.log(result);


// console.log('code started');

// const callbackMethod = () => {
//     console.log('I got called');
// }

// console.log('code ended');

// setTimeout( callbackMethod , 3000 );

// const cb1 = (callback) => {
//     console.log('I am a callback function 1');
//     return callback;
// }

// function cb2(callback){
//     console.log('I am a callback function 2');
//     return callback;
// }


// function cb3(){
//     console.log('I am a callback function 3');
// }

// cb1(  cb2(  cb3()    )  );


// function sum(a,b){
//     return () => {
//         console.log(a+b);
//     }
// }

// const checker1 = sum(10,20);
// checker1();
// console.log(checker1,'checker1');

// setTimeout(
//     () => {
//         setTimeout(
//             () => {
//                 setTimeout(() => {
//                     console.log('I am a callback function 1');
//                 } , 1000)
//             }, 2000
//         ) 
//     }, 3000
// )

// const promise = new Promise( (resolve , reject )  => {
//     resolve('I am a promise');
// });

console.log('code started');

const callbackPromiseMethod = (resolve , reject) => {
    if(12 % 2 === 0){
        setTimeout(() => {
            resolve('it is dividing');
        } , 1000);
    }else {
        setTimeout(() => {
            resolve('it is not divinding');
        } , 2000);
    }
}

const promise  = new Promise(callbackPromiseMethod);

promise.then((data) => {
    console.log(data);
});

console.log('code ended');

const myMethod = async () => {
    const data = await promise;
}



