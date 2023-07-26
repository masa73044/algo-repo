var numOfSubarrays = function (arr, k, threshold) {
  let result = [];

  let left = 0;
  let right = k - 1;
  let curSum = 0;

  for (let i = 0; i < k; i++) {
    curSum += arr[i];
  }

  let curArray = arr.slice(0, k);

  if (curSum / k >= threshold) {
    result.push(curArray);
  }

  for (let i = 0; i < arr.length; i++) {
    curSum -= arr[left];

    left++;
    right++;
    curSum += arr[right];
    if (curSum / k >= threshold) {
      result.push(arr.slice(left, right + 1));
    }
  }
  return result;

  // 0 2 = 6
  // 1 3 = 6
  // 2 4 = 9

  // 0  1 2 3 4 5 6 7
  // [2,2,2,2,5,5,5,8]
  // 2 2 2, 2 5 5,
};

// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

// Companies
// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays
// of size k and average greater than or equal to threshold.

// Example 1:

// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively.
// All other sub-arrays of size 3 have averages less than 4 (the threshold).

const arr = [2, 2, 2, 2, 5, 5, 5, 8];
const k = 3;
const threshold = 4;

console.log(numOfSubarrays(arr, k, threshold));
