import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [errMessage, setErrMessage] = useState(null);


 

   useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(res)
                if(!res.ok ){
                    throw Error('data resource not okay')
                }return res.json() ;
                
            })
            .then((data) => {
                 setBlogs(data)
                 setIsPending(false)
                 setErrMessage(null)
            })
            .catch((err) => {
                setErrMessage(err.message);
                setIsPending(false)
            })
   }, [url])
    
    return { data, isPending, errMessage};
}
 
export default useFetch;