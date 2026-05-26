class Solution {
public:
    bool isPalindrome(string s) {
        int i=0, j=s.size()-1;
        while(i<j){
            char c1 = tolower(s[i]);
            char c2 = tolower(s[j]);
            if(!isalnum(c1)){
                i++;
            }
            else if(!isalnum(c2)){
                j--;
            }
            else if(c1==c2){
                i++;
                j--;   
            }else{
                return false;
            }
        }
        return true;
    }
};
