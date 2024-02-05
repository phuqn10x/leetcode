var removeDuplicates = function (nums) {
    let i
    let j
    let d
    for (i = 0; i < nums.length; i++) {
        d = 0
        console.log("run", i)
        for (j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                if (nums[j] === nums[i + 1]) {
                    nums.splice(j, 1)
                    // if(nums[j] === nums[i - 1]){
                    //     nums.splice(j, 1)
                    // }
                }
                if (nums[j] === nums[i - 1]) {
                    nums.splice(j, 1)
                    // if(nums[j] === nums[i + 1]){
                    //     nums.splice(j, 1)
                    // }
                }
            }else{
                nums.splice(i, 1)
            }
        }
    }
}
const expectedNums = [-100, -100, -100, -100, -100, -100, -100,-100,-100,-100,-100,-100]
// const expectedNums = [-40,-40,-40,-40,-40,-40]
// const expectedNums = [1,1,1,1]

// const expectedNums = [1,1,2]
// const expectedNums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// const expectedNums = [0,0,0,0,3]
removeDuplicates(expectedNums)


// var k = removeDuplicates(nums)

console.log(expectedNums)
// document.getElementById('root').innerHTML = removeDuplicates()
