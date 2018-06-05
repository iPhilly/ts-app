import { Button, Message, MessageBox } from 'element-react';
import 'element-theme-default';
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

    public add = () => () => {

        const value = this.state.currentValue;

        this.setState({
            clickTimes: this.state.clickTimes + 1,
            currentValue: value + 2,
        })
    }

    public reset = () => () =>  {
        
        this.setState({
            currentValue: this.props.initialValue
        });

        MessageBox.confirm('数值已重置,是否重置点击次数?','提示',{
            type:'warning'
        }).then(action=>{
            
            this.setState({
                clickTimes: 0
            });

            Message({
                message: 'click times is ZERO',
                type: 'success',
            })
        }).catch(()=>{
            Message('点击次数 未重置')
        })
    }

    public showMessage = () => () => {
        MessageBox.alert(`Current Value is ${this.state.currentValue}`);
    }
    public render() {

        return (
            <div>
                <Button onClick={this.add()} type="primary">click me {this.state.clickTimes} time(s)</Button>
                <Button onClick={this.showMessage()} type="primary">Show Value</Button>
                <Button onClick={this.reset()} type="danger" disabled={this.state.currentValue <= this.props.initialValue}>Reset</Button>
            </div>
        )
    }
}