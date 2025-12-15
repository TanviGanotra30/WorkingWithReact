import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div class="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div class="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setColor("red")}
          class="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"red"}}>Red</button>
          <button 
          onClick={()=>setColor("purple")}
          class="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"purple"}}>Purple</button>
          <button 
          onClick={()=>setColor("blue")}
          class="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"blue"}}>Blue</button>
          <button 
          onClick={()=>setColor("yellow")}
          class="outline-none px-4 py-1 rounded-full text-gray-500 shadow-lg " style={{backgroundColor:"yellow"}}>Yellow</button>
          <button 
          onClick={()=>setColor("pink")}
          class="outline-none px-4 py-1 rounded-full text-gray-500 shadow-lg " style={{backgroundColor:"pink"}}>Pink</button>
          <button 
          onClick={()=>setColor("black")}
          class="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"black"}}>Black</button>
          <button 
          onClick={()=>setColor("gray")}
          class="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"gray"}}>Gray</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
