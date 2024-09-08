import { httpClient } from "../http-client";
import { QueryParams, TodoType } from "./model";

export const getTodos = (params: QueryParams) => httpClient
    .get("todos", { searchParams: params })
    .json<TodoType[]>();

export const getTodoById = (id: number) => httpClient
    .get(`todos/${id}`)
    .json<TodoType>();

export const updateTodo = (todo: TodoType) => httpClient
    .put(`todos/${todo.id}`,{json : todo})
    .json<TodoType>();