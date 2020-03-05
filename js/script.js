// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
const init = function(){
let items = document.querySelectorAll('section');
for (let i = 0; i < items.length; i++){
  items[i].style.background = randomColor({luminosity: 'light'});
}
cssScrollSnapPolyfill()
}
init();












// End of Your Code . Don't delete that line below!!
});
