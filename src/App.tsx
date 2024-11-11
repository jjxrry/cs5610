import './App.css'
import { Kanbas } from './kanbas';
import { Labs } from './labs/index'
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {

    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Navigate to="labs" />} />
                    <Route path='/labs/*' element={<Labs />} />
                    <Route path='/kanbas/*' element={<Kanbas />} />
                </Routes>
            </div>
        </HashRouter>
    )
}

export default App
