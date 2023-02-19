import {Colors} from '@Constants';
import {Fonts, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: Spacing.h.xl,
    marginVertical: Spacing.v.xl,
  },
  list: {
    paddingHorizontal: Spacing.h.xl,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.v.xxl,
  },
  error: {
    color: Colors.gray,
    fontSize: Fonts.subhead,
  },
});

export default styles;
