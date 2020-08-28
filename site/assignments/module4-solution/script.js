

(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (var name in names) {
  
    var firstLetter = names[name].substring (0,1).toLowerCase()

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }
  
})(window);
