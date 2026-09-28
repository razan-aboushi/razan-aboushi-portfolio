/**
 * Pre-renders the app to static HTML after `react-scripts build`.
 *
 * Crawlers, link-preview bots and AI agents that don't execute JavaScript otherwise receive an
 * empty <div id="root">. This renders <App /> with react-dom/server and injects the markup, and
 * src/index.tsx then hydrates it in the browser instead of rebuilding the DOM.
 */
const fs = require('fs');
const path = require('path');

// react-app preset's "test" env compiles to CommonJS for the running Node version. It emits
// dev-mode JSX (jsxDEV), so React must load its matching build; the HTML it renders is identical.
process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';
// Must match what the client bundle was built with (package.json "homepage": ".").
process.env.PUBLIC_URL = '.';

const srcDir = path.resolve(__dirname, '../src');
require('@babel/register')({
  presets: [[require.resolve('babel-preset-react-app'), { runtime: 'automatic' }]],
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  only: [srcDir],
  babelrc: false,
  configFile: false,
  cache: false,
});

const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require(path.join(srcDir, 'App')).default;

const indexPath = path.resolve(__dirname, '../build/index.html');
const template = fs.readFileSync(indexPath, 'utf8');
const emptyRoot = '<div id="root"></div>';

if (!template.includes(emptyRoot)) {
  console.error('prerender: <div id="root"></div> not found in build/index.html — was it already pre-rendered?');
  process.exit(1);
}

const markup = renderToString(React.createElement(App));
if (!markup.includes('<h1')) {
  console.error('prerender: rendered markup has no <h1>; refusing to ship an incomplete pre-render.');
  process.exit(1);
}

fs.writeFileSync(indexPath, template.replace(emptyRoot, `<div id="root">${markup}</div>`));
console.log(`prerender: injected ${(markup.length / 1024).toFixed(1)} KB of HTML into build/index.html`);
