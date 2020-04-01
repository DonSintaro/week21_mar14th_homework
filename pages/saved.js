import Layout from '../components/Layout.js';
import Results from '../components/Results.js';
import React, { useState } from "react";
import API from "../utils/API.js";


export default function Saved({resultsa}){
    

const [type, setType] = useState("Delete");
const [results, setResults] = useState(resultsa);



    const updateList = async () =>{
        const res = await API.getBooks();
        setResults(res.data);

    }
    


    return (
    
        <div>
        

        <Layout>

    
        
            <div className="container resultsBox">

                <h4 className="subHeader">Saved Results</h4>

                <Results 
                    type = {type} 
                    results = {results}
                    updateList = {updateList}
                />

                
            </div>

        </Layout>


    
        </div>
    
    )

}

export async function getServerSideProps() {

    const res = await API.getBooks();
    //const data = await setResults([res]);
    const resultsa = res.data;
    // Pass data to the page via props
    return { props: { resultsa } }
  }
