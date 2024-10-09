// function add(a,b) {
//     return a+b;
// }

// function sub(a,b) {
//     return a-b;
// }

// module.exports={
//     add,sub
// }

function addTwoNum(a, b) {
    return a + b;
  }
  function subTwoNum(a, b) {
    return a - b;
  }
  
  // module.exports = "Janak";
  // module.exports = {addTwoNum};
  // module.exports =    {addTwoNum, subTwoNum}
  module.exports =    {add: addTwoNum, sub: subTwoNum}
  
  // module.exports = "harsh"   // ye galt hai
  
  // {} => Interpolation