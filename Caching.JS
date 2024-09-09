// CHAPTER 14: Caching

// Caching বলতে আমরা বুঝি এমন একটি প্রক্রিয়া যেখানে ডেটা সাময়িকভাবে মেমোরিতে সংরক্ষণ করা হয় যাতে এটি পরবর্তীতে সহজে পুনরুদ্ধার করা যায়। যেমন, একটি ডেটাবেস সিস্টেম হার্ড ড্রাইভ থেকে বারবার ডেটা পড়া এড়ানোর জন্য ডেটা ক্যাশে করে রাখে, এবং একটি ওয়েব ব্রাউজার ওয়েব পেজ (ইমেজ এবং অ্যাসেট) ক্যাশে রাখে যাতে পুনরায় ডাউনলোড করতে না হয়।

// Caching এর মূল লক্ষ্য:
// * হিট: কোনো আইটেম যখন ক্যাশে পাওয়া যায়।
// * মিস: কোনো আইটেম যখন ক্যাশে পাওয়া যায় না।

// ক্যাশিংয়ের দুইটি জনপ্রিয় অ্যালগরিদম:
// 1. LFU (Least Frequently Used): যা সবচেয়ে কম ব্যবহৃত আইটেমকে ক্যাশ থেকে সরিয়ে দেয়।
// 2. LRU (Least Recently Used): যা সবচেয়ে পুরনো (কম সম্প্রতি ব্যবহৃত) আইটেমকে সরিয়ে দেয়।

// LFU Caching:
// * LFU ক্যাশিং অ্যালগরিদম আইটেমের ব্যবহার ফ্রিকোয়েন্সির উপর ভিত্তি করে কাজ করে। যখন ক্যাশ পূর্ণ হয়ে যায়, তখন সবচেয়ে কম ব্যবহৃত আইটেম সরানো হয়।
// * কিন্তু এটি সবসময় কার্যকর নাও হতে পারে, কারণ কোনো একটি আইটেম অল্প সময়ের মধ্যে বারবার ব্যবহার হতে পারে এবং এরপর আর প্রয়োজন না পড়তে পারে। এ ধরনের পরিস্থিতিতে LFU কম কার্যকর হয়।
// * উদাহরণস্বরূপ, মোবাইল কিবোর্ড অ্যাপগুলোতে LFU ক্যাশিং কাজ করে, যেখানে প্রস্তাবিত শব্দগুলো ক্যাশে রাখা হয় কারণ ব্যবহারকারীরা প্রায়শই একই শব্দ ব্যবহার করে।

// LRU Caching:
// * LRU ক্যাশিং এমন একটি অ্যালগরিদম যেখানে কম সম্প্রতি ব্যবহৃত আইটেমগুলো সরিয়ে নতুন আইটেম যুক্ত করা হয়।
// * যখন কোনো আইটেম ব্যবহার করা হয়, তখন সেটি লিস্টের পেছনে (সবচেয়ে নতুন) চলে যায় এবং পুরনো আইটেম সামনে থাকে।
// * ক্যাশ পূর্ণ হয়ে গেলে, সামনে থাকা (সবচেয়ে পুরনো) আইটেম সরানো হয়।

// সংক্ষিপ্তসার:
// * LFU এবং LRU হল দুইটি জনপ্রিয় ক্যাশিং অ্যালগরিদম।
// * LFU ফ্রিকোয়েন্সির উপর ভিত্তি করে কাজ করে, কিন্তু এটি কিছু ক্ষেত্রে ত্রুটিপূর্ণ হতে পারে।
// * LRU সাধারণত কার্যকরী কারণ এটি ব্যবহারকারীর সাম্প্রতিক ব্যবহার অনুযায়ী আইটেম সরায়, যা অধিকাংশ ক্ষেত্রে কার্যকর।

// উদাহরণ: LFU এবং LRU Caching
// LFU Caching উদাহরণ:
// ধরা যাক, একটি LFU ক্যাশের ক্ষমতা 3, অর্থাৎ এটি 3টি আইটেম পর্যন্ত সংরক্ষণ করতে পারবে। নিচের ধাপে কাজগুলো সম্পন্ন হবে:
// * 1. সেট(1, 'A') – ক্যাশে আইটেম (1, 'A') যোগ হলো।
// ক্যাশ: {(1, 'A')} [ফ্রিকোয়েন্সি: 1]
// * 2. সেট(2, 'B') – ক্যাশে আইটেম (2, 'B') যোগ হলো।
// ক্যাশ: {(1, 'A'), (2, 'B')} [ফ্রিকোয়েন্সি: 1, 1]
// * 3. সেট(3, 'C') – ক্যাশে আইটেম (3, 'C') যোগ হলো।
// ক্যাশ: {(1, 'A'), (2, 'B'), (3, 'C')} [ফ্রিকোয়েন্সি: 1, 1, 1]
// * 4. গেট(1) – আইটেম (1, 'A') পেতে গেলে এটি ফ্রিকোয়েন্সিতে বৃদ্ধি পাবে।
// ক্যাশ: {(1, 'A'), (2, 'B'), (3, 'C')} [ফ্রিকোয়েন্সি: 2, 1, 1]
// * 5. সেট(4, 'D') – ক্যাশ পূর্ণ, এখন সবচেয়ে কম ফ্রিকোয়েন্সির আইটেম (2, 'B') সরিয়ে (4, 'D') যুক্ত হবে।
// ক্যাশ: {(1, 'A'), (3, 'C'), (4, 'D')} [ফ্রিকোয়েন্সি: 2, 1, 1] 

// LRU Caching উদাহরণ:
// ধরা যাক, একটি LRU ক্যাশের ক্ষমতা 3:
// * 1. সেট(1, 'A') – ক্যাশে আইটেম (1, 'A') যোগ হলো।
// ক্যাশ: [1]
// * 2. সেট(2, 'B') – ক্যাশে আইটেম (2, 'B') যোগ হলো।
// ক্যাশ: [1, 2]
// * 3. সেট(3, 'C') – ক্যাশে আইটেম (3, 'C') যোগ হলো।
// ক্যাশ: [1, 2, 3]
// * 4. গেট(1) – আইটেম 1 পেতে গেলে সেটি লিস্টের শেষে যাবে।
// ক্যাশ: [2, 3, 1]
// * 5. সেট(4, 'D') – ক্যাশ পূর্ণ, এখন সবচেয়ে পুরনো আইটেম 2 সরিয়ে (4, 'D') যুক্ত হবে।
// ক্যাশ: [3, 1, 4]

// এভাবে, LFU ফ্রিকোয়েন্সির উপর ভিত্তি করে এবং LRU সময়ের ভিত্তিতে আইটেম সরানোর সিদ্ধান্ত নেয়।


// নিচে LFU Cache এবং LRU Cache এর জন্য JavaScript কোড দেওয়া হলো।
// LFU Cache Implementation (JavaScript)
// class LFUNode {
//     constructor(key, value) {
//       this.key = key;
//       this.value = value;
//       this.freq = 1; // Frequency count starts at 1
//       this.prev = this.next = null;
//     }
//   }
  
//   class LFUDoublyLinkedList {
//     constructor() {
//       this.head = new LFUNode(null, null); // Dummy head node
//       this.tail = new LFUNode(null, null); // Dummy tail node
//       this.head.next = this.tail;
//       this.tail.prev = this.head;
//       this.size = 0;
//     }
  
//     insertAtHead(node) {
//       node.next = this.head.next;
//       this.head.next.prev = node;
//       this.head.next = node;
//       node.prev = this.head;
//       this.size++;
//     }
  
//     removeNode(node) {
//       node.prev.next = node.next;
//       node.next.prev = node.prev;
//       this.size--;
//     }
  
//     removeAtTail() {
//       if (this.size > 0) {
//         let node = this.tail.prev;
//         this.removeNode(node);
//         return node;
//       }
//       return null;
//     }
//   }
  
//   class LFUCache {
//     constructor(capacity) {
//       this.capacity = capacity;
//       this.minFreq = 0;
//       this.size = 0;
//       this.nodeMap = new Map(); // Stores key-node pairs
//       this.freqMap = new Map(); // Stores frequency-doubly linked list pairs
//     }
  
//     get(key) {
//       if (!this.nodeMap.has(key)) return -1;
  
//       let node = this.nodeMap.get(key);
//       this.updateNode(node);
//       return node.value;
//     }
  
//     set(key, value) {
//       if (this.capacity === 0) return;
  
//       if (this.nodeMap.has(key)) {
//         let node = this.nodeMap.get(key);
//         node.value = value;
//         this.updateNode(node);
//       } else {
//         if (this.size === this.capacity) {
//           let list = this.freqMap.get(this.minFreq);
//           let removedNode = list.removeAtTail();
//           this.nodeMap.delete(removedNode.key);
//           this.size--;
//         }
  
//         let newNode = new LFUNode(key, value);
//         this.nodeMap.set(key, newNode);
//         if (!this.freqMap.has(1)) this.freqMap.set(1, new LFUDoublyLinkedList());
//         this.freqMap.get(1).insertAtHead(newNode);
//         this.minFreq = 1;
//         this.size++;
//       }
//     }
  
//     updateNode(node) {
//       let freq = node.freq;
//       let list = this.freqMap.get(freq);
//       list.removeNode(node);
//       if (freq === this.minFreq && list.size === 0) this.minFreq++;
  
//       node.freq++;
//       if (!this.freqMap.has(node.freq)) this.freqMap.set(node.freq, new LFUDoublyLinkedList());
//       this.freqMap.get(node.freq).insertAtHead(node);
//     }
//   }
  
//   // Example Usage
//   let cache = new LFUCache(3);
//   cache.set(1, 1);
//   cache.set(2, 2);
//   cache.set(3, 3);
//   console.log(cache.get(1)); // 1
//   cache.set(4, 4);
//   console.log(cache.get(2)); // -1 (evicted)
  
// LRU Cache Implementation (JavaScript)
// class DLLNode {
//     constructor(key, value) {
//       this.key = key;
//       this.value = value;
//       this.prev = this.next = null;
//     }
//   }
  
//   class LRUCache {
//     constructor(capacity) {
//       this.capacity = capacity;
//       this.map = new Map(); // Stores key-node pairs
//       this.head = new DLLNode(null, null); // Dummy head
//       this.tail = new DLLNode(null, null); // Dummy tail
//       this.head.next = this.tail;
//       this.tail.prev = this.head;
//     }
  
//     get(key) {
//       if (!this.map.has(key)) return -1;
  
//       const node = this.map.get(key);
//       this.removeNode(node);
//       this.addNodeToFront(node);
//       return node.value;
//     }
  
//     set(key, value) {
//       if (this.map.has(key)) {
//         const node = this.map.get(key);
//         node.value = value;
//         this.removeNode(node);
//         this.addNodeToFront(node);
//       } else {
//         if (this.map.size === this.capacity) {
//           const tailPrev = this.tail.prev;
//           this.removeNode(tailPrev);
//           this.map.delete(tailPrev.key);
//         }
  
//         const newNode = new DLLNode(key, value);
//         this.addNodeToFront(newNode);
//         this.map.set(key, newNode);
//       }
//     }
  
//     addNodeToFront(node) {
//       node.next = this.head.next;
//       this.head.next.prev = node;
//       this.head.next = node;
//       node.prev = this.head;
//     }
  
//     removeNode(node) {
//       const prev = node.prev;
//       const next = node.next;
//       prev.next = next;
//       next.prev = prev;
//     }
//   }
  
//   // Example Usage
//   let cache = new LRUCache(3);
//   cache.set(1, 1);
//   cache.set(2, 2);
//   cache.set(3, 3);
//   console.log(cache.get(1)); // 1
//   cache.set(4, 4);
//   console.log(cache.get(2)); // -1 (evicted)

// সংক্ষেপে:
// 1. LFU Cache: কম ব্যবহারিত ডেটা দ্রুত সরানো হয়।
// 2. LRU Cache: বেশি পুরনো ডেটা দ্রুত সরানো হয়।

// এই কোডগুলো দ্বারা LFU ও LRU ক্যাশিং বাস্তবায়ন করা যায়।

// ক্যাশিং সিস্টেমের কিছু সাধারণ সমস্যা রয়েছে যা পারফরম্যান্স বাড়ালেও অনেক চ্যালেঞ্জ তৈরি করে। নিচে বাংলায় ক্যাশিং সমস্যাগুলো ব্যাখ্যা করা হলো:
// ১. ক্যাশ ইনভ্যালিডেশন (Cache Invalidation):
// * সমস্যা: মূল ডাটাবেসে পরিবর্তন ঘটলে ক্যাশে থাকা ডেটা পুরনো হতে পারে। ক্যাশ থেকে পুরনো বা ভুল ডেটা সরানো এবং নতুন ডেটা সংরক্ষণ করাকে ক্যাশ ইনভ্যালিডেশন বলা হয়।
// * কেন এটি কঠিন: কখন ক্যাশ পরিষ্কার বা আপডেট করতে হবে তা নির্ধারণ করা কঠিন। ভুল ইনভ্যালিডেশন সিস্টেমকে পুরনো ডেটা প্রদান করতে বাধ্য করে, আবার অতিরিক্ত ইনভ্যালিডেশন পারফরম্যান্স কমিয়ে দেয়।

// ২. ক্যাশ কনসিস্টেন্সি (Cache Consistency):
// * সমস্যা: ক্যাশের ডেটা সর্বদা মূল ডাটাবেসের সঙ্গে সামঞ্জস্যপূর্ণ থাকা নিশ্চিত করা। ক্যাশ কনসিস্টেন্সির ক্ষেত্রে দুই ধরণের সমস্যা দেখা যায়:
    // * স্ট্রং কনসিস্টেন্সি: ক্যাশ থেকে সবসময় সঠিক ও আপডেটেড ডেটা পাওয়া।
    // * ইভেন্টুয়াল কনসিস্টেন্সি: কখনো পুরনো ডেটা পাওয়া গেলেও পরে সঠিক ডেটা পাওয়া যাবে।
// কেন এটি কঠিন: স্ট্রং কনসিস্টেন্সি বজায় রাখতে প্রতিবার মূল ডাটাবেস পরিবর্তনের সঙ্গে ক্যাশ আপডেট করা প্রয়োজন, যা পারফরম্যান্স কমিয়ে দেয়।

// ৩. ক্যাশ এভিকশন নীতি (Cache Eviction Policy):
// * সমস্যা: যখন ক্যাশ পূর্ণ হয়, কোন ডেটা সরানো হবে তা নির্ধারণ করতে হয়। সাধারণ এভিকশন নীতির মধ্যে রয়েছে:
    // * LRU (Least Recently Used): সর্বশেষ ব্যবহৃত আইটেমগুলি সরানো হয়।
    // * LFU (Least Frequently Used): কম ব্যবহৃত আইটেম সরানো হয়।
    // * FIFO (First In, First Out): প্রাচীনতম আইটেমগুলো সরানো হয়।
// * কেন এটি কঠিন: সঠিক এভিকশন নীতি নির্ভর করে ব্যবহারের ধরণ অনুযায়ী। ভুল নীতি প্রয়োগে পারফরম্যান্স কমতে পারে।

// ৪. ক্যাশ মিস পেনাল্টি (Cache Miss Penalty):
// * সমস্যা: ক্যাশ মিস ঘটলে মূল ডেটাবেস থেকে ডেটা আনতে সময় বেশি লাগে। এটি সিস্টেমের পারফরম্যান্সে নেতিবাচক প্রভাব ফেলে।
// * কেন এটি কঠিন: বেশি ক্যাশ মিসের কারণে সিস্টেমের দ্রুত কাজ করার ক্ষমতা কমে যায়।

// ৫. ক্যাশ ওয়ার্ম-আপ (Cache Warm-Up):
// * সমস্যা: ক্যাশ প্রথমে খালি থাকে এবং বেশি মিস হওয়ার ফলে শুরুতে সিস্টেম ধীরগতিতে কাজ করে। এই পর্যায়কে ক্যাশ ওয়ার্ম-আপ বলা হয়।
// * কেন এটি কঠিন: ক্যাশ পুরা হতে কিছুটা সময় লাগে এবং এই সময়ে সিস্টেমের পারফরম্যান্স কমে যায়।

// ৬. ক্যাশ স্ট্যাম্পিড (Cache Stampede):
// * সমস্যা: অনেক ব্যবহারকারী একই সময়ে একই ডেটা ক্যাশ থেকে পেতে ব্যর্থ হলে মূল ডেটাবেসে চাপ পড়ে, যা সিস্টেমকে ধীর করে দেয়।
// * কেন এটি কঠিন: একই সময়ে অনেক অনুরোধের কারণে ডেটাবেস অপ্রয়োজনীয়ভাবে চাপপ্রাপ্ত হতে পারে এবং পারফরম্যান্স নষ্ট হতে পারে।

// ৭. মেমোরি ম্যানেজমেন্ট (Memory Management):
// * সমস্যা: মেমোরি সীমিত হওয়ায় ক্যাশের জন্য মেমোরি ব্যবস্থাপনা কঠিন হয়। ক্যাশ অনেক বেশি মেমোরি ব্যবহার করলে অন্যান্য সিস্টেমে প্রভাব ফেলতে পারে।
// * কেন এটি কঠিন: মেমোরি ব্যবহার কমানোর সময় সঠিকভাবে ক্যাশ মেমোরি ব্যবস্থাপনা করতে হয়।

// ৮. ডিস্ট্রিবিউটেড ক্যাশিং (Distributed Caching):
// * সমস্যা: একাধিক সার্ভারের মধ্যে ক্যাশ সিঙ্ক্রোনাইজ করা এবং ক্যাশ ডেটার সামঞ্জস্য বজায় রাখা কঠিন।
// * কেন এটি কঠিন: বিভিন্ন নোডের মধ্যে সমন্বয় এবং কনসিস্টেন্সি বজায় রাখতে পারফরম্যান্স ব্যাহত হয়।

// ৯. ডেটার আকার এবং গুণাগুণ (Data Size and Granularity):
// * সমস্যা: ক্যাশে রাখা ডেটার আকার এবং গুণমান নির্ধারণ করা। ছোট ডেটা ক্যাশ করলে ক্যাশ লুকআপ বেশি হতে পারে, আবার বড় ডেটা ক্যাশ করলে বেশি মেমোরি লাগতে পারে।
// * কেন এটি কঠিন: ডেটার আকার এবং ক্যাশ ব্যবহারের ধরন সঠিকভাবে ব্যালেন্স করতে হয়।

// ১০. নিরাপত্তা এবং ক্যাশ পয়জনিং (Security and Cache Poisoning):
// * সমস্যা: ক্যাশে ভুল বা ম্যালিসিয়াস ডেটা প্রবেশ করানোর সম্ভাবনা থাকে। একে ক্যাশ পয়জনিং বলা হয়।
// * কেন এটি কঠিন: ক্যাশ সিস্টেমে সঠিক সুরক্ষা বজায় রাখা প্রয়োজন, অন্যথায় ম্যালিসিয়াস ডেটা ব্যবহারকারীদের কাছে পৌঁছতে পারে।

// ক্যাশিং পারফরম্যান্স বাড়ালেও এসব সমস্যাগুলোর সমাধান করা কঠিন। সঠিকভাবে ব্যবস্থাপনা না করলে ক্যাশিং থেকে সঠিক সুবিধা পাওয়া কঠিন হয়ে পড়ে।