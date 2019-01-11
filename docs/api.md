---
id: api_index
title: API Index
sidebar_label: API Index
---


## [Alerts](/docs/alert_api) - APIs for creating customized alerts
## [Data](/docs/data_api) - APIs for getting live, historical, company data
## [Trading](/docs/trading_api) - APIs for trading and placing orders
## [User](/docs/user_api) - APIs for Narwhal users to know evrything about their accounts and portfolios


> #### Important
> 
> The algorithm you want to deploy should be in a file called **main.py**
> 
> Your algorithm must have these imports:
> 
> **from libkloudtrader.defaults import ACCESS_TOKEN, ACCOUNT_NUMBER**
> 
> This will help Narwhal to access your access token and account number from the Narwhal Environment so that you don't have to explicitly pass them with each API call. Narwhal would not be able to load your access token and account number from the Narwhal Environment if you don't link your tradier account. So the best practice is to link your tradier account before deploying your Trading Algorithm.

> Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!