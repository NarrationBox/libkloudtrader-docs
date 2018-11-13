---
id: intro
title: Getting Started
sidebar_label: Getting Started
---

## What is kloudtrader?
kloudtrader is a python based library developed and maintained by [KloudTrader](https://kloudtrader.com). kloudtrader's main aim is to help algorithmic traders rapidly protoype their strategies and deploy them on [Narwhal](https://kloudtrader.com/narwhal). 

## What is Narwhal?
[Narwhal](https://kloudtrader.com/narwhal) is an algorithmic trading deployment platform developed by [KloudTrader](https://kloudtrader.com). It is an end-to-end PaaS for deploying your algorithmic/automated trading strategies at a comission-free flat rate brokerage. You can code your trading strategy using kloudtrader and deploy it on Narwhal so that it can trade for you in the U.S financial equities' market.


## Installation

#### Using pipenv 
```python
pipenv install -e git+https://github.com/KloudTrader/kloudtrader.git
```
'''

## Deployment on Narwhal
#### Steps to deploy your trading algorithm on Narwhal
#### After you have signed up and logged in,
1. Add your card. Don't worry you are not charged right away.<br><br>

![Narwhal Add Card](https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/add_card.png)

1. Create Runtime. (We only support python runtimes as of now. Many more ilke R, Julia, Excel coming soon!)
2. Link your Tradier account or signup if yo are not a Tradier user. it generally takes 1-2 business days to open account with Tradier.
3. Copy the remote-link from your runtime card.
4. Open a terminal on your computer.
5. git remote add "your remote-link"
6. mkdir "my-algorithm"
7. cd "my-algorithm"
8.  pipenv install -e git+https://github.com/KloudTrader/kloudtrader.git
9.  pipenv shell
10. Code your trading strategy using kloudtrader
11. git add -A
12. git commit -m "Hope this is alpha!"
13. git push -u narwhal master
    


>Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!
        
