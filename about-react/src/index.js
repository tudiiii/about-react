import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 브라우저에 컴포넌트를 보여줌
// ReactDOM.render(param1, param2)의 형태로 param2에 param1을 그려준다는 뜻
ReactDOM.render(

  // param 1 -화면에 보여줘야되는 렌더링할 컴포넌트
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // param2 - 컴포넌트를 어디다 그려줄지. index.gml 파일에서 id가 root인 엘리먼트를 찾아 뿌려줌
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
