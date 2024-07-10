function threeSum(arr, target) {
// write your code here
	 let closestSum = Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = 0, right = arr.length - 1;
        while (left < right) {
            let currentSum = arr[i] + arr[left] + arr[right];
            
            // If this sum is closer to the target than the previous closest sum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Adjust the pointers
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If the current sum is exactly equal to the target
                return currentSum;
            }
        }
    }

    return closestSum;

  
}

module.exports = threeSum;
