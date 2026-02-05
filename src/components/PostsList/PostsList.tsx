import type { Post } from "../../types/post";
import { NewPost } from "../NewPost/NewPost";
import { PostItem } from "../PostItem/PostItem";

import styles from "./PostsList.module.css";

interface PostsListProps {
  posts: Post[];
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};
