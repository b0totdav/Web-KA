// All or Nothing
function possiblyPerfect(key,answers) {
    // kód helye
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    numbers.sort(function(a,b){return(a-b)});
    console.log(numbers)
    let median=numbers[Math.floor(numbers.length/2)]
    let sum=0;
    for(let i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    let mean=Math.floor(sum/numbers.length);
    console.log(mean);
    console.log(median);
    console.log(sum);
    if(mean>median)
    {
        return "mean"
    }else if(mean<median){
        return "median"
    }else{
        return "same"
}
}
console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    let len = arr.length;
 if(len % 2 == 0) {
   let first = arr.slice(0, len/2)
   let scd = arr.slice(len/2, len)
   return [...scd, ...first];
 }
 else {
   let mid = arr[Math.floor(len/2)]
   let first = arr.slice(0, len/2);
   let scd = arr.slice((len/2) + 1, len);
   return [...scd, mid, ...first];
 }
  }

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
