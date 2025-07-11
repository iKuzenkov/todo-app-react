function InputRow({
  data: { textButton },
  inputValue,
  placeholder,
  setInputValue,
  addTask,
}) {
  return (
    <>
      <div className="row">
        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>{textButton}</button>
      </div>
    </>
  );
}

export default InputRow;
