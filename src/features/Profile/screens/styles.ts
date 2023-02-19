import {Fonts, Spacing} from '@Constants/Metrics';
import {ms, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  title: {},
  list: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: Spacing.h.xl,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginLeft: Spacing.h.lg,
    marginVertical: Spacing.h.xxxl,
  },
  name: {
    fontSize: Fonts.callout,
  },
  image: {
    width: ms(60),
    height: ms(60),
  },
});

export default styles;
