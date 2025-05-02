import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 mb-12">
      <div className="flex bg-[#2350274D] rounded-3xl py-2 px-6 items-center gap-2">
        <span className="text-sm text-text">Come stay with us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M1.18851 12.2885L11.2885 2.20775V11.5H12.2885V0.5H1.28851V1.5H10.5808L0.500012 11.6L1.18851 12.2885Z"
            fill="#235027"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-6xl font-extrabold leading-[80px] text-text">
          Come Stay at Serene groove{" "}
        </span>
        <span className="text-6xl font-extrabold text-text leading-[80px]">
          {" "}
          Get Ready for your Wayanad escape{" "}
        </span>
        <span className="mt-4 text-sm leading-6 text-text">
          Book your villa today and step into nature’s embrace.
        </span>
        <span className="text-sm leading-6 text-text">
          Call us at : +91 9495482212
        </span>
      </div>
      <div className="flex items-center p-2 border rounded border-accent w-[30%] justify-between mt-6">
        <span className="text-sm text-text">serenegroove@gmail.com</span>
        <button className="flex items-center gap-2 px-1 py-3 text-sm text-white rounded bg-accent">
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
          >
            <path
              d="M0 11.3332V7.33317L5.33333 5.99984L0 4.6665V0.666504L12.6667 5.99984L0 11.3332Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Footer