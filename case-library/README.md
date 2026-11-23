# 用例库静态页面

按 issue [#6](https://github.com/Susanping/superagent-lab/issues/6) 的截图，使用 React 18 + Ant Design 5 实现的「用例库」静态页面。页面数据为 mock 数据，不连接后端。

## 本地运行

```bash
cd case-library
npm install
npm run dev
```

默认地址：http://127.0.0.1:5173/

## 构建

```bash
npm run build
```

## 说明

- 页面数据位于 `src/data.js`，全部为静态 mock 数据。
- 表格支持勾选行，勾选后「批量删除」按钮会由禁用变为可用。
- 查询、重置、批量导入、批量导出、新建 Case 等按钮按静态页面处理，未接入实际业务逻辑。
- 界面截图见 `docs/after.png`。
