window.onload = function() {

	var eye = document.getElementsByClassName('eye');
	for(var i = 0; i < eye.length; i++) {
		eye[i].addEventListener('tap', function() {
			var input = this.parentNode.getElementsByTagName('input')[0];
			if(this.className == 'eye agaEye') {
				this.classList.remove("agaEye");
				input.type = 'password';
			} else {
				this.classList.add("agaEye");
				input.type = 'text';
			}

		})
	}
}