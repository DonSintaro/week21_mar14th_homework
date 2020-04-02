import Link from 'next/link';

export default function Layout(props){

    



    return <>
    <div className="navHeader">
        <div id="navName"><span style={{color:"blue"}}>G</span><span style={{color:"red"}}>o</span><span style={{color:"#ffeb00"}}>o</span><span style={{color:"blue"}}>g</span><span style={{color:"green"}}>l</span><span style={{color:"red"}}>e</span> Books</div>
        <button type="button" className="btn btn-light navFunction"><Link href="/">Searched</Link></button >
        <button type="button" className="btn btn-light navFunction"><Link href="/saved">Saved</Link></button >
    </div>
    <div className="littleSpace"></div>

    <div className="container booksHeader">
        <h1>(React) <span style={{color:"blue"}}>G</span><span style={{color:"red"}}>o</span><span style={{color:"#ffeb00"}}>o</span><span style={{color:"blue"}}>g</span><span style={{color:"green"}}>l</span><span style={{color:"red"}}>e</span> Books Search</h1>
        <h2>Search for and Save Books of Interest</h2>
    </div>


    {props.children}


    </>
}