import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Cart from './components/Cart';
import User from './components/User';
import Admin from './components/Admin';

function App() {
    return (
        <Router>
            <Header />
            <Route path='/' component={Home} exact />
            <Route path='/cart' component={Cart} exact />
            <Route path='/user' component={User} exact />
            <Route path='/admin' component={Admin} exact />
            <Footer />
        </Router>
    );
}

export default App;
