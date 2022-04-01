import "./App.css";
import InfoDisplay from "./infoDisplay";
import NavBar from "./navbar";
import useManageSt from "./manageState";
function App() {
  const { viewPosition, setViewPosition, maxLength } = useManageSt();
  const navStyle = {
    marginTop: "-20px",
    backgroundColor: "blue",
    width: "100vw",
    height: "10vh",
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav style={navStyle}>
          <div style={{ margin: "25px" }}>Home</div>
        </nav>
        <InfoDisplay viewPosition={viewPosition} maxLength={maxLength} />
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
