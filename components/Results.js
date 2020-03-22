function Results(props){



props.results.map(function(item){
    return (
        <li class=" container result" key={item.id}>
            <div>
                <div class="resultFunctions">
                    <button type="button" class="btn btn-light navFunction resultFunctionBtns"><a href={item.volumeInfo.canonicalVolumeLink}target="_blank" rel="noopener noreferrer">View</a></button >
                    <button type="button" class="btn btn-light navFunction resultFunctionBtns" id="functionBtn">{props.data}</button >

                </div>
    <h4>{item.volumeInfo.title}</h4>
                
            </div>

            <h5>{item.volumeInfo.subtitle}</h5>
    <h6><span>Written by: </span>{item.volumeInfo.authors.map(function(a){return (a + " ")})}</h6>
            <div class="container seperator"></div>
            <div class="container containIt">
                <div class="imageBox">
                    <img class="bookImage" src={item.volumeInfo.imageLinks.thumbnail} alt="Image of book" />
                </div>

    <p class="aboutInfo"> {item.volumeInfo.description} </p>

                <div style="clear:both;"></div>

            </div>

        </li>
        )

})




}
export default Results;