import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './pages/app/App';

const container = document.querySelector('#root');
createRoot(container).render(<App/>);
