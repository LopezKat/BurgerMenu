import React, {Component} from 'react';
import { SwitchNavigator } from './src/navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SwitchNavigator />
    );
  }
}
