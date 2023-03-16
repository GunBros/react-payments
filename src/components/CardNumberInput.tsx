import { useCard } from "../hooks/useCard";
import CardInput from "./CardInput";

function validator(cardData: string) {
  if (cardData.length > 16) {
    return { isValid: false, errorMessage: "16자리까지만 입력가능합니다." };
  }

  return { isValid: true, errorMessage: "" };
}

function maskNumberString(numberString: string): string {
  return numberString.replace(/^(.{8})(.*)$/, (match: string, p1: string, p2: string) => {
    return p1 + p2.replace(/./g, "*");
  });
}

// function decorateCardNumber(numberString: string) {
//   return numberString.replace(/^(\d{8})(.*)$/, (match: string, p1: string, p2: string) => {
//     return (
//       p1 +
//       p2
//         .replace(/\d(?=\d{3})|\d(?=\d{2}$)/g, "*") // 마지막 8자리만 *로 변경
//         .replace(/\d{1,4}(?=(\d{4})+(?!\d))/g, "$&-")
//     ); // 4자리마다 - 삽입
//   });
// }

function decorateCardNumber(cardNumber: string) {
  // console.log(
  //   maskNumberString(cardNumber).replace(/^(\s{0,4})(\s{0,4})(\s{0,4})(\s{0,4})$/g, "$1-$2-$3-$4")
  // );
  return maskNumberString(cardNumber);
  // .replace(/^(\s{0,4})(\s{0,4})(\s{0,4})(\s{0,4})$/g, "$1-$2-$3-$4")
  // .replace(/(-{1,3})$/g, "");
}

function CardNumberInput() {
  const { cardData, onChangeCardData } = useCard({ validator });

  return (
    <CardInput>
      <CardInput.Title title={"카드 번호"} />
      <CardInput.Input
        onChangeCardData={onChangeCardData}
        value={decorateCardNumber(cardData)}
        type={"number"}
      />
    </CardInput>
  );
}

export default CardNumberInput;
