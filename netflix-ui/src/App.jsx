import React from 'react'
import "./App.scss"
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true

  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {user? <Home />: <Navigate replace to="/register" />}>
        </Route>
        <Route path="/register" element= {!user? <Register />: <Navigate replace to="/" />}>
        </Route>
        <Route path="/login" element= {user? <Login />: <Navigate replace to="/" />}>
        </Route>
        {user && (
          <>
        <Route path="/movies" element={<Home type="movies" />}>
        </Route>
        <Route path="/series" element={<Home type="Series" />}>
        </Route>
        <Route path="/watch" element={<Watch />}>
        </Route>
        </>
        )}
      </Routes>
    </Router>
  )
}

export default App
