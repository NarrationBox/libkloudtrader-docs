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
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. True by default.   | bool  |

#### Example

```python
import libkloudtrader.options as options 

expiration=options.expirations(underlying_symbol='AAPL')[0]['date']
options.chains(underlying_symbol='AAPL',expiration=expiration)
```
```python 
return type : Pandas Dataframe


                                       description exch    type   last  change  ...  contract_size expiration_date expiration_type option_type root_symbol
symbol                                                                          ...                                                                       
AAPL190823C00130000  AAPL Aug 23 2019 $130.00 Call    Z  option    NaN     NaN  ...            100      2019-08-23         weeklys        call        AAPL
AAPL190823P00130000   AAPL Aug 23 2019 $130.00 Put    Z  option   0.02     0.0  ...            100      2019-08-23         weeklys         put        AAPL
AAPL190823C00135000  AAPL Aug 23 2019 $135.00 Call    Z  option    NaN     NaN  ...            100      2019-08-23         weeklys        call        AAPL
AAPL190823P00135000   AAPL Aug 23 2019 $135.00 Put    Z  option   0.01     0.0  ...            100      2019-08-23         weeklys         put        AAPL
AAPL190823C00140000  AAPL Aug 23 2019 $140.00 Call    Z  option    NaN     NaN  ...            100      2019-08-23         weeklys        call        AAPL
...                                            ...  ...     ...    ...     ...  ...            ...             ...             ...         ...         ...
AAPL190823P00245000   AAPL Aug 23 2019 $245.00 Put    Z  option  37.98     0.0  ...            100      2019-08-23         weeklys         put        AAPL
AAPL190823C00247500  AAPL Aug 23 2019 $247.50 Call    Z  option   0.01     0.0  ...            100      2019-08-23         weeklys        call        AAPL
AAPL190823P00247500   AAPL Aug 23 2019 $247.50 Put    Z  option    NaN     NaN  ...            100      2019-08-23         weeklys         put        AAPL
AAPL190823C00250000  AAPL Aug 23 2019 $250.00 Call    Z  option   0.02     0.0  ...            100      2019-08-23         weeklys        call        AAPL
AAPL190823P00250000   AAPL Aug 23 2019 $250.00 Put    Z  option    NaN     NaN  ...            100      2019-08-23         weeklys         put        AAPL
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
```

#### Example

```python 
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

#### Example

```python 
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