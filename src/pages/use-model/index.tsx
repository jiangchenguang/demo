import Comp from '@/components/component';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import {Card, Divider, Space} from "antd";
import {useModel} from "@umijs/max";

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Comp title={'组件1'} />
        <Divider />
        <Comp title={'组件2'} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
