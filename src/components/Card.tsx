import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import * as moment from 'moment';
import ThemeProviderWrapper from '../ThemeProviderWrapper';
import Title from './Title';
import { Task } from '../types/Task';

const CardWrapper = styled.div`
  box-sizing: border-box;
  background-color: ${props => props.theme.bgColor};
  border-radius: 10px;
  color: ${props => props.theme.textColor};
  font-size: ${props => props.theme.fontSize};
  min-height: 60px;
  padding: 5px;
  padding-bottom: 30px;
  width: 20%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface DateWrapperProps {
  createdAt: number;
}

const div: StyledFunction<DateWrapperProps & React.HTMLProps<HTMLDivElement>> = styled.div;

const DateWrapper = div`
  padding: 2px;
  margin-bottom: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 1px;
  float: left;
  background-color: ${props => props.theme.textColor};
  color: ${props => props.theme.bgColor};
  font-size: 12px;
  
  animation: ${props => moment().unix() - props.createdAt >= 100 ? 'hurryup 1s infinite' : ''};
  @keyframes hurryup {
    0% { transform: rotate(0deg); }
    33% { transform: rotate(3deg); }
    66% { transform: rotate(-3deg); }
    99% { transform: rotate(0deg); }
  }
`;

interface UserSelectionProps {
  clicked: boolean;
}

const userDiv: StyledFunction<UserSelectionProps & React.HTMLProps<HTMLDivElement>> = styled.div;

const UserSelection = userDiv`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  
  bottom: ${props => props.clicked ? '0' : '-100%'};
  opacity: ${props => props.clicked ? 1 : 0};
  transition: bottom 0.3s, opacity 0.3s;
  
  & > div:not(:first-child) {
    margin-left: 5px;
  }
`;

const Photo = styled.div`
  border: solid 2px;
  padding: 5px;
  border-radius: 50%;
`;

interface Props {
  task: Task;
}

interface State {
  clicked: boolean;
}

export default class Card extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    const task = this.props.task;
    return (
      <ThemeProviderWrapper>
        <CardWrapper onClick={() => this.setState({clicked: !this.state.clicked})}>
          <Title>
            {task.title}
          </Title>
          <div>
            {task.description}
          </div>
          <DateWrapper createdAt={task.createdAt}>
            Created at {moment.unix(task.createdAt).format('DD-MM-YYYY HH:MM')}
          </DateWrapper>
          {
            task.assignee
              ? <div style={{position: 'absolute', right: 5, bottom: 5}}>
                  <Photo>AA</Photo>
                </div>
              : null
          }
          <UserSelection clicked={this.state.clicked}>
            <Photo>AA</Photo>
            <Photo>BB</Photo>
          </UserSelection>
        </CardWrapper>
      </ThemeProviderWrapper>
    );
  }

}