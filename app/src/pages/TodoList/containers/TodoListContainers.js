import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from "../../../helpers/hooks";
import FormPage from "../../TodoList/components/TodoListLayout";
import { CREATE_TODO, DELETE_TODO, COMPLETE_TODO, UPDATE_TODO, UPDATE_EDIT_INPUT_VALUE } from '../actions';

const FormPageContainer = () => {
    const [form, setFormValues, handleForMainFieldClick, reset] = useForm({ todo: '', isEditMode: false, isCompleted: false });
    const [editInput, setEditInput, handleForFieldClick] = useForm({ editValue: '' });

    const dispatch = useDispatch();
    const { todos: todoList, editInputValue: todoBeforeEdit } = useSelector(state => state.todoPage);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        dispatch(CREATE_TODO(form));
        reset();
    }, [form, reset, dispatch]);


    const handleTodoDelete = useCallback((index) => {
        const todosCopy = [...todoList];

        todosCopy.splice(index, 1);

        dispatch(DELETE_TODO(todosCopy));
    }, [dispatch, todoList]);


    const handleTodoComplete = useCallback((index) => {
        const todosCopy = [...todoList];

        todosCopy[index].isCompleted = true;

        dispatch(COMPLETE_TODO(todosCopy));
    }, [dispatch, todoList]);


    const handleTodoEdit = useCallback((index) => {
        const todosCopy = [...todoList];

        todosCopy[index].isEditMode = true;

        dispatch(UPDATE_TODO(todosCopy));
        dispatch(UPDATE_EDIT_INPUT_VALUE(todosCopy[index].todo));
    }, [dispatch, todoList]);

    const handleTodoUpdate = useCallback((index) => {
        const todosCopy = [...todoList];
        const isEmptyInput = editInput.editValue.trim() === '';

        todosCopy[index].todo = isEmptyInput ? todoBeforeEdit : editInput.editValue;
        todosCopy[index].isEditMode = false;

        dispatch(UPDATE_TODO(todosCopy));
    }, [editInput, dispatch, todoBeforeEdit, todoList]);

    return (
        <FormPage
            formValues={form}
            setFormValues={setFormValues}
            todoList={todoList}
            handleSubmit={handleSubmit}
            handleFormReset={reset}
            handleTodoDelete={handleTodoDelete}
            handleTodoEdit={handleTodoEdit}
            handleTodoComplete={handleTodoComplete}
            handleTodoUpdate={handleTodoUpdate}
            editInput={editInput}
            setEditInput={setEditInput}
            todoBeforeEdit={todoBeforeEdit}
            handleForFieldClick={handleForFieldClick}
        />
    );
};

export default FormPageContainer;