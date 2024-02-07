function meanVsMedian(numbers) {
    numbers.sort(function(a,b){return a-b});
    let median = numbers[Math.floor(numbers.length/2)]
      let sum=0;
      for(let i=0; i<numbers.length; i++)
      {
        sum+=numbers[i]
      }
      let avg=sum/numbers.length
      avg=Math.floor(avg)
      
      if(median<avg)
      {
        return "mean"
      }else if(median>avg)
      {
        return "median"  
      }else{
        return "same"
      }
    }