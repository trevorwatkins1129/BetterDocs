function editorcheck() {
  const x = document.getElementById("text");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
  } else {
    x.contentEditable = "true";
  }
}

function save() {
  localStorage.document = document.getElementById("text");
  alert("Document saved.");
}

function load() {
  document.getElementById("text").innerHTML = localStorage.document;
  alert("Document loaded.");
}
