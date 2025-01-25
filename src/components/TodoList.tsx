type ToDoListProps = {
    items: { id: string, work: string }[];
    removeTodo: (todoId:string) => void;
  };
  


  const TodoList: React.FC<ToDoListProps> = (props) => {
    console.log(props);
  
   
    return (
      <div className="mt-12">
        {props.items.map((e) => {
          return (
            <div key={e.id} className="flex justify-between items-center mt-4 border p-2 rounded-lg bg-gray-900">
              <h1 className="!text-[20px]">{e.work}</h1>
              <button onClick={()=>props.removeTodo(e.id)} type="button" className="!bg-red-600">Del</button>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default TodoList;
  