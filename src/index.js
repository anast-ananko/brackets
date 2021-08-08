module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let result = [];

  for (let bracket of str) {
      let index = brackets.indexOf(bracket);
      if (index % 2 === 0) {
          if (bracket === brackets[index + 1] && result[result.length - 1] === index){
              result.pop();
          } else if (bracket === brackets[index + 1] && result[result.length - 1] !== index) {
              result.push(index);
          }
          else{
              result.push(index);
          }
      } 
      else {
          if (result.pop() !== index-1){
              return false;
          }
      }
  }
  return result.length === 0;
}
