import { RiSurgicalMaskLine } from "react-icons/ri";
const Navbar = () => {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    
    <RiSurgicalMaskLine width="30" height="24" className="d-inline-block align-text-center mb-1" />
      &nbsp; Covid Tracker
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Global covid</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Safety Measures</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Symptoms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Help Line</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>;
};

export default Navbar;
