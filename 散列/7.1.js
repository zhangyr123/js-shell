function HashTable(){
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	this.betterHash = betterHash;
}
function betterHash(string){
	var H = 37;
	var total = 0;
	for(var i = 0; i<string.length; ++i){
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if(total < 0){
		total += this.table.length-1;
	}
	print("Hash value: " + string + " -> " + total);
	return parseInt(total);
}
function simpleHash(data){
	var total = 0;
	for(var i=0; i<data.length; ++i){
		total += data.charCodeAt(i);
	}
	print("Hash value: " + data + " -> " + total);
	return total % this.table.length;
}
function put(data){
	var pos = this.betterHash(data);
	this.table[pos] = data;
}
function showDistro(){
	var n = 0;
	for(var i=0; i<this.table.length; ++i){
		if(this.table[i] != undefined){
			print(i + ':' + this.table[i]);
		}
	}
}

// var someNames=["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
// var hTable = new HashTable();
// for(var i=0; i<someNames.length; ++i){
// 	hTable.put(someNames[i]);
// }
// hTable.showDistro(); 

// 散列整型键
function getRandomInt(min, max){
	return Math.floor(Math.random()*(max-min+1))+min;
}
function genStuData(arr){
	for(var i=0; i<arr.length; ++i){
		var num = "";
		for(var j=1; j<=9; ++j){
			num += Math.floor(Math.random()*10);
		}
		num += getRandomInt (50,100);
		arr[i] = num;
	}
}
var numStudents = 10; 
var arrSize = 97; 
var idLen = 9; 
var students = new Array(numStudents); 
genStuData(students); 
print ("Student data: \n"); 
for (var i = 0; i < students.length; ++i) { 
	print(students[i].substring(0,8) + " " + students[i].substring(9)); 
}
print("\n\nData distribution: \n"); 
var hTable = new HashTable(); 
for (var i = 0; i < students.length; ++i) { 
	hTable.put(students[i]); 
}
hTable.showDistro();