---
id: stocks_user_api
title: Info related to User and Account
sidebar_label: User
---

## Get your account and profile related information.

# Module
<code>libkloudtrader.stocks</code>

### User profile
Get information pertaining to your all accounts with the provided brokerage.<br/>

<code>user_profile(brokerage, access_token)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

```python
Example:

import libkloudtrader.stocks as stocks

stocks.user_profile()
```
```python
return type : json

{  
   'profile':{  
      'account':[  
         {  
            'account_number':'********',
            'classification':'rollover_ira',
            'date_created':'2016-08-01T21:08:56.000Z',
            'day_trader':False,
            'option_level':2,
            'status':'active',
            'type':'cash',
            'last_update_date':'2016-08-01T21:08:56.000Z'
         }
      ],
      
      'id':'test-id',
      'name':'Test Name'
   }
}
```
***
### Account balance
Get your account balance<br/>

<code>account_balance(brokerage, access_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

```python
Example:

import libkloudtrader.stocks as stocks

stocks.account_balance()
```
```python
return type : json

{  
   'balances':{  
      'option_short_value':0,
      'total_equity':,
      'account_number':'******',
      'account_type':'margin',
      'close_pl':0.0,
      'current_requirement':,
      'equity':0,
      'long_market_value':0,
      'market_value':,
      'open_pl':,
      'option_long_value':0,
      'option_requirement':0,
      'pending_orders_count':0,
      'short_market_value':0,
      'stock_long_value':,
      'total_cash':,
      'uncleared_funds':0,
      'pending_cash':0,
      'margin':{  
         'fed_call':0,
         'maintenance_call':0,
         'option_buying_power':,
         'stock_buying_power':,
         'stock_short_value':0,
         'sweep':0
      }
   }
}
```

### Account History
Get your account's history.<br/>

<code>account_history(brokerage, access_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

```python
Example:

import libkloudtrader.stocks as stocks

stocks.account_history()
```
```python
return type : json

{  
   'history':{  
      'event':[  
         {  
            'amount':0,
            'date':'2018-09-21T00:00:00Z',
            'type':'option',
            'option':{  
               'option_type':'OPTEXP',
               'description':'Expired',
               'quantity':-1.0
            }
         },
         
        
         {  
            'amount':0.95,
            'date':'2017-07-12T00:00:00Z',
            'type':'trade',
            'trade':{  
               'commission':0.0,
               'description':'PUT  SPY    07/19/17   228',
               'price':0.01,
               'quantity':-1.0,
               'symbol':'SPY170719P00228000',
               'trade_type':'Option'
            }
         }
      ]
   }
}
```


***
### Account Positions
Get all the postions your account holds<br/>

<code>account_positions(brokerage, access_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

```python
Example:

import libkloudtrader.stocks as stocks

stocks.account_positions()
```
```python
return type : json

{  
   'positions':{  
      'position':{  
         'cost_basis':12.87,
         'date_acquired':'2018-06-19T12:55:12.764Z',
         'id':354131,
         'quantity':1.0,
         'symbol':'GE'
      }
   }
}
```

### Account Closed Positions
Get your account's closed positions<br/>

<code>account_closed_positions(brokerage, access_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

```python
Example:

import libkloudtrader.stocks as stocks

stocks.account_closed_positions()
```
```python
return type : json

{  
   'gainloss':{  
      'closed_position':[  
         {  
            'close_date':'2018-09-21T00:00:00.000Z',
            'cost':3.05,
            'gain_loss':-3.05,
            'gain_loss_percent':-100.0,
            'open_date':'2018-09-18T00:00:00.000Z',
            'proceeds':0.0,
            'quantity':1.0,
            'symbol':'SNAP180921P00008500',
            'term':3
         },
         .
         .
         .
         {  
            'close_date':'2015-06-08T00:00:00.000Z',
            'cost':35.51,
            'gain_loss':-0.55,
            'gain_loss_percent':-1.5489,
            'open_date':'2015-06-04T00:00:00.000Z',
            'proceeds':34.96,
            'quantity':1.0,
            'symbol':'GM',
            'term':4
         }
      ]
   }
}
```
***
### Account Orders
Get intraday and open/pending order information for your account<br/>

<code>account_orders(brokerage, access_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

```python
Example:

import libkloudtrader.stocks as stocks

stocks.account_orders()
```
```python
return type : json

{  
   'orders':{  
      'order':[  
         {  
            'id':1369455,
            'type':'limit',
            'symbol':'GE',
            'side':'buy',
            'quantity':1.0,
            'status':'canceled',
            'duration':'day',
            'price':8.0,
            'avg_fill_price':0.0,
            'exec_quantity':0.0,
            'last_fill_price':0.0,
            'last_fill_quantity':0.0,
            'remaining_quantity':0.0,
            'create_date':'2018-10-19T01:38:05.650Z',
            'transaction_date':'2018-10-19T01:38:07.253Z',
            'class':'equity'
         },
          .
          .
          .
         {  
            'id':1371509,
            'type':'limit',
            'symbol':'GE',
            'side':'buy',
            'quantity':1.0,
            'status':'canceled',
            'duration':'day',
            'price':8.0,
            'avg_fill_price':0.0,
            'exec_quantity':0.0,
            'last_fill_price':0.0,
            'last_fill_quantity':0.0,
            'remaining_quantity':0.0,
            'create_date':'2018-10-19T15:46:24.350Z',
            'transaction_date':'2018-10-19T15:46:25.911Z',
            'class':'equity'
         }
      ]
   }
}
```
***
### Individual order
Get detailed information for a specific order<br/>

<code>account_specificorders(order_id, brokerage, access_token, account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| order_id        | required          | Order Id of the order you want info of         | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

```python
Example:

import libkloudtrader.stocks as stocks

stocks.account_specificorders('1369455')
```
```python
return type : json

{  
   'order':{  
      'id':1369455,
      'type':'limit',
      'symbol':'GE',
      'side':'buy',
      'quantity':1.0,
      'status':'canceled',
      'duration':'day',
      'price':8.0,
      'avg_fill_price':0.0,
      'exec_quantity':0.0,
      'last_fill_price':0.0,
      'last_fill_quantity':0.0,
      'remaining_quantity':0.0,
      'create_date':'2018-10-19T01:38:05.650Z',
      'transaction_date':'2018-10-19T01:38:07.253Z',
      'class':'equity'
   }
}
```