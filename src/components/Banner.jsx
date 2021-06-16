import React from 'react';

const Banner = () => {
  return (
    <section className="w-full  my-44">
      <div className="md:grid grid-cols-2 ">
        <div className="py-8 pl-12 h-full flex md:justify-center justify-start items-center ">
          <div className="w-2/4">
            <p className="text-white text-base">It has landed</p>
            <div className="bg-white pb-5 mt-4 w-max">
              <span className="ml-4 mr-10 text-black  text-3xl ">what we have to</span>
            </div>
            <div className="bg-white pb-5 mt-2 w-max">
              <p className="ml-4 mr-10 text-black  text-3xl ">offer in</p>
            </div>
            <div className="pb-5 mt-2 w-max" style={{ backgroundColor: '#FF6400' }}>
              <p className="ml-4 mr-10 text-white  text-3xl ">silverstripe 4</p>
            </div>
            <div className="mt-10">
              <button className="pt-3 pb-1 px-7 uppercase tracking-wide text-sm border border-white shadow-md text-white bg-transparent hover:bg-white hover:text-black ">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Banner;
