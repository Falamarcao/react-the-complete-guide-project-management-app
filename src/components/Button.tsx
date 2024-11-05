import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  props.className =
    props.className ??
    'bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100';

  props.className =
    'px-4 py-2 text-xs md:text-base rounded-md ' + props.className;

  return <button {...props}>{children}</button>;
};

export default Button;
