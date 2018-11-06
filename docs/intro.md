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
pip install 
```

## Deployment on Narwhal
#### Steps to deploy your trading algorithm on Narwhal

1. Add your card. Don't worry you are not charged right away.
2. Create Runtime. (We only support python runtimes as of now. Many more ilke R, Julia, Excel coming soon!)
3. Link your Tradier account or signup if yo are not a Tradier user. it generally takes 1-2 business days to open account with Tradier.
4. Copy the remote-link from your runtime card.
5. Open a terminal on your computer.
6. git remote add "copied remote-link"
7. mkdir "my-algorithm"
8. cd "my-algorithm"
9. pipenv install -e git+https://github.com/KloudTrader/kloudtrader.git
10. pipenv shell
11. Code your trading strategy using kloudtrader
12. git add -A
13. git commit -m "Hope this is alpha!"
14. git push -u narwhal master
    
> Happy Algo trading!