import React from "react";
import style from "./contact.module.css";

function contactItem() {
  return (
    <div className={style.main}>
      <div className={style.info}>
        <h2 style={{ margin: "5px" }}>Rumon Khan</h2>
        <h5 style={{ margin: "3px 5px" }}>rummankh0@gmail.com</h5>
        <h1 style={{ margin: "5px" }}>01716814563</h1>
      </div>
      <div className={style.edit}>
        <div className={style.first}><p>Personal</p></div>
        <div className={style.second}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default contactItem;
