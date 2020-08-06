import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/edd1eliang"
        aria-label="My GitHub"
      >
        Eddie Liang
      </a>{" "}
      using <i className="fab fa-react"></i>
      <p>
        <small className="text-muted">
          {" "}
<<<<<<< HEAD
          @ 2020 Eddie Liang
=======
>>>>>>> e0eba7f8c984cbfd85fe49f61d5e0ee719080bb7
        </small>
      </p>
    </footer>
  );
};

export default Footer;
