import React from "react";
import CardInput from "./CardInput";

function CardSecurityCodeInput() {
  return (
    <CardInput>
      <CardInput.Title title={"보안코드(CVC/CVV)"} />
      <CardInput.Input size="w-25" />
    </CardInput>
  );
}

export default CardSecurityCodeInput;
