import CardInput from "./CardInput";

function CardExpireDateInput() {
  return (
    <CardInput>
      <CardInput.Title title={"만료일"} />
      <CardInput.Input size="w-50" placeholder="MM/YY" type="number" />
    </CardInput>
  );
}

export default CardExpireDateInput;
