import React , {useState, useEffect} from 'react';
import '../styles.css';

export default function MoviesGrid(){

    const[movies,setMovies] = useState([]);

    useEffect(() => {
        fetch("movies.json") //Here since we are in the same directory we are not writing the whole URL
        .then(response => response.json()) //here we are converting the response to Json (later they will be available as Javascript objects)
        .then(data => setMovies(data)) //Here we are assigning them to the data objects.
    
    }, []);

        return(<div>{movies.length}</div>);
}