// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const myName = 'Abir';

let marks = 50;

const products = [
  { name: 'iPhone12', color: ['black', 'blue', 'white'], price: 150000 },
  { name: 'Samsung', color: ['black', 'red', 'white'], price: 100000 },
  { name: 'OnePlus', color: ['black', 'red', 'blue'], price: 90000 },
];

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।

const [p, q, r, s] = products;

// const { name, price } = s;

// ============= Problem: Optional Chaining =============

const result = `Hello my score is ${marks} and my ${p?.name} price is ${r?.price}`;
// console.log(result);

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।

const multiplyByFive = (num = 9) => {
  console.log(num * 5);
};
multiplyByFive(7);
// console.log(multiplyByFive(3));

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো

const addTwoPara = (num1, num2) => (num1 + 2) * (num2 + 2);
console.log(addTwoPara(2, 3));
// addTwo(2, 3);

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।

const multiplyThree = (num1, num2, num3) => num1 * num2 * num3;
// multiplyThree(2, 3, 5);
console.log(multiplyThree(8, 3, 5));

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।

const addTwo = (num1, num2) => {
  const res1 = num1 + 2;
  const res2 = num2 + 2;
  const result = res1 * res2;
  console.log(result);
};

addTwo(2, 3);

// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।

// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

const numbers = [45, 4, 89, 22, 3, 12, 1, 7];

const mappedResult = numbers.map(num => num * 5);
console.log(mappedResult);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

// const filterOdd = numbers.map(num => {
//   if (num % 2) {
//     return num;
//     // console.log(num);
//   }
// });
const filterOdd = numbers.filter(num => num % 2);

// filterOdd();
console.log('Odd Numbers:', filterOdd);

// const oddNumbers = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13].filter(
//   number => number % 2 !== 0
// );
// console.log(oddNumbers);

// ============== Problem =================

var rsl = { even: [], odd: [] };

[1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13].forEach(function (
  val,
  key,
  arr
) {
  var wrd = val % 2 ? 'odd' : 'even';
  rsl[wrd][rsl[wrd].length] = val;
  //   console.log(rsl[wrd][rsl[wrd].length]);
});

console.log(rsl);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

const phones = [
  { name: 'iPhone12', color: ['black', 'blue', 'white'], price: 150000 },
  { name: 'Samsung', color: ['black', 'red', 'white'], price: 5000 },
  { name: 'OnePlus', color: ['black', 'red', 'blue'], price: 90000 },
];

const findPrice = phones.find(value => value.price === 5000);
console.log(findPrice);

// const filterPrice = phones.filter(value => value.price === 5000);
// console.log(filterPrice);

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

// ==================================================================

// Array Methods

// map => Return a new Array of all Element after performing a task.

// forEach => Loop through all elements in an Array but doesn't Return a new Array.

// filter => Return a new Array of matching elements. If nothing found based on    the condition return an empty Array.

// find => Return only the first element based on the condition not in Array. If nothing found based on the condition return undefined.

// =====================================================================

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

const smartPhones = {
  name: 'iPhone12',
  color: ['black', 'blue', 'white'],
  price: 150000,
  spec: {
    memory: '8Gb',
    storage: '256Gb',
  },
};

const { storage: st, memory } = smartPhones.spec;
console.log(st, memory);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।

//==================Problem======================

const random = [45, 4, 89, 22, 3, 12, 1, 7];

const [one, two, three] = random;
console.log(three);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।

const add = (num1, num2, num3 = 7) => num1 + num2 + num3;

console.log(add(2, 3));

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const iPhones = {
  name: 'iPhone12',
  color: ['black', 'blue', 'white'],
  price: 150000,
  spec: {
    memory: '8Gb',
    storage: '256Gb',
    camera: {
      front: '12MP',
      rear: '20MP',
      size: [
        {
          iphone11: {
            front: '10MP',
            rear: '15MP',
          },
        },
        {
          iphone12: {
            front: '20MP',
            rear: '30MP',
          },
        },
      ],
    },
  },
};

// const { rear } = iPhones.spc.camera.size[1].iphone12;
const { rear } = iPhones?.spc?.camera?.size[1]?.iphone12;
console.log(rear);
