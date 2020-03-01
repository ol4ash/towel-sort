
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result
  if((matrix)&&(matrix.length>0)){
    result=matrix[0];
      for (let i=1; i<matrix.length; i++){
        if (i%2==0){
          result=result.concat(matrix[i])
        }
        if (i%2!=0){
          result=result.concat(matrix[i].reverse())
        }
      }
  }
  else result=[]  
  return result;
}
