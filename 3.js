//Given an array of intervals, merge the overlapping intervals, and return and array of the resulting invervals. 
const interval1 = [[1,4],[2,6],[8,10],[15,20]];
const interval2 = [[1,2],[2,7]]


const mergeIntervals = (interval) => {
    for (let i = 0; i < interval.length-1; i++) {
        if (Math.max(...interval[i]) >= Math.min(...interval[i+1])) {
            const mergedArray = [[Math.min(...interval[i]),Math.max(...interval[i+1])]]
            interval.splice(0, 2); //remove merged elements
            console.log(mergedArray.concat(interval))
        }
    }
    }

mergeIntervals(interval1);
mergeIntervals(interval2);