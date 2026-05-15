import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        fontFamily: "-moz-initial",
        fontSize: "29px",
        // background: "#a0a4a8ab",
        color: "white",
      }}
    >
      {/* Logo Left Corner */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          fontSize: "36px",
          fontWeight: "bold",
        }}
      >
        StartOn
      </div>

      {/* Center Content */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>Home</div>
        <div>Categories</div>
        <FaHeart size={30} color="#e43333" />
        <FaShoppingCart size={30} color="#35a6ec" />
        <div>About us</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Navbar;