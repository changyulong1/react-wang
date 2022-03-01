import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route
}
    from "react-router-dom";
import Tab from "./views/Tab";
import Note from "./views/Note";
import Statistics from "./views/Statistics";
import NoPage from "./views/NoPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Tab/>}/>
                    <Route path="/Tab" element={<Tab/>}/>
                    <Route path="/Note" element={<Note/>}/>
                    <Route path="/Statistics" element={<Statistics/>}/>
                    <Route path="/*" element={<NoPage/>}/>
                </Routes>
            </Router>
        );
    }
}
export default App;