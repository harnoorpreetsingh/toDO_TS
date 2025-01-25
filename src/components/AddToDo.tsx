import { ChangeEvent,  FormEvent,  useState } from "react";


type AddToDoProps={
  addToDo:(todoText:string)=> void;
}

const AddToDo:React.FC<AddToDoProps> = ({addToDo}:AddToDoProps) => {
  const [text, setText] = useState<string>("")
  const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value)
    setText(e.target.value);
  }
  const submitHandle=(e: FormEvent)=>{
    e.preventDefault();
    addToDo(text)
    setText("")
  }
  return (
    <div>
        <input className='border border-white p-2 rounded-sm' type="text" placeholder='Enter a task' onChange={handleChange} value={text} />
         <button type='button' onClick={submitHandle} className='text-sm' > +Add Task</button>
    </div>
  )
}

export default AddToDo;