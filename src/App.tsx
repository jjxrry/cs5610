import './App.css'
import { Kanbas } from './kanbas';
import { Labs } from './labs/index'
import { Name } from './components/Name'
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {

    return (
        <HashRouter>
            <div>
                <Name />
                <Routes>
                    <Route path='/' element={<Navigate to="Labs"/>}/>
                    <Route path='/Labs/*' element={<Labs />}/>
                    <Route path='/Kanbas/*' element={<Kanbas />}/>
                </Routes>
            </div>
        </HashRouter>
    )
}

export default App
