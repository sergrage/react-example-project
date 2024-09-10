import db from '../firebase-client'
import { PostType } from './model'
import { collection, doc, getDocs, addDoc } from 'firebase/firestore'

export const getPosts = async () => {
  return await getDocs(collection(db, 'posts'))
}

export const createPost = async (
  post: Omit<PostType, 'crated_at' | 'updated_at'>
) => {
  await addDoc(collection(db, 'posts'), post)
}

// export const getTodoById = (id: number) => httpClient
//     .get(`todos/${id}`)
//     .json<TodoType>();

// export const updateTodo = (todo: TodoType) => httpClient
//     .put(`todos/${todo.id}`,{json : todo})
//     .json<TodoType>();
