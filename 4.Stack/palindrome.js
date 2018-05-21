// dad, racecar, a man a plan a canal panama
// 스택을 이용해서 단어가 회문인지 검사

var Stack = require("./stackADT");

function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; i++) s.push(word[i]);

  var rword = "";
  while (s.length() > 0) rword += s.pop();

  if (word === rword) return true;
  else return false;
}

var word = "hello";
if (isPalindrome(word)) console.log(word);
else console.log("not palindrome");

word = "racecar";
if (isPalindrome(word)) console.log(word);
else console.log("not palindrome");
