import CardInput from "./CardInput"

interface CardExpireDateInputProps {
    title: string;
}

function CardExpireDateInput({ title }: CardExpireDateInputProps) {
    return (
        <CardInput>
            <CardInput.Title title={title} />
            <CardInput.Input size='w-50'/>
        </CardInput>
  )
}

export default CardExpireDateInput