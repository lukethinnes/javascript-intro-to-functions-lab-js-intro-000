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

var lowercase = 'hello!'
var uppercase = 'HELLO!'
var mixedCase = 'Hi there!'

function sayHiToGrandma(string) {
  switch (string) {
    case (string)===lowercase:
      return "I can't hear you!";
    case (string)===uppercase:
      return "YES INDEED!";
    case (string)===mixedCase:
      return "I love you, too."
  }
}
