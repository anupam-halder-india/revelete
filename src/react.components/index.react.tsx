import react from 'react';
import App from './components/app.react';
import render from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('react')
)