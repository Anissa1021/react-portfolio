import Nav from "./Nav"

function Header(props) {
    return <header className="App-header">
        <h1>Anissa Aracena</h1>
        <Nav {...props}/>
    </header>
}

export default Header;