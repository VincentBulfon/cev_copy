import React from 'react';
import { ChildrenStateType, handleChangeType } from 'alltypes';
import NewChild from './NewChild';

const FormAddChild = ({
  children,
  setNewChildren,
}: {
  children: Array<ChildrenStateType> | [];
  setNewChildren: React.Dispatch<React.SetStateAction<ChildrenStateType[]>>;
}) => {
  const MAX_CHILD_NUMBER = 5;

  const handleChange = ({ evt, uniqueKey }: handleChangeType) => {
    const { name, value } = evt.target;

    const childList = [...children];
    if (name === 'name' || name === 'first_name' || name === 'birth_date') {
      childList[uniqueKey][name] = value;
    }
    setNewChildren(childList);
  };

  const handleNewChild = () => {
    if (children.length <= MAX_CHILD_NUMBER) {
      setNewChildren([
        ...children,
        {
          tutor: '',
          name: '',
          first_name: '',
          birth_date: '',
          voucher: false,
          course_id: 0,
        },
      ]);
    }
  };

  const handleRemoveChild = ({ index }: { index: number }) => {
    const childList = [...children];
    childList.splice(index, 1);
    setNewChildren(childList);
  };
  return (
    <div>
      {children.map((_elmt, index) => {
        return (
          <NewChild
            key={index}
            uniqueKey={index}
            onChange={handleChange}
            onRemove={handleRemoveChild}
          />
        );
      })}
      {children.length <= MAX_CHILD_NUMBER && (
        <button
          onClick={() => {
            handleNewChild();
          }}
          type="button"
          className="cta cta--nb cta--secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 31 32"
            className="svg svg--left">
            <path
              stroke="null"
              d="M15.5.06C6.97.06.02 7.2.02 16c0 8.8 6.95 15.94 15.48 15.94 8.53 0 15.48-7.15 15.48-15.94C30.98 7.2 24.03.06 15.5.06zm0 2.45c7.25 0 13.1 6.03 13.1 13.49s-5.85 13.5-13.1 13.5S2.4 23.45 2.4 16 8.25 2.5 15.5 2.5zm-1.2 7.36v4.9H9.56v2.46h4.76v4.9h2.38v-4.9h4.76v-2.46H16.7v-4.9h-2.38z"></path>
          </svg>
          Ajouter un autre enfant
        </button>
      )}
    </div>
  );
};

export default FormAddChild;
