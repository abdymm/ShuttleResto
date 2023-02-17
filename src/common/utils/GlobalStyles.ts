import {Colors} from '@Constants';
import {Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const globalStyles = ScaledSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    padding: Spacing.h.xl,
  },
});

export default globalStyles;
