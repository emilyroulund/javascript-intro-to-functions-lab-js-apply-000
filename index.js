function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  var lowercase = string
  if (lowercase.toLowerCase()===string) 
  return "I can't hear you!"
  else 
  return ;
}
function sayHiToGrandma(string){
  if (string.toUpperCase()===string) 
  return "YES INDEED!";
}
function sayHiToGrandma(string){
  if (string === "I love you, Grandma.")
  return "I love you, too."
}