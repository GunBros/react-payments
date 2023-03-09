import { CardNumberContext } from './../contexts/CardNumberProvider';
import { useContext } from 'react';

export const useCardNumberContext = () => {
  const cardNumberContext = useContext(CardNumberContext);

  if (!cardNumberContext) {
    throw Error("cardNumberContext must used in CardNumber Provider")
  }

  return cardNumberContext;
}