import { observable, action } from 'mobx';

export default class NewsStore {
  @observable newsArticles = [];

  @observable error = '';

  @action
  async fetchNews() {
    try {
      // TODO Fetch news data from API
      this.newsArticles = {
        articles: [
          {
            source: { id: 'bloomberg', name: 'Bloomberg' },
            author: null,
            title: 'The Job Market Is Finally Fixed',
            description: null,
            url:
              'https://www.bloomberg.com/view/articles/2019-03-06/full-employment-seems-finally-here',
            urlToImage: null,
            publishedAt: '2019-03-06T21:32:00+00:00',
            content: "To continue, please click the box below to let us know you're not a robot.",
          },
          {
            source: { id: 'bloomberg', name: 'Bloomberg' },
            author: 'Benjamin Bain',
            title: 'Stock Buyback Scrutiny Intensifies as Democrat Threatens Bill',
            description:
              'Buybacks faced fresh political furor Wednesday with Democratic Senator Chris Van Hollen threatening to propose legislation that could make it more difficult for executives to sell shares after corporations announce they are repurchasing stock.',
            url:
              'https://www.bloomberg.com/news/articles/2019-03-06/stock-buyback-scrutiny-intensifies-as-democrat-threatens-bill',
            urlToImage:
              'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHTUUuhaN5qk/v0/1200x800.jpg',
            publishedAt: '2019-03-06T19:58:00+00:00',
            content:
              'Buybacks faced fresh political furor Wednesday with Democratic Senator Chris Van Hollen threatening to propose legislation that could make it more difficult for executives to sell shares after corporations announce they are repurchasing stock.\r\nKey Insights\r\n… [+1202 chars]',
          },
          {
            source: { id: 'bloomberg', name: 'Bloomberg' },
            author: null,
            title: 'Debt-Free College Bill Resurfaces as Democrats Shape 2020 Runs',
            description: null,
            url:
              'https://www.bloomberg.com/news/articles/2019-03-06/debt-free-college-bill-resurfaces-as-democrats-shape-2020-runs',
            urlToImage: null,
            publishedAt: '2019-03-06T18:30:00+00:00',
            content: "To continue, please click the box below to let us know you're not a robot.",
          },
          {
            source: { id: 'bloomberg', name: 'Bloomberg' },
            author: null,
            title: 'NYPD Finishes Equipping Patrol Officers With Body Cameras',
            description:
              'New York (AP) -- The New York Police Department says it has finished equipping all uniformed patrol officers with body cameras, completing a rollout pushed back two months after one exploded last fall.',
            url:
              'https://www.bloomberg.com/news/articles/2019-03-06/nypd-finishes-equipping-patrol-officers-with-body-cameras',
            urlToImage:
              'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibFg6NAm4fPE/v0/1200x800.jpg',
            publishedAt: '2019-03-06T18:11:00+00:00',
            content:
              'New York (AP) -- The New York Police Department says it has finished equipping all uniformed patrol officers with body cameras, completing a rollout pushed back two months after one exploded last fall.\r\nThe NYPD said Wednesday that it has handed out about 20,… [+617 chars]',
          },
          {
            source: { id: 'bloomberg', name: 'Bloomberg' },
            author: 'Max Nisen',
            title: 'Ketamine-Like Depression Drug Isn’t a Surefire Hit',
            description:
              'J&J’s Spravato is the biggest advance in years, but it may be tough for the drugmaker to turn it into a major moneymaker.',
            url:
              'https://www.bloomberg.com/opinion/articles/2019-03-06/j-j-ketamine-like-spravato-depression-drug-isn-t-a-surefire-hit',
            urlToImage:
              'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ikyczCwDiBdw/v1/1200x798.jpg',
            publishedAt: '2019-03-06T17:37:00+00:00',
            content:
              'A close cousin to ketmine, shown here, could have life-changing potential.\r\nPhotographer: Nicolas Asfouri/AFP/Getty Images\r\nThe Food and Drug Administration’s approval Tuesday evening of Johnson &amp; Johnson’s depression drug Spravato, a nasal spray that is … [+3601 chars]',
          },
          {
            source: { id: 'bloomberg', name: 'Bloomberg' },
            author: 'Matt Levine',
            title: 'Be Careful Wearing Jeans at Goldman',
            description: 'Also CDS triggers and securities fraud.',
            url:
              'https://www.bloomberg.com/opinion/articles/2019-03-06/be-careful-wearing-jeans-at-goldman',
            urlToImage:
              'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ix57JbjRfH_U/v0/1200x800.jpg',
            publishedAt: '2019-03-06T17:03:00+00:00',
            content:
              'Flexible dress\r\nGoldman Sachs Group Inc., like most U.S. investment banks, has had a business-casual dress code since the dot-com bubble of the late 1990s and early 2000s. But now it has a new chief executive officer, and I suppose each Goldman CEO has to put… [+20894 chars]',
          },
          {
            source: { id: 'bloomberg', name: 'Bloomberg' },
            author: 'Katia Dmitrieva',
            title: 'U.S. Trade Gap Surged to $621 Billion in 2018, 10-Year High',
            description:
              'The U.S. trade deficit widened in 2018 to a 10-year high of $621 billion, bucking President Donald Trump’s pledges to reduce it, as tax cuts boosted domestic demand for imports while the strong dollar and retaliatory tariffs weighed on exports.',
            url:
              'https://www.bloomberg.com/news/articles/2019-03-06/u-s-trade-gap-surged-to-621-billion-in-2018-highest-in-decade',
            urlToImage:
              'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idCs_qHZucvs/v0/1200x809.jpg',
            publishedAt: '2019-03-06T13:30:00+00:00',
            content:
              'The U.S. trade deficit widened in 2018 to a 10-year high of $621 billion, bucking President Donald Trump’s pledges to reduce it, as tax cuts boosted domestic demand for imports while the strong dollar and retaliatory tariffs weighed on exports.\r\nThe annual de… [+4387 chars]',
          },
        ],
      }.articles;
    } catch (e) {
      this.error = e.message;
    }
  }
}
