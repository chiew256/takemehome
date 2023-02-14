import "./App.css";
import AutoCompleteTextbox from "./components/AutocompleteTextbox";
import Map from "./components/MapResults";
import SelectionHistory from "./components/SelectionHistory";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div>
        <div className="title-wrapper">
          <h1>Take Me Home</h1>
        </div>
        <div className="textbox-wrapper">
          <AutoCompleteTextbox />
        </div>
      </div>
      <div style={{ flex: 2 }}>
        <Map
          containerElement={<div style={{ height: "70%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
      <div style={{ flex: 2 }}>
        <SelectionHistory />
      </div>
    </div>
  );
}
