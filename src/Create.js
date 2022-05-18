import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {

    const[title, setTitle]  = useState('')  
    const[body, setBody]  = useState('')  
    const[author, setAuthor]  = useState('yoshi')  
    const[isPending, setIsPending] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            history.psuh("/")
        })
    }





    return (
        <div className="create">
           <form onSubmit={handleSubmit}>
               <label>Blog Title</label>
               <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    required 
               />

               <label>Blog Author</label>
               <select 
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
               >
                   <option value="mario">mario</option>
                   <option value="yoshi">yoshi</option>
                   
               </select>

                <label >Blog Body</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                >{body}</textarea>

                {isPending && <button disabled>Adding Blog...</button>}
                {!isPending && <button>Add Blog</button>}
           </form>

           
           <p>{title}</p>
           <p>{author}</p>
           <p>{body}</p>
           
        </div>
     );
}
 
export default Create;