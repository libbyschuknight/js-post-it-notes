function rand8BitInt () {
  return Math.floor(Math.random() * 256);
}

function randRGB () {
  return 'rgb(' + rand8BitInt() + ',' + rand8BitInt() + ',' + rand8BitInt() + ')';
}
