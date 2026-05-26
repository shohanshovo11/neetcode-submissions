#include <string>
class Solution {
public:

    string encode(vector<string>& strs) {
        string res = "";
        for(auto &x: strs){
            res += to_string(x.size()) + "#" + x;
        }
        return res;
    }

    vector<string> decode(string s) {
        vector<string>res;
        for(int i=0; i<s.size(); i++){
            string dig = "";
            int j=i;
            while(s[j]!='#'){
                dig+=s[j];
                j++;
            }
            j++;
            int num = stoi(dig);
            string str = "";
            int boundary = num + j;
            for(;j<boundary; j++){
                str+=s[j];
            }
            res.push_back(str);
            i=j-1;
        }
        return res;
    }
};
