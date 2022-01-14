import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*, 
*::before, 
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// root
:root {
    --primary-color: #723DEC;
    --white: #FFFFFF;
    --green: #49B17E;
    --dark-900: #161616;
    --dark-800: #1E1E1E;
    --gray-200: #E5E5E5;
    --gray-900: #7A797E;
}


// reset
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;

	border: 0;

	font-size: 100%;
	font: inherit;
	
	vertical-align: baseline;
	color: var(--white);
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	/* line-height: 1; */
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;

	background: var(--dark-900);
	color: var(--white);
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

input, textarea, button {
  font-family: 'Poppins', sans-serif !important;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;
