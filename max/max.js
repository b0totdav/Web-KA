function adjacentElementsProduct(array) {
    let szorzat+=0;
    let temp+=0;
    for(let i=0;i<array.length;i++)
    {
      try
      {
        temp=array[i]*array[i-1];
        if(temp>szorzat)
        {
          szorzat=temp;
          temp=0
        }
        temp=array[i]*array[i+1];
        if(temp>szorzat)
        {
          szorzat=temp;
          temp=0
        }
      }catch{}
    }
      return szorzat
  }