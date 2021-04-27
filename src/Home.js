const Home = () => {

    const handleClick = (e) =>{
        console.log('Oh u just clicked a button', e);
    }

    const handleClickAgain = (name, e) =>{
        console.log('hello ' + name + ' you are doing it again', e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>

            <button onClick = {handleClick}>Click me</button>
            <button onClick = {(e) => handleClickAgain('Kami', e)}>Click me again</button>

        </div>
    );
}
 
export default Home;