import CardInput from "./CardInput";

function CardNumberInput() {
  return (
    <CardInput>
      <CardInput.Title title={"카드 번호"} />
      <CardInput.Input />
    </CardInput>
  );
}

export default CardNumberInput;
