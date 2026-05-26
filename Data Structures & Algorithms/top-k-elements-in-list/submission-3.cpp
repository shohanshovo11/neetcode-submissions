class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        // <frequency, element>
        multimap<int, int, greater<int>>mp;
        for(int i=0; i<nums.size(); i++){
            int src = nums[i];
            int j=i;
            int cnt = 0;
            while(nums[j]==src){
                cnt++;
                j++;
            }
            i=j-1;
            mp.insert({cnt, src});
        }
        vector<int>res;
        int cnt = 0;
        for(auto ele: mp){
            res.push_back(ele.second);
            cnt++;
            // cout<<ele.first<<" "<<ele.second<<endl;
            if(cnt==k)break;
        }
        return res;
    }
};
