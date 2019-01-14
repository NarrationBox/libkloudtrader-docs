---
id: trading_api
title: Trading
sidebar_label: Trading
---

## Use Trading APIs to buy,sell, preview order and much more
> #### Important
> 
> The algorithm you want to deploy should be in a file called **main.py**
> 
> Your algorithm must have these imports:
> 
> <b>from libkloudtrader.defaults import * </b>
> 
> This will help Narwhal to access your access token and account number from the Narwhal Environment so that you don't have to explicitly pass them with each API call. Narwhal would not be able to load your access token and account number from the Narwhal Environment if you don't link your tradier account. So the best practice is to link your tradier account before deploying your Trading Algorithm.

> Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!

# Module
<code>libkloudtrader.equities.trade</code>
***
### Buy Preview
Preview your buy order. This will allow you to place a <code>buy</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

<code>buy_preview(symbol,quantity,access_token,account_number,duration,order_type,price,stop)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                 | str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal                                                  | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post) (day by default)          | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
```python
Example: (Previewing a buy order of order_type 'market')

from libkloudtrader.equities.trade import buy_preview
buy_preview('AAPL',2)


Example: (Previwing a buy order of order_type 'limit')

from libkloudtrader.equities.trade import buy_preview
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
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                 | str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal                                                  | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post) (day by default)          | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
```python
Example: 

from libkloudtrader.equities.trade import sell_preview

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
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                 | str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal                                                  | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post) (day by default)          | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
```python
Example: 

from libkloudtrader.equities.trade import buy

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
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                 | str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal                                                  | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post) (day by default)          | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
```python
Example: 

from libkloudtrader.equities.trade import sell

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
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| order_id        | required          | Order Id of the order you want to change       | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post) day by default    | str  |
| order_type      | required          | Type of order to be placed (market by default)  (options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
```python
Example: 

from libkloudtrader.equities.trade import change_equity_order

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
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| order_id        | required          | Order Id of the order you want to change       | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |

```python
Example: 

from libkloudtrader.equities.trade import cancel_equity_order

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