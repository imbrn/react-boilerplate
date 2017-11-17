import './index.css';
import Example from './example';

document.querySelector('#message').innerHTML = new Example().message('Hello', 'World');
