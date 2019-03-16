import React from 'react';
import {
  Table, Header, Button, Icon,
} from 'semantic-ui-react';

// eslint-disable-next-line react/prefer-stateless-function
class CurrencyWidget extends React.Component {
  render() {
    const { onUnsubscribe } = this.props;
    return (
      <div>
        <h3>
          News
          {' '}
          <Button onClick={onUnsubscribe} style={{ float: 'right' }} size="tiny">
            <Icon name="close" />
            Unsubscribe
          </Button>
        </h3>
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Currency</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
              <Table.HeaderCell>Change</Table.HeaderCell>
              <Table.HeaderCell>Net Change</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  EUR-USD
                </Header>
              </Table.Cell>
              <Table.Cell>1.1326</Table.Cell>
              <Table.Cell>
                <p style={{ color: 'green' }}>0.0022</p>
              </Table.Cell>
              <Table.Cell>
                <p style={{ color: 'green' }}>+0.19%</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  USD-JPY
                </Header>
              </Table.Cell>
              <Table.Cell>111.4800</Table.Cell>
              <Table.Cell>
                <p style={{ color: 'red' }}>-0.0022</p>
              </Table.Cell>
              <Table.Cell>
                <p style={{ color: 'red' }}>-0.19%</p>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CurrencyWidget;
