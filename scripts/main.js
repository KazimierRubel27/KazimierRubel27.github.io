console.log("Task 1");
for (let i = 0; i <= 10; i++){
    console.log(i * i);
}
console.log("Task 2")
for (let i = 5; i > 0; i--){
    console.log(i);
}
console.log("Blastoff!");
console.log("Task 3");
for (let i = 2; i<= 50; i+=2){
    console.log(i);
}
console.log("Task 4");
let total = 0
for (let i = 1; i<=100; i++){
    total = total += i;
}
console.log(total);
console.log("Task 5");
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
    console.log(factorial);
}
console.log("Task 6")
let arr = [3, 1, 4, 1, 5];
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
}
console.log("Task 7")
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr.at(i));
}
console.log("Task 8")
let cubes = [];
for (let i = 1; i <= 10; i++) {
    cubes.push(i ** 3);
}
console.log(cubes)
console.log("Task 9")
let fibonnaci = []
fibonnaci.push(1)
fibonnaci.push(1)
for (let i = 1; i <= 8; i++){
    sum = fibonnaci[i] + fibonnaci[i-1]; 
    fibonnaci.push(sum) 
}
console.log(fibonnaci)
console.log("Task 10")
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log(reversedArr);
