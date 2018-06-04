import { Button } from 'element-react';
import 'element-theme-default';
import * as React from 'react';

export interface IPCounter {
    initialValue: number
}
export interface ISCounter {
    clickTimes: number,
    currentValue: number
}

export default class Test extends React.Component<IPCounter, ISCounter> {

    constructor(props: IPCounter) {
        super(props)
        this.state = {
            clickTimes: 0,
            currentValue: props.initialValue,
        }
    }

    public add = () => () => {

        const value = this.state.currentValue;

        this.setState({
            clickTimes: this.state.clickTimes + 1,
            currentValue: value + 2,
        })
    }

    public reset = () => () => {
        this.setState({
            clickTimes: this.state.clickTimes,
            currentValue: this.props.initialValue
        })
    }

    public render() {

        return (
            <div>
                <Button onClick={this.add()} type="primary">click me {this.state.clickTimes} time(s)</Button>
                <Button disabled={true} onClick={this.add()} type="primary">Current Value is {this.state.currentValue}</Button>
                <Button onClick={this.reset()} type="danger" disabled={this.state.clickTimes <= this.props.initialValue}>Reset</Button>
            </div>
        )
    }
}