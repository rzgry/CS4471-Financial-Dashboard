import React from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { LastUpdated } from '../components';
import { newsStore } from '../stores';

const ArticlesList = ({ articles }) => (
  <Item.Group>
    {articles.map(article => (
      <Article article={article} key={article.title} />
    ))}
  </Item.Group>
);

const Article = ({ article }) => (
  <Item>
    {article.urlToImage && <Item.Image size="tiny" src={article.urlToImage} />}

    <Item.Content>
      <Item.Header as="a" href={article.url} target="_blank" rel="noopener noreferrer">
        {article.title}
      </Item.Header>
      <Item.Meta>{article.description}</Item.Meta>
      <Item.Extra>
        {article.author && (
        <span>
          {article.author}
          {' '}
        </span>
        )}
        <span>{article.publishedAt.split('T')[0]}</span>
      </Item.Extra>
    </Item.Content>
  </Item>
);

@observer
class NewsWidget extends React.Component {
  toggleShowMore = () => {
    newsStore.showMore = !newsStore.showMore;
  };

  render() {
    const articles = newsStore.visableArticles;
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
        <ArticlesList articles={articles} />
        <LastUpdated timestamp={newsStore.timestamp} />
        <br />
        <Button onClick={this.toggleShowMore} fluid>
          <Icon name={newsStore.showMore ? 'caret up' : 'caret down'} />
          {newsStore.showMore ? 'Show less' : 'Show More'}
        </Button>
      </div>
    );
  }
}

export default NewsWidget;
