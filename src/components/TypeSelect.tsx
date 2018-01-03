import * as React from 'react';
import Select from 'react-select';

import { TaskType } from '../types/Type';

interface Props {
  types: Array<TaskType>;
  selectedType: TaskType;
  changeType: (type: TaskType) => any;
}

class TypeSelect extends React.Component<Props, {}> {
  
  render () {
    const {changeType, types, selectedType} = this.props;

    return (
      <Select
        onChange={(type: TaskType) => changeType(type)}
        searchable={false}
        value={selectedType}
        options={types.map(type => ({value: type.id, label: `${type.title} - ${type.effort}`}))}
      />
    );  
  }
}

export default TypeSelect;