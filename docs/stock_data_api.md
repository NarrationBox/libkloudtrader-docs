---
id: stock_data_api
title: Stock Data
sidebar_label: Stock Data
---

### Get live data from various exchanges, historical data, company fundamentals and information, intraday prices and much more. 

      
# Module
<code>libkloudtrader.stocks</code>
***
## Price Data

### Latest Price Information
Get latest price information for an individual or multiple symbols<br/>

<code>latest_price_info(symbols,brokerage,access_token,dataframe)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbols         | required          | Stock symbol or a list of symbols       | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. False by default.   | bool  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.latest_price_info('AAPL,MSFT')
```
```python
return type : json

[  
   {  
      'symbol':'AAPL',
      'description':'Apple Inc',
      'exch':'Q',
      'type':'stock',
      'last':204.4703,
      'change':0.07,
      'volume':9184837,
      'open':203.35,
      'high':204.54,
      'low':202.9,
      'close':None,
      'bid':204.47,
      'ask':204.48,
      'change_percentage':0.03,
      'average_volume':27766461,
      'last_volume':100,
      'trade_date':'2019-07-05 22:53:39',
      'prevclose':204.41,
      'week_52_high':233.47,
      'week_52_low':142.0,
      'bidsize':2,
      'bidexch':'K',
      'bid_date':'2019-07-05 22:53:39',
      'asksize':1,
      'askexch':'Y',
      'ask_date':'2019-07-05 22:53:40',
      'root_symbols':'AAPL'
   },
   {  
      'symbol':'MSFT',
      'description':'Microsoft Corp',
      'exch':'Q',
      'type':'stock',
      'last':136.555,
      'change':-0.91,
      'volume':9255335,
      'open':135.94,
      'high':136.9,
      'low':135.72,
      'close':None,
      'bid':136.55,
      'ask':136.56,
      'change_percentage':-0.66,
      'average_volume':23423711,
      'last_volume':100,
      'trade_date':'2019-07-05 22:53:40',
      'prevclose':137.46,
      'week_52_high':138.4,
      'week_52_low':93.96,
      'bidsize':8,
      'bidexch':'Z',
      'bid_date':'2019-07-05 22:53:41',
      'asksize':3,
      'askexch':'Q',
      'ask_date':'2019-07-05 22:53:41',
      'root_symbols':'MSFT'
   }
]

```
### Latest Quote
Get lastest quote entry for the given symbol from various exchanges

<code>latest_quote(symbol,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.stocks as stocks

stocks.latest_quote('AAPL')
```
```python
return type : json

{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':203.92,
   'bidsz':5,
   'bidexch':'K',
   'biddate':'2019-07-06 05:29:59',
   'ask':204.03,
   'asksz':2,
   'askexch':'K',
   'askdate':'2019-07-06 05:29:59'
}
```

### Latest Trade
Get lastest trade for the given symbol

<code>latest_trade(symbol,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.stocks as stocks

stocks.latest_trade('AAPL')
```
```python
return type : json

{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'Q',
   'price':'204.23',
   'size':'1276643',
   'cvol':'17265518',
   'date':'2019-07-06 01:30:00',
   'last':'204.23'
}
```

### Intraday Summary
Get the intraday summary for the given symbol

<code>intraday_summary(symbol,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.stocks as stocks

stocks.intraday_summary('AAPL')
```
```python
return type : json

{  
   'type':'summary',
   'symbol':'AAPL',
   'open':'203.35',
   'high':'205.08',
   'low':'202.9',
   'prevClose':'204.41',
   'close':'204.23'
}
```

### Historical OHLCV Data
Get OHLCV(Open-High-Low-Close-Volume) data for a symbol.<br/>

<code>ohlcv(symbol,start,end,data_filter,brokerage,access_token,datframe)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| start           | required          | Starting date (YYYY-MM-DD). (YYYY-MM-DD) for intervals: "1d","1w","1M", (YYYY-MM-DD HH:MM:SS) for intervals: "1m", "5m", "15m"                  | str  |
| end             | required          | Ending date (YYYY-MM-DD). (YYYY-MM-DD) for intervals: "1d","1w","1M", (YYYY-MM-DD HH:MM:SS) for intervals: "1m", "5m", "15m"             | str  |
| interval        | optional          | Time Interval. E.g. (1m, 5m, 15m, 1d, 1w, 1M). See next table to find out more about time intervals. 1d by default. | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. True by default.   | bool  |

Supported time intervals: 



| Interval    | Accepted Symbol |Data Availability|
|-----------------|-------------------|-----------|
|1 minute         |1m|20 days in the past|
|5 minutes        |5m|40 days in the past|
|15 minutes       |15m|40 days in the past|
|1 day        |1d|Usually cover the entire lifetime of the company|
|1 week       |1w|Usually cover the entire lifetime of the company|
|1 month      |1M|Usually cover the entire lifetime of the company|

#### Example

```python 
import libkloudtrader.stocks as stocks

stocks.ohlcv('AAPL',start="2018-01-01",end="2019-01-01")

stocks.ohlcv('AAPL',start="2019-09-04 09:30:00",end="2019-09-10 15:30:00", interval="5m")
```
```python
return type: Pandas Dataframe

              open    high     low   close    volume
datetime                                                
2018-01-02  170.16  172.30  169.26  172.26  25555934
2018-01-03  172.53  174.55  171.96  172.23  29517899
2018-01-04  172.54  173.47  172.08  173.03  22434597
2018-01-05  173.44  175.37  173.05  175.00  23660018
2018-01-08  174.35  175.61  173.93  174.35  20567766
...            ...     ...     ...     ...       ...
2018-12-24  148.15  151.55  146.59  146.83  37169232
2018-12-26  148.30  157.23  146.72  157.17  58582544
2018-12-27  155.84  156.77  150.07  156.15  53117065
2018-12-28  157.50  158.52  154.55  156.23  42291424
2018-12-31  158.53  159.36  156.48  157.74  35003466

[251 rows x 5 columns]
```

```python 
return type: Pandas Dataframe

                         price      open      high       low     close  volume       vwap
datetime                                                                                 
2019-09-04 09:30:00  208.36500  208.3900  208.7300  208.0000  208.2400  931829  208.40953
2019-09-04 09:35:00  208.22000  208.2900  208.4700  207.9700  208.1227  380634  208.20392
2019-09-04 09:40:00  208.01500  208.1400  208.2500  207.7800  208.1300  391809  208.09492
2019-09-04 09:45:00  208.13000  208.1500  208.4600  207.8000  207.8288  401724  208.16506
2019-09-04 09:50:00  207.75505  207.8174  207.9200  207.5901  207.6800  270973  207.75256
...                        ...       ...       ...       ...       ...     ...        ...
2019-09-10 15:10:00  214.52500  214.5100  214.6400  214.4100  214.4200  110552  214.54924
2019-09-10 15:15:00  214.67245  214.4250  214.9199  214.4250  214.8800  187494  214.71908
2019-09-10 15:20:00  214.72500  214.8899  214.9200  214.5300  214.6950  183348  214.73652
2019-09-10 15:25:00  214.62995  214.7000  214.7599  214.5000  214.5800  141997  214.63384
2019-09-10 15:30:00  214.60915  214.5800  214.6765  214.5418  214.5800  131203  214.60373

[385 rows x 7 columns]
```

***
### Tick Data
Get historical tick data(trades placed) for a particular period of time. Data available for past 5 days.<br>

<code>tick_data(symbol,start,end,data_filter,brokerage,access_token,datframe)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| start           | optional         | starting date and time(YYYY-MM-DD HH:MM). None by default. Should not be older than one week.             | str  |
| end             | required          | end date and time(YYYY-MM-DD HH:MM). None by default. Should not be older than one week.                    | str  |
| data_filter        | optional          | 'open' for data points within open market hours only. 'all' for all available data points. 'open' by default. | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. True by default.   | bool  |

#### Example

```python 
import libkloudtrader.stocks as stocks

stocks.tick_data('AAPL',start="2019-08-14 09:30:00",end="2019-08-15 16:00:00")
```
```python
return type: Pandas Dataframe


                        price  volume
datetime                             
2019-09-19 13:30:00  222.1200     100
2019-09-19 13:30:00  222.1200     282
2019-09-19 13:30:00  222.1200     400
2019-09-19 13:30:00  222.1200     100
2019-09-19 13:30:00  222.1200     296
...                       ...     ...
2019-09-19 16:30:07  220.8900     100
2019-09-19 16:30:07  220.8900     100
2019-09-19 16:30:08  220.8800     100
2019-09-19 16:30:08  220.8800     100
2019-09-19 16:30:09  220.8908     200

[48878 rows x 2 columns]
```

***
## Stream Realtime Data
libkloudtrader provides live streaming data for live trades happening across various exchanges, live quotes from various exchanges and the realtime intraday summary of the security.

### Stream Live Quotes
Stream live quotes direct from various exchanges.<br/>

<code>stream_live_quotes(symbol,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbols         | required          | Symbol or list of symbols(seperated by a comma)| str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

``` python
import libkloudtrader.stocks as stocks

for data in stream_live_quotes('AAPL,MSFT'):
    print(data)
``` 

### Stream Live Trades
Stream live trades direct from various exchanges.<br/>

<code>stream_live_trades(symbol,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbols         | required          | Symbol or list of symbols(seperated by a comma)| str  |
| brokerage       | optional          | Your Brokerage. Will automatically be present when you deploy to Narwhal. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal| str  |

#### Example

```python
import libkloudtrader.stocks as stocks

for data in stream_live_trades('AAPL,MSFT'):
    print(data)
``` 
### Stream Live Intraday Summary
Stream live intraday summary.<br/>

<code>stream_live_summary(symbol,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbols         | required          | Symbol or list of symbols(seperated by a comma)| str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal| str  |

#### Example

``` python
import libkloudtrader.stocks as stocks

for data in stream_live_summary('AAPL,MSFT'):
    print(data)
``` 


## Market Related Data

***

### Listed Companies
Get Companies listed on <b>Nasdaq, NYSE, AMEX</b>, their symbols, last prices, market-cap and other information about them.

<code>list_of_companies(exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange         | required          | name of exchange. 'nyse' for New York Stock Exchange. 'nasdaq' for Nasdaq. 'amex' for American Stock Exchange. 'all' for all 3 of them. all by default.                    | str  |


#### Example

```python 
import libkloudtrader.stocks as stocks

stocks.list_of_companies()
stocks.list_of_companies('nyse')
```

```python
return type: pandas dataframe

      Symbol                                         Name  ...                 Sector                                           industry
0        DDD                       3D Systems Corporation  ...             Technology            Computer Software: Prepackaged Software
1        MMM                                   3M Company  ...            Health Care                         Medical/Dental Instruments
2       WBAI                              500.com Limited  ...      Consumer Services              Services-Misc. Amusement & Recreation
3       WUBA                                  58.com Inc.  ...             Technology    Computer Software: Programming, Data Processing
4       EGHT                                      8x8 Inc  ...             Technology                                       EDP Services
5        AHC                        A.H. Belo Corporation  ...      Consumer Services                               Newspapers/Magazines
...      ...                                          ...  ...                    ...                                                ...
6869     WYY                        WidePoint Corporation  ...             Technology                                       EDP Services
6870     WTT                Wireless Telecom Group,  Inc.  ...          Capital Goods                                Electrical Products
6871    XTNT                 Xtant Medical Holdings, Inc.  ...            Health Care  Biotechnology: Biological Products (No Diagnos...
6872    YUMA                            Yuma Energy, Inc.  ...                 Energy                               Oil & Gas Production
6873    ZDGE                                  Zedge, Inc.  ...             Technology            Computer Software: Prepackaged Software
6874     ZOM               Zomedica Pharmaceuticals Corp.  ...            Health Care                              Major Pharmaceuticals

return type: pandas dataframe

     Symbol                                               Name  ...                 Sector                                         industry
0       DDD                             3D Systems Corporation  ...             Technology          Computer Software: Prepackaged Software
1       MMM                                         3M Company  ...            Health Care                       Medical/Dental Instruments
2      WBAI                                    500.com Limited  ...      Consumer Services            Services-Misc. Amusement & Recreation
3      WUBA                                        58.com Inc.  ...             Technology  Computer Software: Programming, Data Processing
4      EGHT                                            8x8 Inc  ...             Technology                                     EDP Services
5       AHC                              A.H. Belo Corporation  ...      Consumer Services                             Newspapers/Magazines
...     ...                                                ...  ...                    ...                                              ...
3110   ZB^H                          Zions Bancorporation N.A.  ...                    NaN                                              NaN
3111    ZBK                          Zions Bancorporation N.A.  ...                Finance                                      Major Banks
3112    ZTS                                        Zoetis Inc.  ...            Health Care                            Major Pharmaceuticals
3113    ZTO                          ZTO Express (Cayman) Inc.  ...         Transportation                Trucking Freight/Courier Services
3114    ZUO                                        Zuora, Inc.  ...             Technology          Computer Software: Prepackaged Software
3115   ZYME                                     Zymeworks Inc.  ...            Health Care                            Major Pharmaceuticals
```


***
### Intraday Status
Get the intraday market status<br/>

<code>intraday_status(brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.intraday_status()
```
```python
return type : json

{  
   'date':'2019-07-04',
   'description':'Market is closed',
   'state':'closed',
   'timestamp':1562249720,
   'next_change':'08:00',
   'next_state':'premarket'
}
```

***
### Market calendar
Get the market calendar of a given month(Goes back till 2013)<br/>

<code>market_calendar(month,year)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| month           | required          | month of the year in number             | int  |
| year            | required          | year                                    | int  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.market_calendar(7,2019)
```
```python
return type : json

{  
   'month':7,
   'year':2019,
   'days':{  
      'day':[  
         {  
            'date':'2019-07-01',
            'status':'open',
            'description':'Market is open',
            'premarket':{  
               'start':'04:00',
               'end':'09:30'
            },
            'open':{  
               'start':'09:30',
               'end':'16:00'
            },
            'postmarket':{  
               'start':'16:00',
               'end':'20:00'
            }
         },
         .
         .
         .
         {  
            'date':'2019-07-31',
            'status':'open',
            'description':'Market is open',
            'premarket':{  
               'start':'04:00',
               'end':'09:30'
            },
            'open':{  
               'start':'09:30',
               'end':'16:00'
            },
            'postmarket':{  
               'start':'16:00',
               'end':'20:00'
            }
         }
      ]
   }
}
```
***
### Search symbols
Search for securities' symbols<br/>

<code>symbol_search(company_name,indexes,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| company_name    | required          | Name of the company you want symbol of  | str  |
| indexes         | optional         | True if you want to include indexes in data else False. True by default | bool  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.symbol_search('apple')
```
```python
return type : json

{  
   'securities':{  
      'security':[  
         {  
            'symbol':'AAPL',
            'exchange':'Q',
            'type':'stock',
            'description':'Apple Inc'
         },
         {  
            'symbol':'APRU',
            'exchange':'V',
            'type':'stock',
            'description':'Apple Rush Co Inc'
         },
         {  
            'symbol':'APLE',
            'exchange':'N',
            'type':'stock',
            'description':'Apple Hospitality REIT Inc'
         },
         {  
            'symbol':'AGPL',
            'exchange':'V',
            'type':'stock',
            'description':'Apple Green Holding Inc'
         }
      ]
   }
}

```
***
### Symbol lookup 
Search for listed company's symbolbr/>

<code>symbol_lookup(symbol,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | Symbol you want to look up              | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.symbol_lookup('aap')
```
```python
return type : json

{  
   'security':[  
      {  
         'symbol':'AAPL',
         'exchange':'Q',
         'type':'stock',
         'description':'Apple Inc'
      },
      {  
         'symbol':'AAPT',
         'exchange':'V',
         'type':'stock',
         'description':'All American Pet Co Inc'
      },
       .
       .
       .
      {  
         'symbol':'AAPCF',
         'exchange':'V',
         'type':'stock',
         'description':'Atlantic Alliance Partnership Corp'
      }
   ]
}
```
***
### Shortable Securitites
Get list of all securitites that can be sold short for the given broker<br/>

<code>shortable_securities(brokerage,access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. True by default.   | bool  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.shortable_securities()
```
```python
return type: Pandas Dataframe

     symbol exchange   type                      description

0       SCS        N  stock                    Steelcase Inc
1      EXAS        Q  stock              Exact Sciences Corp
2       SCZ        Q    etf  iShares MSCI EAFE Small-Cap ETF
3       WLH        N  stock               William Lyon Homes
4      TSLA        Q  stock                        Tesla Inc
...     ...      ...    ...                              ...
1895   ACBI        Q  stock  Atlantic Capital Bancshares Inc
1896    SCI        N  stock       Service Corp International
1897    BAX        N  stock         Baxter International Inc
1898    SCL        N  stock                        Stepan Co
1899   JACK        Q  stock              Jack In The Box Inc

[1900 rows x 4 columns]
```

### Check if Shortable
Check if the given stock/security is shortable or not for the given broker.

<code>check_if_shortable(symbol,brokerage,access_token)</code>

| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
|  symbols        | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python 
import libkloudtrader.stocks as stocks

stocks.check_if_shortable('AAPL')
```
```python
return type : bool

True
```

## Company Related Data
***
### Company fundamentals 
Get company fundamental information<br/>

<code>company_fundamentals(symbols,brokerage,access_token)</code>

| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
|  symbols        | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.company_fundamentals('AAPL')
```
```python
return type : json

[
   {
      "request": "AAPL",
      "type": "Symbol",
      "results": [
         {
            "type": "Company",
            "id": "0C00000ADA",
            "tables": {
               "company_profile": {
                  "company_id": "0C00000ADA",
                  "average_employee_number": 0,
                  "contact_email": "investor_relations@apple.com",
                  "headquarter": {
                     "address_line1": "One Apple Park Way",
                     "city": "Cupertino",
                     "country": "USA",
                     "fax": "+1 408 974-2483",
                     "homepage": "http://www.apple.com",
                     "phone": "+1 408 996-1010",
                     "postal_code": "95014",
                     "province": "CA"
                  },
                  "is_head_office_same_with_registered_office_flag": false,
                  "total_employee_number": 132000,
                  "TotalEmployeeNumber.asOfDate": "2018-09-29"
               },
               "asset_classification": {
                  "company_id": "0C00000ADA",
                  "c_a_n_n_a_i_c_s": 0,
                  "financial_health_grade": "B",
                  "FinancialHealthGrade.asOfDate": "2019-07-03",
                  "growth_grade": "B",
                  "GrowthGrade.asOfDate": "2019-06-28",
                  "growth_score": 95.01898,
                  "morningstar_economy_sphere_code": 3,
                  "morningstar_industry_code": 31167138,
                  "morningstar_industry_group_code": 31167,
                  "morningstar_sector_code": 311,
                  "n_a_c_e": 26.4,
                  "n_a_i_c_s": 334220,
                  "profitability_grade": "A",
                  "ProfitabilityGrade.asOfDate": "2019-06-28",
                  "s_i_c": 3571,
                  "size_score": 175.79693,
                  "stock_type": 3,
                  "StockType.asOfDate": "2019-06-28",
                  "style_box": 2,
                  "StyleBox.asOfDate": "2019-06-30",
                  "style_score": 148.69635,
                  "value_score": 26.54572
               },
               "historical_asset_classification": {
                  "company_id": "0C00000ADA",
                  "as_of_date": "2019-07-01",
                  "financial_health_grade": "A",
                  "growth_score": 95.01898,
                  "morningstar_economy_sphere_code": 3,
                  "morningstar_industry_code": 31167138,
                  "morningstar_industry_group_code": 31167,
                  "morningstar_sector_code": 311,
                  "profitability_grade": "C",
                  "size_score": 175.79693,
                  "stock_type": 0,
                  "style_box": 0,
                  "style_score": 148.69635,
                  "value_score": 26.54572
               },
               "long_descriptions": "Apple designs a wide variety of consumer electronic devices, including smartphones (iPhone), tablets (iPad), PCs (Mac), smartwatches (Watch), and TV boxes (Apple TV), among others. The iPhone makes up the majority of Apple's total revenue. In addition, Apple offers its customers a variety of services such as Apple Music, iCloud, AppleCare and Apple Pay, among others. Apple's products run internally developed software and semiconductors, and the firm is well known for its integration of hardware, software and services. Apple's products are distributed online as well as through company-owned stores and third-party retailers. The company generates about 40% of its revenue from the Americas, with the remainder earned internationally."
            }
         },
         .
         .
         .
         {
            "share_class_id": "0P000000GY",
            "as_of_date": "2019-06-30",
            "owner_id": "FS0000DYOU",
            "owner_type": "3",
            "currencyof_market_value": "USD",
            "market_value": 170.0,
            "number_of_shares": 1.0,
            "owner_c_i_k": 0,
            "owner_name": "GUGG Large-Cap Core 34",
            "percentage_in_portfolio": 1.69961,
            "percentage_ownership": 2.1734051281494e-08,
            "share_change": 0
            }
         ],
         "share_class": {
            "company_id": "0C00000ADA",
            "share_class_id": "0P000000GY",
            "conversion_ratio": 1.0,
            "currency_id": "USD",
            "delisting_date": "1970-01-01",
            "exchange_id": "NAS",
            "investment_id": "E0USA002US",
            "i_p_o_date": "1980-12-12",
            "is_depositary_receipt": false,
            "is_direct_invest": false,
            "is_dividend_reinvest": false,
            "is_primary_share": true,
            "m_i_c": "XNAS",
            "par_value": 1e-05,
            "security_type": "ST00000001",
            "share_class_status": "A",
            "symbol": "AAPL",
            "trading_status": false
            }
         }
      }
   ]}
]
```

***
### Corporate calendar
Get the corporate calendar information for given symbol<br/>

<code>corporate_calendar(symbols,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
|  symbols        | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example


```python
import libkloudtrader.stocks as stocks

stocks.corporate_calendar('AAPL')
```
```python
return type : json

[  
   {  
      'request':'AAPL',
      'type':'Symbol',
      'results':[  
         {  
            'type':'Company',
            'id':'0C00000ADA',
            'tables':{  
               'corporate_calendars':[  
                  {  
                     'company_id':'0C00000ADA',
                     'begin_date_time':'2014-04-23',
                     'end_date_time':'2014-04-23',
                     'event_type':8,
                     'estimated_date_for_next_event':'1970-01-01',
                     'event':'Apple Inc Q2 2014 Earning Result',
                     'event_fiscal_year':2014,
                     'event_status':'Confirmed',
                     'time_zone':'1970-01-01'
                  },
                  .
                  .
                  .
                 {  
                     'company_id':'0C00000ADA',
                     'begin_date_time':'2011-10-18',
                     'end_date_time':'2011-10-18',
                     'event_type':15,
                     'estimated_date_for_next_event':'1970-01-01',
                     'event':'Q4 FY11 Earnings Release call',
                     'event_fiscal_year':2011,
                     'event_status':'Confirmed',
                     'time_zone':'1969-12-31'
                  }
               ]
            }
         }
      ]
   }
]
```
***
### Dividend information
Get company dividend information for given symbol<br/>

<code>corporate_calendar(symbols,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.dividend_information('AAPL')
```
```python
return type : json

[  
   {  
      'request':'AAPL',
      'type':'Symbol',
      'results':[  
         {  
            'type':'Stock',
            'id':'0P000000GY',
            'tables':{  
               'cash_dividends':[  
                  {  
                     'share_class_id':'0P000000GY',
                     'dividend_type':'CD',
                     'ex_date':'2016-02-04',
                     'cash_amount':0.52,
                     'currency_i_d':'USD',
                     'declaration_date':'2016-01-26',
                     'frequency':4,
                     'pay_date':'2016-02-11',
                     'record_date':'2016-02-08'
                  },
                  .
                  .
                  .
                  {  
                     'share_class_id':'0P000000GY',
                     'dividend_type':'CD',
                     'ex_date':'1989-05-22',
                     'cash_amount':0.003571,
                     'currency_i_d':'USD',
                     'declaration_date':'1989-04-20',
                     'frequency':4,
                     'pay_date':'1989-06-15',
                     'record_date':'1989-05-26'
                  }
               ]
            }
         }
      ]
   }
]
```

***
### Corporate Actions
Get corporate actions information for given symbol<br/>

<code>corporate_actions(symbols,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.corporate_actions('AAPL')
```
```python
return type : json

[  
   {  
      'request':'AAPL',
      'type':'Symbol',
      'results':[  
         {  
            'type':'Company',
            'id':'0C00000ADA',
            'tables':{  
               'mergers_and_acquisitions':{  
                  'acquired_company_id':'0C00000Q0H',
                  'parent_company_id':'0C00000ADA',
                  'cash_amount':8.0,
                  'currency_id':'USD',
                  'effective_date':'2012-10-05',
                  'notes':'http://www.macworld.com/article/1167917/apple_acquires_fingerprint_scanner_firm_authentec.html'
               }
            }
         },
         {  
            'type':'Stock',
            'id':'0P000000GY',
            'tables':{  
               'stock_splits':{  
                  '1987-06-16':{  
                     'share_class_id':'0P000000GY',
                     'ex_date':'1987-06-16',
                     'adjustment_factor':2.0,
                     'split_from':1.0,
                     'split_to':2.0,
                     'split_type':'SS'
                  },
                  '2000-06-21':{  
                     'share_class_id':'0P000000GY',
                     'ex_date':'2000-06-21',
                     'adjustment_factor':2.0,
                     'split_from':1.0,
                     'split_to':2.0,
                     'split_type':'SS'
                  },
                  '2005-02-28':{  
                     'share_class_id':'0P000000GY',
                     'ex_date':'2005-02-28',
                     'adjustment_factor':2.0,
                     'split_from':1.0,
                     'split_to':2.0,
                     'split_type':'SS'
                  },
                  '2014-06-09':{  
                     'share_class_id':'0P000000GY',
                     'ex_date':'2014-06-09',
                     'adjustment_factor':7.0,
                     'split_from':1.0,
                     'split_to':7.0,
                     'split_type':'SS'
                  }
               }
            }
         }
      ]
   }
]
```

***
### Operation ratio
Get operation ratio information for given symbol<br/>

<code>operation_ratio(symbols,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloudtrader.stocks as stocks 

stocks.operation_ratio('AAPL')
```
```python
return type : json

[  
   {  
      'request':'AAPL',
      'type':'Symbol',
      'results':[  
         {  
            'type':'Company',
            'id':'0C00000ADA',
            'tables':{  
               'operation_ratios_restate':[  
                  {  
                     'period_1y':{  
                        'company_id':'0C00000ADA',
                        'as_of_date':'2018-06-30',
                        'fiscal_year_end':'9',
                        'period':'1Y',
                        'report_type':'TTM',
                        'assets_turnover':0.735268,
                        'cap_ex_sales_ratio':0.056727,
                        'capital_expenditureto_e_b_i_t_d_a':-0.172249,
                        'cash_conversion_cycle':-52.068498,
                        'days_in_inventory':10.517711,
                        'days_in_payment':81.533683,
                        'days_in_sales':18.947474,
                        'e_b_i_t_d_a_margin':0.329332,
                        'e_b_i_t_margin':0.287679,
                        'f_c_f_net_income_ratio':1.043336,
                        'f_c_f_sales_ratio':0.229369,
                        'f_c_fto_c_f_o':0.80172,
                        'fix_assets_turonver':7.574559,
                        'gross_margin':0.382671,
                        'interest_coverage':24.172811,
                        'inventory_turnover':34.703369,
                        'net_incomes_per_employee':456260.162602,
                        'net_margin':0.219842,
                        'normalized_net_profit_margin':0.219842,
                        'normalized_r_o_i_c':0.249088,
                        'operation_margin':0.265989,
                        'payment_turnover':4.476677,
                        'pretax_margin':0.275778,
                        'receivable_turnover':19.263781,
                        'r_o_a':0.161643,
                        'r_o_e':0.453726,
                        'r_o_i_c':0.229355,
                        'sales_per_employee':2075398.373984,
                        'tax_rate':0.20283,
                        'working_capital_turnover_ratio':8.684857
                     }
                  },
                  {  
                     'period_3m':{  
                        'company_id':'0C00000ADA',
                        'as_of_date':'2018-06-30',
                        'fiscal_year_end':'9',
                        'period':'3M',
                        'report_type':'P',
                        'cash_ratio':0.801486,
                        'cashto_total_assets':0.203238,
                        'common_equity_to_assets':0.329181,
                        'current_ratio':1.307325,
                        'debtto_assets':0.328182,
                        'e_b_i_t_d_a_margin':0.286811,
                        'e_b_i_t_margin':0.236778,
                        'financial_leverage':3.037843,
                        'gross_margin':0.383385,
                        'long_term_debt_equity_ratio':0.844966,
                        'long_term_debt_total_capital_ratio':0.457985,
                        'net_incomes_per_employee':93650.406504,
                        'net_margin':0.216258,
                        'normalized_net_profit_margin':0.216258,
                        'operation_margin':0.236778,
                        'pretax_margin':0.249395,
                        'quick_ratio':1.099257,
                        'sales_per_employee':433048.780488,
                        'tax_rate':0.132867,
                        'total_debt_equity_ratio':0.996964
                     
                  },
                  .
                  .
                  .   
                  'period_120m':{  
                     'share_class_id':'0P000000GY',
                     'as_of_date':'2018-09-28',
                     'period':'120M',
                     'alpha':0.017985,
                     'beta':0.92412,
                     'non_div_alpha':0.095358,
                     'non_div_beta':0.921626,
                     'non_div_r_square':26.698067,
                     'r_square':26.572722
                  }
               }
            }
         }
      ]
   }
]
```
***
### Corporate financials
Get corporate financials information for given symbol<br/>

<code>corporate_financials(symbols,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloustrader.stocks as stocks

stocks.corporate_financials('AAPL')
```
```python
return type : json

[  
   {  
      'request':'AAPL',
      'type':'Symbol',
      'results':[  
         {  
            'type':'Company',
            'id':'0C00000ADA',
            'tables':{  
               'segmentation':{  
                  'period_3m':{  
                     'company_id':'0C00000ADA',
                     'as_of_date':'2017-09-30',
                     'period':'3M',
                     'operating_income':1392000000.0,
                     'operating_revenue':7464000000.0,
                     'total_assets':39572000000.0,
                     'total_non_current_assets':16364000000.0
                  },
                  .
                  .
                  .
                  'period_12m':{  
                     'company_id':'0C00000ADA',
                     'as_of_date':'2017-09-30',
                     'period':'12M',
                     'operating_income':6275000000.0,
                     'operating_revenue':14010000000.0,
                     'total_assets':39572000000.0,
                     'total_non_current_assets':16364000000.0
                  }
               },
               'financial_statements_restate':{  
                  'company_id':'0C00000ADA',
                  'as_of_date':'2018-06-30',
                  'balance_sheet':[  
                     {  
                        'period_3m':{  
                           'currency_id':'USD',
                           'fiscal_year_end':'9',
                           'period':'3M',
                           'report_type':'R',
                           'accounts_payable':38489000000.0,
                           'accounts_receivable':14104000000.0,
                           'accumulated_depreciation':-47251000000.0,
                           'b_s_file_date':'1970-01-01',
                           'capital_stock':38624000000.0,
                           'cash':9973000000.0,
                           'cash_and_cash_equivalents':31971000000.0,
                           'cash_cash_equivalents_and_marketable_securities':70970000000.0,
                           'cash_equivalents':21998000000.0,
                           'commercial_paper':11974000000.0,
                           'common_stock':38624000000.0,
                           'common_stock_equity':114949000000.0,
                           'current_accrued_expenses':25184000000.0,
                           'current_assets':115761000000.0,
                           'current_debt':17472000000.0,
                           'current_debt_and_capital_lease_obligation':17472000000.0,
                           'current_deferred_liabilities':7403000000.0,
                           'current_deferred_revenue':7403000000.0,
                           'current_liabilities':88548000000.0,
                           'file_date':'1970-01-01',
                           'finished_goods':1649000000.0,
                           'fiscal_year_end_change':False,
                           'gains_losses_not_affecting_retained_earnings':-3111000000.0,
                           'gross_p_p_e':85368000000.0,
                           'inventory':5936000000.0,
                           'invested_capital':229549000000.0,
                           'investmentin_financial_assets':172773000000.0,
                           'investments_and_advances':172773000000.0,
                           'land_and_improvements':15409000000.0,
                           'leases':7899000000.0,
                           'long_term_debt':97128000000.0,
                           'long_term_debt_and_capital_lease_obligation':97128000000.0,
                           'machinery_furniture_equipment':62060000000.0,
                           'net_debt':82629000000.0,
                           'net_p_p_e':38117000000.0,
                           'net_tangible_assets':114949000000.0,
                           'non_current_deferred_liabilities':3276000000.0,
                           'non_current_deferred_revenue':2878000000.0,
                           'non_current_deferred_taxes_liabilities':398000000.0,
                           'number_of_share_holders':0,
                           'ordinary_shares_number':4842917000.0,
                           'other_current_assets':12488000000.0,
                           'other_current_borrowings':5498000000.0,
                           'other_non_current_assets':22546000000.0,
                           'other_non_current_liabilities':11267000000.0,
                           'other_receivables':12263000000.0,
                           'other_short_term_investments':38999000000.0,
                           'payables':38489000000.0,
                           'payables_and_accrued_expenses':63673000000.0,
                           'period_ending_date':'1970-01-01',
                           'properties':0.0,
                           'raw_materials':4287000000.0,
                           'receivables':26367000000.0,
                           'retained_earnings':79436000000.0,
                           'share_issued':4842917000.0,
                           'stockholders_equity':114949000000.0,
                           'tangible_book_value':114949000000.0,
                           'total_assets':349197000000.0,
                           'total_capitalization':212077000000.0,
                           'total_debt':114600000000.0,
                           'total_equity':114949000000.0,
                           'total_equity_gross_minority_interest':114949000000.0,
                           'total_liabilities_net_minority_interest':234248000000.0,
                           'total_non_current_assets':233436000000.0,
                           'total_non_current_liabilities_net_minority_interest':145700000000.0,
                           'tradeand_other_payables_non_current':34029000000.0,
                           'working_capital':27213000000.0
                        }
                     },
                     .
                     .
                     .
                    
                  ],
                  'cash_flow_statement':[  
                     {  
                        'period_3m':{  
                           'currency_id':'USD',
                           'fiscal_year_end':'9',
                           'period':'3M',
                           'report_type':'R',
                           'beginning_cash_position':45059000000.0,
                           'capital_expenditure':-3267000000.0,
                           'cash_dividends_paid':-3653000000.0,
                           'cash_flow_from_continuing_financing_activities':-31523000000.0,
                           'cash_flow_from_continuing_investing_activities':3947000000.0,
                           'cash_flow_from_continuing_operating_activities':14488000000.0,
                           'c_f_file_date':'1970-01-01',
                           'change_in_account_payable':2081000000.0,
                           'change_in_inventory':1693000000.0,
                           'change_in_other_current_assets':988000000.0,
                           'change_in_other_current_liabilities':-2149000000.0,
                           'change_in_other_working_capital':-581000000.0,
                           'change_in_payable':2081000000.0,
                           'change_in_payables_and_accrued_expense':2081000000.0,
                           'change_in_receivables':-3946000000.0,
                           'change_in_working_capital':-1914000000.0,
                           'changes_in_account_receivables':233000000.0,
                           'changes_in_cash':-13088000000.0,
                           'common_stock_dividend_paid':-3653000000.0,
                           'common_stock_issuance':1000000.0,
                           'common_stock_payments':-20783000000.0,
                           'deferred_income_tax':1126000000.0,
                           'deferred_tax':1126000000.0,
                           'depreciation_amortization_depletion':2665000000.0,
                           'depreciation_and_amortization':2665000000.0,
                           'end_cash_position':31971000000.0,
                           'file_date':'1970-01-01',
                           'financing_cash_flow':-31523000000.0,
                           'fiscal_year_end_change':False,
                           'free_cash_flow':11221000000.0,
                           'income_tax_paid_supplemental_data':2479000000.0,
                           'interest_paid_supplemental_data':764000000.0,
                           'investing_cash_flow':3947000000.0,
                           'issuance_of_capital_stock':1000000.0,
                           'issuance_of_debt':0.0,
                           'long_term_debt_issuance':0.0,
                           'long_term_debt_payments':-6000000000.0,
                           'net_business_purchase_and_sale':-126000000.0,
                           'net_common_stock_issuance':-20782000000.0,
                           'net_income_from_continuing_operations':11519000000.0,
                           'net_investment_purchase_and_sale':7916000000.0,
                           'net_issuance_payments_of_debt':-6011000000.0,
                           'net_long_term_debt_issuance':-6000000000.0,
                           'net_other_financing_charges':-1077000000.0,
                           'net_other_investing_changes':-576000000.0,
                           'net_p_p_e_purchase_and_sale':-3267000000.0,
                           'net_short_term_debt_issuance':-11000000.0,
                           'number_of_share_holders':0,
                           'operating_cash_flow':14488000000.0,
                           'other_non_cash_items':-259000000.0,
                           'period_ending_date':'1970-01-01',
                           'purchase_of_business':-126000000.0,
                           'purchase_of_investment':-9472000000.0,
                           'purchase_of_p_p_e':-3267000000.0,
                           'repayment_of_debt':-6000000000.0,
                           'repurchase_of_capital_stock':-20783000000.0,
                           'sale_of_investment':17388000000.0,
                           'stock_based_compensation':1351000000.0
                        },
                        .
                        .
                        .
                     'period_9m':{  
                        'share_class_id':'0P000000GY',
                        'as_of_date':'2018-06-30',
                        'currency_id':'USD',
                        'fiscal_year_end':'9',
                        'period':'9M',
                        'report_type':'P',
                        'accession_number':'0000320193-18-000098',
                        'basic_average_shares':5006640000.0,
                        'basic_continuous_operations':9.07,
                        'basic_e_p_s':9.07,
                        'continuing_and_discontinued_basic_e_p_s':9.07,
                        'continuing_and_discontinued_diluted_e_p_s':8.99,
                        'diluted_average_shares':5050963000.0,
                        'diluted_continuous_operations':8.99,
                        'diluted_e_p_s':8.99,
                        'dividend_coverage_ratio':4.517588,
                        'dividend_per_share':1.99,
                        'file_date':'2018-07-31',
                        'fiscal_year_end_change':False,
                        'form_type':'8-K',
                        'normalized_basic_e_p_s':9.07,
                        'normalized_diluted_e_p_s':8.99,
                        'period_ending_date':'2018-06-30',
                        'total_dividend_per_share':1.99
                     }
                  }
               ]
            }
         }
      ]
   }
]
```
***
### Price Statistics
Get price statistics information for given symbol<br/>

<code>price_statistics(symbols,brokerage,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| brokerage       | required as environment variable          | Your Brokerage. Will automatically be present when you deploy to Narwhal after linking your brokerage account. Currently supported brokerage: 'Tradier Inc.'| str  |
| access_token    | required as environment variable          | Will automatically be present when you deploy to Narwhal after linking your brokerage account| str  |

#### Example

```python
import libkloudtrader.stocks as stocks

stocks.price_statistics('AAPL')
```
```python
return type : json

[  
   {  
      'request':'AAPL',
      'type':'Symbol',
      'results':[  
         {  
            'type':'Stock',
            'id':'0P000000GY',
            'tables':{  
               'price_statistics':{  
                  'period_5d':{  
                     'share_class_id':'0P000000GY',
                     'as_of_date':'2018-10-17',
                     'period':'5D',
                     'close_price_to_moving_average':1.00792,
                     'moving_average_price':219.452
                  },
                  'period_1w':{  
                     'share_class_id':'0P000000GY',
                     'as_of_date':'2018-10-17',
                     'period':'1W',
                     'average_volume':36272842.0,
                     'high_price':226.35,
                     'low_price':212.32,
                     'percentage_below_high_price':2.28,
                     'total_volume':217637057.0
                  },
                  'period_10d':{  
                     'share_class_id':'0P000000GY',
                     'as_of_date':'2018-10-17',
                     'period':'10D',
                     'close_price_to_moving_average':0.997907,
                     'moving_average_price':221.654
                  },
                  .
                  .
                  .
               },
               'trailing_returns':{  
                  'period_1d':{  
                     'share_class_id':'0P000000GY',
                     'as_of_date':'2018-10-17',
                     'period':'1D',
                     'total_return':-0.43214
                  },
                  .
                  .
                  .
                  'y_t_d':{  
                     'share_class_id':'0P000000GY',
                     'as_of_date':'2018-10-17',
                     'period':'YTD',
                     'total_return':31.938782
                  }
               }
            }
         }
      ]
   }
]
```
***
## Exchanges' codes
These codes are returned in the <code>exch</code> field of all market data APIs. Please use this table for reference to represent the exchange as text.


| ID | Name of Exhange                              |
|----|----------------------------------------------|
| A  | NYSE MKT                                     |
| B  | NASDAQ OMX BX                                |
| C  | National Stock Exchange                      |
| D  | FINRA ADF                                    |
| E  | Market Independent (Generated by Nasdaq SIP) |
| F  | Mutual Funds/Money Markets (NASDAQ)          |
| G  | GLOBEX                                       |
| I  | International Securities Exchange            |
| J  | Direct Edge A                                |
| K  | Direct Edge X                                |
| M  | Chicago Stock Exchange                       |
| N  | NYSE                                         |
| P  | NYSE Arca                                    |
| Q  | NASDAQ OMX                                   |
| S  | NASDAQ Small Cap                             |
| T  | NASDAQ Int                                   |
| U  | OTCBB                                        |
| V  | OTC other                                    |
| W  | CBOE                                         |
| X  | NASDAQ OMX PSX                               |
| Y  | BATS Y-Exchange                              |
| Z  | BATS                                         |
