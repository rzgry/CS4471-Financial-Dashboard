import React from 'react';
import { Table } from 'semantic-ui-react';

const DataTable = ({ headers, data }) => (
  <Table basic="very">
    <Table.Header>
      <Table.Row>
        {headers.map(header => (
          <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {data.map(row => (
        <Table.Row>
          {headers.map(header => (
            <Table.Cell key={header}>{row[header]}</Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

DataTable.defaultProps = {
  headers: [],
  data: [],
};

export default DataTable;
