// import {FC} from "react";
// import { TodoType } from "../../../../shared/api/posts/model";
import { MouseEvent } from 'react'
import { createPost } from '../../../../shared/api/posts'

// type Props = {
//     todo: TodoType
// }

export const PostForm = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    createPost({
      id: 3,
      title: 'title3',
      post: 'description3',
      image: 'image3',
    })
  }

  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Укажите название статьи"
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="post"
          rows={3}
          placeholder="Введите текст статьи"
        ></textarea>
      </div>
      <div className="mb-3">
        <input type="file" className="form-control" id="image" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Добавить статью
      </button>
    </form>
  )
}
