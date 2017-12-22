import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { StyledFunction } from 'styled-components';

const arrowDownIcon = require('../assets/arrow-down.svg');
const arrowUpIcon = require('../assets/arrow-up.svg');

const initialPosition = 22 - window.innerHeight;

interface DraggableWrapperProps {
  top?: number;
}

const div: StyledFunction<DraggableWrapperProps & React.HTMLProps<HTMLDivElement>> = styled.div;

const DraggableWrapper = div`
  position: absolute;
  z-index: 5000;
  width: 100%;
  height: 100%;
  background-color: ${props => props.top === initialPosition ? 'rgba(125, 180, 181, 0)' : 'rgba(125, 180, 181, 1)'};
  cursor: pointer;
  top: ${props => `${props.top}px`};
  transition: top 0.2s ease-out, background-color 0.3s;
`;

const ArrowWrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  width: 50px;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  
  & > img {
    width: 15px;
  }
`;

interface Props {
  children: React.ReactNode | Array<React.ReactNode>;
}

interface State {
  top?: number;
  isDown: boolean;
}

export default class Draggable extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      top: initialPosition,
      isDown: false
    };
  }

  addMouseUpListener = () => {
    ['mouseup', 'touchend'].forEach(eventType => {
      document.addEventListener(eventType, (event: MouseEvent | TouchEvent) => {
        const y = event instanceof MouseEvent ? event.clientY : event.changedTouches[0].pageY;
        if (this.state.isDown) {
          if (window.innerHeight / 2 < y) {
            this.setState({top: 0, isDown: false});
          } else {
            this.setState({top: initialPosition, isDown: false});
          }
        }
      }, true);
    });
  }

  addMouseDownListener = () => {
    ['mousedown', 'touchstart'].forEach(eventType => {
      ReactDOM.findDOMNode(this).addEventListener(eventType, (event: MouseEvent | TouchEvent) => {
        this.setState({isDown: true});
      }, false);
    });
  }

  addMouseMoveListener = () => {
    ['mousemove', 'touchmove'].forEach(eventType => {
      document.addEventListener(eventType, (event: MouseEvent | TouchEvent) => {
        const y = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        const eventWhich = event instanceof MouseEvent ? 1 : 0;
        event.preventDefault();
        const inRange = y - window.innerHeight <= 0 && y >= 10;
        if (this.state.isDown && inRange && event.which === eventWhich) {
          this.setState({
            top: y - window.innerHeight
          });
        }
      }, true);
    });
  }

  componentDidMount() {
    this.addMouseDownListener();
    this.addMouseMoveListener();
    this.addMouseUpListener();
  }

  render() {
    return (
      <DraggableWrapper top={this.state.top}>
        {this.props.children}
        <ArrowWrapper>
          <img src={this.state.top === 0 ? arrowUpIcon : arrowDownIcon}/>
        </ArrowWrapper>
      </DraggableWrapper>
    );
  }

}