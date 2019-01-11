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

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
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
      <SplashContainer>
       
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="/docs/intro">Get Started</Button>
            <Button href="">Python Package Index</Button>
            <Button href="https://github.com/KloudTrader/libkloudtrader" target="_blank">Github</Button>
            
          </PromoSection>
        </div>
      </SplashContainer>
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

const Features = () => (
  <Block layout="threeColumn">
    {[
      {
        content: 'Extremely simple to use trading APIs for U.S. Equity market.',
        image: imgUrl('laptop-solid.svg'),
        imageAlign: 'top',
        title: 'Simple Trading APIs',
        
      },
      {
        content: 'libkloudtrader provides all sort of data:<br> live market feed, historical price data, company information and much more.',
        image: imgUrl('database-solid.svg'),
        imageAlign: 'top',
        title: 'Data',
      },
      {
        content: 'Create customized alerts for both sms and email.',
        image: imgUrl('bell-regular.svg'),
        imageAlign: 'top',
        title: 'Customized alerts',
      },
      {
        content: 'A Wide range of functions for financial, technical, portfolio and risk analsyis.<br> (Coming Soon)',
        image: imgUrl('analysis.svg'),
        imageAlign: 'top',
        title: 'Analysis functions',
      },
      {
        content: 'Papertrading with virtual money upto $1 million. (Coming Soon)',
        image: imgUrl('money-bill-solid.svg'),
        imageAlign: 'top',
        title: 'Paper Trading',
      },
      {
        content: 'Multi Crypto-Currency Trading. <br>(Coming Soon)',
        image: imgUrl('bitcoin-brands.svg'),
        imageAlign: 'top',
        title: 'Customized alerts',
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

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
  
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      /* {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },*/
    ]}
  </Block>
);

const Description = () => (
  <Block background="">
    {[
     /* {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },*/
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          
         
        </div>
      </div>
    );
  }
}

module.exports = Index;
