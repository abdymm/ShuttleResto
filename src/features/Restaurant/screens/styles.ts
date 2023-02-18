import {Spacing} from '@Constants/Metrics';
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
});

export default styles;
