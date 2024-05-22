import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">Hello
      
      </header>
        
    <main>
        <Dictionary />
    </main>

      
   

    <footer className='App-footer'>
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
