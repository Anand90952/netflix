import { useEffect, useState } from "react";
import instance from "../instance";
function Row({title,fetchurl}){
    const [allMovies, setAllMovies] = useState();
    const base_url="https://image.tmdb.org/t/p/originals";
   const fetchData = async()=>{
   const response= await instance.get(fetchurl);
   setAllMovies(response.data.results)
   }
   useEffect(()=>{
    fetchData();
   },[])
   console.log("===all movies===");
   console.log(allMovies)
    return(
        <div>
            <h1 style={{color:"white"}}>{title}</h1>
            <div className="movie-row">
                {
                    allMovies?.map(items => (  
                     <img src={`${base_url}${item.backdrop_path}`} alt="no-image" />
                        
                    )
                    )
                }
            </div>
        </div>
    )
}
export default Row;