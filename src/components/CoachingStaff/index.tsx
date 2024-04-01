import './coachingStaff.css';

export const CoachingStaff = () => {
  const coachingStaffData = [
    {
      name: 'Pritam Talukdar',
      role: 'Founder',
      location: 'Guwahati, Assam',
      description: 'Football Fanatic, NIT Silchar Passout, Software Developer',
      imgUrl:
        'https://media.licdn.com/dms/image/C5603AQFbeBoKhq1_Og/profile-displayphoto-shrink_800_800/0/1531461971483?e=1712793600&v=beta&t=eW1YHh6x2Cc9VAZvRpD_RjYHyQpZMtq8TipyQ9RXGu8',
    },
    {
      name: 'Naveen Luiz',
      role: 'Head Coach',
      location: 'Punjab, India',
      description: 'AIFF C License, Professional footballer (Delhi Tigers)',
      imgUrl:
        'https://media.licdn.com/dms/image/D4D03AQHrSHObzKnySw/profile-displayphoto-shrink_800_800/0/1691216038742?e=1712793600&v=beta&t=tFne8YxxNZUVcQJfNjbdAhm2SHf0EvorXsv5HVPsZGg',
    },
    {
      name: 'Bikash Boruah',
      role: 'Physical Education Specialist',
      location: 'Guwahati, Assam',
      description:
        'BPEd, Faculty at Sudarashan Public School, Physical Instructor',
      imgUrl:
        'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg',
    },
    {
      name: 'Bishal Singh',
      role: 'Coach',
      location: 'Guwahati, Assam',
      description: 'AIFF E License, AFC C License, Assam C Division Player',
      imgUrl:
        'https://media.licdn.com/dms/image/D5603AQEMlSFKJg1zdg/profile-displayphoto-shrink_800_800/0/1684987981259?e=1712793600&v=beta&t=05f6MUXTYOJ8NPaiJhCwFY-v8E7IHrd2CIt_-fsESZk',
    },
    {
      name: 'Sahil Ahmed',
      role: 'Coach',
      location: 'Mumbai India',
      description: 'AIFF E License, AFC C License, Mumbai Youth League Player',
      imgUrl:
        'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg',
    },
    {
      name: 'Abhishek Saikia',
      role: 'Coach',
      location: 'Assam, India',
      description: 'Youth League Development Coach',
      imgUrl:
        'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg',
    },
  ];
  return (
    <div id='coaches' className="coaching-staff-wrapper">
      <span>
        <b>Meet our team</b>
      </span>
      <br />
      <div className="coaching-staff-container">
        {coachingStaffData?.map((item: any) => {
          return (
            <div key={item.name} className="coaching-staff-item">
              <img src={item.imgUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.role}</p>
              <p>{item.location}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
