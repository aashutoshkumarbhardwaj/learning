// amalgom numbver - assign1

// function anagm(s1,s2){
//     let  str =s1.split("").sort().join("");
//      let str2 =s2.split("").sort().join("");
    
//      return str==str2;
   
// }

//Expense Tracker

// function addExpense(expense) {
//     let categoryMap = {};

//     for (let i = 0; i < expense.length; i++) {
//         const category = expense[i].category;
//         const amount = expense[i].amount;
//         const date = expense[i].date;

//         if (categoryMap[category]) {
//             categoryMap[category].total += amount;
//             categoryMap[category].count += 1;
//             categoryMap[category].dates.push(date);
//         } else {
//             categoryMap[category] = {
//                 total: amount,
//                 count: 1,
//                 dates: [date]
//             };
//         }
//     }

//     const result = [];
//     for (let category in categoryMap) {
//         result.push({
//             category: category,
//             totalSpent: categoryMap[category].total,
//             count: categoryMap[category].count,
//             dates: categoryMap[category].dates
//         });
//     }

//     return result;
// }

// largest number in array



    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //  console.log(Math.max(...arr));

//medium level problem

//number of vowelsa in a sentence


//     let strings="my ee is praveen kumar";
    
//     let count =0;
//     let vowels ='aeiouAEIOU';
//     for(let i=0;i<strings.length;i++){
//         if(vowels.includes(strings[i])){
//             count++;
//         }
//     }
//    console.log(count);

//palllidrome string
//  function isPalindrome(str) {
//     str=str.split("").toLowerCase().join("");
//     let reverse= str.reverse();
//     if(str==reverse){
//         return true;
//     }
//     else{
//         return false;
//     }
//  }

//
// function timetaken(){
//     let sum=0;
//     let nums=10000;
//     let n=Date.now();
//     for ( let i=0;i<nums;i++){
//         sum+=i
//     }
//     let end=Date.now();
//     let time=(end-n)/1000;
//     console.log("Time taken to execute the code is "+time+" seconds");
// }

