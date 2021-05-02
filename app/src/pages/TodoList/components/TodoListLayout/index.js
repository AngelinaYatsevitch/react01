import React from 'react';

import Todo from '../../../../comonComponents/Todo/Todo';
import './list.css';

const FormPage = ({ formValues, setFormValues, todoList, handleSubmit, handleTodoDelete, handleTodoComplete, handleTodoEdit,
    handleTodoUpdate, setEditInput, todoBeforeEdit, editInput, handleForFieldClick }) => {
    const { todo } = formValues;

    return (
        <div className='todo-app'>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit} className='todo-form'>
                <input type="text" name='todo' value={todo} className='todo-input' onChange={setFormValues} />
                <button type='submit' className='todo-button' disabled={todo.length === 0}>Add</button>
            </form>
            <div>
                {todoList.map((todo, index) => {
                    return <div key={index} >
                        <Todo
                            todos={todo}
                            handleDelete={() => handleTodoDelete(index)}
                            handleEdit={() => handleTodoEdit(index)}
                            handleComplete={() => handleTodoComplete(index)}
                            handleUpdate={() => handleTodoUpdate(index)}
                            setEditInput={setEditInput}
                            todoBeforeEdit={todoBeforeEdit}
                            editInput={editInput}
                            handleForFieldClick={handleForFieldClick}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default React.memo(FormPage);























// const Todo = ({
    


//   }) => {
//     return (
//       <>
//       <h1>TO DO LIST</h1>
//         <input type='text' name='text' id='text' placeholder='Add task here...'/>
//         <button>Add task</button>
//       </>
//     );
//   };
  
//   Todo.propTypes = {
//     // countValue: PropTypes.number.isRequired,
//     // parityType: PropTypes.string.isRequired,
//     // handleIncrement: PropTypes.func.isRequired,
//     // handleDecrement: PropTypes.func.isRequired,
//     // handleReset: PropTypes.func.isRequired,
//   };
  
//   export default React.memo(Todo);