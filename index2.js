// var twoSum = function (nums, target) {
//         let a = 0
//         let array = []
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = 0; j < nums.length; j++) {
//                 console.log(`i ${i} num[i] ${nums[i]}`)
//                 console.log(`j ${j} num[j] ${nums[j]}`)
//                 if (nums[j] + nums[i] === target) {
//                     if (!(j === i)) {
//                         return [i, j]
//                     }
//                 }
//             }
//         }
//         // return array
//     }
// ;
// var twoSum = function (nums, target) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         console.log('target : ' , target)
//         console.log(`nums[${i}]: ` , nums[i])
//         console.log(complement)
//         if (map.has(complement))
//             console.log('get',[map.get(complement), i])
//         //     return [map.get(complement), i]
//
//         map.set(nums[i], i)
//         console.log(map)
//     }
//
// };
// console.log(
//     twoSum([2, 5, 5, 11], 10)
// )
var addTwoNumbers = function (l1, l2) {
    let reverse_l1 = []
    for (let i = l1.length - 1; i >= 0; i--) {
        reverse_l1[l1.length - (i + 1)] = l1[i]
    }
    let reverse_l2 = []
    for (let j = l2.length - 1; j >= 0; j--) {
        reverse_l2[l2.length - (j + 1)] = l2[j]
    }
    const l1_join = +reverse_l1.join("");
    const l2_join = +reverse_l2.join("");
    const total = l1_join + l2_join
    let result = []
    const totalArray = String(total).split('')
    for (let x = totalArray.length - 1; x >= 0; x--) {
        result[totalArray.length - (x + 1)] = Number(totalArray[x])
    }
    return result
};
console.log(
    addTwoNumbers([2, 4, 3], [5, 6, 4])
)
