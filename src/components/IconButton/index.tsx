import styled from "styled-components";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FontAwesomeIcons = {
  arrowLeft: faAngleLeft,
};

type FontAweSomeIconType = keyof typeof FontAwesomeIcons;
export type IconButtonPropsType = {
  name: FontAweSomeIconType;
  size: FontAwesomeIconProps["size"];
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
const IconButton = ({ onClick, name, size, color }: IconButtonPropsType) => {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={FontAwesomeIcons[name]} size={size} color={color}></FontAwesomeIcon>
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.16);
  }
`;

export default IconButton;