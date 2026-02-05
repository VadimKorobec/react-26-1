import { PostsList } from "./components/PostsList/PostsList";
import type { Post } from "./types/post";

const posts: Post[] = [
  {
    id: 1,
    auther: "Cat",
    text: "React js is awesome!",
  },
  {
    id: 2,
    auther: "Mouse",
    text: "NextJs is awesome!",
  },
];

export const App = () => {
  return (
    <>
      <PostsList posts={posts} />
    </>
  );
};
