export type PostType = {
  id: number;
  title: string;
  image: string;
  post: string;
  crated_at: {
    seconds: number;
    nanoseconds: number;
  };
  updated_at: {
    seconds: number;
    nanoseconds: number;
  };
};
