const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Mini Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/creatr" style={{
                    color: 'white',
                    backgroundColor: '#f1356d'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;