import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
}
    from "react-router-dom";
import styled from "styled-components";

const Parent = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
const Rout = styled.div`
    flex-grow: 1;
`
const Nav = styled.div`
    > ul{
      display: flex;
      li{
        width: 33.333%;
        text-align: center;
      }
    }

`

class App extends React.Component {
    render() {
        return (
            <Router>
                <Parent>
                    <Rout>
                        <Routes>
                            <Route path="/" element={<Tab/>}/>
                            <Route path="/Tab" element={<Tab/>}/>
                            <Route path="/Note" element={<Note/>}/>
                            <Route path="/Statistics" element={<Statistics/>}/>
                            <Route path="/*" element={<NoPage/>}/>

                        </Routes>
                    </Rout>
                    <Nav>
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
                    </Nav>
                </Parent>
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