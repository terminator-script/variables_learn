
let salary = "30000";

console.log(typeof salary);

let newSalary = Number(salary);

console.log(typeof newSalary);
console.log(newSalary + 5000);

/*

What is Type Conversion in JavaScript?
Type conversion means changing a value from one data type to another.
For example, converting a String ("15") into a Number (15).
1. Automatic Type Conversion
JavaScript sometimes converts data types automatically

Why?
- == allows automatic type conversion before comparing values.
- === compares both the value and data type without converting them.
2. Manual Type Conversion
You can explicitly convert values yourself.
Method	Purpose	Example	Result
Number()	String to Number	Number("25")	25
String()	Number to String	String(25)	"25"
Boolean()	Value to Boolean	Boolean(1)	true

*/