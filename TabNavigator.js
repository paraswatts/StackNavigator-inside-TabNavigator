
import { StackNavigator } from 'react-navigation';

import Tab4Page1 from './Tab4Page1'
import Tab4Page2 from './Tab4Page2'
import Tab4Page3 from './Tab4Page3'
import Tab4Page4 from './Tab4Page4'
import Tabs from './MainTabPage';

const TabPages = StackNavigator({
    Tab4Page1: { screen: Tab4Page1 },
    Tab4Page2: { screen: Tab4Page2 },
    Tab4Page3: { screen: Tab4Page3 },
    Tab4Page4: { screen: Tab4Page4  }
  
  },
);

export default TabPages;
