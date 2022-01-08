import React from 'react';
import NewsCard from '../ui/NewsCard';
import news1 from '../../assests/news1.png';
import news2 from '../../assests/news2.png';
import news3 from '../../assests/news3.png';
import burger from '../../assests/burger.png';
import bigLegpiece from '../../assests/bigLegpiece.png';

const News = () => {
  return (
    <div className='container font-rubik mt-20 md:mt-28 lg:mt-40 relative'>
      <div className='max-w-max hidden lg:block'>
        <img
          src={burger}
          alt=''
          className='absolute -top-32 left-4 w-80 h-80'
        />
      </div>

      <div className='max-w-max hidden lg:block'>
        <img
          src={bigLegpiece}
          alt=''
          className='absolute -bottom-48 right-4 w-72 h-72'
        />
      </div>
      <h6 className='text-brand-text mb-8 md:mb-12 text-2xl md:text-3xl text-center font-medium'>
        News
      </h6>
      <h4 className='text-center mb-8 md:mb-12 text-3xl md:text-4xl font-medium text-gray-200'>
        Latest Foodieee News
      </h4>

      <div className='grid mx-auto md:grid-cols-3 gap-10 place-content-center place-items-center max-w-6xl'>
        <NewsCard
          img={news1}
          title='Spain Appetizer'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt!'
        />
        <NewsCard
          img={news2}
          title='Wine & Cheese'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt!'
        />
        <NewsCard
          img={news3}
          title='Cup of Coffee'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt!'
        />
      </div>
    </div>
  );
};

export default News;
