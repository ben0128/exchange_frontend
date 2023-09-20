<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Trading Journals</h3>
      <div class="card-tools">
        <button
          type="button"
          class="btn btn-tool"
          data-card-widget="collapse"
          title="Collapse"
        >
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>
    <table class="trade-log-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Target</th>
          <th>Type</th>
          <th>Shares</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>183</td>
          <td>11-7-2014</td>
          <td>TSLA</td>
          <td><span class="badge bg-blue">Buy</span></td>
          <td><span class="tag tag-success">9</span></td>
          <td>123 USD</td>
        </tr>
        <tr>
          <td>219</td>
          <td>11-7-2014</td>
          <td>AAPL</td>
          <td><span class="badge bg-danger">Sell</span></td>
          <td><span class="tag tag-warning">5</span></td>
          <td>453 USD</td>
        </tr>
        <!-- 添加更多交易日志数据行 -->
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style >
  /* 设置整个表格的背景颜色 */
  .trade-log-table {
    width: 100%; /* 确保表格占据整个容器的宽度 */
    border-collapse: collapse; /* 合并单元格边框 */
    background-color: #f2f2f2; /* 设置整个表格的背景颜色 */
  }

  /* 设置表头背景颜色 */
  .trade-log-table thead {
    background-color: #333; /* 设置表头的背景颜色 */
    color: white; /* 设置表头文字颜色为白色 */
  }

  /* 设置表格中每行交替的背景颜色 */
  .trade-log-table tbody tr:nth-child(odd) {
    background-color: #fff; /* 设置奇数行背景颜色为白色 */
  }

  .trade-log-table tbody tr:nth-child(even) {
    background-color: #f9f9f9; /* 设置偶数行背景颜色为浅灰色 */
  }

  /* 设置表格单元格边框样式 */
  .trade-log-table td,
  .trade-log-table th {
    border: 1px solid #ccc; /* 设置单元格边框样式 */
    padding: 8px; /* 设置内边距 */
    text-align: center; /* 居中对齐文本 */
  }
</style>
