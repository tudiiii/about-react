/*
## 생명주기 함수 render() 사용하기
react에서 생명주기란, component의 생성, 변경, 소멸 과정을 뜻힌다.
render(), constructor(), getDerivedStateFormProps(). componentDidMount() 함수들은 component의 생성 과정에 속한다.
*/
import React, { Component } from 'react';

class R004_LifecycleEx extends Component {
    render() {
        console.log('3. render CALL');
        return (
            <h2>[THIS IS RENDER FUNCTION ]</h2>
        )

    }
}


export default R004_LifecycleEx;
