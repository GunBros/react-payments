interface CardInputProps {
    children: string | JSX.Element | JSX.Element[];
}

interface TitleProps {
    title: string;
}

interface InputProps {
    placeholder?: string;
    size?: string;
    type?: string;
    value?: string;
    changeInput?: React.Dispatch<React.SetStateAction<string>>;
}


function CardInput({children} : CardInputProps) {
    return (
        <div className="input-container">
            {children}
        </div>
    )
}


function Title({ title } : TitleProps) {
    return (<span className="input-title">{title}</span>);

}

function Input({ placeholder, size, type = 'text', value, changeInput }: InputProps) {
    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeInput?.(e.currentTarget.value);
    }

    return (<div className={`input-box ${size}`}>
        <input className="input-basic" type={type} placeholder={placeholder} value={value} onInput={onInput} />
    </div>);
}

CardInput.Title = Title;
CardInput.Input = Input;

export default CardInput