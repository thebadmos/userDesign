import React from "react";

const MainPage = () => {
  return (
    <>
      <section>
        <div className="w-screen h-screen grid grid-rows-2 text-black text-4xl md:grid-cols-2">
          <div className=" w-full h-full bg-white ">
            <h3 className="text-base font-semibold px-6 py-6">
              {" "}
              Billing & Accounts
            </h3>
            <div>
              <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-2 gap-6">
                <div class=" ml-6 relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ">
                  <img
                    class="object-cover w-96 h-48"
                    src="https://res.cloudinary.com/dysgwap7p/image/upload/v1659440301/Hr_image_y5dyt7.jpg"
                    alt="Flower and sky"
                  />

                  <div class="absolute top-0 left-0 px-6 py-4">
                    <h4
                      class="mb-3 text-sm font-semibold tracking-tight 
                  rounded-lg bg-green-700 w-24 text-center text-white ml-36"
                    >
                      HR
                    </h4>
                  </div>
                </div>
                <div className="mt-4 sm:text-sm ml-6">
                  <span class="text-lg">Human Resource Module </span>
                  <br />
                  <p className="text-base">
                    Manage your human resource in <br />
                    one place with ease and do much more...
                  </p>

                  <p className="mt-4 text-base ">
                    For as low as <br />
                    <span className="text-lg font-semibold">
                      N40,000 NGN
                    </span>{" "}
                    per employer{" "}
                  </p>
                </div>

                <div class=" ml-6 relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                  <img
                    class="object-cover w-96 h-48"
                    src="https://res.cloudinary.com/dysgwap7p/image/upload/v1659517575/payroll_e8tbqf.jpg"
                    alt="Flower and sky"
                  />

                  <div class="absolute top-0 left-0 px-6 py-4">
                    <h4
                      class="mb-3 text-sm font-semibold tracking-tight 
                  rounded-lg bg-green-700 w-24 text-center text-white ml-36"
                    >
                      Payroll
                    </h4>
                  </div>
                </div>
                <div className="mt-4 sm:text-sm ml-6">
                  <span class="text-lg">Payroll Module </span>
                  <br />
                  <p className="text-base">
                    Manage your payroll and salary payment in <br />
                    one place with ease and do much more...
                  </p>

                  <p className="mt-4 text-base">
                    For as low as <br />
                    <span className="text-lg font-semibold">
                      N60,000 NGN
                    </span>{" "}
                    per employer{" "}
                  </p>
                </div>
                <div class="ml-6 relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                  <img
                    class="object-cover w-96 h-48"
                    src="https://res.cloudinary.com/dysgwap7p/image/upload/v1659517573/leave-management-software_njvvyh.png"
                    alt="Flower and sky"
                  />

                  <div class="absolute top-0 left-0 px-6 py-4">
                    <h4
                      class="mb-3 text-sm font-semibold tracking-tight 
                  rounded-lg bg-green-700 w-48 text-center text-white ml-14"
                    >
                      Leave Management
                    </h4>
                  </div>
                </div>
                <div className="mt-4 sm:text-sm ml-6">
                  <span class="text-lg">Leave Management Module </span>
                  <br />
                  <p className="text-base">
                    Manage your human resource in one place <br />
                    one place with ease and do much more...
                  </p>

                  <p className="mt-4 text-base">
                    For as low as <br />
                    <span className="text-lg font-semibold">
                      N30,000 NGN
                    </span>{" "}
                    per employer{" "}
                  </p>
                </div>
              </div>

              
            </div>
          </div>

          {/* page 2 */}
          <div className="w-6/12 h-full ml-[341px] bg-gray-300 text-base md:h-[600px] lg:h-[700px]  ">
          {/* <div className="w-full h-full bg-gray-300 text-base sm:h-screen md:h-[700px]"> */} 
            <h3 className="font-semibold centered px-8 py-6 text-blue-800">
              {" "}
              Cloudlet HR
            </h3>
            <h3 className="px-4 text-center">
              {" "}
              Industry tested no1 software solution for <br />
              modern human resource providers <br />
              over the world
            </h3>
            
            <p className="px-12 mt-24 text-center text-2xl"> Paying</p>

            <p className="text-center mt-4 font-bold text-xl"> N 40,000 NGN</p>
            <p className="text-gray-500 text-center mt-4"> for 300 employees</p> 

            {/* <div class="ml-24 rounded-xl bg-blue-500 w-48 h-12 text-center">Make Payment</div> */}
            <button class="centered mt-60 ml-20 rounded-tr-3xl bg-purple-500 w-52 h-12 text-white">
              Make Payment
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
