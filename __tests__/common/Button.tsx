import React from 'react';
import Text from '@Components/Text';
import {render, screen} from '@testing-library/react-native';
import {Button} from '@Components';

describe('Button', () => {
  test('render snapshoot', () => {
    const tree = render(<Button>Hello</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
