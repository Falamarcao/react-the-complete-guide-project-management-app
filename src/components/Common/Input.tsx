import {
  forwardRef,
  Ref,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

interface InputProps {
  label: string;
  fieldType?: 'input' | 'textarea';
}

type CombinedProps =
  | (InputProps & InputHTMLAttributes<HTMLInputElement>)
  | (InputProps & TextareaHTMLAttributes<HTMLTextAreaElement>);

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, CombinedProps>(
  ({ label, fieldType = 'input', ...props }, ref) => {
    const className =
      'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return (
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        {fieldType === 'input' ? (
          <input
            ref={ref as Ref<HTMLInputElement>}
            className={className}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        ) : (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            className={className}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        )}
      </p>
    );
  }
);

export default Input;
