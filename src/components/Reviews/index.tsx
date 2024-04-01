import './reviews.css';
const IMG_URL =
  'https://img.freepik.com/free-vector/five-stars-rating-button-experience-reviews_8829-2624.jpg';
const reviews = [
  {
    name: 'Shalini Giri',
    imgUrl:
      'https://img.freepik.com/free-vector/five-stars-rating-button-experience-reviews_8829-2624.jpg',
    review: `I am happy with the location as there was no playground or coaching
    earlier near Survey Beltola road but now kids has a place where they
    can learn skills , techniques and exercises with the best coaches.
    Secondly, timings are favourable for them. Thirdly, my child remains
    happy and refreshed after joining Arena. Fourthly, fees are nominal
    and affordable. The best part is free demo sessions which is not
    available with other sports. The trainers are very cooperative and
    give their best to teach children. Highly recommended for today's
    generation where there is limited or no space for them to play.`,
  },
  {
    name: 'Partha Borkotoky',
    review: `Best place to groom your kids`,
  },
  {
    name: 'MC Tsai',
    review: `We took our 3 years old twins to demo class today and they love it.The coaches are very patience and well experienced.The arena is well maintained n clean.We would recommend it to all parents with toddlers .Thank you for all coaches today.`,
  },
  {
    name: 'Sumi Bansal',
    review: `Very good coaching center...m so satisfied by d way d coaches handle d kids.. management n everything is so good..highly recommended`,
  },
  {
    name: 'Rupjyoti Borkakati',
    review: 'I am so satisfied... coaches are very friendly',
  },
];
export const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <span>
        <b>Our Reviews</b>
      </span>
      <div className="reviews-container">
        {reviews?.map((el) => {
          return (
            <div key={el.name} className="item">
              <h3>{`${el.name} says:`}</h3>
              <img src={IMG_URL} alt="fivestar" />
              <p>{el.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
