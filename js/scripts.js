function getWords(number) {
  var singles = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};
  return singles[number];
}


jQuery(document).ready(function() {
  $("#word").focus();
  $("#anagram").submit(function(event) {

    event.preventDefault();
  });
});
