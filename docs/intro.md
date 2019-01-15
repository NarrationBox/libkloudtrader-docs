---
id: intro
title: Getting Started
sidebar_label: Getting Started
---

## What is LibKloudTrader?
LibKloudTrader is a trading framework optimized for computational finance. Connect your trading models and conquer the markets. libkloudtrader's main aim is to help algorithmic traders and quants to rapidly protoype their strategies and deploy them on [Narwhal](https://kloudtrader.com/narwhal). This is python3 version developed and maintained by [KloudTrader](https://kloudtrader.com). R, Julia, Golang versions coming soon!

## What is Narwhal?
[Narwhal](https://kloudtrader.com/narwhal) is an algorithmic trading deployment platform developed by [KloudTrader](https://kloudtrader.com). It is an end-to-end PaaS for deploying your algorithmic/automated trading strategies at a comission-free flat rate brokerage. You can code your trading strategy using libkloudtrader and deploy it on Narwhal so that it can trade for you in the U.S financial equities' market.


## Installation

#### Using pipenv 
```python
pipenv install -e git+https://github.com/KloudTrader/libkloudtrader.git#egg=libkloudtrader
```

## Deployment on Narwhal


### Add your card
Don't worry you are not charged right away.<br><br>
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/add_card.png" widht="100" alt="Narwhal add card">
<br>
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/add_card2.png" widht="100" alt="Narwhal add card">
***
### Creating a Runtime
In Narwhal, a Runtime is a basic computational unit that runs your strategy/algorithm. The algorithm running on your Runtime is totally your property and no other Narwhal user or KloudTrader employee can view it. Currently we only support Python-3 runtimes which means you can only deploy algorithms written in Python but we will be introducing R, Julia, Excel and many more types of Runtimes very soon, thus libkloudtrader library's wrappers for respective languages will also be available soon.<br><br>
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/create_runtime1.png" /> <br>
It is extremely easy to create a Runtime. All you need to do is:
* Select a location for your runtime.
* Select a size for your runtime. <br>
* Enter your SSH/RSA public key.
 
  >We ask for your RSA public key only once(when you create your first runtime). Your public SSH/RSA key is needed so that we can create a secure connection between you and your Runtime and is only accessible by You, the owner.<br>
  >
   > Where is my SSH/RSA public key?<br>
  >* [Find SSH/RSA Public key on a Unix based machine(MAC OSX + Linux)](https://stackoverflow.com/questions/3828164/how-do-i-access-my-ssh-public-key)
  >* [Find SSH/RSA Public key on a Windows machine](https://www.codeenigma.com/host/faq/how-do-i-create-ssh-public-key-windows-pc)<br>
* Enter a name for your runtime. It can be whatever you want it to be. <br>
#### And you are good to go.
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/create_runtime2.png" /> 


After you have created a runtime, you can view your runtime on the dashboard.<br><br>
<img align="left" src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/after_runtime1.jpg" />
<img align="left" src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/after_runtime2.jpg" />
<br>
<br>
<br>
<br>
<br>
<br>
***
### Linking your trading account
Now that you have created a created a runtime you shal link Brokerage to your Narwhal Account. 
Narwhal provides flat-rate brokerage via <a href="https://tradier.com/" target="blank">Tradier Brokerage Inc.</a>
Linking your Tradier account or Signing up if you are not a Tradier user is pretty easy. It generally takes 1-2 business days to open account with Tradier.<br><br>
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/link-tradier.gif" />
***
### The workflow
Now we will look at your workflow from after creating a Runtime till deploying your algorithm to your Runtime. All it takes is, are a few commands to deploy your "alpha".

> The following steps require <a href="https://git-scm.com/" target="blank">Git</a>
<br>
> You have to type the commands in the order they are described.
#### Make a directory where you will be working/coding your trading algorithm.
  
```bash
mkdir my-algorithm
```
#### Enter into your directory 'my-algorithm'
```bash
cd my-algorithm
```
#### Initializing git
```bash
git init
```
#### Add the remote-link of your Runtime. You can copy the remote-link by clicking on the Left-most button on the lower corner of your Runtime card.
```bash
git remote add narwhal "you remote-link here"

Example: git remote add narwhal ssh://git@runtimes.narwhal.kloudtrader.com:10022/15/proud-snowflake-s9sx.git
```
<img height="500" src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/copy-remote.png"/>

#### Managing Dependencies
Narwhal's Python3 Runtime uses <a href="https://pipenv.readthedocs.io/en/latest/">Pipenv</a> to manage the dependencies of your algorithm. 
> To install and get started with Pipenv, please refer it's <a href="https://pipenv.readthedocs.io/en/latest/">official webiste</a>. Pipenv is pretty easy to install and much easier to use.
#### You can install libkloudtrader and other libraries of your choice by typing:
```python
pipenv install -e git+https://github.com/KloudTrader/libkloudtrader.git#egg=libkloudtrader
pipenv install pandas, numpy
```
#### Enable your virtual environment so that you can start writing your algorithm
```python
pipenv shell
```
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/workflow.png"/>

#### Your Algorithm
> #### Important
> 
> The algorithm you want to deploy should be in a file called **main.py**
> 
> Your algorithm must have these imports:
> 
> <b>from libkloudtrader.defaults import * </b>
> 
> This will help Narwhal to access your access token and account number from the Narwhal Environment so that you don't have to explicitly pass them with each API call. Narwhal would not be able to load your access token and account number from the Narwhal Environment if you don't link your tradier account. So the best practice is to link your tradier account before deploying your Trading Algorithm.

This is what the imports of algorithm written with libkloudtrader shall look like:

<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/mainpy.png"/>
#### Directory Structure
You directory structure for a Python3 Runtime should look like:<br><br>
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/structure.png"/>
```
/my-algorithm
   |-main.py
   |-Pipfile.lock
   |-Pipfile
```
***
### Deploying your algorithm
Deploying your algorithm only takes 3 steps and commands.

#### Add your files
```bash
git add -A
```
#### Commit your files
```bash
git commit -m "hope this is alpha!"
```
> Isn't that what everyone is hoping for?! 😄 📈 📊 📉 😄 
#### And finally, Deploy
```bash
git push -u narwhal master
``` 
<img src="https://raw.githubusercontent.com/KloudTrader/kloudtrader-docs/master/website/static/img/deploy.png"/> 
***
> Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!        
