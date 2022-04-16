function productOfArray(arrNums) {
  let i = arrNums.length - 1;
  if (i === -1) {
      return 1;
  }
  
  return arrNums.pop() * productOfArray(arrNums);
}

module.exports = productOfArray;