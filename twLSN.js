var twLSN = [
  'iron-threads.blogspot.com',
];

var redirectUrl = 'http://bit.ly/toko-whatsapp';

if (!twLSN.includes(window.location.hostname)) {
  window.location.href = redirectUrl;
}
