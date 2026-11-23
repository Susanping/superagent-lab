import { useState } from 'react';
import { Button, Input, Select, Space, Table, Tag, Tooltip } from 'antd';
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
  ReloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  caseRows,
  collectionOptions,
  intentOptions,
  priorityOptions,
  statusOptions,
  tagOptions,
  totalCaseCount,
} from './data.js';

function CaseTags({ tags, extraTagCount }) {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Tag key={`${tag}-${index}`} className="case-tag" title={tag}>
          {tag}
        </Tag>
      ))}
      {extraTagCount > 0 ? (
        <Tooltip title={`还有 ${extraTagCount} 个用例集`}>
          <span className="tag-more">+{extraTagCount}</span>
        </Tooltip>
      ) : null}
    </div>
  );
}

function RowActions() {
  return (
    <Space size={16} className="row-actions">
      <Tooltip title="查看">
        <button type="button" className="icon-button" aria-label="查看">
          <EyeOutlined />
        </button>
      </Tooltip>
      <Tooltip title="编辑">
        <button type="button" className="icon-button" aria-label="编辑">
          <EditOutlined />
        </button>
      </Tooltip>
      <Tooltip title="删除">
        <button type="button" className="icon-button icon-button-danger" aria-label="删除">
          <DeleteOutlined />
        </button>
      </Tooltip>
    </Space>
  );
}

const columns = [
  {
    title: 'Case_id',
    dataIndex: 'caseId',
    width: 98,
  },
  {
    title: 'query',
    dataIndex: 'query',
    width: 393,
  },
  {
    title: '所属用例集',
    dataIndex: 'tags',
    width: 240,
    render: (_, record) => (
      <CaseTags tags={record.tags} extraTagCount={record.extraTagCount} />
    ),
  },
  {
    title: 'parmasMetric',
    dataIndex: 'metric',
    width: 200,
    render: (value) => <span className="cell-subtle">{value}</span>,
  },
  {
    title: '意图类型',
    dataIndex: 'intent',
    width: 140,
    render: (value) => <span className="cell-subtle">{value}</span>,
  },
  {
    title: '优先级',
    dataIndex: 'priority',
    width: 100,
    render: (priority) => (
      <Tag color={priority === 'P0' ? 'error' : 'warning'} className="priority-tag">
        {priority}
      </Tag>
    ),
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
    render: (status) => (
      <Tag color="success" className="status-tag">
        {status}
      </Tag>
    ),
  },
  {
    title: '修改时间',
    dataIndex: 'updatedAt',
    width: 180,
    render: (value) => <span className="cell-time">{value}</span>,
  },
  {
    title: '操作',
    key: 'action',
    width: 125,
    align: 'center',
    render: () => <RowActions />,
  },
];

export default function App() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  return (
    <div className="page">
      <header className="page-head">
        <h1 className="page-title">用例库</h1>
        <p className="page-subtitle">当前 Agent 下的全部用例。</p>
      </header>

      <div className="filter-bar">
        <Select
          className="filter-select"
          defaultValue="all"
          options={collectionOptions}
          aria-label="用例集"
        />
        <Select
          className="filter-select"
          placeholder="标签"
          options={tagOptions}
          aria-label="标签"
        />
        <Select
          className="filter-select"
          placeholder="意图类型"
          options={intentOptions}
          aria-label="意图类型"
        />
        <Select
          className="filter-select"
          placeholder="优先级"
          options={priorityOptions}
          aria-label="优先级"
        />
        <Select
          className="filter-select"
          placeholder="状态"
          options={statusOptions}
          aria-label="状态"
        />
        <Input.Search
          className="query-search"
          placeholder="搜索query关键词"
          enterButton="查询"
          aria-label="搜索query关键词"
        />
        <Button icon={<ReloadOutlined />}>重置</Button>
      </div>

      <div className="action-bar">
        <Button icon={<DeleteOutlined />} disabled={selectedRowKeys.length === 0}>
          批量删除
        </Button>
        <Button icon={<UploadOutlined />}>批量导入</Button>
        <Button icon={<DownloadOutlined />}>批量导出（{totalCaseCount}）</Button>
        <Button type="primary" icon={<PlusOutlined />}>
          新建 Case
        </Button>
      </div>

      <div className="table-card">
        <Table
          className="case-table"
          rowKey="caseId"
          columns={columns}
          dataSource={caseRows}
          pagination={false}
          tableLayout="fixed"
          scroll={{ x: 1608 }}
          rowSelection={{
            columnWidth: 32,
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
        />
      </div>
    </div>
  );
}
