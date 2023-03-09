import Card from '../components/Card';
import CardExpireDateInput from '../components/CardExpireDateInput';
import CardNumberInput from '../components/CardNumberInput';

function CardEnrollment() {
    return (
        <div className="enrollment-page">
            <div className="enrollment-container">
                <h2 className="page-title">{'<'}카드 추가</h2>
                <Card />
                <CardNumberInput title={'카드 번호'} />
                <CardExpireDateInput title={'만료일'} />
            </div>
        </div>
    )
}

export default CardEnrollment;