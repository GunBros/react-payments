import CardInput from './CardInput'

function CardPasswordInput() {
  return (
    <CardInput>
      <CardInput.Title title={'카드 비밀번호'} />
      <div className="card-password-container">
        <CardInput.Input size='w-15' />
        <CardInput.Input size='w-15'/>
      </div>
   </CardInput>
  )
}

export default CardPasswordInput