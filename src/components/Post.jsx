// Post.jsx
import React from 'react';
import Card from './Card';

function Post() {
  // Define an array of card data
  const cardData = [
    {
      id: 'card1',
      thumbnail: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
      title: 'Hello',
      description: 'Hello Everyone',
      video: 'https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4',
    },
    {
      id: 'card2',
      thumbnail: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
      title: 'Title 1',
      description: 'Description 1',
      video: 'https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4',
    },
    {
      id: 'card3',
      thumbnail: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      title: 'Title 2',
      description: 'Description 2',
      video: 'https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4',
    },
    {
      id: 'card4',
      thumbnail: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
      title: 'Title 3',
      description: 'Description 3',
      video: 'https://videos.pexels.com/video-files/5585939/5585939-hd_1920_1080_25fps.mp4',
    },
  ];

  return (
    <div className="bg-[#111] flex justify-center items-center">
            {/* <div
            id="aboutCover"
            className=" absolute bg-white h-[2px] w-[0px] bottom-0  mix-blend-difference"
          ></div> */}
      <div className="">
        <div className="h-[16vh] w-full"></div>
        <div className="flex flex-wrap w-[80vw] justify-between">
          {cardData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              thumbnail={card.thumbnail}
              title={card.title}
              description={card.description}
              video={card.video}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
