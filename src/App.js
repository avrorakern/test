import Dushnila from "./components/dushnila/dushnila.jsx";
import Counter from "./components/counter/counter.jsx";
import Logo from "./components/logo/logo.jsx";
import Indicators from "./components/indicators/indicators.jsx";

function App() {
  return (
    <div className="App">
      <h1 className="app__cap">
        душнила
      </h1>
      <Dushnila />
      <Counter />
      <Logo />
      <Indicators />
    </div>
  );
}

export default App;
