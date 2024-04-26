import { IoLogOutOutline } from "react-icons/io5";
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        {/*header section */}
        <header>
          {/*Left section */}
          <section>
            <span>SEFE</span>
            <span>TODO</span>
          </section>
          {/*right section */}
          <section><IoLogOutOutline size={30} color="orangered"/>
          </section>
        </header>
        {/*body section */}
        <body className="body">
          <span>Hello</span>
        </body >
      </main>
    </div>
  );
}

export default App;
