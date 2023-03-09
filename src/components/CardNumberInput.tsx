import { useCardNumberContext } from '../hooks/useCardNumberContext'
import CardInput from './CardInput'

function CardNumberInput() {
    const { cardNumber, setCardNumber } = useCardNumberContext();

    return (
        <CardInput>
            <CardInput.Title  title={'카드 번호'} />
            <CardInput.Input type='number' changeInput={setCardNumber} value={cardNumber} />
        </CardInput>
    )
}

export default CardNumberInput