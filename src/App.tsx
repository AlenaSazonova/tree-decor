import React from "react"; 
import './App.css';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import BaubleCollection from './components/pages/BaubleCollection/BaubleCollection';
import TreeDecorator from './components/pages/TreeDecorator/TreeDecorator';



const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <div className='wrapper'>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/BaubleCollection" element={<BaubleCollection />} />
                    <Route path="/TreeDecorator" element={<TreeDecorator />} />
                </Routes>
            </Router>
            </div>
        </>
    );
}

export default App;
