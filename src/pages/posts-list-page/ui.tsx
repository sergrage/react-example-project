import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

import { PostTable, PostForm, postModel } from '../../entities/post'

export const PostsListPage = observer(() => {
  const {
    store: { getPostsList, postList },
  } = postModel

  useEffect(() => {
    getPostsList()
  }, [getPostsList])

  return (
    <>
      <h2>Main Page</h2>

      <PostForm getPostsList={getPostsList}/>

      <hr />

      <PostTable className="mt-3" postList={postList} />
    </>
  )
})
