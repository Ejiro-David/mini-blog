//import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";



const Home = () => {

    const {data: blog, isPending, errMessage} = useFetch('http://localhost:8000/blogs')

   return(
       <div className="home">
           {isPending && <p>loading....</p>}
           {errMessage && <div>{errMessage}</div> }
           {blog && < Bloglist blog= {blog} title="All Blogs"/>}
       </div>
   );
}
 
export default Home;