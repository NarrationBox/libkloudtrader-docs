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


## Deployment on Narwhal


### Add your card
Don't worry you are not charged right away.<br><br>
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/add_card.png" widht="100" alt="Narwhal add card">
***
### Creating a Runtime
In Narwhal, a Runtime is a basic computational unit that runs your strategy/algorithm. The algorithm running on your Runtime is totally your property and no other Narwhal user or KloudTrader employee can view it. Currently we only support Python-3 runtimes which means you can only deploy algorithms written in Python but we will be introducing R, Julia, Excel and many more types of Runtimes very soon, thus kloudtrader library's wrappers for respective langaugaes will also be available soon.<br><br>
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/create_runtime1.png" /> <br>
It is extremely easy to create a Runtime. All you need to do is:
* Select a location for your runtime.
* Select a size for your runtime. <br>
* Enter your SSH/RSA public key. We ask for your RSA public key only once(when create your first runtime). Your public SSH/RSA key is needed so that we can create a secure connection between you and your Runtime and is only accessible by You, the owner.<br>
  > Where is my SSH/RSA public key?<br>
  >* [Find SSH/RSA Public key on a Unix based machine(MAC OSX + Linux)](https://stackoverflow.com/questions/3828164/how-do-i-access-my-ssh-public-key)
  >* [Find SSH/RSA Public key on a Windows machine](https://www.codeenigma.com/host/faq/how-do-i-create-ssh-public-key-windows-pc)<br>
* Enter a name for your runtime. It can be whatever you want it to be. <br>
#### And you are good to go.
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/create_runtime2.png" /> 
***
### Linking your trading account
Narwhal provides flat-rate brokerage via <a href="https://tradier.com/" target="blank">Tradier Brokerage Inc.</a><br>
After you have created a runtime, you can view your runtime on the dashboard.
1. Link your Tradier account or signup if yo are not a Tradier user. it generally takes 1-2 business days to open account with Tradier.
2. Copy the remote-link from your runtime card.
3. Open a terminal on your computer.
4. git remote add "your remote-link"
5. mkdir "my-algorithm"
6. cd "my-algorithm"
7.  pipenv install -e git+https://github.com/KloudTrader/kloudtrader.git
8.   pipenv shell
9.  Code your trading strategy using kloudtrader
10. git add -A
11. git commit -m "Hope this is alpha!"
12. git push -u narwhal master
    


>Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!
        
