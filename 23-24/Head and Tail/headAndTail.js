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

  console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ] ), [ 4, 5, 3, 1, 2 ]);
  console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
  console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);