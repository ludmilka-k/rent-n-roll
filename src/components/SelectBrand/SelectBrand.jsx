import { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import css from './SelectBrand.module.css';
const SelectBrand = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option) => {
    if (option !== value) {
      onChange(option);
    }
  }
  return (
    <div
      className={css.container}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={(() => setIsOpen(prev => !prev))}
    >
      <span className={css.value}>{value}</span>
      <ul className={`${css.options} ${isOpen ? css.show : ""}`}>
        {options.map((option) => (
          <li
            className={css.option}
            key={option.id}
            onClick={e => {
              e.stopPropagation();
              selectOption(option.name);
              setIsOpen(false);
            }}
          >
            {option.name}
          </li>
        ))}
      </ul>
      <MdKeyboardArrowDown  width={20} height={20} className={css.caret}/>
    </div>
  );
};

export default SelectBrand;
