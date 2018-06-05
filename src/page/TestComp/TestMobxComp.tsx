import { Button } from 'element-react';
import { computed, observable } from 'mobx';
import { observer } from 'mobx-react'
import * as React from "react"

@observer
export default class TestMobxComp extends React.Component {

    @observable public price: number = 3.14;
    @observable public amount: number = 1;

    @computed get total() {
        return this.price * this.amount;
    }

    public calculate = () => {
        this.amount++;
    }

    public render() {
        return (
            <div>
                <Button style={styles.btnStyle} className='btn-calculate' type='text' onClick={
                    this.calculate
                }>amount ++ </Button>
                <div>{this.price} x {this.amount} = {this.total}</div>
            </div>
        )
    }
}

const styles = {
    btnStyle: {
        marginBottom: 50,
        marginTop: 50
    }
}
