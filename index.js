function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {

  var lowercase = '.hello!'
  var uppercase = '.HELLO!'
  var mixedCase = '.Hi there!'

  switch (string) {
    case (string)===lowercase:
      return "I can't hear you!";
      break;
    case (string)===uppercase:
      return "YES INDEED!";
      break;
    case (string)==="I love you, Grandma.":
      return "I love you, too.";
      break;
  }
}
