'use client';

import { useId } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({ className }) {
  const { pending } = useFormStatus();

  return (
    <button className={className} type='submit' disabled={pending}>
      {pending ? 'sending...' : 'submit'}
    </button>
  );
}

const initialState = { error: null };

export default function SpecialOrderForm({
  action,
  label,
  formClassName,
  inputClassName,
  buttonClassName,
}) {
  const [state, formAction] = useFormState(action, initialState);
  const errorId = useId();

  return (
    <div className='w-full flex flex-col justify-start items-start space-y-2'>
      <form action={formAction} className={formClassName}>
        {label ? (
          <span className='font-poppins font-bold text-lg text-pink-700'>
            {label}
          </span>
        ) : null}
        <input
          className={inputClassName}
          type='email'
          placeholder='jondoe@gmail.com'
          aria-label='email'
          name='email'
          required
          aria-invalid={state?.error ? true : undefined}
          aria-describedby={state?.error ? errorId : undefined}
        />
        <SubmitButton className={buttonClassName} />
      </form>
      {state?.error ? (
        <p
          id={errorId}
          role='alert'
          className='font-poppins text-sm text-red-700 w-full'
        >
          {state.error}
        </p>
      ) : null}
    </div>
  );
}
