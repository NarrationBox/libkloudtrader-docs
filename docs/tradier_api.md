---
id: tradier_api
title: Tradier User
sidebar_label: Tradier User
---

## You can use Traider User Account APIs to receive any kind information about your tradier account


# Module
<code>kloudtrader.equities.tradier_user</code>
***
### Get User profile
Get information pertaining to your tradier account<br/>

<code>user_profle(access_token)</code>


```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          |                                                | str  |

Example:

from kloudrader.equities.tradier_user import user_profile

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
### Get Account balance
Get your account balance<br/>

<code>account_balance(access_token,account_number)</code>


```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |

Example:

from kloudrader.equities.tradier_user import account_balance

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
### Get Account Positions
Get your account balance<br/>

<code>account_balance(access_token,account_number)</code>


```python
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| access_token    | optional          |                                                | str  |
| account_number  | optional          |                                                | str  |

Example:

from kloudrader.equities.tradier_user import account_balance

account_positions()
```
```python
return type : json


```