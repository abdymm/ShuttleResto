import {Colors} from '@Constants';
import {Fonts, Radius, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: Spacing.h.xl,
    marginVertical: Spacing.v.xl
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: Spacing.h.xl,
  },
  searchInputContainer: {
    flex: 1,
  },
  search: {
    backgroundColor: Colors.input,
    borderRadius: Radius.lg,
  },
  searchInput: {
    fontFamily: 'Sora-Regular',
    color: Colors.light,
    fontSize: Fonts.callout,
  },
});

export default styles;
