import * as React from "react"

export interface ILayoutProps {
    children?: React.ReactNode
}

export default class Layout extends React.Component<ILayoutProps, object> {

    constructor(props: ILayoutProps) {
        super(props)
        
    }

    public render() {
        return (
            <div>{ this.props.children }</div>
        )
    }
}
