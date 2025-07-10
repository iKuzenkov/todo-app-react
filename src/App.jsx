import Main from "./main/container/Main";

const data = {
  title: "Advanced To-Do List",
  textButton: "Add",
  inputPlaceholderFirstShow: "Add your task",
  inputPlaceholderSecondShow: "Please, add task",
  trashEmoji: "❌",
  copyEmoji: "📋",
  editEmoji: "✏️",
  copyMessege: "Copied!✅",
  hide: "🔽",
  show: "🔼",
};

function App() {
  return (
    <>
      <Main data={data} />
    </>
  );
}

export default App;
