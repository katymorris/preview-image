var uploadBtn = document.getElementById("upload-photo")

function readURL(input) {
    
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("preview").src = e.target.result;
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    uploadBtn.addEventListener('change',  function() {
        readURL(this);
    });