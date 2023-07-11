export const resetCss = `*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd,
ul,
li {
  margin: 0;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  overscroll-behavior: none;
}
a {
  text-decoration: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img,
picture {
  max-width: 100%;
  display: block;
}
input,
button,
textarea,
select {
  font: inherit;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
