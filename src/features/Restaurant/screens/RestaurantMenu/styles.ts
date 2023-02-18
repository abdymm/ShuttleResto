import {Colors} from '@Constants';
import {Fonts, Radius, Spacing} from '@Constants/Metrics';
import {ms, mvs, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {},
  coverContainer: {},
  cover: {
    width: '100%',
    height: mvs(200),
  },
  profileContainer: {
    width: ms(75),
    height: ms(75),
    marginLeft: Spacing.h.lg,
    marginTop: mvs(42) * -1,
    borderColor: Colors.border,
    borderWidth: 3,
    borderRadius: Radius.lg,
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: Radius.rg,
  },
  detailContainer: {
    marginTop: Spacing.v.xl,
    marginLeft: Spacing.h.lg,
  },
  name: {
    fontSize: Fonts.title1,
  },
  menuContainer: {
    flex: 1,
  },
  list: {},
});

export default styles;
