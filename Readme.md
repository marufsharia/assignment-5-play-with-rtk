## এসাইনমেন্ট রিকুয়ারমেন্ট:

দেখতে দেখতে চলে আসলো আরো একটি এসাইনমেন্ট। এবারের এসাইনমেন্ট আমরা করবো **redux toolkit** এবং **vanilla node js** দিয়ে। এসাইনমেন্ট শুরু করার আগে আপনি যদি পার্ট বাই পার্ট চিন্তা করেন তাহলে দেখবেন এসাইনমেন্ট অনেক সহজ হয়ে গেছে। এই এসাইনমেন্টের জন্যে আপনাকে আমরা একটি API দিয়ে দেবো, সেটি ব্যবহার করে আপনাকে এসাইনমেন্টটি করতে হবে।

#### এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ এই এসাইনমেন্টটি শুধুমাত্র **redux toolkit** দিয়ে করতে হবে। এজন্য যেভাবে এই মডিউলে vanilla node js প্রোজেক্টে **@reduxjs/toolkit** প্যাকেজ install করে প্রোজেক্টটি দেখানো হয়েছে, সেভাবেই আপনারা একটি প্রজেক্ট সেটআপ করে নিবেন। কোনো প্রকার UI based framwork দিয়ে করা যাবে না।

✓ আমাদের দেয়া api থেকে একটি Object আপনাকে async thunk function লিখে fetch করে নিয়ে আসতে হবে। প্রতিটি রিকুয়েস্টে আলাদা আলাদা একটি Object পাবেন।

```
API - http://localhost:9000/videos
```

✓ এই Object এর **tags** নামে একটি প্রোপার্টি আছে যেখানে কিছু tag আছে। এই tag গুলো ব্যবহার করে আরো একটি async thunk dispatch করতে হবে যেটি সার্ভার থেকে search করে রিলেটেড ভিডিও গুলো নিয়ে আসে। যেমনঃ

```
http://localhost:9000/videos?tags_like=javascript&tags_like=react
```

✓ উপরের API থেকে যেই Array of Object পাবেন, সেই Object গুলোর ভেতরে views নামে একটি Property থাকবে, সেই property এর ভিত্তিতে Object গুলো সাজিয়ে Console এ লগ করতে হবে। যেগুলোর ভিউ বেশি থাকবে সেগুলো প্রথমে দেখাবে, এবং সব শেষে কম যেটি সেটি থাকবে।

✓ Console এ লগ করার জন্যে অবশ্যই **redux-logger** এই middleware টি ব্যবহার করতে হবে।

✓ মনে রাখবেন, একবার node application run করে দিলেই দুটি API request sequentially পর পর রান করতে হবে অর্থাৎ প্রথম রিকুয়েস্টে যেই ট্যাগ গুলো পাবো সেই ট্যাগ দিয়ে ‘tags_like’ সার্চ দিয়ে বাকি রিলেটেড ভিডিও গুলো নিয়ে আসতে হবে।

## কিভাবে সাবমিট করবেন:

সবচেয়ে সহজে বুঝার জন্য [এই ভিডিওটি](https://learnwithsumit.com/courses/think-in-a-redux-way/how-to-submit-assignment) দেখে ফেলুন।

এসাইনমেন্টে আপনাকে মাত্র দুইটা জিনিস সাবমিট করতে হবে।

1. **GitHub private repository link:** অবশ্যই সঠিক গিটহাব রিপোজিটরি লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা।

2. **Live site link:** এই এসাইনমেন্টের ক্ষেত্রে Live site link জমা দিতে হবেনা এবং Netlify তে হোস্ট করতে হবেনা।

**সাবমিট একবারই করতে পারবেন তাই ভালো করে দেখে সাবমিট করবেন।**

## GitHub private repository কিভাবে তৈরি করবেন:

Github Private repositoty তৈরি করতে [এইখানে ক্লিক করুন](https://classroom.github.com/a/4Z7OmZyO) অথবা ব্রাউজারে এই লিংকে **https://classroom.github.com/a/4Z7OmZyO** ভিজিট করুন। লিংকে যাওয়ার পরে **Accept this assignment** এ ক্লিক করুন। সর্বোচ্চ ১মিনিট পরে পেইজটি রিলোড দিলে আপনি আপনার রিপোজেটরি লিংক পেয়ে যাবেন। মনে রাখবেন, আপনাকে এই লিংকটি আমাদের প্লাটফর্মে সাবমিট করতে হবে। না বুঝলে উপরে বলা ভিডিও টিউটোরিয়ালটি দেখে নিন।

## এসাইনমেন্ট মার্কস পলিসি:

আপনি নির্ধারিত সময়ে এসাইনমেন্ট জমা দিলে এবং সব কিছু সঠিকভাবে করলে সম্পূর্ণ মার্ক পাবেন। এর পরে জমা দিলে আপনার মার্ক নিচের নিয়মে কাটা যাবে -

1. ডেডলাইনের পরে এক ঘণ্টার মধ্যে জমা দিলে 10% মার্ক কাটা যাবে।
2. ডেডলাইনের পরে এক ঘণ্টার বেশি কিন্তু 24 ঘণ্টার মধ্যে জমা দিলে 30% মার্ক কাটা যাবে।
3. ডেডলাইনের পরে 24 ঘণ্টার বেশি পরে জমা দিলে 50% মার্ক কাটা যাবে।
4. কোর্স ডিউরেশনের পরে আমরা এসাইনমেন্ট গ্রহণ করবো না।

অবশ্যই কোর্স চলাকালিন সময়ে এসাইনমেন্ট জমা দিতে হবে। কোর্সের ডিউরেশন শেষ হয়ে গেলে তার পরে আপনি এসাইনমেন্টে জমা দিলে এসাইনমেন্টের মার্ক পাবেন না।

## সাবমিট করার পর কোড পরিবর্তন:

আপনি ভেবে নিতে পারেন আপনি ওয়েবসাইটে সঠিক সময়ে এসাইনমেন্ট সাবমিট করে নীরবে পরে গিটহাবে কোড পুশ করতে থাকবেন! আপনার গিটহাবের সর্বশেষ কমিট দেখলেই আমরা বুঝতে পারবো আপনি কখন কোড আপডেট করেছেন। সে অনুযায়ী আমরা আপনার মার্ক কেটে নিবো। তাই এসাইনমেন্ট এর সময় পার হবার পরে আমরা আশা করবো আপনি চালাকি করে আর কোড পুশ করবেন না আপনার রিপোজিটরিতে। এটা করলে আপনার সম্পূর্ণ মার্ক কাটা যেতে পারে।

## এসাইনমেন্ট মার্কস কবে পাবেন:

আমরা সর্বোচ্চ ৭ দিনের ভিতরে এসাইনমেন্টের মার্ক দিয়ে দেওয়ার চেষ্টা করবো। ক্ষেত্র বিশেষে একটু দেরি হতে পারে কারো কারো মার্ক পেতে।
#   a s s i g n m e n t - 5 - p l a y - w i t h - r t k  
 