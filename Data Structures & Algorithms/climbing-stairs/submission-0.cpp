class Solution {
public:
int dp[100][100];
    int returnCount(int whereAmI, int toReach){
        if(dp[whereAmI][toReach]!=-1)return dp[whereAmI][toReach];
        if(whereAmI == toReach)return 1;
        else if(whereAmI > toReach) return 0;
        return dp[whereAmI][toReach] = returnCount(whereAmI + 1, toReach) + returnCount(whereAmI + 2, toReach);
    }
    int climbStairs(int n) {
        memset(dp, -1, sizeof(dp));
        return returnCount(0, n);
    }
};
