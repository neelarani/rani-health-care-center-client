import { getInputFieldError, IInputErrorState } from '@/lib/getInputFieldError';
import { FieldDescription } from '../ui/field';

interface InputFieldErrorProps {
  field: string;

  state: IInputErrorState;
}

const InputFieldError = ({ field, state }: InputFieldErrorProps) => {
  if (!getInputFieldError(field, state)) {
    return null;
  }

  return (
    <FieldDescription className="text-red-600">
      {getInputFieldError(field, state)}
    </FieldDescription>
  );
};
export default InputFieldError;
