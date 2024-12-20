import { liftHtml } from '@lift-html/core';
import html from "solid-js/html";
import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const css = /*css*/ `
	* { font-size: 200%; }

	span {
		width: 4rem;
		display: inline-block;
		text-align: center;
	}

	button {
		width: 4rem; height: 4rem;
		border: none;
		border-radius: 10px;
		background-color: seagreen;
		color: white;
		outline: none;
		cursor: pointer;
	}
`

liftHtml('my-counter', {
	init() {
		const [count, setCount] = createSignal(0);
		const App = () => html`
		  <style>${css}</style>
		  <button onClick=${() => setCount(count() - 1)}>-</button>
		  <span>${count}</span>
		  <button onClick=${() => setCount(count() + 1)}>+</button>
		`
		this.attachShadow( {mode: 'open' });
		render(App, this.shadowRoot)
	}
})
