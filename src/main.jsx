import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from './componets/App';
import { PageTwo } from './componets/PageTwo';

ReactDOM.createRoot(document.getElementById('root')).render(
//  <StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
//</StrictMode>
);
