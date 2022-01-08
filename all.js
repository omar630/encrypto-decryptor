function encrypt() {
  var msg = $('#textToEncrypt').val()
  var key = $('#encryptionKey').val()
  if(msg == "" || key == "")
    return "";
  return CryptoJS.AES.encrypt (msg, key).toString();
}
function decrypt() {
  var msg = $('#textToDecrypt').val()
  var key = $('#decryptionKey').val()
  if(msg == "" || key == "")
    return "";
  return CryptoJS.AES.decrypt (msg, key).toString(CryptoJS.enc.Utf8);
}

$(document).ready(function() {
  $('.encryption').on("input", function() {
    $('#encryptedText').val(encrypt())   
  })
  $('.decryption').on("input", function() {
    $('#decryptedText').val(decrypt())       
  })
});