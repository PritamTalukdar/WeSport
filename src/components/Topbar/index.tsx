import './topbar.css';

const Topbar = () => {
  const handleClick = (ref) => {
    document.getElementById(ref)?.scrollIntoView();
  }

  return (
    <div id="topbar" className="topbar">
      <div className="logo">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipMiTtP7hGberpRvq5TN8ki5l_kSZgIXSbTauXCr=s1360-w1360-h1020"
          alt="Header WeSport"
          width="20%"
        />
      </div>
      <div className="menu-items">
        <div className="menu-item" onClick={() => handleClick("home")}>Home</div>
        <div className="menu-item" onClick={() => handleClick("gallery")}>Gallery</div>
        <div className="menu-item" onClick={() => handleClick("programs")}>Programs</div>
        <div className="menu-item" onClick={() => handleClick("coaches")}>Coaches</div>
        <div className="menu-item" onClick={() => handleClick("contact")}>Contact</div>
        <div className="menu-item" onClick={() => handleClick("location")}>Location</div>
      </div>
    </div>
  );
};

export default Topbar;
