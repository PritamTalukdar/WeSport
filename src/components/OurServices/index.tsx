import './ourServices.css';

export const OurServices = () => {
  const Images = {
    Badminton:
      'https://media.istockphoto.com/id/843202542/photo/young-teenager-girl-woman-badminton-player-isolated.jpg?s=612x612&w=0&k=20&c=bf2vCFd4UtCg9DcpE4FHghhXvHp_QS04Y1VOFEq5NN4=',
    Football:
      'https://www.shutterstock.com/image-photo/two-boys-football-jersey-playing-600nw-2046791021.jpg',
    Swimming:
      'https://t3.ftcdn.net/jpg/03/83/29/84/360_F_383298456_1cJdyK68ECdE7ky2BpOF04z7EQWJTpXK.jpg',
  };
  return (
    <div id='programs' className="our-serives-container">
      <h3>Accessible and Hassle-free</h3>
      <h1>A friendlier sporting experience.</h1>
      <button>Get Started</button>
      <div className="games-corousel">
        <div className="games-corousel-items">
          <img src={Images.Football} alt="Football" />
          <p>Football</p>
        </div>
        <div className="games-corousel-items">
          <img src={Images.Badminton} alt="Badminton" />
          <p>Badminton</p>
        </div>
        <div className="games-corousel-items">
          <img src={Images.Swimming} alt="Badminton" />
          <p>Swimming</p>
        </div>
      </div>
    </div>
  );
};
