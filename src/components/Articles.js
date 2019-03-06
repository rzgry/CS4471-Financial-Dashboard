import React from 'react';
import { Feed, Image } from 'semantic-ui-react';

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
              <img style={{ height: '100px' }} src={article.urlToImage} />
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

export default ArticlesList;
