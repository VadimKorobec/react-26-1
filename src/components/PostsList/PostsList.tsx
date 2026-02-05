import type { Post } from "../../types/post";
import { PostItem } from "../PostItem/PostItem";

import styles from "./PostsList.module.css";

interface PostsListProps {
  posts: Post[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};
