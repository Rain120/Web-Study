/*
请用 javascript 实现一个函数 verify(text), 检查字串里面的括号是否有正确嵌套 
例如:
verify("---(++++)----")                         -> 1
verify("")                                      -> 1
verify("before ( middle []) after ")            -> 1
verify(") (")                                   -> 0
verify("} {")                                   -> 1 //no, this is not a mistake.
verify("<(   >)")                               -> 0
verify("(  [  <>  ()  ]  <>  )")                -> 1
verify("   (      [)")                          -> 0
*/

function couple(str) {
  switch (str) {
    case ")":
      return "(";
    case "}":
      return "{";
    case "{":
      return "}";
    case "]":
      return "[";
    case ">":
      return "<";
    default:
      return str;
  }
}
function verify(str) {
  var strs = str.match(/[\(\)\{\}\[\]\<\>]/g);
  var ret = [];
  var item = "";
  if (strs) {
    for (var i = 0; i < strs.length; i++) {
      if (ret.length > 0 && couple(strs[i]) == ret[ret.length - 1]) {
        item = ret.pop();
        continue;
      }
      ret.push(strs[i]);
    }
  }
  if (ret.length) {
    console.log(0);
  } else {
	console.log(1);
  }
}
verify("before ( middle []) after ") 
