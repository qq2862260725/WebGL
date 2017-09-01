window.onload = function(){
	var employTab = document.getElementById('employ_tab');
	var tabLi = employTab.getElementsByTagName('li');
	var descWrap = document.getElementById('employ_desc_wrap');
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