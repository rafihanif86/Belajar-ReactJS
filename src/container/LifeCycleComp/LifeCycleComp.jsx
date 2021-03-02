import React, {Component} from 'react';
import { Button } from 'reactstrap';

class LifeCycleComp extends Component {
    constructor (props){
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount')
        setTimeout( () => {
            this.setState({
                count: 2
            })
        }, 5000)
        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render')
        return(
            <div>
                <Button color="primary" onClick={this.changeCount}>primary {this.state.count}</Button>{' '}
            </div>
        )
    }
}

export default LifeCycleComp;