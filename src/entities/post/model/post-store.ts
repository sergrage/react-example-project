import { makeAutoObservable, runInAction } from "mobx";
import { PostType } from "../../../shared/api/posts/model";
import { getPosts } from "../../../shared/api/posts";

class PostStore {
  postList: PostType[] = [];
  post?: PostType;

  isLoading: boolean = false;

  error = "";

  constructor() {
    makeAutoObservable(this);
  }

  getPostsList = async () => {
    try {
      this.isLoading = true;

      const data = await getPosts();

      runInAction(() => {
        this.isLoading = false;
        this.postList = [];
        data.forEach(item => {
          this.postList.push(item.data() as PostType);
        });
      });
    } catch (err) {
      runInAction(() => {
        this.isLoading = false;
        this.error = (err as Error)?.message;
      });
    }
  };

  // getTaskById = async (id: number) => {
  //     try {
  //         this.isLoading = true;
  //         const data = await getTodoById(id);

  //         runInAction(() => {
  //             this.isLoading = false;
  //             this.post = data;
  //         })

  //     } catch (err) {
  //         runInAction(() => {
  //             this.isLoading = false;
  //             this.error = (err as Error)?.message;
  //         })
  //     }
  // }

  // updateTodoItem = async(todo: PostType) => {
  //     try {
  //         // this.isLoading = true;
  //         await updateTodo(todo);

  //         runInAction(() => {
  //             // this.isLoading = false;
  //         })

  //     } catch (err) {
  //         runInAction(() => {
  //             // this.isLoading = false;
  //             this.error = (err as Error)?.message;
  //         })
  //     }
  // }
}

export const store = new PostStore();
