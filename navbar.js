function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ms-auto mb-2 mb-1g-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#/CreateAccount/">Create Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/balance/">Balance</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/deposit/">Deposit</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#/withdraw/">Withdraw</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/alldata/">AllData</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>

        </>
    );
}