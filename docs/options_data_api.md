---
id: options_data_api
title: Options Data
sidebar_label: Options Data
---

## Get all the data you need to to trade your options.

# Module
<code>libkloudtrader.options</code>

***

### Chains
Get all quotes in an option chain.

<code>chains(underlying_symbol, expiration, brokerage, access_token, dataframe)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| expiration     | required          | Expiration for the chain                | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. False by default.   | bool  |

```python
Example:

import libkloudtrader.options as options 

options.chains(underlying_symbol='AAPL',expiration="2019-08-16")
```
```python 
return type : json
[  
   {  
      'symbol':'AAPL190816P00090000',
      'description':'AAPL Aug 16 2019 $90.00 Put',
      'exch':'Z',
      'type':'option',
      'last':0.03,
      'change':0.0,
      'volume':0,
      'open':None,
      'high':None,
      'low':None,
      'close':None,
      'bid':0.0,
      'ask':0.02,
      'underlying':'AAPL',
      'strike':90.0,
      'change_percentage':0.0,
      'average_volume':0,
      'last_volume':50,
      'trade_date':'2019-06-05 19:04:02',
      'prevclose':0.03,
      'week_52_high':0.0,
      'week_52_low':0.0,
      'bidsize':0,
      'bidexch':'E',
      'bid_date':'2019-07-13 01:29:58',
      'asksize':7,
      'askexch':'A',
      'ask_date':'2019-07-13 01:29:58',
      'open_interest':182,
      'contract_size':100,
      'expiration_date':'2019-08-16',
      'expiration_type':'standard',
      'option_type':'put',
      'root_symbol':'AAPL'
   },
   {  
      'symbol':'AAPL190816C00090000',
      'description':'AAPL Aug 16 2019 $90.00 Call',
      'exch':'Z',
      'type':'option',
      'last':102.6,
      'change':0.0,
      'volume':0,
      'open':None,
      'high':None,
      'low':None,
      'close':None,
      'bid':112.85,
      'ask':114.0,
      'underlying':'AAPL',
      'strike':90.0,
      'change_percentage':0.0,
      'average_volume':0,
      'last_volume':5,
      'trade_date':'2019-06-10 23:49:55',
      'prevclose':102.6,
      'week_52_high':0.0,
      'week_52_low':0.0,
      'bidsize':10,
      'bidexch':'D',
      'bid_date':'2019-07-13 01:29:59',
      'asksize':10,
      'askexch':'D',
      'ask_date':'2019-07-13 01:29:59',
      'open_interest':24,
      'contract_size':100,
      'expiration_date':'2019-08-16',
      'expiration_type':'standard',
      'option_type':'call',
      'root_symbol':'AAPL'
   },
   .
   .
   .
    {  
      'symbol':'AAPL190816P00300000',
      'description':'AAPL Aug 16 2019 $300.00 Put',
      'exch':'Z',
      'type':'option',
      'last':None,
      'change':None,
      'volume':0,
      'open':None,
      'high':None,
      'low':None,
      'close':None,
      'bid':96.35,
      'ask':97.55,
      'underlying':'AAPL',
      'strike':300.0,
      'change_percentage':None,
      'average_volume':0,
      'last_volume':0,
      'trade_date':'1970-01-01 05:30:00',
      'prevclose':None,
      'week_52_high':0.0,
      'week_52_low':0.0,
      'bidsize':12,
      'bidexch':'Z',
      'bid_date':'2019-07-13 01:29:59',
      'asksize':10,
      'askexch':'D',
      'ask_date':'2019-07-13 01:29:59',
      'open_interest':0,
      'contract_size':100,
      'expiration_date':'2019-08-16',
      'expiration_type':'standard',
      'option_type':'put',
      'root_symbol':'AAPL'
   },
   {  
      'symbol':'AAPL190816C00300000',
      'description':'AAPL Aug 16 2019 $300.00 Call',
      'exch':'Z',
      'type':'option',
      'last':0.03,
      'change':0.0,
      'volume':0,
      'open':None,
      'high':None,
      'low':None,
      'close':None,
      'bid':0.0,
      'ask':0.02,
      'underlying':'AAPL',
      'strike':300.0,
      'change_percentage':0.0,
      'average_volume':0,
      'last_volume':1,
      'trade_date':'2019-07-10 19:00:01',
      'prevclose':0.03,
      'week_52_high':0.0,
      'week_52_low':0.0,
      'bidsize':0,
      'bidexch':'E',
      'bid_date':'2019-07-13 01:29:58',
      'asksize':7,
      'askexch':'A',
      'ask_date':'2019-07-13 01:29:58',
      'open_interest':3,
      'contract_size':100,
      'expiration_date':'2019-08-16',
      'expiration_type':'standard',
      'option_type':'call',
      'root_symbol':'AAPL'
   }
]
```

### Expirations
Get all expiration dates and respective strike prices for a particular underlying symbol.

<code>expirations(underlying_symbol, brokerage, access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| underlying_symbol| required          | The underlying stock symbol     | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. False by default.   | bool  |

```python 
Example:

import libkloudtrader.options as options

options.expirations(underlying_symbol='AAPL')
```

```python
return type : json

[  
   {  
      'date':'2019-07-19',
      'strikes':{  
         'strike':[  
            80.0,
            85.0,
            90.0,
            95.0,
            100.0,
            105.0,
            110.0,
            115.0,
            120.0,
            125.0,
            130.0,
            135.0,
            140.0,
            145.0,
            150.0,
            155.0,
            160.0,
            165.0,
            170.0,
            175.0,
            180.0,
            182.5,
            185.0,
            187.5,
            190.0,
            192.5,
            195.0,
            197.5,
            200.0,
            202.5,
            205.0,
            207.5,
            210.0,
            212.5,
            215.0,
            217.5,
            220.0,
            225.0,
            230.0,
            235.0,
            240.0,
            245.0,
            250.0,
            255.0,
            260.0,
            265.0,
            270.0,
            275.0,
            280.0,
            285.0,
            290.0,
            295.0,
            300.0
         ]
      }
   },
   .
   .
   .
    {  
      'date':'2021-06-18',
      'strikes':{  
         'strike':[  
            75.0,
            80.0,
            85.0,
            90.0,
            95.0,
            100.0,
            105.0,
            110.0,
            115.0,
            120.0,
            125.0,
            130.0,
            135.0,
            140.0,
            145.0,
            150.0,
            155.0,
            160.0,
            165.0,
            170.0,
            175.0,
            180.0,
            185.0,
            190.0,
            195.0,
            200.0,
            205.0,
            210.0,
            215.0,
            220.0,
            225.0,
            230.0,
            235.0,
            240.0,
            245.0,
            250.0,
            260.0,
            270.0,
            280.0,
            290.0,
            300.0
         ]
      }
   }
]
```

### Strike Prices
Get option strike prices for a specified expiration date.

<code>strikes(underlying_symbol, expiration, brokerage, access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| underlying_symbol       | required          | The underlying stock symbol     | str  |
| expiration     | required          | Expiration for the chain                | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. False by default.   | bool  |

```python 
Example:

import libkloudtrader.options as options 

options.strikes(underlying_symbol='AAPL',expiration="2019-07-19")
```

```python 
return type : json

{  
   'strikes':{  
      'strike':[  
         80.0,
         85.0,
         90.0,
         95.0,
         100.0,
         105.0,
         110.0,
         115.0,
         120.0,
         125.0,
         130.0,
         135.0,
         140.0,
         145.0,
         150.0,
         155.0,
         160.0,
         165.0,
         170.0,
         175.0,
         180.0,
         182.5,
         185.0,
         187.5,
         190.0,
         192.5,
         195.0,
         197.5,
         200.0,
         202.5,
         205.0,
         207.5,
         210.0,
         212.5,
         215.0,
         217.5,
         220.0,
         225.0,
         230.0,
         235.0,
         240.0,
         245.0,
         250.0,
         255.0,
         260.0,
         265.0,
         270.0,
         275.0,
         280.0,
         285.0,
         290.0,
         295.0,
         300.0
      ]
   }
}
```