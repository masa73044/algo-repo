var canPartition = function (nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);

  // If the total sum is odd, we cannot partition into two equal subsets
  if (totalSum % 2 !== 0) {
    return false;
  }

  const subsetSum = totalSum / 2;
  const dp = Array(subsetSum + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let j = subsetSum; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }
  console.log(dp);

  return dp[subsetSum];
};

const nums = [1, 5, 11, 5];

console.log(canPartition(nums));

var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (target > sum || (sum + target) % 2 === 1) {
    return 0;
  }
  let subSetSum = Math.floor((sum + target) / 2);
  if (subSetSum < 0) {
    return 0;
  }
  let dp = new Array(subSetSum + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = subSetSum; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[subSetSum];
};

console.log(findTargetSumWays([1, 2, 3, 4, 5], 3));
