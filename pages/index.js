import Layout from '../components/Layout.js';

export default function Searched(){

    return (
    
        <>

        <Layout>

        <div class="container searchBarBox">
    
            <h4 class="subHeader">Book Search</h4>
    
            <form>
    
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Book Name" aria-label="Book Name" aria-describedby="basic-addon2" id="bookSearch"/>
                </div>
    
                <button type="submit" class="btn btn-light submitSearch">Search</button>
    
            </form>
        </div>



        </Layout>


    
        </>
    
    )

}
