let nums = [2, 6, 6, 6, 6, 3, 6, 6, 5];


function getSecondLargest(nums) {
    nums.sort(function (a, b) {
        return b - a;
    })

    let secondLargest = nums.find(
        function (sayi) {
            return sayi < nums[0];
    })

    return secondLargest;
}

console.log(getSecondLargest(nums));