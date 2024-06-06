import React from "react";
import { Text, Button, Img } from "../../components";
const index = () => {
  return (
    <>
    <div className='absolute z-50 backdrop-blur-sm min-w-screen min-h-screen h-full w-full overflow-hidden flex flex-col font-bold text-purple-900 justify-center items-center' onScroll={()=>{}}>
        <Img
        src="images/logo.png"
        alt="Loading..."
        className='h-24 animate-spin'
        />
        Loading...
    </div>
    </>
  );
};

export default index;
