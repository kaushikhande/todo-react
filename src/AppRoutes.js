import { BrowserRouter, Routes, Route } from "react-router";
import Todo from './containers/todos'

export default function AppRoutes() {
  return <> 
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<Todo />} />
            <Route path="login" element={<h1>Login</h1>} />
            <Route path="register" element={<h1>register</h1>} />
        </Routes>
      </BrowserRouter>
    </>
}
