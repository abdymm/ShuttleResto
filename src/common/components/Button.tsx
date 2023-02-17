import React from 'react';

import {Colors} from '@Constants';
import {Button as PaperButton, ButtonProps} from 'react-native-paper';
import {Fonts, Radius, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

interface Props extends ButtonProps {}

const Button = (props: Props) => {
  return (
    <PaperButton
      {...props}
      style={[styles.button, props.style]}
      labelStyle={[styles.label, props.labelStyle]}
    />
  );
};
export default Button;
const styles = ScaledSheet.create({
  button: {
    borderColor: Colors.primary,
    borderRadius: Radius.rg,
    paddingVertical: Spacing.v.sm,
  },
  label: {
    fontSize: Fonts.subhead,
    fontWeight: '600',
  },
});
