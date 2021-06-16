import React from 'react';

//image
import Image2 from '../assets/images/pic2.png';

const RTPL = () => {
  return (
    <section className="w-full  my-24">
      <div className="md:grid grid-cols-2 ">
        <div className="py-8 h-full flex justify-center items-center ">
          <div className="w-9/12">
            <p className="text-white text-base">speed</p>
            <div className="bg-white pb-4 mt-4 w-max">
              <p className="ml-4 mr-10 text-black  text-3xl ">faster than</p>
            </div>
            <div className="pb-4 mt-2 w-max" style={{ backgroundColor: '#FF6400' }}>
              <p className="ml-4 mr-10 text-white  text-3xl ">before</p>
            </div>
            <div className="mt-10">
              <p className="text-white">
                Aspis et eos doluptatio comnihitate net anduntis ea sapicat rehendam ut pellandit is quae dem et as
                dendiae enihicias maio tem fugit, que voloreproet eos doluptatio comnihitate net anduntis ea sapicat
                rehendam ut pellandit is quae dem et as dendiae enihicias maio tem fugit, que volorepro
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={Image2} alt="pic2" className=" w-full object-cover md:h-full md:w-full image2height" />
        </div>
      </div>
    </section>
  );
};

export default RTPL;
