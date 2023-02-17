import {Colors} from '@Constants';
import {Fonts, Radius, Spacing} from '@Constants/Metrics';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  sectionContent: {},
  welcomeContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Spacing.h.xl,
  },
  welcomeName: {
    fontSize: Fonts.title2,
    fontWeight: '500',
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: Radius.rg,
    paddingVertical: Spacing.h.lg,
    paddingHorizontal: Spacing.h.rg,
    marginHorizontal: Spacing.h.xl,
    marginVertical: Spacing.v.xl,
  },
  menu: {
    // flex: 1,
    paddingTop: Spacing.v.lg,
  },
  section: {
    borderTopLeftRadius: Radius.rg,
    borderTopRightRadius: Radius.rg,
    paddingTop: Spacing.v.xl,
    paddingHorizontal: Spacing.h.xl,
  },
  sectionHorizontal: {
    paddingHorizontal: 0,
  },
  sectionTitleHorizontal: {
    paddingHorizontal: Spacing.h.xl,
  },
  catalogList: {
    paddingHorizontal: Spacing.h.xl,
    paddingBottom: Spacing.v.rg,
  },
  headerContainer: {
    backgroundColor: Colors.pageBackground,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 64,
    paddingBottom: Spacing.v.lg,
  },
});

export default styles;
