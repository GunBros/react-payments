import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCardForm, { CardForm, CardNumber } from './useCardForm';

const CardRegistrationPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { form, setCardNumber } = useCardForm();

  return (
    <>
      <h2 className="page-title">
        <span style={{ cursor: 'pointer', marginRight: '1rem' }} onClick={() => navigate('/')}>
          {'<'}
        </span>
        카드 추가
      </h2>
      <Card card={form} />
      <div>
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <div className="input-box">
            <input
              className="input-basic"
              type="tel"
              placeholder="1234"
              value={form.cardNumber[0]}
              onChange={({ target }) => setCardNumber(target.value, 0)}
            />
            <input
              className="input-basic"
              type="tel"
              placeholder="1234"
              value={form.cardNumber[1]}
              onChange={({ target }) => setCardNumber(target.value, 1)}
            />
            <input
              className="input-basic"
              type="password"
              placeholder="****"
              value={form.cardNumber[2]}
              onChange={({ target }) => setCardNumber(target.value, 2)}
            />
            <input
              className="input-basic"
              type="password"
              placeholder="****"
              value={form.cardNumber[3]}
              onChange={({ target }) => setCardNumber(target.value, 3)}
            />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input className="input-basic" type="text" placeholder="MM" />
            <input className="input-basic" type="text" placeholder="YY" />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <input
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </div>
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <input className="input-basic w-25" type="password" />
        </div>
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
        </div>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </div>
      {isModalOpen && <CompanySelectionBottomSheet />}
    </>
  );
};

const getMaskedCardNumberStr = (cardNumber: CardNumber) => {
  cardNumber[2] = '*'.repeat(cardNumber[2].length);
  cardNumber[3] = '*'.repeat(cardNumber[3].length);

  return cardNumber.filter(Boolean).join(' - ');
};

const Card = ({ card }: { card: CardForm }) => {
  const cardNumberStr = getMaskedCardNumberStr(card.cardNumber);

  return (
    <>
      <div className="card-box">
        <div className="empty-card">
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">{cardNumberStr}</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">NAME</span>
              <span className="card-text">MM / YY</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CompanySelectionBottomSheet = () => {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="flex-center">
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
        </div>
        <div className="flex-center">
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린 카드</span>
          </div>
          <div className="modal-item-container">
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">클린카드</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRegistrationPage;