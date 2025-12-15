//show hide
// import {useState,useEffect} from "react";

// export default function App() {
//   let [show, setShow] = useState(true);
  

//   return (
//     <div>
//         <button onClick={()=>setShow(prev=>!prev)}>{show?"hide":"show"}</button>
//         { show &&<p> No. of char</p>}
//     </div>
//   );
   
// }


//generate random quotes

// import {useState,useEffect} from "react";

// export default function App() {
//     const quotes = [
//     "Believe in yourself!",
//     "React is fun!",
//     "Practice makes perfect!",
//     "You are amazing!",
//     "Success requires consistency!"
//   ];
//   let [quote, setQuote] = useState("");
  

//   return (
//     <div>
//         <button onClick={()=>setQuote(quotes[Math.floor(Math.random()*quotes.length)])}>Generate</button>
//         <p>quote: {quote}</p>
//     </div>
//       );
// }


//light dark mode

//import {useState,useEffect} from "react";

// export default function App() {
    
//   let [dark, setDark] = useState(true);
  

//   return (
//    <div style={{backgroundColor: dark?"#111":"#fff"}}>
//    <button onClick={()=>setDark(prev=>!prev)}>
//        {dark?"light":"dark"}
//    </button>
//    </div>
//       );
// }



//word counter
// import {useState,useEffect} from "react";

// export default function App() {
    
// const [text, setText] = useState("");

//   const words = text.trim() ? text.trim().split(" ").length : 0;

//   return (
//     <div className="p-6">
//       <textarea
//         className="border p-2 w-full"
//         rows="4"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <p className="mt-3">Words: {words}</p>
//     </div>
//       );
// }


//character limit

// import { useState } from "react";

// export default function CharLimit() {
//   const [text, setText] = useState("");

//   return (
//     <div className="p-6">
//       <input
//         className="border p-2 w-full"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         maxLength={25}
//       />

//       {text.length >= 25 && (
//         <p className="text-red-600 mt-2">Limit reached!</p>
//       )}
//     </div>
//   );
// }




//live greeting
// import { useState } from "react";

// export default function Greeting() {
//   const [name, setName] = useState("");

//   return (
//     <div className="p-6">
//       <input
//         className="border p-2"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter name..."
//       />

//       <h2 className="mt-4 text-xl">Hello, {name} 👋</h2>
//     </div>
//   );
// }



//countdown timer
// import {useState,useEffect} from "react";

// export default function App() {
// const [num, setNum] = useState("");
//   const [count, setCount] = useState(null);

//   useEffect(() => {
//     if (count === null || count <= 0) return;

//     const timer = setInterval(() => {
//       setCount((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [count]);

//   return (
//     <div className="p-6">
//       <input
//         type="number"
//         className="border p-2"
//         value={num}
//         onChange={(e) => setNum(e.target.value)}
//       />
//       <button
//         onClick={() => setCount(Number(num))}
//         className="bg-blue-500 text-white px-4 py-2 ml-3"
//       >
//         Start
//       </button>

//       <h2 className="mt-4 text-3xl">{count}</h2>
//     </div>
//       );
// }



//search filter
// import { useState } from "react";

// export default function SearchFilter() {
//   const fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];
//   const [search, setSearch] = useState("");

//   const filtered = fruits.filter((f) =>
//     f.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6">
//       <input
//         className="border p-2"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul className="mt-4">
//         {filtered.map((f) => (
//           <li key={f}>{f}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }




//copy to clipboard
// import { useState } from "react";

// export default function CopyText() {
//   const [text, setText] = useState("");
//   const [msg, setMsg] = useState("");

//   function copy() {
//     navigator.clipboard.writeText(text);
//     setMsg("Copied!");
//     setTimeout(() => setMsg(""), 1500);
//   }

//   return (
//     <div className="p-6">
//       <input
//         className="border p-2"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button
//         className="bg-blue-500 text-white px-4 py-2 ml-3"
//         onClick={copy}
//       >
//         Copy
//       </button>
//       <p className="mt-3 text-green-600">{msg}</p>
//     </div>
//   );
// }



//text color changer
// import { useState } from "react";

// export default function TextColorChanger() {
//   const [color, setColor] = useState("black");

//   return (
//     <div className="p-6">
//       <select
//         className="border p-2"
//         onChange={(e) => setColor(e.target.value)}
//       >
//         <option value="black">Black</option>
//         <option value="red">Red</option>
//         <option value="blue">Blue</option>
//         <option value="green">Green</option>
//       </select>

//       <p className="mt-4 text-xl" style={{ color }}>
//         This text changes color!
//       </p>
//     </div>
//   );
// }


//password show hide
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// export default function PasswordToggle() {
//   const [show, setShow] = useState(false);

//   return (
//     <div className="p-6 flex flex-col gap-3">
//       <label className="font-semibold">Password:</label>

//       <div className="flex items-center border p-2 w-64 rounded">
        
//         {/* Input */}
//         <input
//           type={show ? "text" : "password"}
//           className="flex-1 outline-none"
//           placeholder="Enter password"
//         />

//         {/* Eye Icon */}
//         <span
//           onClick={() => setShow(!show)}
//           className="cursor-pointer text-xl"
//         >
//           {show ? <FaEyeSlash /> : <FaEye />}
//         </span>
//       </div>
//     </div>
//   );
// }





//stop watch
import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setTime((t) => t + 1), 1000);
    }
  }, [running]);

  return (
    <div className="p-6">
      <h1 className="text-3xl">{time}s</h1>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}


// //add delete 
// import { useState } from "react";

// export default function DynamicList() {
//   // 1. STATES
//   const [item, setItem] = useState("");   // For input box
//   const [list, setList] = useState([]);   // For storing all items added

//   // 2. REMOVE FUNCTION
//   const removeItem = (index) => {
//     const updatedList = list.filter((_, i) => i !== index);
//     setList(updatedList);
//   };

//   return (
//     <div className="p-6 max-w-sm mx-auto">

//       <h1 className="text-2xl font-bold mb-4">Dynamic List</h1>

//       {/* 3. INPUT FIELD */}
//       <input
//         className="border p-2 w-full"
//         placeholder="Enter item..."
//         value={item}
//         onChange={(e) => setItem(e.target.value)}
//       />

//       {/* 4. ADD BUTTON */}
//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
//         onClick={() => {
//           if (item.trim() === "") return; // empty input ignore
//           setList([...list, item]);       // add new item
//           setItem("");                    // clear input
//         }}
//       >
//         Add Item
//       </button>

//       {/* 5. LIST DISPLAY */}
//       <ul className="mt-5 space-y-2">
//         {list.map((value, index) => (
//           <li
//             key={index}
//             className="flex items-center justify-between bg-gray-100 p-2 rounded"
//           >
//             {value}

//             {/* 6. REMOVE BUTTON */}
//             <button
//               className="bg-red-500 text-white px-3 py-1 rounded"
//               onClick={() => removeItem(index)}
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// }
