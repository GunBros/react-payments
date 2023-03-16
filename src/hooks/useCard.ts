import { useState } from "react";

interface CardInputProps {
  validator: (inputData: string) => { isValid: boolean; errorMessage: string };
}

export function useCard({ validator }: CardInputProps) {
  const [cardData, setCardData] = useState("");

  const onChangeCardData = (nextCardData: string) => {
    const { isValid, errorMessage } = validator(nextCardData);
    console.log(nextCardData);
    if (!isValid) {
      alert(errorMessage);
      return;
    }

    setCardData(nextCardData);
  };

  return {
    cardData,
    onChangeCardData,
  };
}
