import Layout from '../components/Layout.js';
import Results from '../components/Results.js';
import React, { useState } from "react";
import API from "../utils/API.js";
import fetch from 'isomorphic-unfetch';
import mongoose from 'mongoose';



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
    const resultsa = JSON.parse(JSON.stringify(await mongoose.models.Books.find({})))
    return { props: { resultsa } }
  }
