import React from 'react';
import './App.css';
import LifecycleEx from './Introductory/R008_LifecycleEx';

// component
function App() {
  return (
    <div>
      <h1>Start React 200 !</h1>
      <p>HTML 적용하기</p>
      <LifecycleEx 
        prop_value = 'FromApp.js'
      />
    </div>
  );
}


// 현 컴포넌트를 다른 곳에서 불러와 사용할 수 있도록 내보내기를 해줌
export default App;
