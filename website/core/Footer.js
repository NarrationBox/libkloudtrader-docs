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
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Getting Started 
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              API Reference
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Tutorials
            </a>
          </div>
          <div>
            <h5>Community</h5>
           
            <a
              href="http://stackoverflow.com/questions/tagged/kloudtrader"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            
            
            
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
              Blog
            </a>
            
            <a
              href="https://twitter.com/kloud_trader"
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
