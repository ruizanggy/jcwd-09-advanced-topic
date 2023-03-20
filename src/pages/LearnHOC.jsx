//component yang kita buat punya style yang sama // ini kalo mau componentnya selaras
//props memberikan akses untuk komponent / Komponen menerima beberapa masukan (biasa disebut “props”) dan mengembalikan element React yang mendeskripsikan apa yang seharusnya tampil pada layar.
//props itu buat kita ngepassing data dari parent ke child

import React from 'react'

function LearnHOC(Component) {
  return (props) => {
    const style = {
      padding: "0.2rem",
      margin: "1rem",
      backgroundColor: "blue",
    };
    return <Component style={style} {...props} />;
  };
}

export default LearnHOC