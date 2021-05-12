import React, { useEffect, useState } from 'react';
import { SelectOption } from 'models';
import { getStyles } from './SelectorStyles';

interface Props {
  options: SelectOption[];
  callback: (value: string) => void;
  label?: string;
  width?: string;
}

const Selector: React.FC<Props> = ({ options, callback, label, width = 'auto' }) => {
  const [value, setValue] = useState<string>('');
  const styles = getStyles();

  useEffect(() => {
    setValue(options.length && options[0].value);
  }, []);

  const setOption = (event: React.FormEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value);
    callback(event.currentTarget.value);
  }

  return (
    <div className={styles.filterRow} style={{width: width}}>
      {label && <label className={styles.filterLabel}>{label}:</label>}
      <select className={styles.filterSelect} onChange={setOption}>
        {options.map((option) =>
          <option value={option.value} selected={option.value === value}>
            {option.text}
          </option>
        )}
      </select>
    </div>
  );
};

export default Selector;
