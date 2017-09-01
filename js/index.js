window.onload = function(){
	var core = 0;
	var pre = document.getElementById('way_pre');
	var next = document.getElementById('way_next');
	var wrap = document.querySelector('.ways_wrap');

	pre.onclick = function(){
		if (core == -300) {
			return;
		} else {
			core -= 100;
		}
		wrap.style.left = core + '%';
	}
	next.onclick = function(){
		if (core == 0) {
			return;
		} else {
			core += 100;
		}
		wrap.style.left = core + '%';
	}
}