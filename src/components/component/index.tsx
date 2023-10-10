import {useModel} from "@umijs/max";
import {Button, Card, Input, Space} from "antd";
import {useState} from "react";

interface IProps {
  title: string;
}
export default ({title}: IProps) => {
  const { name, setName} = useModel('user');

  const [innerName, setInnerName] = useState(name);

  return <Card title={title}>
    当前全局状态中的name值为：{name}
    <Space.Compact style={{ width: '100%' }}>
      <Input value={innerName} onChange={(v) => {
        setInnerName(v.target.value)
      }} />
      <Button type={'primary'} onClick={() => {
        setName(innerName);
      }}>更新到全局</Button>
    </Space.Compact>
  </Card>
};
