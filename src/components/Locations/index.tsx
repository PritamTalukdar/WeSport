import './locations.css';

export const Locations = () => {
  return (
    <div id='location' className="locations-container">
      <span>
        <b>Our locations</b>
      </span>
      <div className="locations-carousel">
        <div className="location-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.1500929400477!2d91.81213427524474!3d26.159240877104345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59005d87ba59%3A0xcfc981524cc550a6!2sWeSport%20Guwahati%20(Arizona%20Sports%20Arena%20Vip%20road)!5e0!3m2!1sen!2sin!4v1708627803340!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <img src="https://lh3.googleusercontent.com/p/AF1QipPn7iNoFjYl89paqNRObw_A8qOZf6CCPcYGl2Wi=s1360-w1360-h1020" />
          <h3>Arizona, Vip Road</h3>
        </div>
        <div className="location-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.220846617475!2d91.79302067524348!3d26.124341277125897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59aa184716ff%3A0x62dd70667138eaf0!2sWeSport%20Guwahati%20(Arena28%20Beltola)!5e0!3m2!1sen!2sin!4v1708627492414!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <img src="https://lh3.googleusercontent.com/p/AF1QipMNRDRWf3jZnnXroJIJ8ljnESlhZyIBIpGibu64=s1360-w1360-h1020" />
          <h3>Arena, Beltola</h3>
        </div>
        <div className="location-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.731918288568!2d91.78715507524291!3d26.107668377136218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5f7adabfe981%3A0x4506bef0a76a8b0!2sBAIKUNTHAPUR%20PUBLIC%20PLAY%20GROUND!5e0!3m2!1sen!2sin!4v1708627991833!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <img src="https://lh3.googleusercontent.com/p/AF1QipNo_hdCc-BzJRxTMGaYmWOxLdGCkCwMwH8syJqu=s1360-w1360-h1020" />
          <h3>Games Village, Basistha Chariali</h3>
        </div>
      </div>
    </div>
  );
};
