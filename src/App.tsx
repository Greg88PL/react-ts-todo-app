import "./App.css";
import Todos from "./components/Todos";

function App() {
  const todos = [
    {
      id: "id1",
      text: "javascript",
    },
    {
      id: "id2",
      text: "typescript",
    },
    {
      id: "id3",
      text: "html",
    },
  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
