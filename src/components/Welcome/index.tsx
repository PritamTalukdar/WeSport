import './welcome.css';

const Welcome = () => {
  return (
    <div className="image-container">
      <div className="welcome-container">
        <div>
          <span className="title">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNWB3yfVrFhg_JNLzO_8uGEzDPN1_HSyqpYDzW8=s1360-w1360-h1020"
              alt="Header WeSport"
              width="20%"
            />
          </span>
          <br />
          <span className="subtitle">
            <i>Now everyone can play</i>
          </span>
        </div>
        <div className="welcome-btns">
          <button>
            <span>MORE ABOUT WESPORT</span>
          </button>
          <button>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
