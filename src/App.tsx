import { useEffect, useRef, useState } from "react";
import DiaryList from "./components/DiaryList";
import Editor from "./components/Editor";

export interface ListType {
  id?: number;
  author: string;
  contents: string;
  emotion: number;
  createdAt?: number;
}

const App = () => {
  const [data, setData] = useState<ListType[]>([]);
  const [modifyMode, setModifyMode] = useState(false);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    const initData = res.slice(0, 20).map((item: any) => {
      return {
        author: item.email,
        contents: item.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        createdAt: new Date().getTime(),
        id: dataId.current++
      };
    });
    setData(initData);
  };

  const dataId = useRef<number>(0);

  const createMemo = (author: string, contents: string, emotion: number) => {
    const createAt = new Date().getTime();
    const newItem = {
      author,
      contents,
      emotion,
      createAt,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const deleteMemo = (id: number) => {
    const filteredList = data.filter((item) => item.id !== id);
    setData(filteredList);
  };

  const updateMemo = (id: number, newContent: string) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, contents: newContent } : item
      )
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Editor onCreate={createMemo} />
      <DiaryList
        diaryList={data}
        onDelete={deleteMemo}
        updateMemo={updateMemo}
        modifyMode={modifyMode}
        setModifyMode={setModifyMode}
      />
    </div>
  );
};

export default App;
