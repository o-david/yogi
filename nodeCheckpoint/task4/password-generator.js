var generator = require('generate-password');


var password = generator.generate({
	length: 10,
	numbers: true,
    symbols:true,
});

console.log(password)