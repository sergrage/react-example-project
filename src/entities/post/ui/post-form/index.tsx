import { ChangeEvent, FC, MouseEvent, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { uploadFile } from '../../../../shared/api/storage-client'
import { createPost } from '../../../../shared/api/posts'

type imageValidation = {
  msg: string,
  valid: boolean
}

type PropsType = {
  getPostsList: () => void
}

export const PostForm: FC<PropsType> = ({ getPostsList }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [title, setTiltle] = useState<string>('')
  const [post, setPost] = useState<string>('')
  const [file, setFile] = useState<File | null>(null);
  const [formDisabled, setFormDisabled] = useState<boolean>(true)
  const [imageValidation, setImageValidation] = useState<imageValidation>({
    msg: '',
    valid: true
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (title.length > 5 && post.length > 10 && imageValidation.valid && imageValidation.msg.length > 0) {
      setFormDisabled(false)
    } else {
      setFormDisabled(true)
    }
  }, [title, post, imageValidation])

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    if (file) {
      uploadFile(file).then((fileName) => {
        createPost({
          id: 3,
          title: title.trim(),
          post: post.trim(),
          image: fileName,
          created_at: Date.now(),
          updated_at: null,
        })
      }).then(() => {
        getPostsList();
        setImagePreview(null);
        setTiltle('');
        setPost('');
        setFile(null);
        setImageValidation({
          msg: '',
          valid: true
        })
        if(fileInputRef.current && fileInputRef.current.value) {
          fileInputRef.current.value = '';
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  const addImage = (event: ChangeEvent<HTMLInputElement>) => {
    setImageValidation({
      msg: '',
      valid: true
    })
    if (!event.target.files) return;

    const file = event.target.files[0];

    if (file.type.startsWith('image/')) {
      setFile(file);
    } else {
      setImageValidation({
        msg: 'Вы пытаетесь загрузить не изображение',
        valid: false
      })
      return;
    }
    return new Promise((resolve) => {
      const fileReader = new FileReader()
      if (event.target.files) {
        fileReader.readAsDataURL(event.target.files[0])
        fileReader.onload = () => {
          const img = new Image()
          img.src = fileReader.result as string
          img.onload = () => {
            console.log(img.width, img.height) // image is loaded; sizes are available
          }
          
          setImagePreview(fileReader.result as string)
          setImageValidation({
            msg: 'Это подойдет)',
            valid: true
          })
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
        <div
          className={`${styles.feedback} ${title.length >= 5 ? 'valid-feedback' : 'invalid-feedback'}`}
        >
          {title.length >= 5
            ? 'Выглядит неплохо'
            : 'Длина заголовка должна быть больше 5 символов'}
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
        <div
          className={`${styles.feedback} ${post.length >= 10 ? 'valid-feedback' : 'invalid-feedback'}`}
        >
          {post.length >= 10
            ? 'Выглядит неплохо'
            : 'Длина текста должна быть больше 10 символов'}
        </div>
      </div>
      {imagePreview && (
        <img
          src={imagePreview}
          className="img-thumbnail w-25 my-3"
          alt="imagepreload"
        ></img>
      )}
      <div className="mb-3">
        <input
          type="file"
          ref={fileInputRef}
          className={`form-control ${imageValidation.valid && imageValidation.msg.length > 0 ? 'is-valid' : 'is-invalid'}`}
          id="image"
          name="image"
          onChange={addImage}
        />
        <div className={`${styles.feedback} ${imageValidation.valid ? 'valid-feedback' : 'invalid-feedback'}`}>
          <span>{imageValidation.msg}</span>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleClick}
        disabled={formDisabled}
      >
        Добавить статью
      </button>
    </form>
  )
}
