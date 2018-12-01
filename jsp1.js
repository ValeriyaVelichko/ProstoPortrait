var links,
	updatestate,
	contentEl,
	navEl;
	
contentEl = document.querySelector('.content');
navEl = document.querySelector('.nav');

links = {
	main: "щщщщщ",
	about: "ASDDD",
	downloads: "11111234"
};

updatestate = function(state){
	if (!state) return;
	
	contentEl.innerHTML = links[state.page];
};

navEl.addEventListener('click', function(e){
	var state;
	if(e.target.tagName !== 'A') return;
	state = {page: e.target.getAttribute('href')};
	history.pushState(state, '', state.page);
	updatestate(state);
	e.preventDefault();
});