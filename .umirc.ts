import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    title: 'Umi-react-ts 前端模板',
  },
  routes,
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  fastRefresh: {},
  mfsu: {},
  dva: {},
  antd: {},
});
