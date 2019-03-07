import React from 'react';
import { Feed } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { newsStore } from '../stores';

const ArticlesList = ({ articles }) => (
  <Feed>
    {articles.map(article => (
      <Article article={article} />
    ))}
  </Feed>
);

const Article = ({ article }) => (
  <div style={{ marginBottom: '2em' }}>
    <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          <a href={article.url}>{article.title}</a>
          {article.publishedAt && <Feed.Date>{article.publishedAt.split('T')[0]}</Feed.Date>}
        </Feed.Summary>
        <Feed.Extra text>
          {article.urlToImage && (
            <div>
              <img style={{ height: '100px' }} alt={article.title} src={article.urlToImage} />
            </div>
          )}
          {article.description}
          {article.description && <br />}
          {article.author && `Author: ${article.author}, `}
          {article.source.name}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  </div>
);

@observer
class NewsWidget extends React.Component {
  render() {
    const articles = newsStore.newsArticles;
    return (
      <div>
        <h4>News</h4>
        <ArticlesList articles={articles} />
      </div>
    );
  }
}

export default NewsWidget;
