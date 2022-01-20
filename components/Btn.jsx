import React from "react";

function Btn({ content }) {
  return (
    <div className="cursor-pointer flex justify-center items-center bg-gradient-to-r from-manoblue to-manoblue w-20 h-12 rounded-2xl text-manowhite hover:from-logofirst hover:to-logosecond">
      {content}
    </div>
  );
}

export default Btn;
