import { FC } from "react";
import { PostType } from "../../../../shared/api/posts/model";

type PostsTableProps = {
  postList: PostType[];
  className: string;
};

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
        {postList.map(post => (
          <tr key={post.id}>
            <th scope="row">{post.id}</th>
            <td>{post.title}</td>
            <td>{post.image}</td>
            <td className="text-end">
              <button className={"btn btn-sm btn-primary"}>test btn</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
