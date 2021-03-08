export const ADD_TODO = "ADD";
export const EDIT_TODO = "EDIT";
export const DELETE_TODO = "DELETE";

export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        newTodo
    };
};

export const editTodo = (id, newTodo) => {
    return {
        type: EDIT_TODO,
        id,
        newTodo
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    };
};
