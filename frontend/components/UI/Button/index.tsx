'use client';

import './styles.scss';
interface buttonProps {
  onClick?: () => void;
  id?: string;
  sx?: object;
  children?: React.ReactNode;
}

export default function Button ({
  onClick,
  children,
  id,
  sx
}: buttonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      style={sx}
      className="base-button"
    >
      { children }
    </button>
  )
}
