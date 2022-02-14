var hello = (name: string): string => "Hello " + name;

var multiply = (num1: number, num2: number): number => num1 * num2;

var myarray: Array<any> = [];

for (var i = 0; i < 10; i++) {
  myarray.push((): number => i);
}

for (var i = 0; i < 10; i++) {
  console.log(myarray[i]());
}

console.log(hello("nagehan"));
console.log(multiply(5, 8));
