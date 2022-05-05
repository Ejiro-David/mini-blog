const Bloglist = ({blog, title, handleDelete}) => {

    

    return ( 
        <div className="blog-list">
            <div>{title}</div>
            <div className="blog-preview">
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={() => {handleDelete(blog.id)}}>Delete Blog</button>
                </div>
            ))}
           </div>
        </div>
     );
}
 
export default Bloglist;