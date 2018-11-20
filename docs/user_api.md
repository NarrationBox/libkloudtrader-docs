---
id: user_api
title: User
sidebar_label: User
---

## You can use User APIs to receive any kind information about your account
> #### Important
> 
> The algorithm you want to deploy should be in a file called **main.py**
> 
> Your algorithm must have these imports:
> 
> **from kloudtrader import ACCESS_TOKEN, ACCOUNT_NUMBER**
> 
> This will help Narwhal to access your access token and account number from the Narwhal Environment so that you don't have to explicitly pass them with each API call. Narwhal would not be able to load your access token and account number from the Narwhal Environment if you don't link your tradier account. So the best practice is to link your tradier account before deploying your Trading Algorithm.

# Module
<code>kloudtrader.user</code>

### User profile
Get information pertaining to your account<br/>

<code>user_profle(access_token)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |

```python
Example:

from kloudrader.user import user_profile

user_profle()
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
### Account Number
Get your account number or list of account numbers accosiated with your user profile<br/>

<code>user_account_number(access_token)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |

```python
Example:

from kloudrader.user import user_account_number

user_account_number()
```
```python
return type : str if one account, list if many accounts
```
***
### Account balance
Get your account balance<br/>

<code>account_balance(access_token,account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          |Will automatically be present when you deploy to Narwhal                                                | str  |
| account_number  | optional          |  Will automatically be present when you deploy to Narwhal                                              | str  |

```python
Example:

from kloudrader.user import account_balance

account_balance()
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



***
### Account Positions
Get all the postions your account holds<br/>

<code>account_positions(access_token,account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          |  Will automatically be present when you deploy to Narwhal                                              | str  |
| account_number  | optional          |  Will automatically be present when you deploy to Narwhal                                              | str  |

```python
Example:

from kloudrader.user import account_positions

account_positions()
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
***
### Account History
Get your account's history<br/>

<code>account_history(access_token,account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          |  Will automatically be present when you deploy to Narwhal                                              | str  |
| account_number  | optional          |   Will automatically be present when you deploy to Narwhal                                             | str  |

```python
Example:

from kloudrader.user import account_history

account_history()
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
### Account Cost Basis
Get your account's cost basis. This includes information of all closed positions<br/>

<code>account_costbasis(access_token,account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |
| account_number  | optional          |  Will automatically be present when you deploy to Narwhal                                              | str  |

```python
Example:

from kloudrader.user import account_costbasis

account_costbasis()
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

<code>account_orders(access_token,account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |

```python
Example:

from kloudrader.user import account_orders

account_orders()
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

<code>account_specificorders(order_id,access_token,account_number)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| order_id        | required          | Order Id of the order you want info of         | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |
| account_number  | optional          | Will automatically be present when you deploy to Narwhal                                               | str  |

```python
Example:

from kloudrader.user import account_specificorders

account_specificorders('1369455')
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