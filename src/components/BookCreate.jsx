/* eslint-disable react/prop-types */
import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          className="input"
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Create!
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
