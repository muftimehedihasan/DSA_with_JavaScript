/* JavaScript Objects (জাভাস্ক্রিপ্ট অবজেক্টস) */

// জাভাস্ক্রিপ্ট অবজেক্ট জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষাটিকে আরও বহুমুখী করে তোলে। অবজেক্ট কীভাবে কাজ করে, কীভাবে ডিক্লেয়ার করা হয় এবং তাদের প্রপার্টি কীভাবে পরিবর্তন করা যায়, তা বোঝা গুরুত্বপূর্ণ।

// ১. অবজেক্ট প্রপার্টি
// জাভাস্ক্রিপ্ট অবজেক্ট তৈরি করা যায় object literal {} বা new Object(); এর মাধ্যমে।

// নতুন প্রপার্টি যোগ করতে বা অ্যাক্সেস করতে দুইটি পদ্ধতি ব্যবহার করা যায়: object.propertyName বা object['propertyName']।

// let javaScriptObject = {};
// var testArray = [1, 2, 3, 4];

// javaScriptObject.array = testArray;
// console.log(javaScriptObject); // {array: [1, 2, 3, 4]}

// javaScriptObject.title = 'Algorithms';
// console.log(javaScriptObject); // {array: [1, 2, 3, 4], title: 'Algorithms'}

// ২. প্রোটোটাইপাল ইনহেরিটেন্স
// জাভাস্ক্রিপ্টে প্রোটোটাইপাল ইনহেরিটেন্স হলো ইনহেরিটেন্স করার একমাত্র পদ্ধতি।
// ক্লাসের ফাংশনগুলো .prototype ব্যবহার করে ডাইনামিকভাবে যোগ করা যায়। উদাহরণ:
// function ExampleClass() {
//     this.name = "JavaScript";
// }

// ExampleClass.prototype.sayName = function() {
//     console.log(this.name);
// }

// let example1 = new ExampleClass();
// example1.sayName();


// ৩. কনস্ট্রাক্টর এবং ভেরিয়েবলস
// যেসব ভেরিয়েবল this.propertyName দিয়ে ডিক্লেয়ার করা হয়, সেগুলো পাবলিক এবং বাইরে থেকেও অ্যাক্সেস করা যায়।
// function ExampleClass(name, size) {
//     this.name = name;
//     this.size = size;
//   }
  
//   var example = new ExampleClass("Public", 5);
//   console.log(example.name); // "Public"
//   console.log(example.size); // 5

// ৪. প্রাইভেট ভেরিয়েবলস (নকল করা)
// জাভাস্ক্রিপ্টে প্রাইভেট ভেরিয়েবল নেই, তবে আপনি কনস্ট্রাক্টর স্কোপে স্থানীয় ভেরিয়েবল দিয়ে সেটি নকল করতে পারেন। Getter/Setter ব্যবহার করে এ ধরনের ভেরিয়েবল অ্যাক্সেস করা হয়।
// function ExampleClass(name, size) {
//     var privateName = name;
//     var privateSize = size;
  
//     this.getName = function() { return privateName; }
//     this.setName = function(name) { privateName = name; }
  
//     this.getSize = function() { return privateSize; }
//     this.setSize = function(size) { privateSize = size; }
//   }
  
//   var example = new ExampleClass("Sammie", 3);
//   example.setSize(12);
//   console.log(example.getName()); // "Sammie"
//   console.log(example.getSize()); // 12

// উপসংহার
// জাভাস্ক্রিপ্টে প্রোটোটাইপাল ইনহেরিটেন্স ব্যবহার করে ক্লাসের ফাংশন যোগ করা হয়।
// প্রাইভেট ভেরিয়েবলের সমতুল্য কোনো ভেরিয়েবল নেই, তবে স্থানীয় ভেরিয়েবল তৈরি করে সেটির জন্য Getter/Setter ব্যবহার করা যেতে পারে।