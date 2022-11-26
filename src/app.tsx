// 运行时配置

import { useSnapshot } from '@umijs/max';
import { ConfigProvider, theme } from 'antd';
import { globalState } from './globalState';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentTheme } = useSnapshot(globalState);
  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'light'
            ? [theme.defaultAlgorithm]
            : [theme.darkAlgorithm],
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export function rootContainer(container: React.ReactNode) {
  return <AntdProvider>{container}</AntdProvider>;
}
