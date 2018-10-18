---
id: trading_api
title: Trading
sidebar_label: Trading
---

## Use Trading APIs to buy,sell, preview order and much more


# Module
<code>kloudtrader.equities.trade</code>
***
### Buy Preview
Preview buy order. This will allow you to place a <code>buy</code> order without it being sent to the market so that you can know what will it actaully be like when you place a real order

<code>buy_preview(access_token,account_number,symbol,quantity,duration,order_type,price)</code>
```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect | str  |
|                 |                   | (Options: day,gtc,pre, post)                   |      |
| order_type      | required          | Type of order to be placed                     |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | str  |
| price           | optional          | Type of order to be placed                     |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | str  |
```
