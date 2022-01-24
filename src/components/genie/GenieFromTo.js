import React from 'react';
import genie from '../../assests/genie.png';

const GenieFromTo = () => {
  return (
    <div>
      <div className='container mt-20 font-rubik lg:hidden'>
        <div className='mb-8'>
          <img src={genie} alt='' />
        </div>

        <div className=''>
          <h4 className='mb-10 text-3xl font-medium text-center text-gray-200 md:text-3xl'>
            From The World
          </h4>

          <form>
            <div className='max-w-lg mx-auto'>
              <div className='mb-6 md:mb-8 lg:mb-10'>
                <h6 className='mb-4 text-lg text-gray-300 md:text-xl lg:text-2xl lg:mb-6'>
                  <label>From:</label>
                </h6>
                <input
                  type='text'
                  required
                  className='w-full px-6 py-2 font-medium text-gray-700 bg-gray-300 rounded-md outline-none md:text-lg lg:text-xl focus:ring-4 ring-offset-4 ring-cta-dark'
                />
              </div>

              <div className='mb-6 md:mb-8 lg:mb-10'>
                <h6 className='mb-4 text-lg text-gray-300 md:text-xl lg:text-2xl lg:mb-6'>
                  <label>To:</label>
                </h6>
                <input
                  type='text'
                  required
                  className='w-full px-6 py-2 font-medium text-gray-700 bg-gray-300 rounded-md outline-none md:text-lg lg:text-xl focus:ring-4 ring-offset-4 ring-cta-dark'
                />
              </div>

              <button className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg mb-7 md:mb-12 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='hidden bg-center bg-no-repeat lg:block lg:mt-20 font-rubik bg-secondary bg-genieFromTo'>
        <div className='container grid lg:grid-cols-3 place-content-center place-items-center'>
          <div className='lg:col-span-2'>
            <img src={genie} alt='' />
          </div>

          <div className='bg-center bg-no-repeat'>
            <h4 className='mb-6 text-2xl font-medium text-center text-gray-200 lg:text-4xl lg:mb-14'>
              From The World
            </h4>

            <form>
              <div className='mb-6 md:mb-8 lg:mb-10'>
                <h6 className='mb-4 text-lg text-gray-300 md:text-xl lg:text-2xl lg:mb-6'>
                  <label>From:</label>
                </h6>
                <input
                  type='text'
                  required
                  className='px-6 py-2 font-medium text-gray-700 bg-gray-300 rounded-md outline-none md:text-lg lg:text-xl focus:ring-4 ring-offset-4 ring-cta-dark'
                />
              </div>

              <div className='mb-6 md:mb-8 lg:mb-10'>
                <h6 className='mb-4 text-lg text-gray-300 md:text-xl lg:text-2xl lg:mb-6'>
                  <label>To:</label>
                </h6>
                <input
                  type='text'
                  required
                  className='px-6 py-2 font-medium text-gray-700 bg-gray-300 rounded-md outline-none md:text-lg lg:text-xl focus:ring-4 ring-offset-4 ring-cta-dark'
                />
              </div>

              <button className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenieFromTo;
