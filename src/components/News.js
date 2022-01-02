import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class News extends Component {
  // results = [
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Thekitchn.com"
  //       },
  //       "author": "Carlos Matias",
  //       "title": "13 Women in Food That You Need to Follow on Instagram in 2022",
  //       "description": "Whether youre looking for baking techniques or prepping tips, or simply want to look at beautiful plating, follow these chefs and fill your feed with recipes and inspiration.\nREAD MORE...",
  //       "url": "https://www.thekitchn.com/women-chefs-to-follow-on-instagram-in-2022-23257646",
  //       "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/stock%2Fshutterstock_1381568114-cropped",
  //       "publishedAt": "2021-12-30T14:15:00Z",
  //       "content": "In 2021 we were lucky to work with and feature so many talented women in food on Kitchn. Their recipes, tips, and stories brought us joy and inspiration. This year, cooks like Yasmin Fahr, Shanika Gr… [+5908 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Daily Mail"
  //       },
  //       "author": "Niomi Harris",
  //       "title": "Katie Price recoils in fear and covers her eyes as she gets her booster jab",
  //       "description": "In a short clip shared to her Instagram stories on Wednesday, the former glamour model, 43, was left recoiling in fear and covered her eyes as she prepared to get her booster jab.",
  //       "url": "https://www.dailymail.co.uk/tvshowbiz/article-10355339/Katie-Price-recoils-fear-covers-eyes-gets-booster-jab.html",
  //       "urlToImage": "https://i.dailymail.co.uk/1s/2021/12/30/09/52364687-0-image-a-9_1640857545148.jpg",
  //       "publishedAt": "2021-12-30T09:57:24Z",
  //       "content": "Kate Price was left recoiling in fear and covered her eyes as she prepared to get her booster jab.\r\nIn a short clip shared to her Instagram stories on Wednesday, the former glamour model, 43, is seen… [+4337 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Protothema.gr"
  //       },
  //       "author": "Πρώτο Θέμα",
  //       "title": "10+1 matching set ideas για να αποχαιρετήσετε το 2021 με στυλ και λάμψη",
  //       "description": "Άνεση, φρεσκάδα, glamour. Need we say more?\r\n  | Marie Claire",
  //       "url": "https://www.protothema.gr/marie-claire/article/1196342/101-matching-set-ideas-gia-na-apohairetisete-to-2021-me-stul-kai-lampsi/",
  //       "urlToImage": "https://i1.prth.gr/images/640x360share/files/2021-12-30/matching.jpg",
  //       "publishedAt": "2021-12-30T07:45:00Z",
  //       "content": "Content snippet: CookieBar"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Daily Mail"
  //       },
  //       "author": "Shari Miller",
  //       "title": "Edinburgh teenager reveals he spends three hours transforming into a drag queen",
  //       "description": "Sam Carlin, 14, from Edinburgh,  was first inspired to become Cherry West after watching a drag queen performance on holiday aged 10 and subsequently Ru Paul's Drag Race.",
  //       "url": "https://www.dailymail.co.uk/femail/article-10355213/Edinburgh-teenager-reveals-spends-three-hours-transforming-drag-queen.html",
  //       "urlToImage": "https://i.dailymail.co.uk/1s/2021/12/30/09/52365369-0-image-a-17_1640857833599.jpg",
  //       "publishedAt": "2021-12-30T10:32:38Z",
  //       "content": "Life is anything but a drag for one teenager - who became so inspired by a popular reality show that he has followed his passion to become a drag queen.\r\nSam Carlin, from Edinburgh, Scotland, who is … [+6073 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Daily Mail"
  //       },
  //       "author": "Ella Hodson",
  //       "title": "Dylan Penn poses at the LuisaViaRoma for Unicef Party in St Barths",
  //       "description": "The actress, 30, who is the daughter of Sean Penn and Robin Wright, wowed at the event in a black two piece as she joined a slew of stars for the benefit in St Barts.",
  //       "url": "https://www.dailymail.co.uk/tvshowbiz/article-10355403/Dylan-Penn-poses-LuisaViaRoma-Unicef-Party-St-Barths.html",
  //       "urlToImage": "https://i.dailymail.co.uk/1s/2021/12/30/10/52365953-0-image-a-25_1640861358663.jpg",
  //       "publishedAt": "2021-12-30T10:57:43Z",
  //       "content": "Dylan Penn amped up the glamour with another sophisticated look as she posed at the LuisaViaRoma for UNICEF Party in St Barts on Wednesday. \r\nThe actress, 30, who is the daughter of Sean Penn and Rob… [+2721 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Mirror Online"
  //       },
  //       "author": "mirrornews@mirror.co.uk (Melisha Kaur)",
  //       "title": "Boots running huge sale with 50% off fragrance, premium beauty and more",
  //       "description": "If you need to do a big beauty haul ahead of your New Year celebrations, there are plenty of great deals running at Boots",
  //       "url": "https://www.mirror.co.uk/money/shopping-deals/boots-running-half-price-sale-25814109",
  //       "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article25814676.ece/ALTERNATES/s1200/0_huda-eyes.jpg",
  //       "publishedAt": "2021-12-30T09:47:29Z",
  //       "content": "Boots has slashed the prices of hundreds of products in its latest sale, giving customers the chance to snap up huge half price savings on much-loved brands. \r\nThe high street chain is offering disco… [+3262 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "The Cut"
  //       },
  //       "author": "Angelina Chapin",
  //       "title": "“Ghislaine Maxwell Is Worse Than Epstein.”",
  //       "description": "Virginia Giuffre reacts to the conviction she knows is long overdue.",
  //       "url": "http://www.thecut.com/2021/12/virginia-giuffre-interview.html",
  //       "urlToImage": "https://pyxis.nymag.com/v1/imgs/491/56d/87ac3551b6fb778a2884b9a93d819e7dbf-Virginia-Giuffre.1x.rsocial.w1200.jpg",
  //       "publishedAt": "2021-12-30T01:21:30Z",
  //       "content": "Early Thursday morning at her home in Perth, Australia, Virginia Giuffre woke up to her husband shaking the bed, saying Wake up! Youve got to wake up! Shes guilty. As she opened her eyes, she was sho… [+13664 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "ESPN"
  //       },
  //       "author": "Howard Bryant",
  //       "title": "Why 2021 was such a pivotal year of loss and change in baseball",
  //       "description": "Every year is a death, but this year felt accelerated. Baseball will move forward, but without the comfort of many of the elders we had leaned upon.",
  //       "url": "https://www.espn.com/mlb/story/_/id/32957731/how-mlb-2021-was-defined-profound-loss-change",
  //       "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0123%2Fr805471_2_1296x729_16%2D9.jpg",
  //       "publishedAt": "2021-12-30T12:18:14Z",
  //       "content": "It was, in the final quarter of the horrible 2020, when it seemed as though society had finally succumbed to its own appetites and irresponsibility, that baseball was somehow being made an example of… [+11871 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Independent.ie"
  //       },
  //       "author": "Allison Bray",
  //       "title": "Another evening on the couch? RTÉ unveils its new 2022 line-up",
  //       "description": "The meteoric rise of &lsquo;cheeky chappie&rsquo; Donie O&rsquo;Sullivan from the son of a fishmonger in Cahersiveen, Co Kerry to a rising star at CNN for his deft coverage of the Capitol insurrection is among the line-up of new documentaries, drama, and ente…",
  //       "url": "https://www.independent.ie/entertainment/television/tv-news/another-evening-on-the-couch-rte-unveils-its-new-2022-line-up-41193983.html",
  //       "urlToImage": "https://www.independent.ie/entertainment/television/tv-news/574e0/41193982.ece/AUTOCROP/w1240h700/2016-12-02_iri_26795416_I3.png",
  //       "publishedAt": "2021-12-30T07:55:04Z",
  //       "content": "The meteoric rise of cheeky chappie Donie OSullivan from the son of a fishmonger in Cahersiveen, Co Kerry to a rising star at CNN for his deft coverage of the Capitol insurrection is among the line-u… [+5172 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Daily Mail"
  //       },
  //       "author": "Niomi Harris",
  //       "title": "Katie Price's fiancé Carl Woods invites prospective customers to her Mucky Mansion to view motors.",
  //       "description": "Katie Price's fiancé Carl Woods has invited prospective customers to her Mucky Mansion to view motors... after transforming the run-down home into a used car lot following her drive ban.",
  //       "url": "https://www.dailymail.co.uk/tvshowbiz/article-10355963/Katie-Prices-fianc-Carl-Woods-invites-prospective-customers-Mucky-Mansion-view-motors.html",
  //       "urlToImage": "https://i.dailymail.co.uk/1s/2021/12/30/15/52375645-0-image-a-78_1640877089488.jpg",
  //       "publishedAt": "2021-12-30T15:11:57Z",
  //       "content": "Katie Price's fiancé Carl Woods has bolstered his car business and is now selling 12 luxury used cars at her Mucky Mansion in Horsham.\r\nIt was previously reported that the car salesman is using the g… [+9156 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Bangkok Post"
  //       },
  //       "author": null,
  //       "title": "The Standard, Hua Hin goes glam this festive season with celebrations on Thailand's gulf coast",
  //       "description": "The Standard, Hua Hin, the brand’s new beachfront resort where Hollywood glamour meets mid-century inspired design, is giving the gift of glam this holiday season, with a full calendar of upbeat events and activities to light up Thailand’s golden gulf coast.",
  //       "url": "https://www.bangkokpost.com/travel/2239959/the-standard-hua-hin-goes-glam-this-festive-season-with-celebrations-on-thailands-gulf-coast",
  //       "urlToImage": "https://static.bangkokpost.com/newdesign/assets/images/bg/default-pic-w600.jpg",
  //       "publishedAt": "2021-12-30T05:44:00Z",
  //       "content": "The Standard, Hua Hin, the brands new beachfront resort where Hollywood glamour meets mid-century inspired design, is giving the gift of glam this holiday season, with a full calendar of upbeat event… [+2449 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Daily Mail"
  //       },
  //       "author": "Jo Tweedy",
  //       "title": "What do your holiday plans say about you?",
  //       "description": "Where will you go in 2022? How you holiday offers insight into your soul, travel expert Rob Debenham, who runs, Destinations, the UK's largest holiday and travel show, told Femail.",
  //       "url": "https://www.dailymail.co.uk/femail/article-10309507/What-holiday-plans-say-you.html",
  //       "urlToImage": "https://i.dailymail.co.uk/1s/2021/12/29/15/52338289-0-image-a-31_1640793198451.jpg",
  //       "publishedAt": "2021-12-30T08:45:12Z",
  //       "content": "Thoughts have already turned to the year ahead - and the holiday opportunities 2022 might bring. But what do the trips you book say about your personality? \r\nFor some, it's all about fun with a capit… [+11015 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": null,
  //         "name": "Daily Mail"
  //       },
  //       "author": "Ciara Farmer",
  //       "title": "Kanye West 'plans to TEAR DOWN' $4.5m house he purchased",
  //       "description": "The rapper - who shares four children with his ex - has just closed on the 3651 square-foot, 5-bedroom home in LA 's exclusive Hidden Hills and new reports from People state he is planning to demolish the home.",
  //       "url": "https://www.dailymail.co.uk/tvshowbiz/article-10355937/Kanye-West-plans-TEAR-4-5m-house-purchased.html",
  //       "urlToImage": "https://i.dailymail.co.uk/1s/2021/12/30/14/52374665-0-image-a-33_1640875691326.jpg",
  //       "publishedAt": "2021-12-30T14:48:18Z",
  //       "content": "A look at Kim and Kanye's love story \r\n2004: First meeting  \r\nKim and Kanye first met on a music video shoot when the KUWTK star was working as Brandy's stylist and Kanye was working on a song with t… [+24723 chars]"
  //     }
  //   ]
  constructor() {
    super();
    this.state = {
      results: [],
      page: 1,
      loading: false,
    };
  }
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }
  nextClick = async () => {
    let apiUrl = `https://newsdata.io/api/1/news?apikey=pub_32551c662d7cb992ce5915c4a415f6009e6f&country=${this.props.country}&category=${this.props.category}&language=en&page=${
      this.state.page + 1
    }`;
    this.setState({ loading: true });
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    if (parsedData.results !== 0) {
      this.setState({
        results: parsedData.results,
        page: this.state.page + 1,
        loading: false,
      });
    } else {
      document.getElementById("next").disabled = true;
    }
  };
  prevClick = async () => {
    document.getElementById("next").disabled = false;
    let apiUrl = `https://newsdata.io/api/1/news?apikey=pub_32551c662d7cb992ce5915c4a415f6009e6f&country=${this.props.country}&category=${this.props.category}&language=en&page=${
      this.state.page + 1
    }`;
    this.setState({ loading: true });
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      results: parsedData.results,
      page: this.state.page - 1,
      loading: false,
    });
  };
  async componentDidMount() {
      let apiUrl = `https://newsdata.io/api/1/news?apikey=pub_32551c662d7cb992ce5915c4a415f6009e6f&country=${this.props.country}&category=${this.props.category}&language=en`;
    this.setState({ loading: true });
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({ results: parsedData.results, loading: false });
  }
  render() {
    return (
      <div className="container">
        <h2 style={{margin: '60px 0px'}}>
          <center>News App - Top Headlines</center>
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.results.map((element) => {
              return (
                <div className="col-md-4" key={element.link}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    image_url={element.image_url}
                    newsUrl={element.link}
                    author={element.source_id}
                    date={element.pubDate}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.prevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            id="next"
            onClick={this.nextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
