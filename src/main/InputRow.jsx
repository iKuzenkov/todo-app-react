function InputRow({ data, inputValue, placeholder, setInputValue, addTask }) {
  return (
    <>
      <div className="row">
        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>{data.textButton}</button>
      </div>
    </>
  );
}

export default InputRow;
