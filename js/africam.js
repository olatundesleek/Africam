import * as DomVariables from './components/DomVariables.js';
const {
	toggleBtn_div,
	sideBar_div,
	dropdownList_li,
	loginForm_div
} = DomVariables;

document.addEventListener('click', event => {
	if (event.target === dropdownList_li) {
		dropdownList_li.classList.toggle('toggle');
	}

	if (
		event.target.classList.contains('hamburger') ||
		event.target.classList.contains('line')
	) {
		toggleBtn_div.classList.toggle('toggle');
		sideBar_div.classList.toggle('toggle');
	} else if (
		!(
			event.target === sideBar_div ||
			event.target.id === 'sect-one' ||
			event.target.id === 'sect-two' ||
			event.target === dropdownList_li
		)
	) {
		sideBar_div.classList.remove('toggle');
		toggleBtn_div.classList.remove('toggle');
	}

	if (event.target.classList.contains('nav-login-btn'))
		loginForm_div.classList.add('loginPop');
	else if (event.target.classList.contains('login-form-close'))
		loginForm_div.classList.remove('loginPop');
});
