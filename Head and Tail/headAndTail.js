function swapHeadAndTail(arr) {
    let head;
    let tail;
    let mid;
    let tomb;
    if(arr.length%2!=0)
    {
        mid=arr[Math.round(arr.length/2)-1]
        delete arr[Math.round(arr.length/2)-1];
    }
    for(let i=0;i<arr.length/2;i++){
      head[i].add(arr[i])
    }
    for(let i=arr.length/2 ;i<arr.length;i++){
        tail[i].add(arr[i])
      }
    if(arr.length%2!=0)
    {
        tail.forEach(element => {
            tomb.add(element)
        });
        tomb.add(mid);
        head.forEach(element => {
            tomb.add(element)
        });
        return tomb;
    }else{
        tail.forEach(element => {
            tomb.add(element)
        });
        head.forEach(element => {
            tomb.add(element)
        });
        return tomb;
    }
  }

  console.log(tomb)