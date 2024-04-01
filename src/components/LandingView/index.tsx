import './landingView.css';
export const LandingView = () => {
  return (
    <div className="landingView-container">
      <div className="landing-left">
        <h1>Modern, Accesible and Hassble Free Football Classes</h1>
        <br />
        <p>
          We are building a community of people where each of us - of all ages -
          of all genders - participate in activities where the primary purpose
          is participation is improved physical fitness, fun and social
          involvement. ⛹🏻‍♂️We are building a community of people where each of us
          - of all ages - of all genders - participate in activities where the
          primary purpose is participation is improved physical fitness, fun and
          social involvement. ⛹🏻‍♂️
        </p>
        <br />
        <video
          src="https://lh3.googleusercontent.com/ggs/AF1QipNaPv2-j8kd5h8MvJMpZ3lWNf8V4ApqEIU5BPnp=m18"
          loop
          autoPlay
          muted
        />
      </div>
      <div className="landing-center">
        <img src="https://lh3.googleusercontent.com/p/AF1QipMuq1M94e65kAQPktyORJusOeDgaQJCu-memYuh=s1360-w1360-h1020" />
      </div>
      {/* <div className="landing-right">
        <div className="form-container">
          <h3>Booking</h3>
          <form>
            <div className="form-item">
              <label>Name *</label>
              <br />
              <input />
            </div>
            <div className="form-item">
              <label>Customer Number *</label>
              <br />
              <input />
            </div>
            <div className="form-item">
              <p>
                By submitting form you agree to our terms and allow us to save
                above information to process your request.
              </p>
            </div>
            <div className="form-item">
              <button>Get a Free Demo</button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
};
