// import React, { use, useEffect,useR } from "react";
// import { useState,useCallback } from "react";
// import "./App.css";
// function App(){
//   const [length,setLength]=useState(8);
//   const [numberAllowed,setnumberAllowed]=useState(false);
//   const [characterAllowed,setCharAllowed]=useState(false);
//   const[password,setpass]=useState("")

//   const passGen=useCallback(()=>{
//     let pass="";
//     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if(numberAllowed) str+="0123456789";
//     if(characterAllowed) str+="!@#$%^&*(){}~`";

//     for(let i=1;i<=length;i++){
//       let char=Math.floor(Math.random()*str.length+1);
//       pass+=str.charAt(char);
//     }
    
//     setpass(pass);

//   },[length,numberAllowed,characterAllowed,setpass])

//   useEffect(()=> {passGen()},[length,numberAllowed,characterAllowed,passGen])  //inorder to run 

//   return(
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  py-3 text-orange-500 bg-gray-600"><h1 className="text-white text-center my-3">Password Generator</h1>
//     <div className="flex gap-2 shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-2 px-3 text-black bg-amber-50"
//             placeholder="Password"
//             readOnly
//           />
//           <button className="outline-none bg-blue-700 text-white px=3 py-0.5 shrink-0 w-15">copy</button>
//       </div>
// <div className="'flex text-sm gap-x-2">
//   <div className="flex items-center gap-x-1">
//     <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>{
//   setLength(e.target.value)}}/>
//     <label>Length: {length}</label>
//   </div>
//   <div className="flex items-center gap-x-1">
//     <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{
//   setnumberAllowed((prev)=>!prev)}}/>
//     <label htmlFor="numberInput">Numbers</label>
//   </div>
//   <div className="flex items-center gap-x-1">
//     <input type="checkbox" defaultChecked={characterAllowed} id="CharcterInput" onChange={()=>{
//   setCharAllowed((prev)=>!prev)}}/>
//     <label htmlFor="CharcterInput">Charcters</label>
//   </div>
// </div>
//     </div>
//   )
// }

// export default App;



// import React, { useState } from "react";

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");

//   function addTodo(e) {
//     e.preventDefault();
//     if (!text.trim()) return;

//     setTodos((prev) => [
//       ...prev,
//       { id: Date.now(), text, done: false }
//     ]);

//     setText("");
//   }

//   function toggle(id) {
//     setTodos((prev) =>
//       prev.map((t) =>
//         t.id === id ? { ...t, done: !t.done } : t
//       )
//     );
//   }

//   function remove(id) {
//     setTodos((prev) => prev.filter((t) => t.id !== id));
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-12">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-[400px]">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//           Todo App
//         </h1>

//         {/* Add Todo Form */}
//         <form onSubmit={addTodo} className="flex gap-2">
//           <input
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Enter a task..."
//             className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//           >
//             Add
//           </button>
//         </form>

//         {/* Todo List */}
//         <ul className="mt-5 space-y-3">
//           {todos.map((t) => (
//             <li
//               key={t.id}
//               className="flex items-center justify-between bg-gray-50 p-3 rounded border border-gray-200"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={t.done}
//                   onChange={() => toggle(t.id)}
//                   className="w-4 h-4"
//                 />
//                 <span
//                   className={`text-lg ${
//                     t.done ? "line-through text-gray-500" : "text-gray-800"
//                   }`}
//                 >
//                   {t.text}
//                 </span>
//               </div>

//               <button
//                 onClick={() => remove(t.id)}
//                 className="text-red-500 hover:text-red-700 font-semibold"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TodoApp;



import React from "react";
import { useState,useEffect } from "react";




function App(){

//   const [on,setOn]=useState(false);
// function toggle(){
//   setOn(prev=>!prev);
// }
  // return(
  //   <div className={on ? "bg-green-500 p-4" : "bg-white p-4"}>              //toggle button 

  //     <button onClick={toggle}>{on?"ON":"OFF"}</button>

  //   </div>
  // )


  // const [color, setColor] = useState("");




  const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
  //   <div
  //     className="h-screen flex flex-col gap-4 justify-center items-center "
  //     style={{ backgroundColor: color || "white" }}>

  //     <input
  //       type="text"
  //       placeholder="Type a color..."
  //       className="px-4 py-2 border rounded"
  //       value={color}
  //       onChange={(e) => setColor(e.target.value)}
  //     />

  //     <p className="text-xl font-semibold">
  //       Current Color: {color || "None"}
  //     </p>
  //   </div>
  // );




  
    <div className="h-screen flex justify-center items-center bg-white">
      <h1 className="text-5xl text-green-400 font-mono">{time}</h1>
    </div>
  )
}

export default App;