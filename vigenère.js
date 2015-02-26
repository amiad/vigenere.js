// encode/decode text by Vigenère cipher
// vigenère.js by Amiad
// Released under GPL license

var limitCode = 2000;

function encode(text, key) {
  return encodeDecode(text, key, false);
}

function decode(text, key) {
  return encodeDecode(text, key, true);
}

function encodeDecode(text, key, decode) {
  var output = '';
  var operation = decode ? -1 : 1;  
  
  for (var i in text) {
    var charCode = (text[i].charCodeAt() + (operation * key[i % key.length].charCodeAt())) % limitCode;
    if (charCode <= 0) charCode += limitCode;
    output += String.fromCharCode(charCode);
  }
  
  return output;
}
