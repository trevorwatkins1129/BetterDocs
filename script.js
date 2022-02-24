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

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function downloadprep() {
  let currentDate = new Date();
  let cDay = currentDate.getDate()
  let cMonth = currentDate.getMonth() + 1
  let cYear = currentDate.getFullYear()
  var y = document.getElementById("text").innerHTML + "\n " + localStorage.watermark
  var z = localStorage.filename
  download(y, z + "-" + cDay + "-" + cMonth + "-" + cYear + "")
}

function saveWatermark() {
  localStorage.watermark = document.getElementById("Watermark").value
}