const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  let arrIt = arrayItems
  let row = rowsPerPage
  if(row === null || row === undefined){
    return 1
  }
  else if(arrIt === null || arrIt === undefined){
    return undefined
  }
  else if(row === 0){
    return 1
  }else{
    return Math.ceil(arrIt.length/row)
  }
}


module.exports = totalPages
