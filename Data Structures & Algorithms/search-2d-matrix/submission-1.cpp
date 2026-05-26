class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int lo = 0, hi = matrix.size()-1;
        while(lo<=hi){
            int mi = (lo+hi)/2;
            int loRange = matrix[mi][0], hiRange = matrix[mi][matrix[mi].size()-1];
            if(target>=loRange && target<=hiRange){
                // possibility ase pawar
                int n = matrix[mi].size();
                int low = 0, high = n-1;
                while(low<=high){
                    int mid = (low+high)/2;
                    if(matrix[mi][mid]==target)return true;
                    else if(matrix[mi][mid]<target)low = mid+1;
                    else high = mid - 1;
                }
                return false;
            }else if(target<loRange){
                hi = mi - 1;
            }else{
                lo = mi + 1;
            }
        }
        return false;
    }
};
