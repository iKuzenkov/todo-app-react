import "./App.css";
import Main from "./main/Main";

const data = {
  title: "To-Do List",
  textButton: "Add",
  inputPlaceholder: "Add your task",
  trashIcon: "🗑"
};

function App() {
  return (
    <>
      <Main data={data} />
    </>
  );
}

export default App;
