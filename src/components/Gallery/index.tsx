import './gallery.css';

interface Setting {
  width: string;
  height: string[];
  layout: number[];
  photos: { source: string }[];
  showNumOfRemainingPhotos: boolean;
}
export const Gallery = () => {
  const setting: Setting = {
    width: '600px',
    height: ['250px', '170px'],
    layout: [1, 4],
    photos: [
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipOxtGjFB1fI6H-1wrsG5_YmDb4_67Q9PZAIntN2=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipNl7Z_wcUbfMhNyksLid-4q0NdFc6nc2GVqfYO8=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipM4MHyHk9517zskvHtSMMcD_YlPN2g22KfTl9PF=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipPPkL6fuIpuw73x20qaiLpFj4tUOEpXZLy3DW2l=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipMHo2Zqtsg30GfA_ODeMGlPgPb5d2zO58i9ejIf=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipNFYtaUlB1kWOunvWmAyoGkJu7XxRzspoG3kd7H=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipOp5l22wP56W89_vfmKjpjeWI-KdccHspymbTAw=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipNo_hdCc-BzJRxTMGaYmWOxLdGCkCwMwH8syJqu=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipPjauuUN0mlHcUrid2h5GcKdblLNJlInddHiV6K=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipNu01IH_PTZagVbvYMpYSYchdwxTgauaHorKOtr=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipNCwoMB4OG68STgN-a_yLc34COQJ811wgEzEtjb=s1360-w1360-h1020',
      },
      {
        source:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBQLvGskcSczNobD4O-BD_WcnkU6LiXq_Z9In5CqVxH67VitKTJOEHUVnVP7QciQ1eQM&usqp=CAU',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipMtIdq9O5fo4vjt1Xi5lVCw7Ob8Ld5EvVvsCWuI=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipOChcRmYFxYlPvQJcvr-IUPYo2FsXOhuI7WnchF=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipPPEc4rP6UFGgDcdsLD6H3bMpiYBzggjXOi9aQO=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipP8eRY84S_S2DpJNrreBNXZI501-_DFQGTja7aY=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipMXr0s8Fu7vRI1UhEaeMg9lWW7fYmHOe_wYHG_E=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipPYDJ-YLN00k4VCjnEgtLjY9ZcIV5asRyzhWdia=s1360-w1360-h1020',
      },
      {
        source:
          'https://lh3.googleusercontent.com/p/AF1QipP_mxWQaIckH0B8sWUbKKrN2tGb6gHz9TV9gnBA=s1360-w1360-h1020',
      },
    ],
    showNumOfRemainingPhotos: true,
  };

  return (
    <div id="gallery" className="gallery-container">
      <span>
        <b>Gallery</b>
      </span>
      <div className="gallery-wrapper">
        {setting.photos.map((ele, index) => {
          return <img key={index} src={ele?.source} />;
        })}
      </div>
    </div>
  );
};
