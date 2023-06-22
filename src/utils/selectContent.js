export function selectContent(el, copiar) {
  var elemToSelect = document.getElementById(el);
  console.error(elemToSelect);
  var rangeToSelect = "";
  var range = "";
  var sel = "";

  //alert(elemToSelect);
  if (window.getSelection) {
    // all browsers, except IE before version 9
    var selection = window.getSelection();
    rangeToSelect = document.createRange();
    rangeToSelect.selectNodeContents(elemToSelect);

    selection.removeAllRanges();
    selection.addRange(rangeToSelect);
    if (copiar) {
      selection = document.execCommand('copy');
    }
  } // Internet Explorer before version 9
  else if (document.body.createTextRange) {
    // Internet Explorer
    rangeToSelect = document.body.createTextRange();
    rangeToSelect.moveToElementText(elemToSelect);
    rangeToSelect.select();
  } else if (document.createRange && window.getSelection) {
    range = document.createRange();
    range.selectNodeContents(el);
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
