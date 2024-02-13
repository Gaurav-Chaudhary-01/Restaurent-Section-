import React, { useState , useEffect} from "react";
import "./style.css";

const UseEffect = () => {

    // const initialData=0;
    const [MyNum , setMyNum]=useState(0);
    // console.log(MyNum);

    useEffect(() => {

        document.title=`Chats(${MyNum})`
        

    })
    

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
      </div>
    </>
  );
};

export default UseEffect;