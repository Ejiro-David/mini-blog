import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";



const Home = () => {

    const [blog, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [errMessage, setErrMessage] = useState(null);


 

   useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res)
                if(!res.ok ){
                    throw Error('data resource not okay')
                }return res.json() ;
                
            })
            .then((data) => {
                 setBlogs(data)
                 setIsPending(false)

            })
            .catch((err) => {
                setErrMessage(err.message);
                setIsPending(false)
            })
   }, [])

   return(
       <div className="home">
           {isPending && <p>loading....</p>}
           {errMessage && <div>{errMessage}</div> }
           {blog && < Bloglist blog= {blog} title="All Blogs"/>}
       </div>
   );
}
 
export default Home;