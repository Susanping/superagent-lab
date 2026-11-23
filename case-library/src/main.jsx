import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import App from './App.jsx';
import './styles.css';

const theme = {
  token: {
    colorPrimary: '#1f1f1f',
    colorLink: '#1f1f1f',
    colorText: '#1f1f1f',
    colorTextSecondary: '#8c8c8c',
    fontSize: 14,
    borderRadius: 4,
    borderRadiusLG: 8,
  },
  components: {
    Button: {
      defaultShadow: 'none',
      primaryShadow: 'none',
    },
    Table: {
      headerBg: '#fafafa',
      headerColor: '#1f1f1f',
      headerSplitColor: '#f0f0f0',
      borderColor: '#f0f0f0',
      rowHoverBg: '#fafafa',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN} theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
