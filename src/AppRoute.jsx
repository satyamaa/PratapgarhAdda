import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import About from './Components/About';

function AppRoute() {
  return (
    <BrowserRouter>
<Routes>
        <Route exact path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={ContactUs} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
