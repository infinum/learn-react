/**
 * @jest-environment jsdom
 */

import LearnReact from '../../solutions/LearnReact';

let container: HTMLElement;

beforeEach(() => {
	container = document.createElement('main');

	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
});

test('When the button is clicked, the function assigned to an onClick event is triggered', () => {
	// YOUR TEST GOES HERE
});

test('When focus from the button is removed, the function assigned to an onBlur event is triggered', () => {
	// YOUR TEST GOES HERE
});
