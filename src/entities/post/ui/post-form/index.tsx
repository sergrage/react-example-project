import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { createPost } from '../../../../shared/api/posts'

import styles from "./styles.module.scss";
import { log } from 'console';

export const PostForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [title, setTiltle] = useState<string>('');
  const [post, setPost] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [formDisabled, setFormDisabled] = useState<boolean>(true);
  const [imageIsGood, setImageIsGood] = useState<boolean>(true);

  useEffect(() => {
    if (title.length > 5 && post.length > 10) {
      setFormDisabled(false)
    } else {
      setFormDisabled(true)
    }
  }, [title, post])


  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    createPost({
      id: 3,
      title: 'title3',
      post: 'description3',
      image: 'image3',
      created_at: Date.now(),
      updated_at: null
    })
  }

  const addImage = (event: ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files[0];
    // console.log(file);
    
    // if(file.type.startsWith('image/')){

    // } else {

    // }
    return new Promise((resolve, _) => {
      const fileReader = new FileReader();
      if (event.target.files) {
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = () => {
          const img = new Image();
          img.src = fileReader.result as string;
          img.onload = () => {
              console.log(img.width, img.height); // image is loaded; sizes are available
          };
          
          setImagePreview(fileReader.result as string);
          resolve(true);
        }
      }
    })
  }

  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          value={title}
          onChange={(event) => setTiltle(event.target.value)}
          name="title"
          className={`form-control ${title.length >= 5 ? 'is-valid' : 'is-invalid'}`}
          id="title"
          placeholder="Укажите название статьи"
        />
        <div className={`${styles.feedback} ${title.length >= 5 ? 'valid-feedback' : 'invalid-feedback'}`}>
          {title.length >= 5 ? 'Выглядит неплохо' : 'Длина заголовка должна быть больше 5 символов'}
        </div>
      </div>
      <div className="mb-3">
        <textarea
          className={`form-control ${post.length >= 10 ? 'is-valid' : 'is-invalid'}`}
          value={post}
          onChange={(event) => setPost(event.target.value)}
          id="post"
          name="post"
          rows={3}
          placeholder="Введите текст статьи"
        ></textarea>
        <div className={`${styles.feedback} ${post.length >= 10 ? 'valid-feedback' : 'invalid-feedback'}`}>
          {post.length >= 10 ? 'Выглядит неплохо' : 'Длина текста должна быть больше 10 символов'}
        </div>
      </div>
      {imagePreview &&
        <img src={imagePreview} className="img-thumbnail w-25 my-3" alt="imagepreload"></img>
      }
      <div className="mb-3">
        <input type="file" className="form-control" id="image" name="image" onChange={addImage} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={formDisabled}>
        Добавить статью
      </button>
    </form>
  )
}
