
function handleFileSelect(evt) {
    var file = evt.target.files; 
    var f = file[0];
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
        return function(e) {
            var span = document.createElement('span');
            span.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
            document.getElementById('output').insertBefore(span, null);
        };
    })(f);
    reader.readAsDataURL(f);
}
document.getElementById('image').addEventListener('change', handleFileSelect, false);
