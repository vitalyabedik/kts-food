import React, { useState } from 'react';

import cn from 'classnames';

import styles from './MultiDropdown.module.scss';

/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({ options, value, onChange, disabled, pluralizeOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const multiDropdownSelectClasses = !disabled ? styles['multi-dropdown__select'] : styles['multi-dropdown__disabled'];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    const index = value.findIndex((item) => item.key === option.key);
    if (index === -1) {
      onChange([...value, option]);
    } else {
      const newValue = [...value];
      newValue.splice(index, 1);
      onChange(newValue);
    }
  };

  return (
    <div className={styles['multi-dropdown']}>
      <div className={multiDropdownSelectClasses} onClick={handleToggle}>
        {pluralizeOptions(value)}
      </div>
      <div className={styles['multi-dropdown__options']}>
        {!isOpen ||
          (!disabled && (
            <div className={styles['multi-dropdown__menu']}>
              {options.map((option) => {
                const selected = value.some((item) => item.key === option.key);
                const optionClasses = cn(styles['multi-dropdown__option'], {
                  [styles['multi-dropdown__option_selected']]: selected,
                });

                return (
                  <div key={option.key} className={optionClasses} onClick={() => handleOptionClick(option)}>
                    {option.value}
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultiDropdown;
