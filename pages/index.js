import Layout from '../components/Layout.js';
import ResultsList from '../components/Results.js';
import React, { useState } from "react";
import axios from "axios";

                                                                                                      

export default function Searched(){

    const [results, setResults] = useState([])
    const [type, setType] = useState("Save");

    const [searched, setSearched] = useState("");



    const handleFunction = (event) => {


    }


    
    const searchBooks = async () => {
        const result = await axios.get('https://www.googleapis.com/books/v1/volumes?q=$' + searched);
        setResults(result.data.items);
    };


    const handleFormSubmit = event => {
        event.preventDefault();
        searchBooks();
    };


    const handleInputChange = event => {
        const value = event.target.value;
        setSearched(value); 
      };

    return (
    
        <>

        <Layout>

        <div className="container searchBarBox">
    
            <h4 className="subHeader">Book Search</h4>
    
            <form>
    
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Book Name" aria-label="Book Name" aria-describedby="basic-addon2" id="bookSearch" onChange={handleInputChange} value={searched}/>
                </div>
    
                <button type="submit" className="btn btn-light submitSearch" onClick={handleFormSubmit} value={searched}>Search</button>
    
            </form>

        </div>


        <ResultsList  results={results} 
        type={type} 
        
        />


        </Layout>


    
        </>
    
    )

}
