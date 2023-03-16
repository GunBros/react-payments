import CardInput from "./CardInput";

function CardOwnerInput() {
  return (
    <CardInput>
      <CardInput.Title title={"카드 소유자 이름(선택)"} />
      <CardInput.Input />
    </CardInput>
  );
}

export default CardOwnerInput;
