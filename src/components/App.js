import "./App.css";
import InfoDisplay from "./infoDisplay";
import NavBar from "./navbar";
import useManageSt from "./manageState";
function App() {
  const { viewPosition, setViewPosition, maxLength } = useManageSt();
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div>Home</div>
        </nav>
        <InfoDisplay viewPosition={viewPosition} />
        <NavBar
          viewPosition={viewPosition}
          setViewPosition={setViewPosition}
          maxLength={maxLength}
        />
      </header>
    </div>
  );
}

export default App;
