function Task(props) {
    return <li>{props.task}</li>;
  }
  
  function Pergunta() {


    const tasks = [
      { id: 1, task: 'Buy groceries' },
      { id: 2, task: 'Walk the dog' },
      { id: 3, task: 'Finish project' }
    ];
  
    return (
      <>
        <h1>My To-Do List</h1>
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task.task} />
          ))}
        </ul>
      </>
    );
  }
  
 export default Pergunta
  