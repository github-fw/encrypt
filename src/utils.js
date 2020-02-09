const CryptoJS = require("crypto-js");
//aes加密
export function aesEncrypt(data, secretKey) {
  let key = CryptoJS.MD5(secretKey).toString()
  const result = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse("偏移量"),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return result.toString();
}

//aes解密
export function aesDecrypt(cipher, secretKey) {
  let key = CryptoJS.MD5(secretKey).toString()
  const decrypted = CryptoJS.AES.decrypt(cipher, CryptoJS.enc.Utf8.parse(key), { 
    iv: CryptoJS.enc.Utf8.parse('偏移量'),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypted);
}