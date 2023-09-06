"use client";
import { RSC_MODULE_TYPES } from 'next/dist/shared/lib/constants'
import React, { useState } from 'react'

const Siddesh = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
   setMainTask([...mainTask, {title,desc}]);

    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler=(i) =>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask=<h2>No task available</h2>
    if(mainTask.length>0){
      renderTask=mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between mb-5 w-2/3'>
           <h5 className='text-2xl font-semibold'>{t.title}</h5>
           <h5 className='text-lg font-medium'>{t.desc}</h5>
         </div>
         <button 
         onClick={()=>{
          deleteHandler(i)
         }}
         className='bg-red-500 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
       )
    })
  }

  return (
    <>
        <h1 className='bg-blue-500 text-white p-5 text-5xl font-bold text-center' >Siddesh TodoList</h1>

        <form onSubmit={submitHandler}>
        <input type="text" className="text border-zinc-800 border-2 m-8 px-4 py-2"  placeholder='Enter Title Here' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>

        <input type="text" className="text border-zinc-800 border-2 m-8 px-4 py-2"  placeholder='Enter Discription Here' value={desc} onChange={(e)=>{
          setdesc(e.target.value)
        }}/>

        <button className='bg-blue-500 text-white px-4 py-3 text-2x1 font-bold rounded m-5'>Add Task</button>
        </form>
        <hr />
        <div className='p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
        </div>
    </>
  )
}

export default Siddesh
