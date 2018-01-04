import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import AddTaskPanel from '../components/AddTaskPanel';
import Overlay from '../components/Overlay';

const loader = require('../assets/loader.svg');

const CREATE_TASK = gql`
  mutation CreateTask($description: String!, $assigneeId: ID!, $typeId: ID!) {
    createTask(description: $description, assigneeId: $assigneeId, typeId: $typeId, status: IN_PROGRESS) {
      id
    }
  }
`;

interface Props {
  updateShow: () => any;
  createTaskMutation: Function;
}

interface State {
  loading: boolean;
  error: boolean;
}

class AddTaskPanelContainer extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);
    this.state = {
      loading: false,
      error: false
    };
  }
  
  render () {
    const { updateShow, createTaskMutation } = this.props;
    const loading = this.state.loading;

    return (
      <div>
        {
          loading
            ? (
              <Overlay borderRadius={0}>
                <img src={loader} />
              </Overlay>
            )
            : null
        }
        <AddTaskPanel
          updateShow={updateShow}
          createTask={(description, assigneeId, typeId) => {
            this.setState({ loading: true, error: false }, async () => {
              try {
                await createTaskMutation({ variables: { description, assigneeId, typeId }});
              } catch (err) {
                console.log(err.message);
              }
              updateShow();
            });
          }}
        />
      </div>
    );  
  }

}

interface AddTaskPanelGraphQLWrapperProps {
  updateShow: Function;
}

export default graphql<any, AddTaskPanelGraphQLWrapperProps>(
  CREATE_TASK, { name: 'createTaskMutation' }
)(AddTaskPanelContainer);