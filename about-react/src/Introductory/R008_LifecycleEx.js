/*
## 생명주기 함수 shouldComponentUpdate() 사용하기
react에서 생명주기란, component의 생성, 변경, 소멸의 과정을 뜻한다.
shouldComponentUpdate() 함수는 component의 변경 과정에 속한다. 여기서 변경이란 props 나 state의 변경을 말한다.
*/
import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state:props.prop_value};
    }
    
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount(){
        console.log('4. componenetDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        // 변수 선언과 초기화를 동시에 실행한다. -> state의 변경이 발생했기 때문에 변경 단계의 생명 함수인 shouldComponentUpdate()가 실행됨
        this.setState({tmp_state2 : true});
    }

    // boolean 유형의 데이터를 반환하는데, return 값이 true일 경우에 render() 함수를 한 번 더 호출한다.
    shouldComponentUpdate(props, state){
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2
    }

    render() {
        console.log('3. render Call');
        
        return (
            <h2>[THIS IS shouldComponentUpdate FUCNTION]</h2>
        );
    }
}

export default R008_LifecycleEx;