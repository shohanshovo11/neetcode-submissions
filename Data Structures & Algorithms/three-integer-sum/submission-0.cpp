class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int n = nums.size();
        map<string, bool>hash;
        sort(nums.begin(), nums.end());
        vector<vector<int>>ans;
        for(int i=0; i<n-2; i++){
            for(int j=i+1; j<n-1; j++){
                for(int k=j+1; k<n; k++){
                    string hashValue = "";
                    hashValue += to_string(nums[i]);
                    hashValue += to_string(nums[j]);
                    hashValue += to_string(nums[k]);
                    if(nums[i]+nums[j]+nums[k]==0 && hash.find(hashValue)==hash.end()){
                        vector<int>tmp;
                        tmp.push_back(nums[i]);
                        tmp.push_back(nums[j]);
                        tmp.push_back(nums[k]); 
                        string hashValue = "";
                        hashValue += to_string(nums[i]);
                        hashValue += to_string(nums[j]);
                        hashValue += to_string(nums[k]);
                        hash[hashValue] = true;
                        ans.push_back(tmp);
                    }
                }
            }
        }
        return ans;
    }
};
