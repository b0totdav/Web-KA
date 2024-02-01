function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum=0;
    for(let i=0; i<marks.length; i++)
    {
      sum+=marks[i]
    }
    let avg=sum/marks.length
    avg=parseInt(Math.floor(avg))
    return avg
  }
console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);