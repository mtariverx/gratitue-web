import React, { Fragment } from "react";
import Layout from "../layout";
import SingleWishProduct from "./SingleWishProduct";

const WishList = () => {
  return (
    <Fragment><br></br>
      <Layout children={<SingleWishProduct />} />
    </Fragment>
  );
};

export default WishList;