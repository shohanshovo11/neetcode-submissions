class Solution {
public:
    bool isAnagram(string s, string t) {
        unordered_map<char, int>mp;
        if(s.size()>=t.size())swap(s,t);
        for(auto &c: t)mp[c]++;
        for(auto &c: s){
            mp[c]--;
        }
        for(auto x: mp){
            if(x.second>0){
                return false;
            }
        }
        return true;
    }
};
