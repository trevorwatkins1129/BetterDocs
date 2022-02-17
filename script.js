function editorcheck() {
  const x = document.getElementById("text");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
  } else {
    x.contentEditable = "true";
  }
}

function save() {
  var x = document.getElementById("text").innerHTML;
  localStorage.document = x;
}

function load() {
  document.getElementById("text").innerHTML = localStorage.document;
}
