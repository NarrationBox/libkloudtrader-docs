---
id: data_api
title: Data
sidebar_label: Data
---

## Get live trades and live quotes from various exchanges, historical data, company fundamentals and information, intraday prices and much more. (For equities)
> #### Important
> 
> The algorithm you want to deploy should be in a file called **main.py**
> 
> Your algorithm must have these imports:
> 
> **from libkloudtrader.defaults import ACCESS_TOKEN, ACCOUNT_NUMBER**
> 
> This will help Narwhal to access your access token and account number from the Narwhal Environment so that you don't have to explicitly pass them with each API call. Narwhal would not be able to load your access token and account number from the Narwhal Environment if you don't link your tradier account. So the best practice is to link your tradier account before deploying your Trading Algorithm.

> Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!       
# Module
<code>libkloudtrader.equities.data</code>
***
### Get quotes
Get quotes for an individual or multiple symbols<br/>

<code>quotes(symbols,access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbols         | required          | Stock symbol or a list of symbols       | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                        | str  |

```python
Example:

from libkloudtarder.equities.data import quotes
quotes('AAPL,SPY')
```
```python
return type : json

{  
   'quotes':{  
      'quote':[  
         {  
            'symbol':'AAPL',
            'description':'Apple Inc',
            'exch':'Q',
            'type':'stock',
            'last':221.19,
            'change':0.0,
            'change_percentage':0.0,
            'volume':5434,
            'average_volume':30667970,
            'last_volume':0,
            'trade_date':1539807300000,
            'open':None,
            'high':None,
            'low':None,
            'close':None,
            'prevclose':221.19,
            'week_52_high':233.47,
            'week_52_low':150.24,
            'bid':220.65,
            'bidsize':5,
            'bidexch':'P',
            'bid_date':1539850713000,
            'ask':220.93,
            'asksize':1,
            'askexch':'P',
            'ask_date':1539850749000,
            'root_symbols':'AAPL,AAPL7'
         },
         {  
            'symbol':'SPY',
            'description':'SPDR S&P 500 ETF Trust',
            'exch':'P',
            'type':'etf',
            'last':280.45,
            'change':0.0,
            'change_percentage':0.0,
            'volume':20174,
            'average_volume':62715882,
            'last_volume':0,
            'trade_date':1539820800000,
            'open':None,
            'high':None,
            'low':None,
            'close':None,
            'prevclose':280.45,
            'week_52_high':293.94,
            'week_52_low':252.92,
            'bid':280.26,
            'bidsize':10,
            'bidexch':'P',
            'bid_date':1539851080000,
            'ask':280.29,
            'asksize':5,
            'askexch':'P',
            'ask_date':1539851076000,
            'root_symbols':'SPY,SPY7'
         }
      ]
   }
}
```

### Historical OHLCV Data
Get OHLCV(Open-High-Low-Close-Volume) data for a symbol (As back as you want to go)<br/>

<code>OHLCV(symbol,start,end,interval,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| start           | required          | starting date (YYYY-MM-DD)              | str  |
| end             | required          | end date (YYYY-MM-DD)                   | str  |
| interval        | optional          | daily/weekly/monthly (daily by default) | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal | str  |
```python 
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equiites.data import OHLCV

OHLCV('AAPL','2013-01-01','2018-01-01')
```
```python
return type: json 

{  
   'history':{  
      'day':[  
         {  
            'date':'2013-12-02',
            'open':79.714286,
            'high':80.618557,
            'low':78.688571,
            'close':78.747143,
            'volume':118135885
         },
         .
         .
         .
         {  
            'date':'2017-12-29',
            'open':170.52,
            'high':170.59,
            'low':169.22,
            'close':169.23,
            'volume':25999922
         }
      ]
   }
}
```

***
### Open Prices
Get historical Open Prices for a symbol (As back as you want to go)<br>

<code>open_prices(symbol,start,end,interval,access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| start           | required          | starting date (YYYY-MM-DD)              | str  |
| end             | required          | end date (YYYY-MM-DD)                   | str  |
| interval        | optional          | daily/weekly/monthly (daily by default) | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                          | str  |
```python 
Example:

from libkloudtrader.defaults import *
from liblibkloudtrader.equiites.data import open_prices

open_prices('AAPL','2013-01-01','2018-01-01')
```
```python
return type: json 

[  
   {  
      'date':'2013-01-02',
      'open':79.117143
   },
   .
   .
   .
   {  
      'date':'2017-12-28',
      'open':171.0
   }
   , 
   {  
      'date':'2017-12-29',
      'open':170.52
   }
]
```

***
### High Prices
Get historical High Prices for a symbol (As back as you want to go)<br>

<code>high_prices(symbol,start,end,interval,access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| start           | required          | starting date (YYYY-MM-DD)              | str  |
| end             | required          | end date (YYYY-MM-DD)                   | str  |
| interval        | optional          | daily/weekly/monthly (daily by default) | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                          | str  |
```python 
Example:

from libkloudtrader.defaults import *
from liblibkloudtrader.equiites.data import high_prices

high_prices('AAPL','2013-01-01','2018-01-01')
```
```python
return type: json 

[[  
   {  
      'date':'2013-01-02',
      'high':79.285714
   },
   {  
      'date':'2017-12-28',
      'high':171.85
   },
   {  
      'date':'2017-12-29',
      'high':170.59
   }
]
```

***
### Low Prices
Get historical Low Prices for a symbol (As back as you want to go)<br>

<code>low_prices(symbol,start,end,interval,access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| start           | required          | starting date (YYYY-MM-DD)              | str  |
| end             | required          | end date (YYYY-MM-DD)                   | str  |
| interval        | optional          | daily/weekly/monthly (daily by default) | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                          | str  |
```python 
Example:

from libkloudtrader.defaults import *
from liblibkloudtrader.equiites.data import low_prices

low_prices('AAPL','2013-01-01','2018-01-01')
```
```python
return type: json 

[  
   {  
      'date':'2013-01-02',
      'low':77.375714
   },
   .
   .
   .
   {  
      'date':'2017-12-28',
      'low':170.48
   },
   {  
      'date':'2017-12-29',
      'low':169.22
   }
]
```


***
### Close Prices
Get historical Close Prices for a symbol (As back as you want to go)<br>

<code>close_prices(symbol,start,end,interval,access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| start           | required          | starting date (YYYY-MM-DD)              | str  |
| end             | required          | end date (YYYY-MM-DD)                   | str  |
| interval        | optional          | daily/weekly/monthly (daily by default) | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                          | str  |
```python 
Example:

from libkloudtrader.defaults import *
from liblibkloudtrader.equiites.data import close_prices

close_prices('AAPL','2013-01-01','2018-01-01')
```
```python
return type: json 

[  
   {  
      'date':'2013-01-02',
      'close':78.432857
   },
   .
   .
   .

   {  
      'date':'2017-12-28',
      'close':171.08
   },
   {  
      'date':'2017-12-29',
      'close':169.23
   }
]
```

***
### Volume
Get historical Voulme for a symbol (As back as you want to go)<br>

<code>volume(symbol,start,end,interval,access_token)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | stock symbol/ticker                     | str  |
| start           | required          | starting date (YYYY-MM-DD)              | str  |
| end             | required          | end date (YYYY-MM-DD)                   | str  |
| interval        | optional          | daily/weekly/monthly (daily by default) | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                          | str  |
```python 
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equiites.data import volume

volume('AAPL','2013-01-01','2018-01-01')
```
```python
return type: json 

[  
   {  
      'date':'2013-01-02',
      'volume':140124870
   },
   {  
      'date':'2017-12-28',
      'volume':16480187
   },
   .
   .
   .
   {  
      'date':'2017-12-29',
      'volume':25999922
   }
]
```



***
### Intraday Status
Get the intraday market status<br/>

<code>intraday_status()</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                          | str  |
```python
Example: 

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import intraday_status

intraday_status()
```
```python
return type : json

{  
   'clock':{  
      'state':'closed',
      'date':'2018-10-18',
      'timestamp':1539849813,
      'next_state':'premarket',
      'next_change':'08:00',
      'description':'Market is closed.'
   }
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

```python
Example:

from libkloudtrader.defaults import *
from kloudtader.equities.data import market_calendar

market_calendar(9,2016)
```
```python
return type : json

{  
   'calendar':{  
      'month':9,
      'year':2016,
      'days':{  
         'day':[  
            {  
               'date':'2016-09-01',
               'status':'open',
               'description':'Market is open',
               'premarket':{  
                  'start':'08:00',
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
               'date':'2016-09-30',
               'status':'open',
               'description':'Market is open',
               'premarket':{  
                  'start':'08:00',
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
}
```
***
### Search symbols
Search for securities' symbols<br/>

<code>symbol_search(company_name,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| company_name    | required          | Name of the company you want symbol of  | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                          | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import symbol_search

symbol_search('apple')
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
Search for securities/companies using symbols<br/>

<code>symbol_lookup(symbol,access_token)</code>
| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | Symbol you want to look up              | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                          | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import symbol_lookup

symbol_lookup('aap')
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
### Company fundamentals 
Get company fundamental information<br/>

<code>company_fundamentals(symbols,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
|  symbols        | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                                | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import company_fundamentals

company_fundamentals('AAPL')
```
```python
return type : json

{
   "item": {
      "request": "AAPL",
      "type": "Symbol",
      "results": [
         {
            "type": "Company",
            "id": "0C00000ADA",
            "tables": {
               "asset_classification": {
                  "company_id": "0C00000ADA",
                  "financial_health_grade": "A",
                  "FinancialHealthGrade.asOfDate": "2014-10-21",
                  "growth_grade": "A",
                  "GrowthGrade.asOfDate": "2014-09-30",
                  "growth_score": "0.0",
                  "morningstar_economy_sphere_code": "3",
                  "morningstar_industry_code": "31167138",
                  "morningstar_industry_group_code": "31167",
                  "morningstar_sector_code": "311",
                  "n_a_c_e": "0.0",
                  "n_a_i_c_s": "334220",
                  "profitability_grade": "A",
                  "ProfitabilityGrade.asOfDate": "2014-09-30",
                  "s_i_c": "3571",
                  "size_score": "175.79693",
                  "stock_type": "3",
                  "StockType.asOfDate": "2014-09-30",
                  "style_box": "2",
                  "StyleBox.asOfDate": "2014-09-30",
                  "style_score": "148.69635",
                  "value_score": "0.0"
               },
               "historical_asset_classification": {
                  "company_id": "0C00000ADA",
                  "as_of_date": "2014-09-30",
                  "financial_health_grade": "A",
                  "growth_score": "0.0",
                  "morningstar_economy_sphere_code": "0",
                  "morningstar_industry_code": "0",
                  "morningstar_industry_group_code": "0",
                  "morningstar_sector_code": "0",
                  "profitability_grade": "C",
                  "size_score": "175.79693",
                  "stock_type": "0",
                  "style_box": "0",
                  "style_score": "148.69635",
                  "value_score": "0.0"
               },
               "company_profile": {
                  "company_id": "0C00000ADA",
                  "headquarter": {
                     "address_line1": "1 Infinite Loop",
                     "city": "Cupertino",
                     "country": "USA",
                     "fax": "+1 408 974-2483",
                     "homepage": "http://www.apple.com",
                     "phone": "+1 408 996-1010",
                     "postal_code": "95014",
                     "province": "CA"
                  },
                  "short_description": "Designs and develops hardware and software systems",
                  "total_employee_number": "84400",
                  "TotalEmployeeNumber.asOfDate": "2013-09-28"
               },
               "long_descriptions": "Apple Inc is a California corporation established in 1977. The Company designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players, and sells a variety of related software, services, peripherals, networking solutions, and third-party digital content and applications. It sells its products worldwide through its retail stores, online stores, and direct sales force, as well as through third-party cellular network carriers, wholesalers, retailers, and value-added resellers. The Company's products and services include iPhone, iPad, Mac, iPod, Apple TV a portfolio of consumer and professional software applications, the iOS and OS X operating systems, iCloud and a variety of accessory, service and support offerings. It also sells and delivers digital content and applications through the iTunes Store App Store, iBookstore, and Mac App Store. In addition, the Company sells a variety of third-party iPhone, iPad, Mac and iPod compatible products, including application software, and various accessories, through its online and retail stores. It sells to consumer; small and mid-sized businesses (SMB); and education, enterprise and government customers. Its reportable operating segments consist of Americas, Europe, Japan, Greater China, Rest of Asia Pacific and Retail. The Americas segment includes both North and South America. The Europe segment includes European countries, as well as the Middle East and Africa. The Asia-Pacific segment includes Australia and Asian countries, other than Japan. The Retail segment operates Apple retail stores in 13 countries, including the U.S. Each operating segment provides similar hardware and software products and similar services. It offers its own software products, including iOS, the Company's mobile operating system; OS X, the Company's Mac operating system; and server and application software. The Company currently holds rights to patents and copyrights relating to certain aspects of its computer systems, iPhone and iPod devices, peripherals, software and services. The Company is subject to federal, state and international laws relating to the collection, use, retention, security and transfer of PII."
            }
         },
         {
            "type": "Stock",
            "id": "0P000000GY",
            "tables": {
               "share_class_profile": {
                  "share_class_id": "0P000000GY",
                  "enterprise_value": "596512600250",
                  "EnterpriseValue.asOfDate": "2014-09-30",
                  "market_cap": "603277600250",
                  "MarketCap.asOfDate": "2014-09-30",
                  "share_class_level_shares_outstanding": "6270146470",
                  "shares_outstanding": "5987867000",
                  "SharesOutstanding.asOfDate": "2014-07-11"
               }
            }
         }
      ]
   }
}
```

***
### Corporate calendars
Get the corporate calendar information for given symbol<br/>

<code>corporate_calendar(symbols,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                                | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import corporate_calendar

corporate_calendar('AAPL')
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

<code>corporate_calendar(symbols,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                                | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import dividend_information

dividend_information('AAPL')
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

<code>corporate_actions(symbols,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                                | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import corporate_actions

corporate_actions('AAPL')
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

<code>operation_ratio(symbols,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                                | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import operation_ratio

operation_ratio('AAPL')
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

<code>corporate_financials(symbols,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                                | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import corporate_financials

corporate_financials('AAPL')
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

<code>price_statistics(symbols,access_token)</code>
| Paramters       | Required/Optional | Description                                                   | Type |
|-----------------|-------------------|---------------------------------------------------------------|------|
| symbols         | required          | Symbol or list of symbols(seperated by a comma)               | str  |
| access_token    | optional          | Will automatically be present when you deploy to Narwhal                                                                | str  |
```python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import price_statistics

price_statistics('AAPL')
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
## Live Market Data
libkloudtrader provides live streaming data for both live trades happening across various exchanges and live quotes from various exchanges. you will receive the data as a flowing stream.
process of getting the streaming live data looks like this:

* Create a session using the Create Session API
* Pass the session as a parameter to the Live Trades or Live Quotes API




***
### Create Session
Create a live session to receive sessionid which is needed for streaming live quotes and trades<br/>

<code>create_session(access_token)</code>
| Paramters       | Required/Optional | Description | Type |
|-----------------|-------------------|---------------------------------------------------------------|------| 
| access_token    | optional          |Will automatically be present when you deploy to Narwhal               | str  |
 
> We will be using create_session() as a parameter in the live market feed apis 

***
### Live Quotes
Get live quotes direct from various exchanges<br/>

<code>live_quotes(symbol, sessionid)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbols         | required          | Symbol or list of symbols(seperated by a comma)| str  |
| sessionid       | required          | create_session()                               | str  |
``` python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import create_session,live_quotes

while True:
      market_quotes=live_quotes('AAPL', create_session()) 
      print(market_quotes)
``` 
```python
return type : json

{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':216.7,
   'bidsz':1,
   'bidexch':'Z',
   'biddate':'1539887869000',
   'ask':216.73,
   'asksz':1,
   'askexch':'V',
   'askdate':'1539887869000'
}
{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':216.7,
   'bidsz':2,
   'bidexch':'B',
   'biddate':'1539887871000',
   'ask':216.74,
   'asksz':2,
   'askexch':'Q',
   'askdate':'1539887871000'
}
{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':216.66,
   'bidsz':1,
   'bidexch':'X',
   'biddate':'1539887874000',
   'ask':216.68,
   'asksz':2,
   'askexch':'Q',
   'askdate':'1539887874000'
}
{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':216.67,
   'bidsz':4,
   'bidexch':'Q',
   'biddate':'1539887875000',
   'ask':216.7,
   'asksz':2,
   'askexch':'Q',
   'askdate':'1539887876000'
}
{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':216.67,
   'bidsz':2,
   'bidexch':'Y',
   'biddate':'1539887878000',
   'ask':216.69,
   'asksz':2,
   'askexch':'C',
   'askdate':'1539887878000'
}
{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':216.65,
   'bidsz':1,
   'bidexch':'Q',
   'biddate':'1539887880000',
   'ask':216.67,
   'asksz':1,
   'askexch':'V',
   'askdate':'1539887880000'
}
{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':216.64,
   'bidsz':2,
   'bidexch':'Z',
   'biddate':'1539887881000',
   'ask':216.66,
   'asksz':1,
   'askexch':'V',
   'askdate':'1539887883000'
}
{  
   'type':'quote',
   'symbol':'AAPL',
   'bid':216.68,
   'bidsz':6,
   'bidexch':'Q',
   'biddate':'1539887886000',
   'ask':216.7,
   'asksz':1,
   'askexch':'Q',
   'askdate':'1539887886000'
}


```
***
### Live Trades
Get live trades direct from various exchanges<br/>

<code>live_trades(symbol, sessionid)</code>
| Paramters       | Required/Optional | Description                                    | Type |
|-----------------|-------------------|------------------------------------------------|------| 
| symbols         | required          | Symbol or list of symbols(seperated by a comma)| str  |
| sessionid       | required          | create_session()                               | str  |

``` python
Example:

from libkloudtrader.defaults import *
from libkloudtrader.equities.data import create_session,live_trades

while True:
      market_trades=live_trades('AAPL', create_session()) 
      print(market_trades)
``` 
```python
return type : json

{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'D',
   'price':'216.495',
   'size':'100',
   'cvol':'24102767',
   'date':'1539888158000',
   'last':'216.495'
}
{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'B',
   'price':'216.45',
   'size':'200',
   'cvol':'24104772',
   'date':'1539888163000',
   'last':'216.45'
}
{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'Q',
   'price':'216.42',
   'size':'100',
   'cvol':'24106342',
   'date':'1539888166000',
   'last':'216.42'
}
{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'D',
   'price':'216.448',
   'size':'230',
   'cvol':'24107124',
   'date':'1539888167000',
   'last':'216.448'
}
{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'Q',
   'price':'216.48',
   'size':'100',
   'cvol':'24108900',
   'date':'1539888170000',
   'last':'216.48'
}
{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'D',
   'price':'216.451',
   'size':'175',
   'cvol':'24109225',
   'date':'1539888172000',
   'last':'216.451'
}
{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'Z',
   'price':'216.51',
   'size':'100',
   'cvol':'24110307',
   'date':'1539888174000',
   'last':'216.51'
}
{  
   'type':'trade',
   'symbol':'AAPL',
   'exch':'B',
   'price':'216.49',
   'size':'100',
   'cvol':'24111408',
   'date':'1539888176000',
   'last':'216.49'
}

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
