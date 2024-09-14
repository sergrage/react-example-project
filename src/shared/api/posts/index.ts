import firebase from '../firebase-client'
import { PostType } from './model'
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

export const getPosts = async () => {
  return await getDocs(collection(firebase.db, 'posts'))
}

export const createPost = async (post: PostType) => {
  await addDoc(collection(firebase.db, 'posts'), post)
}

export const getPostById = async (id: string) => {
  return await getDoc(doc(firebase.db, 'posts', id))
}

export const updatePost = async (id: string, data: PostType) => {
  await updateDoc(doc(firebase.db, 'posts', id), data)
}

export const deletePost = async (id: string) => {
  await deleteDoc(doc(firebase.db, 'posts', id))
}
