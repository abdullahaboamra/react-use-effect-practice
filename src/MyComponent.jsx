import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Green");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    document.title = `count : ${count}${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");
    return()=>{
        window.removeEventListener("resize", handleResize);
        console.log("EVENT LISTENER REMOVE");
    }
  },[]);
  return (
    <>
      <p style={{ color: color }}>Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
      <br />
      <br />
      <p>Windows Width : {width}</p>
      <p>Windows Height : {height}</p>
    </>
  );
}
export default MyComponent;
