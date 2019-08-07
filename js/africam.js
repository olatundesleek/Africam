const toggleBtn = document.querySelector('#toggle span');
const menuOverlay = document.querySelector('#menu-overlay');

document.addEventListener('click', event => {
	if (
		event.target.classList.contains('hamburger') ||
		event.target.classList.contains('line')
	) {
		toggleBtn.classList.toggle('toggle');
		menuOverlay.classList.toggle('toggle');
	} else if (
		!(event.target === menuOverlay || event.target.id === 'login-signup')
	) {
		menuOverlay.classList.remove('toggle');
		toggleBtn.classList.remove('toggle');
	}
});
