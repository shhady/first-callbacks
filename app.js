 //1
 const isString = (string, logString)=> {
      logString(string);
      
}
function logString (string) {
    if( typeof string === 'string'){
        console.log (string);
    } else{
        console.log('not a string');
    }
}
isString('adsfdfdffsf',logString);


//? 2

const firstWordUpperCase = (str, func) =>{
    func(str);
    str = (str.charAt(0).toUpperCase() + str.slice(1));
} 
function func(str) {
    console.log(str.split(' ').join('-'))
}
firstWordUpperCase('Hi I am a programmer',func);


//3

// const firstWordUpperCase = (str, func) =>{
//     func(str);
//     str = (str.charAt(0).toUpperCase() + str.slice(1));
// } 
// function func(str) {
//     alert (str.split(' ').join('-'))
// }
// firstWordUpperCase('Hi I am a programmer',func);


//? change the console.log in #2 to alert?//
setTimeout(firstWordUpperCase,50)


