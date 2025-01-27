import { BrowserRouter, Routes, Route } from "react-router";
import Todo from './containers/todos'
import Login from './containers/login'

export default function AppRoutes() {
  return <> 
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<h1>register</h1>} />
        </Routes>
      </BrowserRouter>
    </>
}
