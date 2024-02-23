import React, { useState } from "react";

const MyMassingApp = () => {
  const [inputValue, setInputValue] = useState(""); // State to store input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value as user types
  };

  return (
    <>
      <div className="">
        <div className="w-full flex justify-between gap-4  bg-slate-100">
          <div className="one-side  w-full h-[90vh] p-8 rounded-lg">
            <div className="another-person-msz w-[350px] min-h-[75px] rounded-xl bg-red-400 mb-16 p-2 flex text-left justify-start text-white">
              hello
            </div>
          </div>
          <div className="reply side  w-full h-[90vh] p-8 rounded-lg">
            <div className="another-person-msz w-[350px] min-h-[75px] rounded-xl bg-green-400 mt-16 p-2 flex text-left justify-start text-white">
              {inputValue} {/* Display input value here */}
            </div>
          </div>
        </div>
        <div className="w-full p-4 h-[10vh]">
          <input
            type="text"
            name="input"
            id="input"
            className="w-full bg-red-200 px-5 py-1 outline-neutral-300"
            placeholder="Enter the text"
            value={inputValue} // Bind input value to state
            onChange={handleInputChange} // Handle input change
          />
        </div>
      </div>
    </>
  );
};

export default MyMassingApp;
