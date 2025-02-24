import React from 'react';

import 'react-mobile-stack-router/dist/index.css';
import {
  MobileNavigation,
  Stack,
  StackScreen,
  useStackNavigation,
} from 'react-mobile-stack-router';

const FirstScreen = () => {
  const history = useStackNavigation('BaseStack');

  const openSecondScreen = () => {
    history.push('SecondScreen', { id: 1 });
  };

  return (
    <div className='screen'>
      <div className="title">
        <h2>iOS like navigation</h2>
      </div>
      <button onClick={openSecondScreen}>Open second screen</button>
    </div>
  );
};

const SecondScreen = () => {
  const history = useStackNavigation('BaseStack');

  const backToFirstScreen = () => {
    history.back();
  };

  return (
    <div className='screen'>
      <button onClick={backToFirstScreen}>Back</button>
    </div>
  );
};

const App = () => {
  return (
    <MobileNavigation>
      <Stack name="BaseStack">
        <StackScreen name="FirstScreen">
          <FirstScreen />
        </StackScreen>

        <StackScreen name="SecondScreen">
          <SecondScreen />
        </StackScreen>
      </Stack>
    </MobileNavigation>
  );
};

export default App;