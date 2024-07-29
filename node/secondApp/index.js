// var fs =require("fs");

// fs.readFile('randy.txt', function (err, data) {
//     if (err) {
//        return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
//  });

//  var data = fs.readFileSync('randy.txt');
// console.log("Synchronous read: " + data.toString());
 
//  console.log("Program Ended");


//  console.log( __filename );



 function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 setTimeout(printHello, 5000);
 