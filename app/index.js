import { initializeFirebase } from './services/firebase';
import { initializePush } from './services/initialize';

var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

initializeFirebase();
initializePush();

ReactDOM.render(<App />, document.getElementById('app'));
