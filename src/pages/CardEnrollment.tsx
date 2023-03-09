import Card from '../components/Card';
import CardExpireDateInput from '../components/CardExpireDateInput';
import CardNumberInput from '../components/CardNumberInput';
import CardOwnerInput from '../components/CardOwnerInput';
import CardPasswordInput from '../components/CardPasswordInput';
import CardSecurityCodeInput from '../components/CardSecurityCodeInput';

function CardEnrollment() {
    return (
        <div className="enrollment-page">
            <div className="enrollment-container">
                <h2 className="page-title">{'<'}카드 추가</h2>
                <Card />
                <CardNumberInput />
                <CardExpireDateInput />
                <CardOwnerInput  />
                <CardSecurityCodeInput />
                <CardPasswordInput />
            </div>
        </div>
    )
}

export default CardEnrollment;