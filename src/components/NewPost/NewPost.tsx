import { useState } from "react";
import type { Post } from "../../types/post";
import { nanoid } from "nanoid";
import styles from "./NewPost.module.css";

interface NewPostProps {
  onSubmit: (post: Post) => void;
}

export const NewPost = ({ onSubmit }: NewPostProps) => {
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
      id: nanoid(),
      text,
      author,
    };

    onSubmit(newPost);
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
      <p>{text}</p>
      <p>{author}</p>
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
    </form>
  );
};
