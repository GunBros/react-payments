import CardInput from './CardInput'


interface CardNumberInputProps {
    title: string;
}

function CardNumberInput({ title } : CardNumberInputProps) {
    return (
        <CardInput>
                <CardInput.Title title={title} />
                <CardInput.Input />
        </CardInput>
    )
}

export default CardNumberInput