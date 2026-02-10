import { useState } from "react";
import type { Post } from "../../types/post";
import styles from "./NewPost.module.css";

interface NewPostProps {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

export const NewPost = ({ onSubmit, onClose }: NewPostProps) => {
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: Post = {
      text,
      author,
    };

    onSubmit(newPost);
    onClose();
    reset();
  };

  const reset = () => {
    setText("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          onChange={handleChangeBody}
          value={text}
          id="body"
          required
          rows={3}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          onChange={handleChangeAuthor}
          value={author}
          type="text"
          id="name"
          required
        />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};
