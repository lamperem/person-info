'use strict';

// Import modules
var prompt = require('prompt');
var clear = require('clear');
var colors = require('colors/safe');

// Clear console
clear();

// Fields Validation
var schema = {
	properties: {
		fname:{
			description: colors.yellow('What is your First Name?'),
			type: 'string',
			pattern: /^[a-zA-Z\s]+$/,
			message: 'First Name must be only letters or spaces',
			require: true			
		},
		lname:{
			description: colors.yellow('What is your Last Name?'),
			type: 'string',
			pattern: /^[a-zA-Z\s]+$/,
			message: 'Last Name must be only letters or spaces',
			require: true
		},
		age:{
			description: colors.yellow('What is your age?'),
			type: 'integer',
			pattern: /^\s*?[0-9]{1,2}$/,
			message: 'Age must be only integer',
			require: true
		},
		email:{
			description: colors.yellow('What is your Email?'),
			type: 'string',
			pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: 'Email must be have some structure similar to user@domain.com',
			require: true
		},
	}
}

// Change default colors
prompt.message = colors.green(">>");

// Start prompt
prompt.start();

// Questions Form
var questions = function(){
	prompt.get(schema, function(err, result){
		let fname, lname, age, email;

		//console.log(result);

		if(err){
			console.log(err);
		}else{
			fname = result.fname;
			lname = result.lname;
			age = result.age;
			email = result.email;

			console.log("Information saved, thanks!");			
		}
	});
};

exports.modules = questions();