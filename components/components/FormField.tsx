import React from 'react';
import { FormField as FormFieldType } from 'alltypes';

const FormField = ({
  id,
  children,
  content,
  info,
  type,
  checked,
  name,
  className = '',
  inputClassName = '',
  onChange,
  uniqueKey,
  value,
  error,
  placeholder,
}: FormFieldType) => {
  const minDate = new Date().setMonth(-216);
  const finalMinDate = new Date(minDate).toISOString().split('T')[0];
  const maxDate = new Date().setMonth(-72);
  const finalMaxDate = new Date(maxDate).toISOString().split('T')[0];

  return (
    <div className={`${className} form__field`}>
      <label htmlFor={id} className="field__label">
        {children} {content}
      </label>
      {info && <p className="field__info">{info}</p>}
      {type === 'checkbox' ? (
        <>
          <input
            onChange={(e: { target: HTMLInputElement }) => {
              onChange({ evt: e, uniqueKey: uniqueKey });
            }}
            name={name}
            id={id}
            type={type}
            className={`field__input ${inputClassName ? inputClassName : ''} ${
              error && 'field__input--red'
            }`}
            placeholder={placeholder ? placeholder : ''}
            checked={checked}
          />
          {error && <p className="input__error">{error}</p>}
        </>
      ) : type === 'date' ? (
        <>
          <input
            onChange={(e: { target: HTMLInputElement }) => {
              onChange({ evt: e, uniqueKey: uniqueKey });
            }}
            name={name}
            id={id}
            type="date"
            className={`field__input ${inputClassName ? inputClassName : ''} ${
              error && 'field__input--red'
            }`}
            value={value}
            placeholder={placeholder ? placeholder : ''}
            min={finalMinDate}
            max={finalMaxDate}
          />
          {error && <p className="input__error">{error}</p>}
        </>
      ) : (
        <>
          <input
            onChange={(e: { target: HTMLInputElement }) => {
              onChange({ evt: e, uniqueKey: uniqueKey });
            }}
            name={name}
            id={id}
            type={type ? type : 'text'}
            className={`field__input ${inputClassName ? inputClassName : ''} ${
              error && 'field__input--red'
            }`}
            value={value}
            placeholder={placeholder ? placeholder : ''}
          />
          {error && <p className="input__error">{error}</p>}
        </>
      )}
    </div>
  );
};

export default FormField;
