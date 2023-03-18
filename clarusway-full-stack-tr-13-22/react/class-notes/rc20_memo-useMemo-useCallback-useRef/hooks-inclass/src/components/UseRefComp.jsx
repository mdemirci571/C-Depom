import React, { useRef, useState } from "react";

const UseRefComp = () => {
  console.log("Render => useRefComp")
  const [text,setText] = useState("")
  const inputRef = useRef()

  const handleSearch = () =>{
    console.log(text)
    console.log(inputRef.current)
    console.log(inputRef)
    console.log(inputRef.current.value);
    setText(inputRef.current.value);
  }
  return (
    <div>
      UseRefComp
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <input
          type="text"
          onChange={(e) => setText(e.target.value)}
        /> */}
        <input
          type="text"
          ref={inputRef}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default UseRefComp;
