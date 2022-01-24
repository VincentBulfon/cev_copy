import { getCourseString } from 'helpers/strings';
import { GetCoursesDate_courses } from 'operations/__generated__/GetCoursesDate';

import React from 'react';

import { Unique } from 'alltypes';
import FormField from './FormField';

const NewChild = ({
  uniqueKey,
  onChange,
  onRemove,
  showDelete,
  valueElmt,
  errors,
  courses,
}: Unique) => {
  return (
    <div className="form__child">
      <FormField
        value={valueElmt?.first_name || ''}
        onChange={onChange}
        uniqueKey={uniqueKey}
        name="first_name"
        id={`child__firstname__${uniqueKey}`}
        content="Prénom : *"
        error={errors?.first_name}>
        <svg
          className="field__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 29 31">
          <path
            stroke="null"
            d="M14.47 0a10.15 10.15 0 00-5.65 18.54A14.51 14.51 0 000 31.84h2.9c0-3.67 1.69-6.93 4.33-9.05l6.25 5.74.99.95 1-.95 6.23-5.74a11.56 11.56 0 014.35 9.04h2.89c0-5.95-3.66-11.07-8.82-13.3A10.15 10.15 0 0014.47 0zm0 2.9a7.21 7.21 0 017.23 7.23 7.21 7.21 0 01-7.23 7.23 7.21 7.21 0 01-7.24-7.23 7.21 7.21 0 017.24-7.24zm0 17.36c1.66 0 3.24.33 4.66.95l-4.66 4.34-4.66-4.34c1.42-.62 3-.95 4.66-.95z"
          />
        </svg>
      </FormField>
      <FormField
        value={valueElmt?.name || ''}
        onChange={onChange}
        uniqueKey={uniqueKey}
        name="name"
        id={`child__lastname__${uniqueKey}`}
        content="Nom : *"
        error={errors?.name}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 29 31"
          className="field__svg">
          <path
            stroke="null"
            d="M14.47 0a10.15 10.15 0 00-5.65 18.54A14.51 14.51 0 000 31.84h2.9c0-3.67 1.69-6.93 4.33-9.05l6.25 5.74.99.95 1-.95 6.23-5.74a11.56 11.56 0 014.35 9.04h2.89c0-5.95-3.66-11.07-8.82-13.3A10.15 10.15 0 0014.47 0zm0 2.9a7.21 7.21 0 017.23 7.23 7.21 7.21 0 01-7.23 7.23 7.21 7.21 0 01-7.24-7.23 7.21 7.21 0 017.24-7.24zm0 17.36c1.66 0 3.24.33 4.66.95l-4.66 4.34-4.66-4.34c1.42-.62 3-.95 4.66-.95z"
          />
        </svg>
      </FormField>
      <FormField
        value={valueElmt?.birth_date || ''}
        onChange={onChange}
        uniqueKey={uniqueKey}
        name="birth_date"
        id={`child__birthdate__${uniqueKey}`}
        content="Date de naissance : (minimum 6 ans maximum 18 ans) *"
        error={errors?.birth_date}
        type="date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 27 28"
          className="field__svg">
          <path d="M4 0v1H0v22h10v-2H2V7h18v2.2l.38.35c.47.45 1.1 1.1 1.62 1.86V1h-4V0h-2v1H6V0H4zM2 3h2v1h2V3h10v1h2V3h2v2H2V3zm6 6v2h2V9H8zm4 0v2h2V9h-2zm7 2s-2 1.9-2 3c0 .74.4 1.38 1 1.72V17h-3c-1.65 0-3 1.35-3 2.99V26h-1v2h16v-2h-1v-6c0-1.64-1.36-3-3-3h-3v-1.28c.6-.34 1-.98 1-1.72 0-1.1-2-3-2-3zM4 13v2h2v-2H4zm4 0v2h2v-2H8zm4 0v2h2v-2h-2zm-8 4v2h2v-2H4zm4 0v2h2v-2H8zm7 2h8c.57 0 1 .43 1 1v1c0 .57-.43 1-1 1-.57 0-1-.43-1-1h-2c0 .57-.43 1-1 1-.57 0-1-.43-1-1h-2c0 .57-.43 1-1 1-.57 0-1-.43-1-1v-1c0-.56.43-1 1-1zm2 4.17c.54.49 1.22.83 2 .83s1.46-.34 2-.83c.54.49 1.22.83 2 .83.35 0 .69-.07 1-.19V26H14v-2.19c.31.12.65.19 1 .19.78 0 1.46-.34 2-.83z" />
        </svg>
      </FormField>
      {/* {#TODO consider data-* to store the id of the child realated to the user} */}
      <div className="form__field form__field--nb">
        <label htmlFor="course" className="field__label">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 24 24"
            className="field__svg">
            <path d="M12 0a12.01 12.01 0 1012 12c0-6.62-5.38-12-12-12zm0 2c5.54 0 10 4.46 10 10s-4.46 10-10 10S2 17.54 2 12 6.46 2 12 2zm-1 2v9h7v-2h-5V4z" />
          </svg>{' '}
          Sélectionnez un cours : *
        </label>
        {courses ? (
          <select
            defaultValue={
              valueElmt?.course_id != 9999999 ? valueElmt?.course_id : 'select'
            }
            className={`select field__input ${
              errors?.course_id && 'field__input--red'
            }`}
            onChange={(e: { target: HTMLSelectElement }) => {
              onChange({ evt: e, uniqueKey: uniqueKey });
            }}
            name="course_id">
            <option value="select" disabled>
              Sélectionnez un cours
            </option>
            {courses.map((course: GetCoursesDate_courses, index: number) => {
              return (
                <option key={index} value={course.id}>
                  {getCourseString(course)}
                </option>
              );
            })}
          </select>
        ) : (
          <p> Aucun cours disponnible acutellement</p>
        )}
        {errors?.course_id && (
          <p className="input__error">{errors?.course_id}</p>
        )}
      </div>
      <div className="form__field">
        <label
          htmlFor={`voucher+${uniqueKey}`}
          className={`field__label field__label--fw field__label--mb`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 28 32"
            className="field__svg">
            <path
              stroke="null"
              d="M7.77-.11v7.18H.23v24.77l3.45-1.97 2.2 1.26 2.2-1.26 2.2 1.26 2.2-1.26 2.2 1.26 2.2-1.26 3.45 1.97v-9.7h7.53V-.1l-3.45 1.97L22.2.6l-2.2 1.26L17.81.6l-2.2 1.26L13.42.6l-2.19 1.26L7.77-.11zm5.65 3.6l2.2 1.26 2.2-1.25 2.2 1.25L22.2 3.5l2.2 1.25.94-.54v15.42h-5.02V7.07H10.27V4.21l.95.54 2.2-1.25zM2.74 9.6h15.07V27.5l-.94-.53-2.2 1.25-2.2-1.25-2.2 1.25-2.19-1.25-2.2 1.25-2.2-1.25-.94.53V9.58zm8.85 1.25c-1.68 0-3.1.94-3.92 2.25-.3.46-.5.98-.68 1.52h-1.8v2.51h1.35l-.03.63.03.63H5.25v2.5H7c.17.55.39 1.07.68 1.53a4.66 4.66 0 003.92 2.25c1.58 0 2.89-.81 3.83-1.92l-1.9-1.64c-.7.8-1.08 1.04-1.93 1.04-.84 0-1.33-.32-1.8-1.06l-.09-.2h1.89v-2.5H9.06c-.02-.21-.04-.41-.04-.63 0-.22.02-.42.04-.63h2.47v-2.51H9.7c.04-.06.06-.14.1-.19.46-.74.95-1.07 1.8-1.07.76 0 1.2.32 1.92 1.17l1.9-1.64c-.9-1.06-2.17-2.04-3.83-2.04z"
            />
          </svg>{' '}
          Chèque sport :
          <input
            checked={valueElmt?.voucher ? true : false}
            className="field__input sro"
            type="checkbox"
            name="voucher"
            id={`voucher+${uniqueKey}`}
            onChange={(e: { target: HTMLInputElement }) => {
              onChange({ evt: e, uniqueKey: uniqueKey });
            }}
          />
          <span className="checkboxmark"></span>
        </label>
      </div>
      {showDelete && (
        <button
          onClick={() => {
            onRemove({ index: uniqueKey });
          }}
          type="button"
          className="cta cta--fw cta--nb cta--secondary cta--danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 26 26"
            className="svg svg--left svg--danger ">
            <path
              stroke="null"
              d="M13 .07C5.87.07.07 5.87.07 13S5.87 25.93 13 25.93 25.93 20.13 25.93 13 20.13.07 13 .07zm0 1.99c6.05 0 10.94 4.89 10.94 10.94S19.05 23.94 13 23.94A10.93 10.93 0 012.06 13C2.06 6.95 6.95 2.06 13 2.06zM9.24 7.8L7.8 9.24 11.57 13l-3.76 3.76 1.43 1.43L13 14.43l3.76 3.76 1.43-1.43L14.43 13l3.76-3.76-1.43-1.43L13 11.57 9.24 7.81z"
            />
          </svg>
          Supprimer
        </button>
      )}
    </div>
  );
};

export default NewChild;
