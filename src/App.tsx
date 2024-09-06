import './App.css'
import { Labs } from './labs/index'
// import { Name } from './components/Name'
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {

    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Navigate to="Labs"/>}/>
                    <Route path='/Labs/*' element={<Labs />}/>
                </Routes>
            </div>
        </HashRouter>
    )
}

export default App
