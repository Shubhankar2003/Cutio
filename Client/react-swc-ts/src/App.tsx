import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/router';

// Define a function to render the app
const App = () => {
  ReactDOM.render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// Export the rendering function
export default App;
