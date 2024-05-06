import React from "react";
import { Card } from "antd";

const ItemList = ({ item }) => {
 
  // //update cart handler
  // const handleAddTOCart = () => {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: item,
  //   });
  // };
  const { Meta } = Card;
  return (
    <div>
      <Card
        style={{ width: 240, marginBottom: 20 }}
        cover={<img alt={item.name} src={item.image} style={{ height: 200 }} />}
      >
        <Meta title={item.name} />
        {/* <div className="item-button">
          <Button onClick={() => handleAddTOCart()}>Add to cart</Button>
        </div> */}
      </Card>
    </div>
  );
};

export default ItemList;
