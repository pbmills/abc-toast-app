import React from 'react';

//image
import Image1 from '../assets/images/pic1.png';

const RPTL = () => {
  return (
    <section className="w-full  my-24">
      <div className="md:grid grid-cols-2 ">
        <div>
          <img src={Image1} alt="pic1" className="h-48 w-full object-cover md:h-full md:w-full" />
        </div>

        <div className="py-8 pl-12 h-full flex justify-start items-center ">
          <div className="w-4/5">
            <p className="text-white text-base">Look & feel</p>
            <div className="bg-white pb-4 mt-4 w-max">
              <p className="ml-4 mr-10 text-black  text-3xl ">customise your</p>
            </div>
            <div className="pb-4 mt-2 w-max" style={{ backgroundColor: '#FF6400' }}>
              <p className="ml-4 mr-10 text-white  text-3xl ">website</p>
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
      </div>
    </section>
  );
};

export default RPTL;
