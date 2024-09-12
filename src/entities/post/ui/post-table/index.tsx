import { FC } from 'react'
import { PostType } from '../../../../shared/api/posts/model'

import editIcon from "@/shared/ui/svg/editIcon.svg"
import deleteIcon from "@/shared/ui/svg/deleteIcon.svg"
import showIcon from "@/shared/ui/svg/showIcon.svg"

type PostsTableProps = {
  postList: PostType[],
  className: string,
}

export const PostTable: FC<PostsTableProps> = ({ postList, className }) => {
  return (
    <table className={`table table-hover table-primary ${className}`}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col" className="text-end">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {postList.map((post) => (
          <tr key={post.doc_id}>
            <th scope="row">{post.id}</th>
            <td>{post.title}</td>
            <td><img className='img-thumbnail w-25' src={post.image} alt={post.title} /></td>
            <td className="text-end">
              <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button className={'btn btn-sm btn-success'}>
                  <img src={showIcon} style={{ filter: 'invert(1)' }} />
                </button>
                <button className={'btn btn-sm btn-primary'}>
                  <img src={editIcon} style={{ filter: 'invert(1)' }} />
                </button>
                <button className={'btn btn-sm btn-danger'}>
                  <img src={deleteIcon} style={{ filter: 'invert(1)' }}/>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
