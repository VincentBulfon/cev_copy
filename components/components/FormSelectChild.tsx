import React, { useEffect, useState } from 'react';
import { ChildrenStateType, StartStep } from 'alltypes';
import FormAddChild from './FormAddChild';

const FormSelectChild = ({ handleNext }: StartStep) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [newChildren, setNewChildren] = useState<Array<ChildrenStateType>>([
    {
      name: '',
      first_name: '',
      birth_date: '',
      voucher: false,
      course_id: 0,
      tutor: '',
    },
  ]);

  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <section
      className={
        isActive ? `form__step__two active` : `form__step__two inactive`
      }>
      <h4 className="form__subtitle">
        Sélectionnez les enfants et leur cours :
      </h4>
      <FormAddChild children={newChildren} setNewChildren={setNewChildren} />
      <p className="form__mandatory">*Champs obligatoires</p>
      <div className="form__button__wrapper">
        <button
          type="button"
          className="cta form__button form__button--main"
          onClick={() => (handleNext ? handleNext() : null)}>
          <span className="input__value">Suivant</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffff"
            viewBox="0 0 32 18"
            className="svg svg--right">
            <path
              stroke="null"
              d="M22.97.04l-1.88 1.91 5.7 5.71H.07v2.67H26.8l-5.7 5.7 1.87 1.92 8.95-8.96L22.97.04z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FormSelectChild;
