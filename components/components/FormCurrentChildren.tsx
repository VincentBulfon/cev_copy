import { getCourseString } from 'helpers/strings';

import React from 'react';
import { formCurrentChildrenType } from 'alltypes/formCurrentChildren';

const FormCurrentChildren = ({
  data: courses,
  currentChildren,
}: formCurrentChildrenType) => {
  return (
    <>
      <div className="form__field">
        <p className="field__label">
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
          Enfant(s) déjà enregistré(s) :
        </p>
      </div>
      {currentChildren.children
        ? currentChildren.children.map(child => {
            return (
              <div>
                <div className="form__field">
                  <p className="field__label">
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
                    <p className="field__input field__input--noborder">
                      {`${child?.first_name} ${child?.name}`}
                    </p>
                  </p>
                  <label htmlFor="course" className="field__label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#004546"
                      viewBox="0 0 24 24"
                      className="field__svg">
                      <path d="M12 0a12.01 12.01 0 1012 12c0-6.62-5.38-12-12-12zm0 2c5.54 0 10 4.46 10 10s-4.46 10-10 10S2 17.54 2 12 6.46 2 12 2zm-1 2v9h7v-2h-5V4z"></path>
                    </svg>{' '}
                    Sélectionnez un cours :
                  </label>
                  <select className="select field__input" id="course">
                    <option value="">Ne souhaite pas l'inscrire</option>
                    {courses.data.courses.map(course => {
                      return (
                        <option value={course.id}>
                          {getCourseString(course)}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form__field">
                  <label htmlFor="cheque" className="field__label">
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
                      className="field__input sro"
                      type="checkbox"
                      name="ass"
                      id="ass"
                    />
                    <span className="checkboxmark"></span>
                  </label>
                </div>
              </div>
            );
          })
        : () => {
            <p className="field__label">
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
              <p className="field__input field__input--noborder">
                Aucun enfant n'est déjà enregistré pour cet utilisateur
              </p>
            </p>;
          }}
    </>
  );
};

export default FormCurrentChildren;
