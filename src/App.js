import { useState, useContext, useEffect } from 'react';

// import ToastsList from './components/ToastsList';

import './main.scss';

function App() {

  useEffect(() => {

    // effect things here

  }, []);

  return (
    <div className="App">

      {/* <ToastsList
        toasts={toasts} 
        onAction={onToastAction}
      /> */}

      <button
        onClick={() => createToast("SUCCESS", "Test toast", "test")}
      >
        Create toast
      </button>

    </div>
  );
}

export default App;
