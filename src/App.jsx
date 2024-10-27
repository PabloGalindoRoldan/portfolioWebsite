import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/view/Landing';

function App() {
  return (
    <>
      <Router>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%"
          }}
        >
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/microemprendimientos" element={<ViewMicroEmprendimientos />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
