var val = parseInt(prompt("Enter Number of Starts"));
var str = "";
for(var i=1;i<=val;i++){
	for(var j=0;j<i;j++){
		str = str + " " + "*";
	}
	str += "</br>";
}

var input = document.write(str);
console.log("gkhl")
console.log(input);