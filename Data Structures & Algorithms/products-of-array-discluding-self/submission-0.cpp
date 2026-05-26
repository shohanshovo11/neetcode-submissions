class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int>leftToRight(n);
        vector<int>rightToLeft(n);
        leftToRight[0]=leftToRight[n-1]=rightToLeft[0]=rightToLeft[n-1]=INT_MAX;
        int product = 1;
        for(int i=1; i<n; ++i){
            product*=nums[i-1];
            leftToRight[i]=product;
        }
        product = 1;
        for(int i=n-2; i>=0; --i){
            product*=nums[i+1];
            rightToLeft[i]=product;
        }
        vector<int>res;
        for(int i=0; i<n; i++){
            int product = 1;
            if(leftToRight[i]!=INT_MAX)product*=leftToRight[i];
            if(rightToLeft[i]!=INT_MAX)product*=rightToLeft[i];
            res.push_back(product);
        }
        return res;
    }
};
