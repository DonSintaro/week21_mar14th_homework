
function ResultsList(props){

    const handleAuthors = (value) => {

        if (value){ 
            return value.map(function(a, i){
                if(value.length > 1 && i < value.length-1){return (a + ", ")}
                else { return a}
            });
        }
        else {
            return ("*No Author Known*");
        }
    }



    const handleFunction = (value) => {


        console.log(value);
        //Just need to assign if/else for props.type save/delete => make mongo and express connection

    }


   
return ( 

    <div className="container resultsBox">
    <ul>

        {props.results.map(function(item){
            return (
                <li className=" container result" key={item.id}>
                    <div>
                        <div className="resultFunctions">
                            <button type="button" className="btn btn-light navFunction resultFunctionBtns"><a href={item.volumeInfo.canonicalVolumeLink}target="_blank" rel="noopener noreferrer">View</a></button >
{/* Have to pass a function in a function to add closure, otherwise, program assumes if needs to run function to gain that property */}
                            <button type="button" className="btn btn-light navFunction resultFunctionBtns" onClick={() => handleFunction({
                                id: item.id,
                                volumeInfo: {
                                    canonicalVolumeLink: item.volumeInfo.canonicalVolumeLink,
                                    title: item.volumeInfo.title,
                                    subtitle: item.volumeInfo.subtitle,
                                    authors: item.volumeInfo.authors,
                                    imageLinks: {thumbnail: item.volumeInfo.imageLinks.thumbnail},
                                    description: item.volumeInfo.description
                                }

                            })}>{props.type} </button >

                        </div>

                        
                    </div>

                    <h4>{item.volumeInfo.title}</h4>

                    <h5>{item.volumeInfo.subtitle}</h5>
                    <h6><span>Written by: </span>{handleAuthors(item.volumeInfo.authors)}</h6>
                    <div className="container seperator"></div>
                    <div className="container containIt">
                        <div className="imageBox">
                            <img className="bookImage" src={item.volumeInfo.imageLinks.thumbnail} alt="Image of book" />
                        </div>

                        <p className="aboutInfo"> {item.volumeInfo.description} </p>

                        <div style={{clear:"both"}}></div>

                    </div>

                </li>
            )

        })}

    </ul>
    </div>

)


}
export default ResultsList;