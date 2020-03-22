import Link from 'next/Link';

export default function Layout(props){
    return <>
    <div className="navHeader">
        <div id="navName"><span style="color:blue;">G</span><span style="color:red;">o</span><span style="color:rgb(211, 211, 0);">o</span><span style="color:blue;">g</span><span style="color:green;">l</span><span style="color:red;">e</span> Books</div>
        <button type="button" className="btn btn-light navFunction"><Link href="./searched.html">Searched</Link></button >
        <button type="button" className="btn btn-light navFunction"><Link href="./saved.html">Saved</Link></button >
    </div>
    <div className="littleSpace"></div>

    <div className="container booksHeader">
        <h1>(React) <span style="color:blue;">G</span><span style="color:red;">o</span><span style="color:rgb(211, 211, 0);">o</span><span style="color:blue;">g</span><span style="color:green;">l</span><span style="color:red;">e</span> Books Search</h1>
        <h2>Search for and Save Books of Interest</h2>
    </div>


    {props.children}


    </>
}