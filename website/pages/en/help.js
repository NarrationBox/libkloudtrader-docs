/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Help extends React.Component {
  render() {
    const language = this.props.language || '';
    const supportLinks = [
      {
        content: `Learn more using the [documentation on this site.](${docUrl(
          'intro',
          language,
        )})`,
        title: 'Browse Docs',
      },
      {
        content: 'Ask questions about the documentation and project.<br>Join our <a href="https://join.slack.com/t/kloudtradercommunity/shared_invite/enQtNDY1MDY0ODAyNTE4LWNmNDdiZWVhODliODM2ZjRhOTVhNzQ0ZDY2ZmU0NGMyYWMwZDJjNGY0OTRkYzQ0ZjQ0Zjk1ZTNiNmQxM2ViMWY" target="_blank">slack</a> <br>or<br>Open an issue on  <a href="https://github.com/KloudTrader/kloudtrader/issues/new" target="_blank">Github</a>',
        title: 'Join the community',
      },
      {
        content: 'Find out what is new with this project via our <a href="/blog" target="_blank">Blog</a>',
        title: 'Stay up to date',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>This project is maintained by <a href="https://kloudtrader.com" target="_blank">KloudTrader</a>. Reach out to us at <a href="mailto:info@kloudtrader.com?subject=KloudTrader library">info@kloudtrader.com</a></p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
