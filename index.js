/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import BasicLayout from './src/BasicLayout';
import BasicState from './src/BasicState';
import BasicForm from './src/BasicForm';

AppRegistry.registerComponent(appName, () => BasicForm);
