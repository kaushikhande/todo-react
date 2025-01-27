import axios from 'axios';
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

  return (
    <AppRoutes />
  );
}

export default App;
