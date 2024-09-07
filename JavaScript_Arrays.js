// JavaScript Arrays

// 1. সবচেয়ে বেশি ব্যবহৃত ডেটা স্ট্রাকচার:
    // অ্যারে জাভাস্ক্রিপ্টের একটি মৌলিক এবং সবচেয়ে বেশি ব্যবহৃত ডেটা স্ট্রাকচার। এটি একাধিক আইটেম সংরক্ষণের জন্য আদর্শ।

// 2. বিল্ট-ইন পদ্ধতি:
    // জাভাস্ক্রিপ্ট অ্যারেগুলিতে অনেকগুলি বিল্ট-ইন পদ্ধতি রয়েছে যা আইটেম যোগ, মুছে ফেলা বা পরিবর্তন করার মতো কাজগুলি সম্পাদন করতে সহায়ক। উদাহরণস্বরূপ, .push(), .pop(), .shift(), .unshift(), .splice(), এবং .slice()।

// 3. একই ধরনের অপারেশন করার বিভিন্ন উপায়:
    // অ্যারে অপারেশন করার জন্য বিভিন্ন উপায় রয়েছে, যা ব্যবহার কেসের উপর নির্ভর করে। উদাহরণস্বরূপ:
        // * আইটেম যোগ করতে আপনি .push() অথবা .unshift() ব্যবহার করতে পারেন।
        // * আইটেম মুছে ফেলতে আপনি .pop() অথবা .shift() ব্যবহার করতে পারেন।
        // * আইটেমগুলির উপর লুপ চালাতে আপনি লুপ অথবা .forEach() মত পদ্ধতি ব্যবহার করতে পারেন।

// 4. সঠিক পদ্ধতি নির্বাচন করা
    // বিভিন্ন পদ্ধতি এবং তাদের ব্যবহারের কেস জানলে আপনি আপনার নির্দিষ্ট প্রয়োজন অনুযায়ী সবচেয়ে কার্যকর বা উপযুক্ত পদ্ধতি নির্বাচন করতে পারবেন। উদাহরণস্বরূপ, .map() নতুন অ্যারে তৈরি করতে ব্যবহৃত হয় যেখানে আইটেমগুলি পরিবর্তিত হয়, আর .filter() নির্দিষ্ট মানদণ্ড পূরণ করা আইটেমগুলিকে নির্বাচন করতে ব্যবহৃত হয়।

// 5. বুঝতে এবং প্রয়োগ করতে সক্ষম হওয়া:
    // অধ্যায়ের শেষে, আপনি অ্যারেগুলির সাথে আত্মবিশ্বাসের সাথে কাজ করতে সক্ষম হবেন এবং পরিস্থিতির ভিত্তিতে সঠিক পদ্ধতি নির্বাচন করতে পারবেন। এতে প্রতিটি পদ্ধতির উদ্দেশ্য এবং কার্যকরভাবে কীভাবে ব্যবহার করতে হয় তা বুঝতে সহায়তা করবে।

    // let array1 = [1,2,3,4];
    // For any data structure, developers are interested in time and space complexity 
    // associated with the four fundamental operations: 
  
    // * insertion, 
    // * search.
    // * deletion, and 
    // * access, 

    
/* Insertion */
//-------------
    // ইনসারশন মানে একটি ডেটা স্ট্রাকচারের মধ্যে একটি নতুন উপাদান যোগ করা। জাভাস্ক্রিপ্টে অ্যারে ইনসারশন করা হয় .push(element) পদ্ধতির মাধ্যমে। এই পদ্ধতিটি অ্যারের শেষের দিকে একটি নতুন উপাদান যোগ করে।
// উদাহরণস্বরূপ:

// let array1 = [1, 2, 3, 4];
// array1.push(5);
// array1.push(6);

// টাইম কমপ্লেক্সিটি:
    // * এই অপারেশনের সময় জটিলতা তাত্ত্বিকভাবে O(1) (ধ্রুবক সময়)। এর মানে হলো, অ্যারের শেষে নতুন উপাদান যোগ করা সাধারণভাবে একটি নির্দিষ্ট সময়ের মধ্যে ঘটে, যা অ্যারের সাইজের সাথে সম্পর্কিত নয়।
    // * বাস্তবে, এটি JavaScript ইঞ্জিনের উপর নির্ভর করে, যা কোডটি চালায়। তবে, সাধারণভাবে, .push() পদ্ধতি দ্রুত এবং কার্যকরী।


/* Deletion */
//------------
// জাভাস্ক্রিপ্টে অ্যারে থেকে উপাদান মুছে ফেলা হয় বিভিন্ন পদ্ধতির মাধ্যমে:

    // 1. .pop() পদ্ধতি:
    // .pop() পদ্ধতি অ্যারের শেষের দিকে থাকা উপাদানটি মুছে ফেলে। এটি মুছে ফেলা উপাদানটি ফিরিয়ে দেয়।

    // let array1 = [1, 2, 3, 4];
    // array1.pop();
    // টাইম কমপ্লেক্সিটি: .pop() পদ্ধতির সময় জটিলতা O(1), যা .push() এর মতোই।

    // 2. .shift() পদ্ধতি:

    // .shift() পদ্ধতি অ্যারের প্রথম উপাদানটি মুছে ফেলে এবং সেই উপাদানটি ফিরিয়ে দেয়।

    // var array1 = [1, 2, 3, 4];
    // array1.shift(); // returns 1, array1 হবে [2, 3, 4]
    // array1.shift(); // returns 2, array1 হবে [3, 4]
    // টাইম কমপ্লেক্সিটি: .shift() পদ্ধতির সময় জটিলতা O(n), কারণ এটি সমস্ত পরবর্তী উপাদানগুলিকে এক ইনডেক্স সরে যেতে বাধ্য করে, যেখানে n হল অ্যারের সাইজ।
    // উপসংহারে, .pop() দ্রুত এবং কার্যকরী, কিন্তু .shift() তুলনামূলকভাবে ধীর, বিশেষ করে বড় অ্যারের ক্ষেত্রে।

    /* Access */
    //----------
    // Accessing an array at a specified index only takes O(1) because this process uses that 
    // index to get the value directly from the address in memory. It is done by specifying the 
    // index (remember that indexing starts at 0).
    // 1 var array1 = [1,2,3,4];
    // 2 array1[0]; //returns 1
    // 3 array1[1]; //returns 2

/* Iteration */
//-------------

    // ইটারেশন হলো একটি ডেটা স্ট্রাকচারের প্রতিটি আইটেমের উপর ক্রমান্বয়ে প্রবেশাধিকার লাভ করার প্রক্রিয়া। জাভাস্ক্রিপ্টে অ্যারের ইটারেশন করার জন্য বিভিন্ন পদ্ধতি রয়েছে, এবং এগুলির সবগুলোর সময় জটিলতা O(n), যেখানে n হলো অ্যারেতে থাকা উপাদানগুলির সংখ্যা।

// 1. for লুপ
// সবচেয়ে সাধারণ ইটারেশন পদ্ধতি হলো for লুপ। এটি সাধারণত এই রূপে ব্যবহৃত হয়:

// for (let i = 0, len = array1.length; i < len; i++){
//     console.log(array1[i]);
// }
// এই কোডটি বোঝায়:
    // i ইনিশিয়ালাইজ করা হচ্ছে।
    // শর্ত পরীক্ষা করা হচ্ছে (i < len)।
    // শর্ত মিথ্যা হলে লুপ থেমে যাবে।
    // প্রতি লুপ শেষে i++ দ্বারা পরিবর্তন হচ্ছে।

/* while লুপ: */
// let counter = 0;
// while(counter < array1.length){
//     // কোড প্রবেশ করান
//     counter++
// }
// এই লুপের মধ্যে counter বাইরে সেট করা হয়।

/* অসীম while লুপ: */
// while(true) {
//     if(breakCondition){
//         break;
//     }
// }

/* অসীম for লুপ: */

// for ( , , ){
//     if(breakCondition){
//         break;
//     }
// }

// 2. for (in) লুপ
// এই লুপ অ্যারের ইনডেক্সের উপর ইটারেট করে। উদাহরণস্বরূপ:
// let array1 = ['all', 'cows', 'are', 'big'];
// for(let index in array1){
//     console.log(index); // প্রিন্ট করবে 0, 1, 2, 3
// }

// // অ্যারের কন্টেন্ট প্রিন্ট করতে চাইলে:
// for (let index in array1){
//     console.log(array1[index]); // প্রিন্ট করবে 'all', 'cows', 'are', 'big'
// }

// 3. for (of) লুপ
// এই লুপ অ্যারের উপাদানের উপর ইটারেট করে। উদাহরণস্বরূপ:

// for (let element of array1){
//     console.log(element); // প্রিন্ট করবে 'all', 'cows', 'are', 'big'
// }

/* 4. forEach() পদ্ধতি */
// forEach() এর মাধ্যমে প্রতিটি উপাদানের উপর ইটারেট করা যায়। তবে এই পদ্ধতিতে ইটারেশন থামানো বা কোনো উপাদান বাদ দেওয়া সম্ভব নয়:
// let array1 = ['all', 'cows', 'are', 'big'];
// array1.forEach(function(element, index){
//     console.log(index, element);
// });
// অথবা:
// array1.forEach(function (element, index) {
//     console.log(array1[index]); // প্রিন্ট করবে 'all', 'cows', 'are', 'big'
//  });
// উপসংহার: বিভিন্ন লুপ পদ্ধতি নির্ভর করে আপনার প্রয়োজন অনুযায়ী, যেমন .forEach() সরল এবং সরাসরি, কিন্তু for বা while লুপ আপনাকে আরও নিয়ন্ত্রণ দেয়, যেমন ইটারেশন থামানো।


/* Helper Functions in JavaScript Arrays */
// 1. .slice(begin, end)
// ব্যাখ্যা: .slice() একটি বিদ্যমান অ্যারের নির্দিষ্ট অংশ ফেরত দেয়, কিন্তু অ্যারেটি পরিবর্তন করে না। এটি দুইটি প্যারামিটার নেয়: শুরু ইনডেক্স এবং শেষ ইনডেক্স।
// var array1 = [1, 2, 3, 4];
// array1.slice(1, 2); // returns [2], array1 থাকে [1, 2, 3, 4]
// array1.slice(2, 4); // returns [3, 4], array1 থাকে [1, 2, 3, 4]

// শুধু শুরু ইনডেক্স দিলে: যদি শুধু শুরু ইনডেক্স দেয়া হয়, তাহলে শেষ ইনডেক্স সর্বাধিক ইনডেক্স হিসেবে ধরে নেয়।
// array1.slice(1); // returns [2, 3, 4], array1 থাকে [1, 2, 3, 4]

// কোনো প্যারামিটার না দিলে: এটি একটি কপি অ্যারে ফেরত দেয়।
// array1.slice(); // returns [1, 2, 3, 4]

// 2. Reference-based Arrays
// ব্যাখ্যা: জাভাস্ক্রিপ্টে অ্যারেগুলি reference-based হয়, তাই যখন একটি অ্যারে নতুন কোনো ভ্যারিয়েবলে অ্যাসাইন করা হয়, উভয় অ্যারে একই রেফারেন্স ধরে রাখে।
// var array1 = [1, 2, 3, 4];
// var array2 = array1;
// array2[0] = 5;
// console.log(array1); // [5, 2, 3, 4]

// .from() পদ্ধতি: .from() ব্যবহার করে অ্যারের একটি নতুন কপি তৈরি করা যেতে পারে।
// var array1 = [1, 2, 3, 4];
// var array2 = Array.from(array1);
// array2[0] = 5;
// console.log(array1); // [1, 2, 3, 4]

// 3. .splice(begin, size, element1, element2, ...)
// ব্যাখ্যা: .splice() অ্যারের উপাদান সরায় এবং/অথবা নতুন উপাদান যোগ করে। এটি তিনটি প্যারামিটার নেয়: শুরু ইনডেক্স, সরানোর আকার, এবং যোগ করার উপাদান।
// var array1 = [1, 2, 3, 4];
// array1.splice(1, 2); // returns [2, 3], array1 এখন [1, 4]

// যোগ করা:
// var array1 = [1, 2, 3, 4];
// array1.splice(1, 2, 5, 6, 7); // returns [2, 3], array1 এখন [1, 5, 6, 7, 4]

// 4. .concat()
// ব্যাখ্যা: .concat() অ্যারের শেষে নতুন উপাদান যোগ করে এবং নতুন অ্যারে ফিরিয়ে দেয়।
// var array1 = [1, 2, 3, 4];
// var array2 = array1.concat([2, 3, 4]); // returns [1, 2, 3, 4, 2, 3, 4]

// 5. .length Property
// ব্যাখ্যা: .length অ্যারের সাইজ নির্ধারণ করে। এই প্রোপার্টির মান কমিয়ে অ্যারের উপাদান মুছে ফেলা যায়।
// var array1 = [1, 2, 3, 4];
// array1.length = 3; // array1 এখন [1, 2, 3]

// 6. Spread Operator (...):
// ব্যাখ্যা: স্প্রেড অপারেটর কোনো অ্যারেকে এক্সপ্যান্ড করতে ব্যবহার করা হয়।
// var numbers = [1, 2, 3, 4];
// function addFourNums(a, b, c, d) {
//    return a + b + c + d;
// }
// console.log(addFourNums(...numbers)); // 10

// 7. Math.max() এবং Math.min() সঙ্গে স্প্রেড অপারেটর
// ব্যাখ্যা: স্প্রেড অপারেটর ব্যবহার করে সর্বোচ্চ এবং সর্বনিম্ন মান নির্ধারণ করা যায়।

// var array1 = [1, 2, 3, 4, 5];
// console.log(Math.max(...array1)); // 5

// var array2 = [3, 2, -123, 2132, 12];
// console.log(Math.min(...array2)); // -123

// উপসংহার: এই হেল্পার ফাংশন এবং স্প্রেড অপারেটর জাভাস্ক্রিপ্টে অ্যারের সাথে কার্যকরভাবে কাজ করতে সহায়ক হয়।