import React from 'react';
import './App.css';
import ImportConponent from './Introductory/R003_ImportConponent';

// component
function App() {
  return (
    <div>
      <h1>Start React 200 !</h1>
      <p>HTML 적용하기</p>
      <ImportConponent></ImportConponent>
    </div>
  );
}


// 현 컴포넌트를 다른 곳에서 불러와 사용할 수 있도록 내보내기를 해줌
export default App;
