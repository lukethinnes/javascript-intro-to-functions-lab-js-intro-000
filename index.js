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

  switch (string) {
    case (string)==='hello':
      return "I can't hear you!";
    case (string)==='HELLO':
      return "YES INDEED!";
    case (string)==='I love you, Grandma.':
      return "I love you, too.";
    default:
      return"Nope";
  }
}
