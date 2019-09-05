function Base64Converter()
{
	this.getBase64FromFile = function (file) {
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			console.log(reader.result);
		};
		reader.onerror = function (error) {
			console.log('Error: ', error);
		};
	}
}
