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

#### Using pip
```python
pip install git+https://github.com/KloudTrader/kloudtrader.git
```

## Deployment on Narwhal
#### Steps to deploy your trading algorithm on Narwhal

1. Add your card. Don't worry you are not charged right away.
2. Create Runtime. (We only support python runtimes as of now. Many more ilke R, Julia, Excel coming soon!)
3. Link your Tradier account or signup if yo are not a Tradier user. it generally takes 1-2 business days to open account with Tradier.
4. Copy the remote-link from your runtime card.
5. Open a terminal on your computer.
6. git remote add "your remote-link"
7. mkdir "my-algorithm"
8. cd "my-algorithm"
10. pipenv install -e git+https://github.com/KloudTrader/kloudtrader.git
11. pipenv shell
12. Code your trading strategy using kloudtrader
13. git add -A
14. git commit -m "Hope this is alpha!"
15. git push -u narwhal master
    
>Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!