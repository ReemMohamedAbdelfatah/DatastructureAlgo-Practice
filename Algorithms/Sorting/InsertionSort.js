function InsertionSort (data) {
  let key = 0;
  let j = 0;
  for(let i=1;i<data.length;i++) {
     key = data[i];
      for(j = i-1 ; j>=0; --j)
      {
        if(key < data[j])
        {
          data[j+1] = data[j];
        }
        else {
          break;
        }
      }
      data[j+1] = key;
      console.log(data)
  }
}

InsertionSort([3,2,9,4,1]);

