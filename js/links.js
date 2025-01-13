// function toMain() {
// 	window.open('/index.html');
// }
// function toArtworks() {
// 	window.open('/templates/Artworks/index.html');
// }

function handleResize() {
	if (window.matchMedia('(max-width: 1023px)').matches) {
		document.getElementById('burger').querySelector('div').querySelector('.nav2').href = '/templates/ArtBook/Mobile.html'
	} else {
		document.getElementById('burger').querySelector('div').querySelector('.nav2').href = '/templates/ArtBook/index.html'
	};
};
handleResize();