import Main from "./main/Main";

const data = {
  title: "Advanced To-Do List",
  textButton: "Add",
  inputPlaceholder: "Add your task",
  trashEmoji: "❌",
  copyEmoji: "📋",
  editEmoji: "✏️",
};

function App() {
  return (
    <>
      <Main data={data} />
    </>
  );
}

export default App;
