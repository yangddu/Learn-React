import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }: any) => {
  useEffect(() => {
    console.log(`countA : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }: any) => {
  useEffect(() => {
    console.log(`countB : ${obj?.count}`);
  });
  return <div>{obj?.count}</div>;
};

const areEqual = (prev: any, next: any) => {
  return prev.obj.count === next.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1
  });
  return (
    <div style={{ padding: "50px" }}>
      <div>
        <h2>count A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>+</button>
      </div>
      <div>
        <h2>counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
