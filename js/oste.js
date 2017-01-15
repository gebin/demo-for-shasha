var readline = require('readline');  
var fs = require('fs');  
var os = require('os');  
  
var fReadName = '../data/all.txt';  
var fWriteName = '../data/aqs.json';  

var fRead = fs.createReadStream(fReadName);  
var fWrite = fs.createWriteStream(fWriteName);  
  
  
var objReadline = readline.createInterface({  
    input: fRead,  
// 这是另一种复制方式，这样on('line')里就不必再调用fWrite.write(line)，当只是纯粹复制文件时推荐使用  
// 但文件末尾会多算一次index计数   sodino.com  
//  output: fWrite,   
//  terminal: true  
});  
  
  
var index = 1;  
var allQes=[];

objReadline.on('line', (line)=>{   
	var step1 = line.split('.');
	var step2 = [];
	if(step1.length == 1  ){
		step2 = step1[0].split('？');
	} else if( step1.length == 2){
		step2 = step1[1].split('？');
	}

	if(step2.length == 2){
		if(step2[1]){
			allQes.push({
				q : step2[0],
				a : step2[1]
			})
		}
	} 
    index ++;  
});  
  
objReadline.on('close', ()=>{  
    console.log('readline close...',allQes);  
    fWrite.write(JSON.stringify(allQes)); // 下一行  
});  