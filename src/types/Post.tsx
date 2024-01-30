export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  author: {
    id: number;
    name: string;
  };
};
