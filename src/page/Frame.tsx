import { Button,Layout } from "element-react";
import 'element-theme-default';
import * as React from 'react';

export default class Frame extends React.Component {
    public render() {
        return (
            <div>
                <Layout.Row>
                    <Layout.Col span="4">
                        <Button type="primary" icon="search">搜索</Button>
                    </Layout.Col>
                    <Layout.Col span="12">
                        <div className="el-icon-share"/>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="el-icon-edit" />
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="el-icon-delete" />
                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}