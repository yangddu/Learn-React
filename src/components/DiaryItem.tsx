import React, { useState } from "react";

const DiaryItem = ({
  item,
  onDelete,
  updateMemo,
  modifyMode,
  setModifyMode
}: any) => {
  const [value, setValue] = useState("");
  const onEdit = () => {
    if (value === "") {
      updateMemo(item.id, item.contents);
    } else {
      updateMemo(item.id, value);
    }
    setModifyMode(false);
  };

  const onChange = (e: React.ChangeEvent<any>) => {
    setValue(e.target.value);
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자 : {item.author}</span>
        <br />
        <span className="date">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      </div>
      {modifyMode ? (
        <>
          <input
            defaultValue={item.contents}
            className="content"
            onChange={onChange}
          />
          <button onClick={() => setModifyMode(false)}>수정 취소하기</button>
          <button onClick={onEdit}>저장하기</button>
        </>
      ) : (
        <>
          <div className="content">{item.contents}</div>
          <button onClick={() => onDelete(item.id)}>삭제</button>
          <button onClick={() => setModifyMode(true)}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
