import { configure, addDecorator } from '@storybook/react';
import * as React from 'react';

import ThemeProviderWrapper from '../src/ThemeProviderWrapper';

function loadStories() {
  require('../src/stories');
}

addDecorator(story => (
  <ThemeProviderWrapper>
    {story()}
  </ThemeProviderWrapper>
));

configure(loadStories, module);
