function editorcheck() {
  // Get the checkbox
  var checkBox = document.getElementById("switch");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
  document.body.contentEditable = true;
  } else {
  document.p.contentEditable = false;
  }
}