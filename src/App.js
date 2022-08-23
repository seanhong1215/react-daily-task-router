import './style.scss';

import React from 'react';
// import ReactDOM from "react-dom";

import {
  // BrowserRouter,
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate 
} from 'react-router-dom';

const Todo = () => {
  return (
  <>
    <p>這是 Todo 頁面</p>
    <Logout />
  </>
  )
};

const Logout = () => {
  const navigate = useNavigate();
  return <button onClick = {()=>{ navigate('/login') }}>登出</button>
}
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Home = () => {
  return <p>這是首頁</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          {/* <NavLink to="/error">
            <p>Error 頁面</p>
          </NavLink> */}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/logout" element={<Logout />} /> 
          {/* <Route
            path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

// render(
//   <Avatar username="pwh" />,
//   document.getElementById('example')
// );
// export default ReactDOM.render(<App />);
export default App;
