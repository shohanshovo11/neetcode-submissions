// Brute Force
// class Solution {
// public:
//     vector<int> twoSum(vector<int>& nums, int target) {
//         int n = nums.size();
//         vector<int>ans;
//         for(int i=0; i<n-1; i++){
//             for(int j=i+1; j<n; j++){
//                 if(nums[i]+nums[j]==target){
//                     ans.push_back(i);
//                     ans.push_back(j);
//                     return ans;
//                 }
//             }
//         }
//     }
// };

// Two pointer O(n) but the solution will be bigger as there can be negative, positive number.
// which is difficult to handle, positive-positive, positive-negative, negative-negative

// Hash Map O(n)
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        vector<int>ans;
        unordered_map<int, int>hm;
        for(int i=0; i<n; i++){
            int needed = target - nums[i];
            if(hm.find(needed)==hm.end()){
                if(hm.find(nums[i])==hm.end()){
                    hm[nums[i]]=i;
                }
            }else{
                return {hm[needed], i};
            }
        }
    }
};