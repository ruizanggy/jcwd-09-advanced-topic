import { Route, Routes } from "react-router-dom";
import LearnHOC from "./pages/LearnHOC";
import Home from "./pages/Home";
function App() {
  //cara bikin component
  const Button = (props) => <button style={props.style}>Click me</button>
  const Text = (props) => <p style={props.style}>TESTING</p>

  // HARUS CAPITAL
  const StyleButton = LearnHOC(Button)
  const StyleText = LearnHOC(Text)

  return (
    <div>
      <StyleButton/>
      <Button/>
      <StyleText/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<LearnHOC/>}/>
      </Routes>
    </div>
  );
}

export default App;


//kalo aplikasi sudaah besar pake react.lazy dan ada dokumentasinya di google
//konsep try catch untuk handling error//sentry untuk error handling juga
//ngecek logic itu jalan memakai alert // dan sering2 console log untuk ngecek error debugging
//console ga cuma log aja