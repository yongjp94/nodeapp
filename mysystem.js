var os = require('os');

var message = 'Here is some info about your system.';

var sysArray = new Array('Type: '+os.type(),
						'Node Version: '+process.version,
						'Platform: '+os.platform(),
						'Hostname: '+os.hostname(),
						'Total Memory: '+os.totalmem(),
						'Free Memory: '+os.freemem,
						'Uptime: '+os.uptime
						);

console.log(message);

// Holds the number of contents within sysArray
var arraylen = sysArray.length

i = 0; //init
while(i < arraylen) {
	console.log(sysArray[i]);
	i++;
}