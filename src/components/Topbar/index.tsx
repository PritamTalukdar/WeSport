import './topbar.css';

const Topbar = () => {
  return (
    <div id="topbar" className="topbar">
      <div className="logo">
        {/* <img
          src="https://lh3.googleusercontent.com/p/AF1QipNWB3yfVrFhg_JNLzO_8uGEzDPN1_HSyqpYDzW8=s1360-w1360-h1020"
          alt="Header WeSport"
          width="20%"
        /> */}
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipMiTtP7hGberpRvq5TN8ki5l_kSZgIXSbTauXCr=s1360-w1360-h1020"
          alt="Header WeSport"
          width="20%"
        />
      </div>
      <div className="menu-items">
        <div className="menu-item">Home</div>
        <div className="menu-item">Gallery</div>
        <div className="menu-item">Programs</div>
        <div className="menu-item">Coaches</div>
        <div className="menu-item">Contact</div>
        <div className="menu-item">Location</div>
      </div>
    </div>
  );
};

export default Topbar;
