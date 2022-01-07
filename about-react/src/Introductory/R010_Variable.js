import React, { Component } from 'react';

/*
var변수는 재선언, 재할당 허용
let변수는 재선언 비허용, 재할당 허용
const변수는 재선언, 재할당 비허용
*/
class R010_Variable extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        var varName = 'react';
        console.log(varName);
        var varName = '200';
        console.log(varName);

        let letName = 'react';
        console.log(letName);
        letName = 'react200';

        const constName = 'react';
        console.log(constName);
    }

    render() {
        return (
            <h2>[THIS IS Variable]</h2>
        );
    }
}

export default R010_Variable;