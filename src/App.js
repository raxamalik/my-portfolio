import "./App.css";
import Home from "./pages/home";

function App() {
  const arr = [
    {
      name: "roshaan",
      class: "12",
    },
    {
      name: "roshaan",
      class: "12",
    },
    {
      name: "roshaan",
      class: "12",
    },
    {
      name: "roshaan",
      class: "13",
    },
  ];
  const arr2 = arr.map((data) => (data.class === "13"));
  console.log(arr2)
  return (
    <div className="App">
      <ol>
        {arr.map((data, index) => {
          return (
            <li key={index}>
              {data.name}
              {data.class}
            </li>
          );
        })}
      </ol>
      <Home />
    </div>
  );
}

export default App;
