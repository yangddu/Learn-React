import React, { useState } from "react";

const Editor = () => {
  const [state, setState] = useState({
    author: "",
    contents: "",
    emotion: 1
  });

  const handleChangeState = (e: React.ChangeEvent<any>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert("success");
    setState({
      author: "",
      contents: "",
      emotion: 1
    });
  };

  return (
    <div className="editor">
      <h2>title</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="contents"
          value={state.contents}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
};

export default Editor;
