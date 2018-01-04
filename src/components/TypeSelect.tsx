import * as React from 'react';
import Select, { Option, OptionValues } from 'react-select';
import * as _ from 'lodash';

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
        onChange={(type: Option<OptionValues>) => {
          changeType(_.find(types, t => t.id === type.value)!);
        }}
        searchable={false}
        value={selectedType ? selectedType.id : ''}
        options={types.map(type => ({value: type.id, label: `${type.title} - ${type.effort}`}))}
      />
    );  
  }
}

export default TypeSelect;