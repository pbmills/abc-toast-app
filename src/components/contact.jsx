import React from 'react';

const contact = () => {
  return (
    <section className="w-full  my-40">
      <div className="md:grid grid-cols-2 ">
        <div className="py-8 h-full flex justify-center items-center ">
          <div className="w-9/12">
            <div className="bg-white pb-6 mt-4 w-max">
              <p className="ml-4 mr-10 text-black  text-4xl ">get in touch to</p>
            </div>
            <div className="pb-6 mt-2 w-max" style={{ backgroundColor: '#FF6400' }}>
              <p className="ml-4 mr-10 text-white  text-4xl ">upgrade</p>
            </div>
          </div>
        </div>

        <div className="py-8 h-full flex justify-center items-center ">
          <div className="w-9/12">
            <p className="text-white ">
              Aspis et eos doluptatio comnihitate net anduntis ea sapicat rehendam ut pellandit is quae dem.{' '}
            </p>
            <form className="mt-8">
              <div class="relative w-full mb-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-600 placeholder-white text-gray-800 outline-none focus:bg-gray-500"
                    placeholder="Name"
                    style={{ transition: 'all 0.15s ease 0s', backgroundColor: '#3E3E3E', color: '#fff' }}
                  />
                  <input
                    type="email"
                    style={{ backgroundColor: '#3E3E3E !important' }}
                    class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-600 placeholder-white text-white outline-none focus:bg-gray-500"
                    placeholder="Email"
                    style={{ transition: 'all 0.15s ease 0s', backgroundColor: '#3E3E3E', color: '#fff' }}
                  />
                </div>
                <input
                  type="text"
                  class="mt-2 border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-600 placeholder-white text-gray-800 outline-none focus:bg-gray-500"
                  placeholder="Company"
                  style={{ transition: 'all 0.15s ease 0s', backgroundColor: '#3E3E3E', color: '#fff' }}
                />
              </div>
            </form>
            <div className="mt-10">
              <p className="text-white">
                <button className="py-2 px-12 pb-6 uppercase tracking-wide text-sm border border-white shadow-md text-white bg-transparent hover:bg-white hover:text-black">
                  Submit
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
