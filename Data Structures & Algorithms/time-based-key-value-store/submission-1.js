class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key))return "";
        let res = "";
        let values = this.keyStore.get(key);  // [[value, 1], [value, 3], [ value, 4]]
        let lo = 0;
        let hi = values.length-1;
        while(lo<=hi){
            let mid = Math.floor((lo+hi)/2);
            let val = values[mid];
            if(val[1] <= timestamp){
                res = val[0];
                lo = mid + 1;
            }else{
                hi = mid - 1;
            }
        }
        return res;
    }
}
