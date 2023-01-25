module.exports = function check(str, bracketsConfig) {

  const brackets = [];
  for (let i=0; i<str.length; i++) {
    for (let bracket of bracketsConfig) {
      switch (str[i]) {
        case bracket[1]:
          if (bracket[0] === brackets.at(-1)) { 
            brackets.pop();
            break;
          };
        case bracket[0]:
          brackets.push(bracket[0]);
          break;
      };
    };
  };
  if (brackets.length === 0) { return true; };
  return false;
}
