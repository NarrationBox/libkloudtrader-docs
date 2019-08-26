/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);
//style={{textAlign: 'center',color:'white'}}
const Tagline2 = () => (
  <div className="tag">
    <div className="homeContainer">
    <div className="homeSplashFade">
    <h1 className="tagline2-text">
    <small><b className="kloudtrader">KloudTrader's</b> in-house trading framework optimized for <b className="kloudtrader">computational finance</b> and <b className="kloudtrader">algorithmic trading</b>.</small>
    </h1>
  </div>
  </div>
  </div>
);
const Logo = props => (
  <Block>
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
  </Block>
);

const ProjectTitle = () => (
  <h1 className="projectTitle">
    {siteConfig.title}
  <small className="projectTagline">{siteConfig.tagline}</small>
  </h1>
  
);


const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <div className="inner-2">
      <SplashContainer>
       
        <div className="inner">
          <ProjectTitle />
          <PromoSection className="promo">
            <Button href="/docs/getting_started_with_libkloudtrader" className="get-started">Get Started</Button>
            <h3>Use Libkloudtrader to code and backtest your trading models and deploy them to Narwhal.</h3>
          </PromoSection>
          
        </div>
      </SplashContainer>
      <Tagline2>
            
          </Tagline2>
      </div>

    );
  }
}


const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Featuresheading = () => (
  <div className="features">
    <h1>Features</h1>
  </div>

);
const Features = () => (
  
  <Block layout="threeColumn">
    {[
      {
        content: 'Trade U.S. Stocks and Options at a flat-rate brokerage via <a href="https://tradier.com" target="_blank">Tradier</a>. No hidden comissions for your algorithms.',
        image: imgUrl('feature1.svg'),
        imageAlign: 'bottom',
        title: 'Trading APIs with Flat Rate Brokerage',
      },
      {
        content: 'Trade on more than 100 crypto currency exchanges with easy to use APIs',
        image: imgUrl('feature2.svg'),
        imageAlign: 'bottom',
        title: 'Ultimate Crypto Trading support',
        
      },
      {
        content: 'Clean, Precise and speedy data straight from the exchanges for all asset classes.',
        image: imgUrl('feature3.svg'),
        imageAlign: 'bottom',
        title: 'Data APIs for Stocks, Options and Crypto Currencies',
      },
      {
        content: 'A Wide range of functions for financial, technical, portfolio and risk analsyis.',
        image: imgUrl('feature5.svg'),
        imageAlign: 'bottom',
        title: 'Analysis functions',
      },
      {
        content: 'Create customized alerts for both sms and email, so that you never miss out what are your algorithms upto.',
        image: imgUrl('feature4.svg'),
        imageAlign: 'bottom',
        title: 'Customized alerts',
      },
      {
        content: 'Switch from your backtesting to live trading in a matter of seconds.',
        image: imgUrl('feature6.svg'),
        imageAlign: 'bottom',
        title: 'Backtesting',
      },
      {
        content: 'Deploy your trading algorithms written with LibKloudTrader on Narwhal and get rid of the Dev-Ops hassle. Just push your code and swim in the live markets.',
        image: imgUrl('feature7.svg'),
        imageAlign: 'bottom',
        title: 'Hosted Deployment on <a href="https://kloudtrader.com/narwhal" target="_blank">KloudTrader Narwhal</a>',
      },
      
      /*
      {
        content: 'Do algorithmic trading with virtual money(coming soon)',
        image: imgUrl('paper-plane-regular.svg'),
        imageAlign: 'top',
        title: 'Papertrading',
      },
      
      {
        content: 'Backtesting',
        image: imgUrl('chart-line-solid.svg'),
        imageAlign: 'top',
        title: 'Backtesting',
      },*/
      
    ]}
  </Block>
);






class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
        <Featuresheading/>
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
