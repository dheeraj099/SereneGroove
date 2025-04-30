import React from "react";

const Map = () => {
  return (
    <iframe
    className="rounded-xl"
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9709269613622!2d76.02375861056059!3d11.553941888598708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba672708d4fb98d%3A0x32014da2317b736f!2sRabbarkunnu%20Rd%2C%20Kerala%20673576!5e0!3m2!1sen!2sin!4v1745931750461!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;
