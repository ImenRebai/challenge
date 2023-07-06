
import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';
import Click from './Components/Click';
function App() {
  return (
    <div className="App">
      <div>
     <Header />
     </div>
   <div style={{display:"flex", justifyContent:"center"}}>
     {/* Posts &  Click container */}
         <div style={{display: "flex"}}>
     {/* Post Container */}
         <div style={{width: "70%"}}> 
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> 
            <Post />
         </div>
      {/*== Post container ==*/}
      {/* Click container */}
         <div style={{width: "30%"}}>
        <Click />
         </div>
         {/*  */}
     </div>
 {/*== Post & Click container ==*/}
    </div>
    </div>
  );
}

export default App;
