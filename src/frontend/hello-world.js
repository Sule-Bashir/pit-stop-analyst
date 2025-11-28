import React from 'react';
import ForgeReconciler, { Text, Button } from '@forge/ui';

const App = () => {
  return React.createElement('div', null,
    React.createElement(Text, { children: '🏎️ PIT STOP ANALYST' }),
    React.createElement(Text, { children: 'Team performance monitor' }),
    React.createElement(Button, { 
      text: 'Check Team Status',
      onClick: () => console.log('Analyzing team performance...')
    })
  );
};

export default ForgeReconciler.render(<App />);
