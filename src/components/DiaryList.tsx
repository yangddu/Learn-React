import React from "react";
import DiaryItem from "./DiaryItem";

export interface ListType {
  id: number;
  author: string;
  contents: string;
  emotion: number;
  createdAt: number;
}

const DiaryList = ({
  diaryList,
  onDelete,
  updateMemo,
  modifyMode,
  setModifyMode
}: any) => {
  return (
    <div className="diaryList">
      <div>{diaryList.length} 개의 메모가 있습니다. </div>
      <div>
        {diaryList.map((item: ListType, idx: number) => (
          <DiaryItem
            key={idx}
            item={item}
            onDelete={onDelete}
            modifyMode={modifyMode}
            setModifyMode={setModifyMode}
            updateMemo={updateMemo}
          />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
