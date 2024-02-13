import React, { useState } from "react";
import "./style.css";

const UseState = () => {

    const initialData=0;
    const [MyNum , setMyNum]=useState(initialData);
    console.log(MyNum);

  return (
    <>
      <div className="center_div">
        <p>{MyNum}</p>
        <div class="button2" onClick={()=> setMyNum(MyNum+1)} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={()=> (MyNum>0 ? setMyNum(MyNum-1): setMyNum(0))} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;