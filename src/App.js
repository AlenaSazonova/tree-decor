import './App.css';
import GlobalStyle from './GlobalStyles';
import { CartProvider } from './components/context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import BaubleCollection from './components/pages/BaubleCollection/BaubleCollection';
import TreeDecorator from './components/pages/TreeDecorator/TreeDecorator';



function App() {
    return (
        <CartProvider>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/BaubleCollection" element={<BaubleCollection />} />
                    <Route path="/TreeDecorator" element={<TreeDecorator />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
