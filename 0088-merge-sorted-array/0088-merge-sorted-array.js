/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1 배열 뒤부터 넣기 (큰 순으로 nums1에 뒤부터 넣기)
    let i = m - 1;
    let j = n - 1;
    let recentIdx = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[recentIdx--] = nums1[i--];
        } else {
            nums1[recentIdx--] = nums2[j--];
        }
    }
};
