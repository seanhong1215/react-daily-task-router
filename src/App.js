import './App.css';
import {
  // BrowserRouter,
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet
} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h4>這是首頁</h4>
      {/* <Outlet /> */}
    </>
    )
}
const Todo = () => {
  return (
  <>
    <NavLink to="/">
            <p> &larr; Back </p>
    </NavLink>
    <h4>這是Todo頁面</h4>
  </>
  )
};

const Login = () => {
  return (
  <>
  <NavLink to="/">
            <p> &larr; Back </p>
    </NavLink>
    <h4>這是登入頁面</h4>
  </>
  )
}
const Register = () => {
  return (
    <>
    <NavLink to="/">
            <p> &larr; Back </p>
    </NavLink>
    <h4>這是註冊頁面</h4>
    </>

    )
};

const ProfilePage = () => {
  let params = useParams();
  return (
    <>
        {/* <h4>使用者詳細資料</h4> */}
        <p>UserID: {params.userId}</p>
       

    </>
  )
}
const Users = () => {
  return (
  <>
    <NavLink to="/">
            <p> &larr; Back </p>
    </NavLink>
            <h4>使用者詳細資料<NavLink to="123">123</NavLink></h4>
   
    <Outlet />
  </>
  )
}
function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          
           <NavLink to="/register">
            <p>Register Page</p>
          </NavLink>
          <NavLink to="/login">
            <p>Login Page</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo Page</p>
          </NavLink> 
          <NavLink to="/users">
            <p>Post頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} >
              <Route path=":userId" element={<ProfilePage />} />
            </Route>

            <Route path="/todo" element={<Todo />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;