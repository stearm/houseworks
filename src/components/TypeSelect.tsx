import * as React from 'react';
import Select from 'react-select';

import { TaskType } from '../types/Type';

const TypeSelect = ({ types }: { types: Array<TaskType> }) => {
  return (
    <Select
      searchable={false}
      options={types.map(type => ({value: type.id, label: `${type.title} - ${type.effort}`}))}
    />
  );
};

export default TypeSelect;