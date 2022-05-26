import React from 'react'
import Message from "./Message";

// export default function MoveAnother(){
export default class MoveAnother extends React.Component {
    state = {
        name : '',
        age : ''
    }
    handleNameChange = (e) => {
        const name = e.target.value;
        this.setState({name})
    }
    handleAgeChange = (e) => {
        const age = e.target.value;
        this.setState({age})
    }
    render () {
        return (
            <div>
                name : <input type='text' onChange={this.handleNameChange} value={this.state.name}></input><br/>
                age  : <input type='text' onChange={this.handleAgeChange} value={this.state.age}></input><br/>
                <button onClick={()=>{console.log(this.state)}}> NEXT </button>
                <Message name={this.state.name} age={this.state.age} key={this.state.age}></Message>
            </div>
        )
    }
}

// export default class Message extends React.Component {
//     render () {
//         if(this.props.age >= 14) {
//             return <p>{`다음 단계로 진행해주세요`}</p>
//         }else {
//             return <p>{`14세 미만은 부모님 동의가 필요합니다.`}</p>
//         }
//     }
// }

