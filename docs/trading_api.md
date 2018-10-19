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
Preview your buy order. This will allow you to place a <code>buy</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

<code>buy_preview(symbol,quantity,access_token,account_number,duration,order_type,price,stop)</code>
```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |
| duration        | required          | Time for which the order will remain in effect |      |
|                 |                   | (Options: day,gtc,pre, post) day by default    | str  |
| order_type      | required          | Type of order to be placed (market by default) |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | str  |
| price           | optional          | Price for "limit" and "stop_limit" order       |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | int  |
| stop            | optional          | Stop price in a "stop" or "stop_limit" typed   |      |
|                 |                   | order. Required for "stop" and "stop_limit"    | int  |

Example: (Previewing a buy order of order_type 'market')

from kloudtrader.equities.trade import buy_preview
buy_preview('AAPL',2)


Example: (Previwing a buy order of order_type 'limit')

from kloudtrader.equities.trade import buy_preview
buy_preview('AAPL',2,order_type='limit',price=214)
```
```python
return type: json (Market order type)

{  
   'order':{  
      'status':'ok',
      'commission':0,
      'cost':437.4202,
      'fees':0,
      'symbol':'AAPL',
      'quantity':2,
      'side':'buy',
      'type':'market',
      'duration':'day',
      'result':True,
      'order_cost':437.4202,
      'margin_change':0,
      'request_date':'2018-10-19T18:02:39.621',
      'extended_hours':False,
      'class':'equity',
      'strategy':'equity'
   }
}

return type: json (Limit order type)
{  
   'order':{  
      'status':'ok',
      'commission':0,
      'cost':428.0,
      'fees':0,
      'symbol':'AAPL',
      'quantity':2,
      'side':'buy',
      'type':'limit',
      'duration':'day',
      'result':True,
      'price':214,
      'order_cost':428.0,
      'margin_change':0,
      'request_date':'2018-10-19T18:08:06.928',
      'extended_hours':False,
      'class':'equity',
      'strategy':'equity'
   }
}
```

***
### Sell Preview
Preview your sell order. This will allow you to place a <code>sell</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

<code>sell_preview(symbol,quantity,access_token,account_number,duration,order_type,price,stop)</code>
```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |
| duration        | required          | Time for which the order will remain in effect |      |
|                 |                   | (Options: day,gtc,pre, post) day by default    | str  |
| order_type      | required          | Type of order to be placed (market by default) |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | str  |
| price           | optional          | Price for "limit" and "stop_limit" order       |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | int  |
| stop            | optional          | Stop price in a "stop" or "stop_limit" typed   |      |
|                 |                   | order. Required for "stop" and "stop_limit"    | int  |

Example: 

from kloudtrader.equities.trade import sell_preview

sell_preview('AAPL',2)

```
```python
return type: json (Market order type)

{  
   'order':{  
      'status':'ok',
      'commission':3.49,
      'cost':-433.21,
      'fees':0,
      'symbol':'AAPL',
      'quantity':2,
      'side':'sell',
      'type':'market',
      'duration':'day',
      'result':True,
      'order_cost':-436.7,
      'margin_change':0,
      'request_date':'2018-10-19T18:30:40.760',
      'extended_hours':False,
      'class':'equity',
      'strategy':'equity'
   }
}
```

***
### Buy
Buy equities. Order placed using this API will be sent to the market and executed according to your specifications. 

<code>buy(symbol,quantity,access_token,account_number,duration,order_type,price,stop)</code>
```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |
| duration        | required          | Time for which the order will remain in effect |      |
|                 |                   | (Options: day,gtc,pre, post) day by default    | str  |
| order_type      | required          | Type of order to be placed (market by default) |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | str  |
| price           | optional          | Price for "limit" and "stop_limit" order       |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | int  |
| stop            | optional          | Stop price in a "stop" or "stop_limit" typed   |      |
|                 |                   | order. Required for "stop" and "stop_limit"    | int  |

Example: 

from kloudtrader.equities.trade import buy

buy('AAPL',2)

```
```python
return type: json (Market order type)

{  
   'order':{  
      'id':237619,
      'status':'ok',
      'partner_id':'***...***'
   }
}
```
***
### Sell
Sell equities. Order placed using this API will be sent to the market and executed according to your specifications. 

<code>sell(access_token,account_number,symbol,quantity,duration,order_type,price,stop)</code>
```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |
| duration        | required          | Time for which the order will remain in effect |      |
|                 |                   | (Options: day,gtc,pre, post) day by default    | str  |
| order_type      | required          | Type of order to be placed (market by default) |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | str  |
| price           | optional          | Price for "limit" and "stop_limit" order       |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | int  |
| stop            | optional          | Stop price in a "stop" or "stop_limit" typed   |      |
|                 |                   | order. Required for "stop" and "stop_limit"    | int  |

Example: 

from kloudtrader.equities.trade import sell

sell('AAPL',2)

```
```python
return type: json (Market order type)

{  
   'order':{  
      'id':237620,
      'status':'ok',
      'partner_id':'***...***'
   }
}
```
***
### Change Order
Change an order if it is not filled yet. 

<code>change_equity_order(order_id,access_token,account_number,order_type,duration,price,stop)</code>
```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| order_id        | required          | Order Id of the order you want to change       | str  |
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |
| duration        | required          | Time for which the order will remain in effect |      |
|                 |                   | (Options: day,gtc,pre, post) day by default    | str  |
| order_type      | required          | Type of order to be placed (market by default) |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | str  |
| price           | optional          | Price for "limit" and "stop_limit" order       |      |
|                 |                   | (options: market, limit, stop, stop_limit)     | int  |
| stop            | optional          | Stop price in a "stop" or "stop_limit" typed   |      |
|                 |                   | order. Required for "stop" and "stop_limit"    | int  |

Example: 

from kloudtrader.equities.trade import change_equity_order

change_equity_order(1372964,order_type='limit',duration="gtc",price=215)

```
```python
return type: json (Market order type)

{  
   'order':{  
      'id':1372964,
      'status':'ok',
      'partner_id':'***...**'
   }
}
```
***
### Cancel Order
Cancel an order if it is not filled yet. 

<code>cancel_equity_order(order_id,access_token,account_number)</code>
```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| order_id        | required          | Order Id of the order you want to change       | str  |
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |

Example: 

from kloudtrader.equities.trade import cancel_equity_order

cancel_equity_order(1372964)

```
```python
return type: json (Market order type)

{  
   'order':{  
      'id':1372964,
      'status':'ok'
   }
}
```