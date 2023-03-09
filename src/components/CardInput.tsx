interface CardInputProps {
    children: string | JSX.Element | JSX.Element[];
}

interface TitleProps {
    title: string;
}

interface InputProps {
    placeholder?: string;
    size?: string;
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

function Input({ placeholder, size }: InputProps) {
    return (<div className={`input-box ${size}`}>
        <input className="input-basic" type="text" placeholder={placeholder} />
    </div>);
}

CardInput.Title = Title;
CardInput.Input = Input;

export default CardInput