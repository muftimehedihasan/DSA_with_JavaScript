// CHAPTER 11: Hash Tables
// হ্যাশ টেবিল (Hash Table) হলো একটি নির্দিষ্ট আকারের ডেটা স্ট্রাকচার যা শুরুতেই এর আকার নির্ধারণ করা হয়। হ্যাশ টেবিল মূলত কী-ভ্যালু (key-value) পেয়ারের মাধ্যমে ডেটা দ্রুত সঞ্চয় ও পুনরুদ্ধার করতে ব্যবহৃত হয়। JavaScript-এর অবজেক্টগুলিও এমনভাবে কাজ করে।
// মূল বৈশিষ্ট্য:
// 1. হ্যাশিং (Hashing): হ্যাশ ফাংশনের মাধ্যমে একটি কীকে একটি অনন্য সূচক (index) এ রূপান্তর করা হয়, যা ডেটার স্থান নির্ধারণ করে।
// 2. দুটি মূল ফাংশন:
// * put() ডেটা সংরক্ষণের জন্য।
// * get() ডেটা পুনরুদ্ধারের জন্য।

// হ্যাশ ফাংশনের প্রয়োজনীয় বৈশিষ্ট্য:
// * ডিটারমিনিস্টিক (Deterministic): সমান কী সমান হ্যাশ মান তৈরি করবে।
// * কার্যকর (Efficient): O(1) সময়ে কাজ করবে।
// * ইউনিফর্ম ডিস্ট্রিবিউশন (Uniform Distribution): পুরো অ্যারে জুড়ে সমভাবে কী বিতরণ করবে।

// হ্যাশিং কৌশল:
// 1. প্রাইম নাম্বার হ্যাশিং (Prime Number Hashing): প্রাইম সংখ্যা ব্যবহার করে মডুলাস অপারেশন করার মাধ্যমে ভালো ডিস্ট্রিবিউশন পাওয়া যায়।
// 2. কলিশন হ্যান্ডলিং (Collision Handling):
// * লিনিয়ার প্রোবিং (Linear Probing): যদি দুটি কী একই সূচকে হ্যাশ হয়, পরবর্তী খালি সূচক খুঁজে বের করে।
// * কোয়াড্রাটিক প্রোবিং (Quadratic Probing): লিনিয়ার প্রোবিংয়ে ক্লাস্টার সমস্যা সমাধান করতে বর্গমূল ব্যবহার করে।
// * ডাবল হ্যাশিং (Double Hashing): দ্বিতীয় হ্যাশ ফাংশন ব্যবহার করে কী পুনরায় হ্যাশ করে বিতরণ উন্নত করা হয়।

// উদাহরণ:
// হ্যাশ টেবিলে কী-ভ্যালু পেয়ার সংরক্ষণ করা হয় এবং প্রোবিং কৌশল দ্বারা কলিশন হ্যান্ডলিং করা হয়।
// উদাহরণস্বরূপ, {key: 7, value: "hi"} এবং {key: 18, value: "wow"} যদি একই সূচকে হ্যাশ হয়, তাহলে লিনিয়ার প্রোবিংয়ের মাধ্যমে 18-এর জন্য নতুন সূচক খুঁজে পাওয়া যায়।

// সারসংক্ষেপ:
// * হ্যাশ টেবিল দ্রুত ডেটা সংরক্ষণ এবং পুনরুদ্ধারের জন্য কার্যকর একটি ডেটা স্ট্রাকচার।
// * হ্যাশ ফাংশন যত ভালো হবে, তত কম কলিশন ঘটবে।
// * হ্যাশ ফাংশন যত ভালো হবে, তত কম কলিশন ঘটবে।

// পরবর্তী অধ্যায়ে:
// স্ট্যাক এবং কিউ (Stack and Queue) ডেটা স্ট্রাকচার নিয়ে আলোচনা করা হবে, যা হ্যাশ টেবিলের মতো স্থির নয়, বরং গতিশীল আকারের হয়।

// JavaScript Hash Table Implementation:

// class HashTable {
//     constructor(size) {
//       this.size = size;
//       this.keys = new Array(size); // Array to store keys
//       this.values = new Array(size); // Array to store values
//       this.limit = 0; // To keep track of how many elements are in the table
//     }
  
//     // Hash function to calculate index
//     hash(key) {
//       if (!Number.isInteger(key)) throw 'Key must be an integer';
//       return key % this.size;
//     }
  
//     // Put method to insert key-value pairs into the hash table
//     put(key, value) {
//       if (this.limit >= this.size) throw 'Hash table is full';
  
//       let hashedIndex = this.hash(key);
  
//       // Linear probing to resolve collisions
//       while (this.keys[hashedIndex] != null) {
//         hashedIndex++;
//         hashedIndex = hashedIndex % this.size; // Wrap around the array
//       }
  
//       this.keys[hashedIndex] = key;
//       this.values[hashedIndex] = value;
//       this.limit++;
//     }
  
//     // Get method to retrieve values from the hash table
//     get(key) {
//       let hashedIndex = this.hash(key);
  
//       // Linear probing to find the correct value
//       while (this.keys[hashedIndex] != key) {
//         hashedIndex++;
//         hashedIndex = hashedIndex % this.size;
//         if (this.keys[hashedIndex] === null) {
//           return undefined; // If the key is not found
//         }
//       }
  
//       return this.values[hashedIndex];
//     }
//   }
  
//   // Example usage
//   const hashTable = new HashTable(10); // Create a hash table of size 10
  
//   hashTable.put(7, "Hi");
//   hashTable.put(20, "Hello");
//   hashTable.put(33, "Sunny");
//   hashTable.put(46, "Weather");
//   hashTable.put(59, "Wow");
//   hashTable.put(72, "Forty");
//   hashTable.put(85, "Happy");
//   hashTable.put(98, "Sad");
  
//   // Retrieving values
//   console.log(hashTable.get(7));  // Output: Hi
//   console.log(hashTable.get(20)); // Output: Hello
//   console.log(hashTable.get(59)); // Output: Wow
//   console.log(hashTable.get(98)); // Output: Sad
//   console.log(hashTable.get(100)); // Output: undefined (key not found)

// Explanation:
// * The HashTable class initializes two arrays, keys and values, to store keys and corresponding values.
// * The hash() function uses the modulus operator to calculate the array index for a given key.
// * The put() method adds a key-value pair to the hash table. If a collision occurs (i.e., if the index is already taken), linear probing is used to find the next available slot.
// * The get() method retrieves the value corresponding to a given key by using the same hash function and probing to locate the key if necessary.

// This is a basic implementation that illustrates how hash tables work with collision handling using linear probing.

// হ্যাশ টেবিলের কয়েকটি গুরুত্বপূর্ণ সমস্যা
// হ্যাশ টেবিল (Hash Table) খুব কার্যকর একটি ডেটা স্ট্রাকচার, তবে এতে কিছু সমস্যা রয়েছে। নিচে হ্যাশ টেবিলের কয়েকটি গুরুত্বপূর্ণ সমস্যা এবং সেগুলোর ব্যাখ্যা বাংলায় দেয়া হলো:

// ১. কোলিশন (Collision):
// হ্যাশ টেবিলের সবচেয়ে বড় সমস্যা হলো কোলিশন। কোলিশন ঘটে যখন দুটি ভিন্ন কী একই হ্যাশ ইন্ডেক্সে মুঠে আসে। অর্থাৎ, হ্যাশ ফাংশন ভিন্ন কী-র জন্য একই ইনডেক্স তৈরি করে। যেহেতু একই ইনডেক্সে একাধিক ডেটা রাখা সম্ভব নয়, এজন্য কোলিশন ম্যানেজ করার প্রয়োজন হয়।
// সমাধান:
// * লিনিয়ার প্রোবিং (Linear Probing): কোলিশন হলে, পরের ইনডেক্সে গিয়ে চেক করা হয় যে সেটি খালি আছে কিনা।
// * চেইনিং (Chaining): কোলিশন হলে, ওই ইনডেক্সে একটি লিস্ট বা লিংকড লিস্টের মত স্ট্রাকচার ব্যবহার করে একাধিক মান রাখা হয়।

// ২. ক্লাস্টারিং (Clustering):
// লিনিয়ার প্রোবিং ব্যবহার করলে অনেক সময় "প্রাইমারি ক্লাস্টারিং" হয়। যখন কোলিশন ঘটে এবং পরবর্তী ইনডেক্সে ডেটা রাখা হয়, একাধিক কাছাকাছি ইনডেক্সে ডেটা জমা হয় এবং এটি সার্চ অপারেশনকে ধীর করে দেয়।
// সমাধান:
// কোয়াড্রাটিক প্রোবিং (Quadratic Probing): ক্লাস্টারিং কমানোর জন্য হ্যাশ টেবিলে ইন্ডেক্স খুঁজতে লিনিয়ার প্রোবিংয়ের বদলে বর্গমূল (square) ব্যবহার করা হয়।

// ৩. লোড ফ্যাক্টর (Load Factor):
// লোড ফ্যাক্টর হলো হ্যাশ টেবিলে কতটুকু স্থান পূর্ণ হয়েছে তা মাপার একটি প্যারামিটার। যদি হ্যাশ টেবিলের লোড ফ্যাক্টর খুব বেশি হয়, তাহলে সার্চ অপারেশন ধীর হয়ে যায়। সাধারণত লোড ফ্যাক্টর ০.৭৫-এর বেশি হলে পারফরমেন্স কমতে থাকে।
// সমাধান:
// রি-হ্যাশিং (Rehashing): যখন লোড ফ্যাক্টর একটি নির্দিষ্ট সীমা অতিক্রম করে, তখন হ্যাশ টেবিলের সাইজ বড় করে পুনরায় হ্যাশ ফাংশন প্রয়োগ করা হয়।

// ৪. সঠিক হ্যাশ ফাংশন নির্বাচন:
// হ্যাশ টেবিলের সাফল্য নির্ভর করে ভালো হ্যাশ ফাংশনের উপর। যদি হ্যাশ ফাংশন দুর্বল হয়, তবে এটি বেশি কোলিশন সৃষ্টি করতে পারে এবং ডেটা অ্যাক্সেস ধীর হয়ে যায়।
// সমাধান:
// ইউনিফর্ম ডিস্ট্রিবিউশন: হ্যাশ ফাংশন এমন হতে হবে, যাতে ডেটা টেবিলের বিভিন্ন স্থানে সমানভাবে ছড়িয়ে পড়ে।

// ৫. সীমাবদ্ধ আকার (Fixed Size):
// হ্যাশ টেবিলের একটি নির্দিষ্ট আকার থাকে যা পূর্বনির্ধারিত। যদি টেবিল পূর্ণ হয়ে যায়, তখন আর নতুন ডেটা যোগ করা সম্ভব হয় না।
// সমাধান:
// রি-সাইজিং: যখন টেবিল পূর্ণ হয়ে যায়, তখন এর আকার বড় করতে হবে এবং সব ডেটা নতুন টেবিলে পুনরায় হ্যাশ করতে হবে।

// ৬. সিরিয়াল সার্চিং (Sequential Searching):
// কোলিশন হলে এবং প্রোবিং ব্যবহার করলে, অনেক সময় পুরো টেবিল ক্রমানুসারে সার্চ করা লাগে, যা প্রায় O(n) সময় লাগে। এটি হ্যাশ টেবিলের মূল সুবিধা, অর্থাৎ O(1) টাইম কমপ্লেক্সিটি, কমিয়ে দেয়।

// এই সমস্যাগুলো হ্যাশ টেবিলের কার্যকারিতা কিছুটা কমিয়ে দেয়। তবে সঠিকভাবে হ্যাশ ফাংশন নির্বাচন ও কোলিশন হ্যান্ডলিং কৌশল ব্যবহার করলে এগুলোকে নিয়ন্ত্রণ করা যায়।