import { useState } from 'react';

function BookCreate({onCreate}) {
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title)
    setTitle('');
  }

  return(
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          onChange={handleChange}
          value={title}
          />
          <button>Create!</button>
      </form>
    );
  }
  
  export default BookCreate;