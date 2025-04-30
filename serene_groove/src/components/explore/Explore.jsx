import React from "react";
import villaAranya from "../../assets/villaArany.png";
import ExploreArrow from "../../assets/icons/ExploreArrow";
const Explore = () => {
  return (
    <div className="flex flex-col w-full items-center ">
      <span className="font-semibold text-6xl lg:text-5xl text-text">
        Explore your options
      </span>

      <div className="flex flex-col w-full px-[222px] mt-[60px] lg:mt-[30px] gap-20 lg:gap-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-extrabold text-5xl lg:text-4xl text-text">
                Villa Aranya
              </span>
              <span className="font-semibold text-base lg:text-sm text-text">
                Room for 4 guests
              </span>
              <span className="text-xl lg:text-lg text-text w-[60%]">
                Breathe deep in the heart of the forest. Villa Aranya offers a
                soothing blend of lush nature and modern comfort
              </span>
            </div>
            <div className="flex bg-accent h-[92px] w-[92px] lg:h-[46px] lg:w-[46px] rounded-3xl lg:rounded-xl items-center justify-center">
              <ExploreArrow />
            </div>
          </div>
          <img src={villaAranya} alt="villa aranya" />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-extrabold text-5xl lg:text-4xl text-text">
                Villa Vrindavanam
              </span>
              <span className="font-semibold text-base lg:text-sm text-text">
                Room for 4 guests
              </span>
              <span className="text-xl lg:text-lg text-text w-[60%]">
                Find your own sacred grove. Villa Vrindavanam wraps you in open
                spaces, soft light, and timeless Kerala warmth.
              </span>
            </div>
            <div className="flex bg-accent h-[92px] w-[92px] lg:h-[46px] lg:w-[46px] rounded-3xl lg:rounded-xl items-center justify-center">
              <ExploreArrow />
            </div>
          </div>
          <img src={villaAranya} alt="villa aranya" />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col gap-2 ">
              <span className="font-extrabold text-5xl lg:text-4xl text-text">
                Villa Megham
              </span>
              <span className="font-semibold text-base lg:text-sm text-text">
                Room for 4 guests
              </span>
              <span className="text-xl lg:text-lg text-text w-[60%]">
                Float with the mist and breeze. Villa Megham invites you into
                airy living spaces made for slow, dreamy days.
              </span>
            </div>
            <div className="flex bg-accent h-[92px] w-[92px] lg:h-[46px] lg:w-[46px] rounded-3xl lg:rounded-xl items-center justify-center">
              <ExploreArrow />
            </div>
          </div>
          <img src={villaAranya} alt="villa aranya" />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center w-full justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-extrabold text-5xl lg:text-4xl text-text">
                Villa Theeram
              </span>
              <span className="font-semibold text-base lg:text-sm text-text">
                Room for 4 guests
              </span>
              <span className="text-xl lg:text-lg text-text w-[60%]">
                Breathe deep in the heart of the forest. Villa Aranya offers a
                soothing blend of lush nature and modern comfort
              </span>
            </div>
            <div className="flex bg-accent h-[92px] w-[92px] lg:h-[46px] lg:w-[46px] rounded-3xl lg:rounded-xl items-center justify-center">
              <ExploreArrow />
            </div>
          </div>
          <img src={villaAranya} alt="villa aranya" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
