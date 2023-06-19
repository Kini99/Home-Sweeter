import styles from "./Carousels.module.css";
import { Link } from "react-router-dom";

export const MyCard=({ src,cap })=> {
  return (
    <div
      style={{
        minWidth: "260px",
        maxWidth: "320px",
        height: "320px",
        marginRight: "25px",
        // paddingTop:"10px",
        color: "white",
        marginLeft: "15px",
        borderRadius: "10px",
        marginBottom:"7px",
        marginTop:"7px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
    >
      <div>
      <img
        src={src}
        alt="i"
        style={{  height: "250px", 
        margin: "auto",
        // border:"2px solid green"
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px"
       }}
      />
      </div>

      <div className={styles.myCardCaption}>
      <Link to="/">{cap}</Link>
      </div>
    </div>
  );
}

export const Carousels=()=> {

  const btnpressprev = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft -= 300;
  };

  const btnpressnext = () => {
    let box = document.querySelector(".productContainer");
    box.scrollLeft += 300;
  };

  return (
    <div>
      <div className={styles.productCarousal}>
        <button onClick={btnpressprev} className={styles.preBtn}>
          <p>⇐</p>
        </button>
        <button onClick={btnpressnext} className={styles.nextBtn}>
          <p>⇒</p>
        </button>
        <div
          className="productContainer"
          style={{
            // padding: "0 0px",
            display: "flex",
            overflowX: "hidden",
            scrollBehavior: "smooth",
            
          }}
        >
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/d29c227b488ffba6ff4901fdae98b1a4-full.webp"
              cap="₹1499/day"
            />
            
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/321995d8562345f38703effde7553124-full.webp"
              cap="₹1499/day"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/70ff89d469648b6ade8ac7a4010a34c0-full.webp"
              cap="₹1999/day"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/ae1fdcde6bf8594f01b1303732c2d193-full.webp"
               cap="₹1899/day"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/47912048ef4b7600091c7cc7eb36fe41-full.webp"
               cap="₹1499/day"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/a2219b55a78505555b877324289a1cc2-full.webp"
              cap="₹1599/day"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/f43f3a4a651bbb4ca09e55d89f66df62-full.webp"
              cap="₹1699/day"
            />
          </Link>
          <Link to="/">
            <MyCard
              src="https://www.trulia.com/pictures/thumbs_4/zillowstatic/fp/237ad3401f68b4be3c1b601968f27ab8-full.webp"
              cap="₹1999/day"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
