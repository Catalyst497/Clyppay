import React from "react";
import Card from "../ui/Card";
import image from "../../assets/image.png";

function CardOne() {
  return (
    <div>
      <Card
        title="Crypto Agency Banking"
        body="Receive cash payment for your crypto
from POS point"
        image={image}
      />
    </div>
  );
}

export default CardOne;
