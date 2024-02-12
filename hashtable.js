var twosum = function(nums,target) {
    const obj = {};
    for(let i = 0; i < nums.length; i++ ) {
        if(obj[nums[i]] !== undefined) {
            return [obj[nums[i]],i];
        } else {
            obj[target - num[i]]=i;
        }
    }

}

const nums = [2,0,3,4,6,9]
const target = 6

console.log(twosum(nums,target))