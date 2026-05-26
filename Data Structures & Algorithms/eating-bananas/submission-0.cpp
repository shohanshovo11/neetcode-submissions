class Solution {
public:
    bool isValid(vector<int>& piles, int h, int k){
        int reqHr = 0;
        for(int i=0; i<piles.size(); i++){
            reqHr+=(ceil(piles[i]/(k*1.0)));
        }
        if(reqHr>h)return false;
        return true;
    }
    int minEatingSpeed(vector<int>& piles, int h) {
        sort(piles.begin(), piles.end());
        int lo = 1;
        int hi = *max_element(piles.begin(), piles.end());
        int ans = -1;
        while(lo <= hi){
            int mid = (hi + lo)/2;
            if(isValid(piles, h, mid)){
                ans = mid;
                hi = mid-1;
            }else{
                lo = mid + 1;
            }
        }
        return ans;
    }
};
