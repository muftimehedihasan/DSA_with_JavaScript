// CHAPTER 1

// Big-O Notation

// ১. আমার অ্যালগোরিদম কি নির্ধারিত সময়ের মধ্যে ফলাফল এনে দিবে?
// ২. সর্বোচ্চ কত বড় ইনপুটের জন্য আমার অ্যালগোরিদম কাজ করবে?
// ৩. আমার অ্যালগোরিদম কতখানি মেমরি ব্যবহার করছে?



//
// In mathematics, the terms associated with the Big O notations can be described as follows:

//  1. O(1) – Constant: No growth as the input size increases; remains constant.
//  2. O(log n) – Logarithmic: Grows logarithmically, typically base 2 (e.g., binary search).
//  3. O(n) – Linear: Grows in direct proportion to the input size.
//  4. O(n^2) – Quadratic: Grows proportionally to the square of the input size (common in nested loops).
//  5. O(2^n) – Exponential: Grows exponentially as the input size increases (e.g., brute-force solutions).
// These terms indicate how the complexity of an algorithm increases as the input grows in size.

// 1. O(1) – Constant Time
// O(1) উদাহরণ: O(1) অ্যালগরিদমে, অপারেশনগুলোর সংখ্যা ইনপুট আকারের উপর নির্ভর করে না। যেমন:


// let arr = [10, 20, 30, 40, 50];
// O(1) উদাহরণ: ইনডেক্সের মাধ্যমে সরাসরি আইটেম অ্যাক্সেস করা
// let  item = arr[2];  // এটি সর্বদা কনস্ট্যান্ট সময় নেবে, ইনপুট আকার যাই হোক।
// console.log(item); // আউটপুট: 30
// এখানে অ্যারের আকার বড় বা ছোট যাই হোক না কেন, নির্দিষ্ট ইনডেক্সে থাকা একটি আইটেম অ্যাক্সেস করতে সর্বদা একই সময় লাগে। তাই এটি O(1)।



// let sumOfX = (n) =>{
//     let x = n + 10;
//     x = x/2;
//     return x;
// }

// let sumOfX = (n) => {
//     let x = n + 15;
//     x = x / 2;
//     return x;
// }

// let result = sumOfX(20);
// console.log(result);


// 2. O(log n) – Logarithmic Time
// O(n) উদাহরণ: O(n) অ্যালগরিদমে, অপারেশনগুলোর সংখ্যা ইনপুট আকারের সাথে সরাসরি সম্পর্কিত। যেমন:

// let arr = [10, 20, 30, 40, 50, 60, 70];

// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// let big_n = (n) => {
//     for( let i = 0; i<= n; i++){
//         console.log(i);
//     }
// }

// let result = big_n(30);
// console.log(result);

// সারমর্ম:

// O(1) হলো কনস্ট্যান্ট টাইম, যেখানে অপারেশন সংখ্যা ইনপুট আকারের উপর নির্ভর করে না।
// O(n) হলো লিনিয়ার টাইম, যেখানে অপারেশন সংখ্যা ইনপুট আকারের সাথে সরাসরি বৃদ্ধি পায়।

// Common Examples

// let exampleLinear = (n) => {
//     for (let i = 0; i < n; i++){
//         console.log(i);
//     }
// }


// Similarly, O(n2) is quadratic time, and O(n3) is cubic time. 
// Examples of these complexities are shown here:

// let exampleQuadratic = (n) =>{
//     for (let i = 9; i < n; i++){
//         console.log(i);
//         for(let j = i; j < n; j++){
//             console.log(j);
//         }
//     }
// }

// let result_exampleQuadratic = exampleQuadratic(100);
// console.log(result_exampleQuadratic); 



// let exampleQuadratic = (limit) => {
//     let output = [];  // Store the values instead of just printing them

//     // Outer loop: runs from 9 to the given limit
//     for (let i = 9; i < limit; i++) {
//         output.push(`Outer Loop: ${i}`);  // Add the current 'i' value to the output array

//         // Inner loop: runs from i to the limit
//         for (let j = i; j < limit; j++) {
//             output.push(`  Inner Loop: ${j}`);  // Add the current 'j' value to the output array
//         }
//     }

//     return output;  // Return the output array
// }

// // Call the function and log the result
// let result_exampleQuadratic = exampleQuadratic(15);
// result_exampleQuadratic.forEach(line => console.log(line));  // Print each value in the result


// লগারিদমিক টাইম কমপ্লেক্সিটির অ্যালগরিদমের উদাহরণ:
// লক্ষ্য: ২ থেকে n পর্যন্ত যে সংখ্যাগুলি ২ এর পাওয়ার, সেই সংখ্যাগুলি প্রিন্ট করা।

// উদাহরণ: যদি n = 10, তাহলে প্রিন্ট হবে: ২, ৪, ৮, ১৬, ৩২, ৬৪।


// let exampleLogarithmic = (n) => {
//     for( let i = 2; i <= n; i = i * 2){
//         console.log(i);
//     }
// } 

// let result_exampleLogarithmic = exampleLogarithmic(1000);
// console.log(result_exampleLogarithmic);


// নিচে প্রতিটি বিগ-ও নোটেশন নিয়মের উদাহরণ সহ JavaScript কোড দেওয়া হলো:

// ১. কোঅফিসিয়েন্ট/ধ্রুবক উপেক্ষা (Coefficient Rule)

// let exampleCoefficient = (n) =>{
//     let result = 0;
//     for (let i = 0; i < 5 * n * n; i++){
//         result += i;
//         // result = result + i;
//     }
//     return result;
// }

// console.log(exampleCoefficient(10));


// ২. যোগফল বিগ-ও (Sum Rule)

// let exampleSum = (n) =>{
//     for(let i = 0; i < n; i++){
//         console.log(i);
//     }

//     for(let i = 0; i < n; i++){
//         for(let j = 0; j <n; j++){
//             console.log(i, j);
//         }
//     }
 
// }
// let result_exampleSum = exampleSum(5);
// // console.log(result_exampleSum);

// ৪. পলিনোমিয়াল বিগ-ও (Polynomial Rule)

// function examplePolynomial(n) {
//     let sum = 0;
//     for (let i = 0; i < n * n * n; i++) { // O(n^3)
//         sum += i;
//     }
//     return sum;
// }

// console.log(examplePolynomial(3)); // টাইম কমপ্লেক্সিটি O(n^3)



// 1. O(n2)
// There are two nested loops. Ignore the constants in front of n.

// 2. O(n3)
// There are four nested loops, but the last loop runs only until 10.

// 3. O(1)
// Constant complexity. The function runs from 0 to 1000. This does 
// not depend on n.

// 4. O(n)
// Linear complexity. The function runs from 0 to 10n. Constants are 
// ignored in Big-O.

// 5. O(log2n)
// Logarithmic complexity. For a given n, this will operate only log2n
// times because i is incremented by multiplying by 2 rather than 
// adding 1 as in the other examples.

// 6. O(∞)
// Infinite loop. This function will not en