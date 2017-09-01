window.onload = function(){
	var newTab = document.getElementById('new_tab');
	var tabLi = newTab.getElementsByTagName('li');
	var descWrap = document.getElementById('new_desc_wrap');
	var descLi = descWrap.getElementsByTagName('li');

	for (var i = 0; i < tabLi.length; i++) {
		tabLi[i].index = i;
		tabLi[i].onclick = function(){
			for (var j = 0; j < tabLi.length; j++) {
				tabLi[j].className = '';
				descLi[j].className = 'hide';
			}
			this.className = 'tab_active';
			descLi[this.index].className = 'show';
		}
	}
}