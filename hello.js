const sayHello = function () {
    console.log("Hello world");
}
sayHello();

const sayHello2 = function (name) {
    console.log("hello " + name);
}
sayHello2("Jon");

const sayHelloToConsole = function (name) {
    console.log("Hello " + name);
} 
sayHelloToConsole("Console");

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);