import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
registerScreens();

// eslint-disable-next-line no-console
console.ignoredYellowBox = ['Remote debugger'];

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  amDesignator: 'AM',
  pmDesignator: 'PM',
};

LocaleConfig.defaultLocale = 'en';

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Menu',
    title: 'WixCal',
  },
  appStyle: {
    navBarBackgroundColor: '#00adf5',
    navBarTextColor: 'white',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    autoAdjustScrollViewInsets: true,
  },
});
