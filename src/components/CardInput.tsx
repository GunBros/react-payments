interface CardInputProps {
  children: string | JSX.Element | JSX.Element[];
}

interface TitleProps {
  title: string;
}

interface InputProps {
  placeholder?: string;
  size?: string;
  onChangeCardData?: (inputData: string) => void;
  value?: string;
  type?: string;
}

const cardInputRegexMap = new Map([["number", /[^\d]/g]]);

function CardInput({ children }: CardInputProps) {
  return <div className="input-container">{children}</div>;
}

function Title({ title }: TitleProps) {
  return <span className="input-title">{title}</span>;
}

function Input({ placeholder, size, onChangeCardData, value, type = "text" }: InputProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    onChangeCardData?.(value.replace(cardInputRegexMap.get(type) ?? "", ""));
  };

  return (
    <div className={`input-box ${size}`}>
      <input className="input-basic" placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
}

CardInput.Title = Title;
CardInput.Input = Input;

export default CardInput;
