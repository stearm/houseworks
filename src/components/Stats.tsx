import * as React from 'react';
import styled from 'styled-components';

import Draggable from './Draggable';

const StatsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 100%;
  justify-content: center;
  z-index: 9999;
`;

const Data = styled.div`
  width: 50%;
  font-size: 45px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

const Graph = styled.div`
  width: 100%;
  font-size: 45px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

const Stats: React.SFC = () => (
  <Draggable>
    <StatsWrapper>
      <Data>
        SA
      </Data>
      <Data>
        SC
      </Data>
      <Data>
        asdasda
      </Data>
      <Data>
        1231
      </Data>
      <Data>
        1231
      </Data>
      <Data>
        1231
      </Data>
      <Graph>
        CIAONE!!!!
      </Graph>
    </StatsWrapper>
  </Draggable>
);

export default Stats;