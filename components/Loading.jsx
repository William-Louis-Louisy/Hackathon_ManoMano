import React from "react";

function Loading() {
  return (
    <div className="border-2 border-manoblue animate-pulse flex justify-center items-center flex-col bg-gradient-to-tr from-logofirst to-logosecond rounded-3xl p-4">
      <div
        className="
        animate-spin
        rounded-full
        h-20
        w-20
        border-t-4 border-manoblue my-3
      "
      />
      <span className="text-manoblue text-xl animate-bounce">LOADING</span>
    </div>
  );
}

export default Loading;
