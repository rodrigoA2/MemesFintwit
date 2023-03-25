function readFile(files) {
    var fileReader = new FileReader();
        fileReader.readAsArrayBuffer(files[0]);
        fileReader.onload = function(e) {
            playAudioFile(e.target.result);
            console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
        }
}
function playAudioFile(file) {
    var context = new window.AudioContext();
        context.decodeAudioData(file, function(buffer) {
            var source = context.createBufferSource();
                source.buffer = buffer;
                source.loop = false;
                source.connect(context.destination);
                source.start(0); 
        });
}

function upLoadFIle(){
document.getElementById("uploadButton").onclick = () => {
    let fileElement = document.getElementById('fileInput')

    // check if user had selected a file
    if (fileElement.files.length === 0) {
      alert('please choose a file')
      return
    }

    let file = fileElement.files[0]

    let formData = new FormData();
    formData.set('file', file);

    axios.post("http://localhost:3001/upload-single-file", formData, {
      onUploadProgress: progressEvent => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(`upload process: ${percentCompleted}%`);
      }
    })
      .then(res => {
        console.log(res.data)
        console.log(res.data.url)
      })
  }
}