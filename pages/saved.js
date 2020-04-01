import Layout from '../components/Layout.js';
import Results from '../components/Results.js';
import React, { useState } from "react";
import API from "../utils/API.js";

export default function Saved(){

    const [results, setResults] = useState([])
    const [type, setType] = useState("Delete");






    const updateList = () => {
        console.log("Got to update list thing");

        API.getBooks().then(function(data){setResults([data]);
            console.log(results);
        })

        
        
  
    }


    updateList();

    return (
    
        <>
        

        <Layout>

    
        
            <div className="container resultsBox">

                <h4 className="subHeader">Results</h4>

                <Results results = {results} 
                type = {type}
                updateList = {updateList()}
                
                />
            </div>

        </Layout>


    
        </>
    
    )

}
