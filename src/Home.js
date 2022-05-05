import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";



const Home = () => {
   const [blog, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   ]);

const [name, setName] = useState('ejiro');



   const handleDelete = (id) => {
       const newBlogs = blog.filter((blog) => (
           blog.id !== id
       ));
       setBlogs(newBlogs)
   }

   useEffect(() => {
       console.log('use effect ran ') 
   }, [name])

   return(
       <div className="home">
           <Bloglist blog= {blog} title="All Blogs" handleDelete={handleDelete}/>
           <button onClick={() => {setName('a-willow')}}>change name</button>
           <p>{name}</p>
       </div>
   );
}
 
export default Home;