---
id: stock_trading_api
title: Stock Trading
sidebar_label: Stock Trading
---

## Use Trading APIs to buy, sell, preview order and much more.


# Module
<code>libkloudtrader.stocks</code>
***
### Buy Preview
Preview your buy order. This will allow you to place a <code>buy</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

<code>buy_preview(symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: (Previewing a buy order of order_type 'market')

import libkloudtrader.stocks as stocks

stocks.buy_preview('AAPL',1)
```
```python
Example: (Previwing a buy order of order_type 'limit')

import libkloudtrader.stocks as stocks

stocks.buy_preview('aapl',1,order_type='limit',price='197')
```
```python
return type: json (Market order type)

{  
   'order':{  
      'status':'ok',
      'commission':0,
      'cost':196.53,
      'fees':0.0,
      'symbol':'AAPL',
      'quantity':1,
      'side':'buy',
      'type':'market',
      'duration':'gtc',
      'result':True,
      'order_cost':196.53,
      'margin_change':0,
      'request_date':'2019-07-09T08:00:30.49',
      'extended_hours':False,
      'class':'equity',
      'strategy':'equity'
   }
}
```
```python
return type: json (Limit order type)
{  
   'order':{  
      'status':'ok',
      'commission':0,
      'cost':193.51,
      'fees':0,
      'symbol':'AAPL',
      'quantity':1,
      'side':'buy',
      'type':'limit',
      'duration':'gtc',
      'result':True,
      'price':197,
      'order_cost':193.51,
      'margin_change':0,
      'request_date':'2019-07-09T09:37:21.690',
      'extended_hours':False,
      'class':'equity',
      'strategy':'equity'
   }
}
```

***
### Sell Preview
Preview your sell order. This will allow you to place a <code>sell</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

<code>sell_preview(symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: 

import libkloudtrader.stocks as stocks

stocks.sell_preview('aapl',1,order_type='limit',price='197')

```
```python
return type: json (Limit order type)

{  
   'order':{  
      'status':'ok',
      'commission':0,
      'cost':-197.0,
      'fees':0,
      'symbol':'AAPL',
      'quantity':1,
      'side':'sell',
      'type':'limit',
      'duration':'gtc',
      'result':True,
      'price':197,
      'order_cost':-197.0,
      'margin_change':0,
      'request_date':'2019-07-09T09:42:49.415',
      'extended_hours':False,
      'class':'equity',
      'strategy':'equity'
   }
}
```

***
### Sell Short Preview
Preview your sell short order. This will allow you to place a <code>sell_short</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order.
Sell short order cannot be placed for long position or if there are pending Buy orders.

<code>sell_short_preview(symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------|  
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: 


import libkloudtrader.stocks as stocks

stocks.sell_short_preview('snap',1,order_type='limit',price='197')
```
```python
return type: json (Market order type)

{  
   'order':{  
      'status':'ok',
      'commission':0,
      'cost':-197.0,
      'fees':0,
      'symbol':'SNAP',
      'quantity':1,
      'side':'sell_short',
      'type':'limit',
      'duration':'gtc',
      'result':True,
      'price':197,
      'order_cost':-197.0,
      'margin_change':98.5,
      'request_date':'2019-07-09T11:59:59.779',
      'extended_hours':False,
      'class':'equity',
      'strategy':'equity'
   }
}
```
***
### Buy to Cover Preview
Preview your buy to cover order. This will allow you to place a <code>buy_to_cover</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order.
Buy to cover order cannot be placed for long and zero position.

<code>buy_to_cover_preview(symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: 


import libkloudtrader.stocks as stocks

stocks.buy_to_cover_preview('AAPL',1)

```

***
### Buy
Buy equities. Order placed using this API will be sent to the market and executed according to your specifications. 

<code>buy(symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: 

import libkloudtrader.stocks as stocks

stocks.buy('AAPL',2)

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

***
### Sell
Sell equities. Order placed using this API will be sent to the market and executed according to your specifications. 

<code>sell(symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: 

import libkloudtrader.stocks as stocks

stocks.sell('AAPL',2)

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
### Sell Short
Sell short equities(equities you don't own yet). Order placed using this API will be sent to the market and executed according to your specifications. 

<code>sell_short(symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: 

import libkloudtrader.stocks as stocks

stocks.sell_short('AAPL',2)

```
```python
return type: json (Market order type)

{  
   'order':{  
      'id':237624,
      'status':'ok',
      'partner_id':'***...***'
   }
}
```


### Buy to cover
Buy to cover short positions. Order placed using this API will be sent to the market and executed according to your specifications. 

<code>buy_to_cover(symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbol          | required          | Symbol of the stock                            | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: 


import libkloudtrader.stocks as stocks

stocks.buy_to_cover('AAPL',2)

```
```python
return type: json 

{  
   'order':{  
      'id':237620 ,
      'status':'ok',
      'partner_id':'***...***'
   }
}
```

### Change Order
Change an order's attributes like duration, type, price, etc if it is not filled yet. 

<code>change_order(order_id, order_type, duration, price, stop, brokerage, access_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| order_id        | required          | Order Id of the order you want to change       | str  |
| duration        | required          | Time for which the order will remain in effect. | str  |
| order_type      | required          | Type of order to be placed)(Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
```python
Example: 


import libkloudtrader.stocks as stocks

stocks.change_order(order_id='1372964',order_type='limit',duration="gtc",price=215)

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

<code>cancel_equity_order(order_id, brokerage, access_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| order_id        | required          | Order Id of the order you want to change       | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

```python
Example: 


import libkloudtrader.stocks as stocks

stocks.cancel_equity_order(order_id='1372964')

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