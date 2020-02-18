    import React from 'react'
    import {styles} from '../styles/style.css'
    import { connect } from 'react-redux';
    import { bindActionCreators } from 'redux';
    import { increment, decrement, reset } from '../actions/counter';
    import styled from 'styled-components';
    import PropTypes from 'prop-types';

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const URL = 'http://localhost:8081';


const mapStateToProps = state => {
    return{
        count: state.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increment: increment,
        decrement: decrement,
        reset: reset
    }, dispatch);
};

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    increment = () => {
        this.props.increment();
    }
    
    decrement = () => {
        if(this.props.count > 0){
            this.props.decrement();
        }
    }
    
    reset = () => {
        this.props.reset();
    }

    render(){
        return(
            <div className="content">
                Count: {this.props.count}<br /><br />
                <Button onClick={this.increment}>  +  </Button>&nbsp;&nbsp;
                <Button onClick={this.decrement}>  -  </Button>&nbsp;&nbsp;
                <Button onClick={this.reset}>  Reset  </Button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);