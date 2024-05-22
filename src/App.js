import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      {/* <style>{'body { background: linear-gradient(to top, #09203f 0%, #537895 100%); background-attachment: fixed; }'}</style> */}
      <div className="App-container p-4">
        <header className="App-header pb-3">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>

      
   

    <footer className='App-footer pt-2'>
    <small>This project was coded by{" "} <a href="https://responsive-portfolio-marilu.netlify.app/" target="_blank" rel="noreferrer">Marilu Chacon</a> 
    {" "}  and is {" "} 
    <a href="https://github.com/lilbxbori/dictionary-project-react" target="_blank" rel="noreferrer"> open-sourced on GitHub </a> 
    {" "} and {" "}  
    <a href="https://dictionary-project-react-mchacon.netlify.app/" target="_blank" rel="noreferrer"> hosted on Netlify </a>
    </small>
    </footer>
      
  </div>
  </div>
  ); 
}

export default App;
