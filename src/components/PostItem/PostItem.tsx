import type { Post } from "../../types/post";
import styles from "./PostItem.module.css";

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
    const { auther, text } = post;
    
  return (
    <div className={styles.post}>
      <p className={styles.author}>{auther}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
