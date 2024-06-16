const os=require('os')
console.log("CPU architecture"+os.arch());
console.log("Free Memory"+os.freemem());
console.log("Total Memory"+os.totalmem());
console.log("Hostname"+os.hostname());
console.log("os type"+os.type());
console.log("Release OS:"+os.release());
console.log("Platform:"+os.platform());
console.log("Endienes"+os.endianness());
console.log("Network Interface"+os.networkInterfaces());
console.log("Temp Directory"+os.tmpdir());
