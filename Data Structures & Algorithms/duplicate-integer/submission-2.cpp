// Brute force O(n^2)
// class Solution {
// public:
//     bool hasDuplicate(vector<int>& nums) {
//         int n = nums.size();
//         for(int i=0; i<n; i++){
//             for(int j=i+1; j<n; j++){
//                 if(nums[i]==nums[j])return true;
//             }
//         }
//         return false;
//     }
// };

// Hash Map O(n)
class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int, bool>hm;
        for(auto &x: nums){
            if(hm.find(x)!=hm.end())return true;
            hm[x]=true;
        }
        return false;
    }
};
