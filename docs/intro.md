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
In Narwhal, a Runtime is a basic computational unit that runs your strategy/algorithm. The algorithm running on your Runtime is totally your property and no other Narwhal user or KloudTrader employee can view it. Currently we only support Python-3 runtimes which means you can only deploy algorithms written in Python but we will be introducing R, Julia, Excel and many more types of Runtimes very soon, thus kloudtrader library's wrappers for respective languages will also be available soon.<br><br>
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


After you have created a runtime, you can view your runtime on the dashboard.<br><br>
<img align="left" src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/after_runtime1.jpg" />
<img align="left" src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/after_runtime2.jpg" />

***
### Linking your trading account
Now that you have created a created a runtime you shal link Brokerage to your Narwhal Account. 
Narwhal provides flat-rate brokerage via <a href="https://tradier.com/" target="blank">Tradier Brokerage Inc.</a>
Linking your Tradier account or Signing up if you are not a Tradier user is pretty easy. It generally takes 1-2 business days to open account with Tradier.
![]
1. Copy the remote-link from your runtime card.
2. Open a terminal on your computer.
3. git remote add "your remote-link"
4. mkdir "my-algorithm"
5. cd "my-algorithm"
6.  pipenv install -e git+https://github.com/KloudTrader/kloudtrader.git
7.   pipenv shell
8.  Code your trading strategy using kloudtrader
9.  git add -A
10. git commit -m "Hope this is alpha!"
11. git push -u narwhal master
    


>Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!
        
