---
id: options_trading_api
title: Options Trading
sidebar_label: Options Trading
---

## Use Trading APIs to buy, sell, preview order and much more.

# Module
<code>libkloudtrader.options</code>


***

### Buy to Open preview
Preview your buy to open order. This will allow you to place a <code>buy to open</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

<code>buy_to_open_preview(underlying_sumbol, option_symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>

| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.options as options

options.buy_to_open_preview(underlying_symbol='AAPL',option_symbol="AAPL190816P00090000",quantity=1,order_type='limit',price=191)
```
```python 
return type : json

{  
   'order':{  
      'status':'ok',
      'commission':5.05,
      'cost':19094.95,
      'fees':0,
      'symbol':'AAPL',
      'quantity':1,
      'side':'buy_to_open',
      'type':'limit',
      'duration':'day',
      'result':True,
      'price':191,
      'order_cost':19100.0,
      'margin_change':0.0,
      'option_requirement':0.0,
      'request_date':'2019-07-13T10:21:37.2',
      'extended_hours':False,
      'option_symbol':'AAPL190816P00090000',
      'class':'option',
      'strategy':'option'
   }
}
```

### Buy to Close preview
Preview your buy to close order. This will allow you to place a <code>buy to close</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

<code>buy_to_close_preview(underlying_sumbol, option_symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>

| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.options as options

options.buy_to_close_preview(underlying_symbol='AAPL',option_symbol="AAPL190816P00090000",quantity=1,order_type='limit',price=191)
```


### Sell to Open preview
Preview your sell to open order. This will allow you to place a <code>sell to open</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

sell_to_open_preview(underlying_sumbol, option_symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>

| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.options as options

options.sell_to_open_preview(underlying_symbol='AAPL',option_symbol="AAPL190816P00090000",quantity=1,order_type='limit',price=191)
```

```python
return type : json

{  
   'order':{  
      'status':'ok',
      'commission':5.05,
      'cost':-19105.05,
      'fees':0,
      'symbol':'AAPL',
      'quantity':1,
      'side':'sell_to_open',
      'type':'limit',
      'duration':'gtc',
      'result':True,
      'price':191,
      'order_cost':-19100.0,
      'margin_change':20450.0,
      'option_requirement':20450.0,
      'request_date':'2019-07-13T11:57:20.755',
      'extended_hours':False,
      'option_symbol':'AAPL190816P00090000',
      'class':'option',
      'strategy':'option'
   }
}
```

### Sell to Close preview
Preview your sell to close order. This will allow you to place a <code>sell to close</code> order without it being sent to the market so that you can know what will it actaully look like when you place a real order

sell_to_close_preview(underlying_sumbol, option_symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>

| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.options as options

options.sell_to_close_preview(underlying_symbol='AAPL',option_symbol="AAPL190816P00090000",quantity=1,order_type='limit',price=191)
```






### Buy to Open 
Place a Buy to open order

<code>buy_to_open(underlying_sumbol, option_symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>

| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.options as options

options.buy_to_open(underlying_symbol='AAPL',option_symbol="AAPL190816P00090000",quantity=1,order_type='limit',price=191)
```
```python 
return type : json

{  
   'order':{  
      'id':270447,
      'status':'ok',
      'partner_id':'****'
   }
}
```

### Buy to Close 
Place a buy to close order

<code>buy_to_close(underlying_sumbol, option_symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>

| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.options as options

options.buy_to_close(underlying_symbol='AAPL',option_symbol="AAPL190816P00090000",quantity=1,order_type='limit',price=191)
```

```python 
return type : json

{  
   'order':{  
      'id':270450,
      'status':'ok',
      'partner_id':'****'
   }
}
```


### Sell to Open 
Place a sell to open order

sell_to_open(underlying_symbol, option_symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>

| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.options as options

options.sell_to_open(underlying_symbol='AAPL',option_symbol="AAPL190816P00090000",quantity=1,order_type='limit',price=191)
```

```python
return type : json

{  
   'order':{  
      'id':270490,
      'status':'ok',
      'partner_id':'****'
   }
}
```

### Sell to Close
Place a sell to close order

sell_to_close(underlying_sumbol, option_symbol, quantity, duration, order_type, price, stop, brokerage, accesss_token, account_number)</code>

| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| quantity        | required          | Number of shares                               | str  |
| duration        | required          | Time for which the order will remain in effect (Options: day,gtc,pre, post). gtc by default       | str  |
| order_type      | required          | Type of order to be placed (market by default) (Options: market, limit, stop, stop_limit)     | str  |
| price           | optional (required for "limit", "stop_limit")        | The desired order limit price for "limit" and "stop_limit" orders     | int  |
| stop            | optional (required for "stop" and "stop_limit")        | The stop price in a "stop" or "stop_limit" typed order    | int  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Examples

```python 
import libkloudtrader.options as options

options.sell_to_close(underlying_symbol='AAPL',option_symbol="AAPL190816P00090000",quantity=1,order_type='limit',price=191)
```

```python
return type : json

{  
   'order':{  
      'id':270482,
      'status':'ok',
      'partner_id':'****'
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

#### Example

```python
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

#### Example

```python
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
