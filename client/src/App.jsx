import React, {useState} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import { Button } from "react-bootstrap";

const App = () => {
  const [dark, setDark] = useState(false)

  const mode =() => {
    if (dark === true){
      setDark(false)
    }else setDark(true)
  }
 
  return (
    <BrowserRouter>
      <header className= {dark === false ? "w-full flex justify-between items-center sm:px-8 py-4 border-b"
      : "w-full flex justify-between items-center sm:px-8 py-4 border-b bg-blue-900"}>
        <Link to="/">
          <img src={logo} alt="logo" className="w-52 object-contain rounded" />
        </Link>
        <div>
        <Link to="/create-post" className="font-inter font-medium bg-[#6449ff] text-white px-4 py-2 mr-2 rounded-md">Create</Link>
      
      <Button  className= { dark === false ?  "bg-black rounded-md text-white px-4 py-[6px] font-medium" :
      "bg-white rounded-md text-black px-4 py-[6px] font-medium border"}
       onClick={mode}> { dark === false ? 'Light Mode' : 'Dark Mode'}</Button>
      </div>
      </header>
      <main className= { dark === false ? "sm:p-8 px-4 py-8 w-full  bg-[#f9fafe] min-h-[calc(100vh-73px)]" 
      : "sm:p-8 px-4 py-8 w-full  bg-black min-h-[calc(100vh-73px)]"}>

        <Routes>
          <Route path='/' element={<Home dark={dark}/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
