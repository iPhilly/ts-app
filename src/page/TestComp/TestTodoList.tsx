import { Icon, Input } from 'antd';
import * as React from 'react';

export default class TestTodoList extends React.Component {
  public render() {
    return (
      <div style={{
        width: 300
      }}>
            <Input addonAfter={<Icon type="plus" />} placeholder='请输入待办事项' />
      </div>
    );
  }
}
