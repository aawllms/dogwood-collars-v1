function Nav() {
  const style = {
    
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="/"
              >
                Home
              </a>
              <a className="nav-link active text-dark" href="/product">
                Product
              </a>
              <a className="nav-link active text-dark" href="/cart">
                Cart
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
