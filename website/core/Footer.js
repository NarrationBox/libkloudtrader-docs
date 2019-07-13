/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro', this.props.language)}>
              Getting Started 
            </a>
            <a href={this.docUrl('api_index', this.props.language)}>
              API Reference
            </a>
            <a href={"https://blog.kloudtrader.com/2018/12/14/libkloudtrader-alert-system/"}>
              Tutorials
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://join.slack.com/t/kloudtradercommunity/shared_invite/enQtNDY1MDY0ODAyNTE4LWNmNDdiZWVhODliODM2ZjRhOTVhNzQ0ZDY2ZmU0NGMyYWMwZDJjNGY0OTRkYzQ0ZjQ0Zjk1ZTNiNmQxM2ViMWY"
              target="_blank"
              rel="noreferrer noopener">
              Slack
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/kloudtrader"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a>Python Package Index</a>
            <a href="https://github.com/KloudTrader" target="_blank"
              rel="noreferrer noopener" >GitHub</a>
            <a
              className="github-button"
              href="https://github.com/kloudtrader/kloudtrader"
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
          <div>
            <h5><a   href="https://kloudtrader.com" target="_blank" rel="noreferrer noopener">KloudTrader</a></h5>
            <a
              href="https://kloudtrader.com/narwhal"
              target="_blank"
              rel="noreferrer noopener">
              KloudTrader Narwhal
            </a>
           
            <a
              href="mailto:info@kloudtrader.com"

              rel="noreferrer noopener">
              Email
            </a>
            <a
              href="https://medium.com/@kloudtrader"
              target="_blank"
              rel="noreferrer noopener">
              Medium
            </a>
            
            <a
              href="https://twitter.com/KloudTrader"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/kloudtrader/"
              target="_blank"
              rel="noreferrer noopener">
              Linkedin
            </a>
            
            
          </div>
        </section>

       
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
