import { Button, message, Modal,  } from 'antd';
import * as React from 'react';


export interface IPCounter {
    initialValue: number
}
export interface ISCounter {
    clickTimes: number,
    currentValue: number
}

export default class TestMessageBox extends React.Component<IPCounter, ISCounter> {

    constructor(props: IPCounter) {
        super(props)
        this.state = {
            clickTimes: 0,
            currentValue: props.initialValue
        }
    }

    public reset = () => {

        const self = this

        Modal.confirm({
            title: '请确认',
            // tslint:disable-next-line:object-literal-sort-keys
            content: '是否清空 value & times',
            onOk() {
                self.setState({
                    clickTimes: 0,
                    currentValue: self.props.initialValue
                })
            },
            onCancel() {
                message.info('clicked cancel')
             },
        });
    }   

    // tslint:disable-next-line:member-ordering
    public add = () => {

        const value = this.state.currentValue;

        this.setState({
            clickTimes: this.state.clickTimes + 1,
            currentValue: value + 2,
        })
    }

    // tslint:disable-next-line:member-ordering
    public showMessage = () => () => {
        message.info(`Current Value is ${this.state.currentValue}`);
    }
    // tslint:disable-next-line:member-ordering
    public render() {

        return (
            <div>
                <Button onClick={this.add} type="primary">click me {this.state.clickTimes} time(s)</Button>
                <Button onClick={this.showMessage()} type="primary">Show Value</Button>
                <Button onClick={this.reset} type="danger" disabled={this.state.currentValue <= this.props.initialValue}>Reset</Button>
            </div>
        )
    }
}