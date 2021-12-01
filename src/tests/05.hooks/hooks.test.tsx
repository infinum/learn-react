/**
 * @jest-environment jsdom
 */

import { waitFor } from '@testing-library/dom';

import LearnReact from '../../solutions/LearnReact';

let container: HTMLElement;

beforeEach(() => {
	container = document.createElement('main');
});

test('useState hook', () => {
	// YOUR TEST GOES HERE
});

test('useEffect hook', () => {
	// YOUR TEST GOES HERE
});
