import { useEffect } from "react";
import Header from "./components/Header"
import Main from "./components/Main";

function App(){

  useEffect(()=>{
    alert(" Welcome to the Divine Realm of Shree Krishna ........")
  },[])

  return (
    <div>
      <Header />
      <Main/>      
    </div>
  );
}
export default App;