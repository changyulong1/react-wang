import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
}
    from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Tab">标签页</Link>
                            </li>
                            <li>
                                <Link to="/Note">笔记页</Link>
                            </li>
                            <li>
                                <Link to="/Statistics">统计页</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Tab/>}/>
                        <Route path="/Tab" element={<Tab/>}/>
                        <Route path="/Note" element={<Note/>}/>
                        <Route path="/Statistics" element={<Statistics/>}/>
                        <Route path="/*" element={<NoPage/>}/>

                    </Routes>
                </div>
            </Router>
        );
    }
}

function NoPage() {
    return <div>页面不存在</div>;
}

function Tab() {
    return <h2>标签页</h2>;
}

function Note() {
    return <h2>笔记也</h2>;
}

function Statistics() {
    return <h2>统计</h2>;
}

export default App;