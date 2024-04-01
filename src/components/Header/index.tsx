import './header.css';

export default function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNWB3yfVrFhg_JNLzO_8uGEzDPN1_HSyqpYDzW8=s1360-w1360-h1020"
          alt="Header WeSport"
          width="20%"
        />
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipMiTtP7hGberpRvq5TN8ki5l_kSZgIXSbTauXCr=s1360-w1360-h1020"
          alt="Header WeSport"
          width="20%"
        />
      </div>
      <nav className="nav-container">
        <div>Our Services</div>
        <div>Smart Care</div>
        <div>Billing</div>
        <div>Schedule</div>
      </nav>
    </header>
  );
}
