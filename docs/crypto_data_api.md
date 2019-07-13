---
id: crypto_data_api
title: Crypto Data
sidebar_label: Crypto Data
---

# Get Data directly from the exchange of your choice. More than 100 exchanges supported.
<div class="select">
<select>
<option disabled selected>Available exchanges</option>
<option>_1btcxe</option>
<option>acx</option>
<option>allcoin</option>
<option>anxpro</option>
<option>bcex</option>
<option>bequant</option>
<option>bibox</option>
<option>bigone</option>
<option>binance</option>
<option>binanceje</option>
<option>bit2c</option>
<option>bitbank</option>
<option>bitbay</option>
<option>bitfinex</option>
<option>bitfinex2</option>
<option>bitflyer</option>
<option>bitforex</option>
<option>bithumb</option>
<option>bitkk</option>
<option>bitlish</option>
<option>bitmarket</option>
<option>bitmex</option>
<option>bitso</option>
<option>bitstamp</option>
<option>bitstamp1</option>
<option>bittrex</option>
<option>bitz</option>
<option>bl3p</option>
<option>bleutrade</option>
<option>braziliex</option>
<option>btcalpha</option>
<option>btcbox</option>
<option>btcchina</option>
<option>btcexchange</option>
<option>btcmarkets</option>
<option>btctradeim</option>
<option>btctradeua</option>
<option>btcturk</option>
<option>buda</option>
<option>bxinth</option>
<option>cex</option>
<option>chbtc</option>
<option>chilebit</option>
<option>cobinhood</option>
<option>coinbase</option>
<option>coinbaseprime</option>
<option>coinbasepro</option>
<option>coincheck</option>
<option>coinegg</option>
<option>coinex</option>
<option>coinexchange</option>
<option>coinfalcon</option>
<option>coinfloor</option>
<option>coingi</option>
<option>coinmarketcap</option>
<option>coinmate</option>
<option>coinnest</option>
<option>coinone</option>
<option>coinspot</option>
<option>cointiger</option>
<option>coolcoin</option>
<option>coss</option>
<option>crex24</option>
<option>crypton</option>
<option>deribit</option>
<option>dsx</option>
<option>dx</option>
<option>ethfinex</option>
<option>exmo</option>
<option>exx</option>
<option>fcoin</option>
<option>fcoinjp</option>
<option>flowbtc</option>
<option>foxbit</option>
<option>fybse</option>
<option>gateio</option>
<option>gdax</option>
<option>gemini</option>
<option>hadax</option>
<option>hitbtc</option>
<option>hitbtc2</option>
<option>huobipro</option>
<option>huobiru</option>
<option>ice3x</option>
<option>independentreserve</option>
<option>indodax</option>
<option>itbit</option>
<option>kkex</option>
<option>kraken</option>
<option>kucoin</option>
<option>kucoin2</option>
<option>kuna</option>
<option>lakebtc</option>
<option>lbank</option>
<option>liqui</option>
<option>liquid</option>
<option>livecoin</option>
<option>luno</option>
<option>lykke</option>
<option>mandala</option>
<option>mercado</option>
<option>mixcoins</option>
<option>negociecoins</option>
<option>nova</option>
<option>oceanex</option>
<option>okcoincny</option>
<option>okcoinusd</option>
<option>okex</option>
<option>okex3</option>
<option>paymium</option>
<option>poloniex</option>
<option>rightbtc</option>
<option>southxchange</option>
<option>stronghold</option>
<option>surbitcoin</option>
<option>theocean</option>
<option>therock</option>
<option>tidebit</option>
<option>tidex</option>
<option>upbit</option>
<option>vaultoro</option>
<option>vbtc</option>
<option>virwox</option>
<option>xbtce</option>
<option>yobit</option>
<option>zaif</option>
<option>zb</option>
</select>
</div>


# Module
<code>libkloudtrader.crypto</code>
<br>

> **Note:** Some of APIs(mostly Trading and User APIs) in libkloudtrader.crypto have a test mode flag which lets you talk to your exchange's sandbox/test account. This means that you can place orders, etc in test mode with virtaul currency. But not all exchanges support test mode. Infact very few do. Also, in most of the cases you have to create a different account with your exchange for test/sandbox privileges thus you will have different API credentials for your test account. The exchanges that support test mode are:

<select>
<option disable selected>List of exchanges in Test Mode</option>
<option>bitmex</option>
<option>coinbaseprime</option>
<option>coinbasepro</option>
<option>deribit</option>
<option>gdax</option>
<option>gemini</option>
<option>kucoin</option>
<option>kucoin2</option>
</select>


> ***Note:*** Not every exchange supports every API. But all of them support the major ones. E.g quotes_for_all_symbols() might work for some exchanges but quotes(symbol) will work for all. You will receive  ***{'message': '400 Bad Request: Functionality not available for this exchange.'}*** if your exchange doesn't support it.
 
> ***Note:*** Returned data may differ from exchange to exchange


***
## Exchange Related Data

### List of Exchanges
Get the list of exchanges available via libkloudtrader.crypto<br>

<code>list_of_exchanges(test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
|test_mode        | optional          | True if you want to list exchanges that support Test mode. False by default. | bool|

```python
Example:

import libkloudtrader.crypto as crypto

# List of all exchanges
crypto.list_of_exchanges()

#List of exchanges in test mode
crypto.list_of_exchanges(test_mode=True)
```

```python
return type : list

# List of all exchanges
[  
   '_1btcxe',
   'acx',
   'allcoin',
   'anxpro',
   'bcex',
   'bequant',
   'bibox',
   'bigone',
   'binance',
   'binanceje',
   'bit2c',
   'bitbank',
   'bitbay',
   'bitfinex',
   'bitfinex2',
   'bitflyer',
   'bitforex',
   'bithumb',
   'bitkk',
   'bitlish',
   'bitmarket',
   'bitmex',
   'bitso',
   'bitstamp',
   'bitstamp1',
   'bittrex',
   'bitz',
   'bl3p',
   'bleutrade',
   'braziliex',
   'btcalpha',
   'btcbox',
   'btcchina',
   'btcexchange',
   'btcmarkets',
   'btctradeim',
   'btctradeua',
   'btcturk',
   'buda',
   'bxinth',
   'cex',
   'chbtc',
   'chilebit',
   'cobinhood',
   'coinbase',
   'coinbaseprime',
   'coinbasepro',
   'coincheck',
   'coinegg',
   'coinex',
   'coinexchange',
   'coinfalcon',
   'coinfloor',
   'coingi',
   'coinmarketcap',
   'coinmate',
   'coinnest',
   'coinone',
   'coinspot',
   'cointiger',
   'coolcoin',
   'coss',
   'crex24',
   'crypton',
   'deribit',
   'dsx',
   'dx',
   'ethfinex',
   'exmo',
   'exx',
   'fcoin',
   'fcoinjp',
   'flowbtc',
   'foxbit',
   'fybse',
   'gateio',
   'gdax',
   'gemini',
   'hadax',
   'hitbtc',
   'hitbtc2',
   'huobipro',
   'huobiru',
   'ice3x',
   'independentreserve',
   'indodax',
   'itbit',
   'kkex',
   'kraken',
   'kucoin',
   'kucoin2',
   'kuna',
   'lakebtc',
   'lbank',
   'liqui',
   'liquid',
   'livecoin',
   'luno',
   'lykke',
   'mandala',
   'mercado',
   'mixcoins',
   'negociecoins',
   'nova',
   'oceanex',
   'okcoincny',
   'okcoinusd',
   'okex',
   'okex3',
   'paymium',
   'poloniex',
   'rightbtc',
   'southxchange',
   'stronghold',
   'surbitcoin',
   'theocean',
   'therock',
   'tidebit',
   'tidex',
   'upbit',
   'vaultoro',
   'vbtc',
   'virwox',
   'xbtce',
   'yobit',
   'zaif',
   'zb'
]

#List of exchanges in test mode
[  
   'bitmex',
   'coinbaseprime',
   'coinbasepro',
   'deribit',
   'gdax',
   'gemini',
   'kucoin',
   'kucoin2'
]
```

### Markets on an Exchanges
Get all the markets available in the exchange and their structures<br>

<code>markets(exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |

```python
Example:

import libkloudtrader.crypto as crypto

crypto.markets()
```
```
return type : json

{
  "ADA/CAD": {
    "percentage": true,
    "tierBased": true,
    "taker": 0.0026,
    "maker": 0.0016,
    "tiers": {
      "taker": [
        [
          0,
          0.0026
        ],
        [
          50000,
          0.0024
        ],
        [
          100000,
          0.0022
        ],
        [
          250000,
          0.002
        ],
        [
          500000,
          0.0018
        ],
        [
          1000000,
          0.0016
        ],
        [
          2500000,
          0.0014
        ],
        [
          5000000,
          0.0012
        ],
        [
          10000000,
          0.0001
        ]
      ],
      .
      .
      .
"id": "XZECZUSD",
    "symbol": "ZEC/USD",
    "base": "ZEC",
    "quote": "USD",
    "baseId": "XZEC",
    "quoteId": "ZUSD",
    "darkpool": false,
    "info": {
      "altname": "ZECUSD",
      "wsname": "ZEC/USD",
      "aclass_base": "currency",
      "base": "XZEC",
      "aclass_quote": "currency",
      "quote": "ZUSD",
      "lot": "unit",
      "pair_decimals": 2,
      "lot_decimals": 8,
      "lot_multiplier": 1,
      "leverage_buy": [],
      "leverage_sell": [],
      "fees": [
        [
          0,
          0.26
        ],
        [
          50000,
          0.24
        ],
        [
          100000,
          0.22
        ],
        [
          250000,
          0.2
        ],
        [
          500000,
          0.18
        ],
        [
          1000000,
          0.16
        ],
        [
          2500000,
          0.14
        ],
        [
          5000000,
          0.12
        ],
        [
          10000000,
          0.1
        ]
      ],
      "fees_maker": [
        [
          0,
          0.16
        ],
        [
          50000,
          0.14
        ],
        [
          100000,
          0.12
        ],
        [
          250000,
          0.1
        ],
        [
          500000,
          0.08
        ],
        [
          1000000,
          0.06
        ],
        [
          2500000,
          0.04
        ],
        [
          5000000,
          0.02
        ],
        [
          10000000,
          0
        ]
      ],
      "fee_volume_currency": "ZUSD",
      "margin_call": 80,
      "margin_stop": 40
    },
    "altname": "ZECUSD",
    "active": true
  }
}
```

### Market Structure
Get the market structure of a particular symbol<br>

<code>market_strcuture(symbol, exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |

```python
Example:

import libkloudtrader.crypto as crypto

crypto.market_structure(symbol="BTC/USD")
```
```python
return type : json

{  
   'percentage':True,
   'precision':{  
      'amount':1.0,
      'price':0.5
   },
   'limits':{  
      'amount':{  
         'min':None,
         'max':None
      },
      'price':{  
         'min':0.5,
         'max':1000000.0
      },
      'cost':{  
         'min':1.0,
         'max':10000000.0
      }
   },
   'id':'XBTUSD',
   'symbol':'BTC/USD',
   'base':'BTC',
   'quote':'USD',
   'baseId':'XBT',
   'quoteId':'USD',
   'active':True,
   'taker':0.00075,
   'maker':-0.00025,
   'type':'swap',
   'spot':False,
   'swap':True,
   'future':False,
   'prediction':False,
   'info':{  
      'symbol':'XBTUSD',
      'rootSymbol':'XBT',
      'state':'Open',
      'typ':'FFWCSX',
      'listing':'2016-05-13T12:00:00.000Z',
      'front':'2016-05-13T12:00:00.000Z',
      'expiry':None,
      'settle':None,
      'relistInterval':None,
      'inverseLeg':'',
      'sellLeg':'',
      'buyLeg':'',
      'optionStrikePcnt':None,
      'optionStrikeRound':None,
      'optionStrikePrice':None,
      'optionMultiplier':None,
      'positionCurrency':'USD',
      'underlying':'XBT',
      'quoteCurrency':'USD',
      'underlyingSymbol':'XBT=',
      'reference':'BMEX',
      'referenceSymbol':'.BXBT',
      'calcInterval':None,
      'publishInterval':None,
      'publishTime':None,
      'maxOrderQty':10000000,
      'maxPrice':1000000,
      'lotSize':1,
      'tickSize':0.5,
      'multiplier':-100000000,
      'settlCurrency':'XBt',
      'underlyingToPositionMultiplier':None,
      'underlyingToSettleMultiplier':-100000000,
      'quoteToSettleMultiplier':None,
      'isQuanto':False,
      'isInverse':True,
      'initMargin':0.01,
      'maintMargin':0.005,
      'riskLimit':20000000000,
      'riskStep':10000000000,
      'limit':None,
      'capped':False,
      'taxed':True,
      'deleverage':True,
      'makerFee':-0.00025,
      'takerFee':0.00075,
      'settlementFee':0,
      'insuranceFee':0,
      'fundingBaseSymbol':'.XBTBON8H',
      'fundingQuoteSymbol':'.USDBON8H',
      'fundingPremiumSymbol':'.XBTUSDPI8H',
      'fundingTimestamp':'2019-07-10T20:00:00.000Z',
      'fundingInterval':'2000-01-01T08:00:00.000Z',
      'fundingRate':0.001253,
      'indicativeFundingRate':0.000445,
      'rebalanceTimestamp':None,
      'rebalanceInterval':None,
      'openingTimestamp':'2019-07-10T17:00:00.000Z',
      'closingTimestamp':'2019-07-10T18:00:00.000Z',
      'sessionInterval':'2000-01-01T01:00:00.000Z',
      'prevClosePrice':13015.21,
      'limitDownPrice':None,
      'limitUpPrice':None,
      'bankruptLimitDownPrice':None,
      'bankruptLimitUpPrice':None,
      'prevTotalVolume':1453350999043,
      'totalVolume':1453449832311,
      'volume':98833268,
      'volume24h':6923398931,
      'prevTotalTurnover':21904856240927870,
      'totalTurnover':21905660917343016,
      'turnover':804676415145,
      'turnover24h':54300385852309,
      'homeNotional24h':543003.8585230984,
      'foreignNotional24h':6923398931,
      'prevPrice24h':12563.5,
      'vwap':12750.2231,
      'highPrice':13272,
      'lowPrice':12130,
      'lastPrice':12269,
      'lastPriceProtected':12268.5,
      'lastTickDirection':'ZeroPlusTick',
      'lastChangePcnt':-0.0234,
      'bidPrice':12268.5,
      'midPrice':12268.75,
      'askPrice':12269,
      'impactBidPrice':12268.4333,
      'impactMidPrice':12268.75,
      'impactAskPrice':12269,
      'hasLiquidity':True,
      'openInterest':1077470164,
      'openValue':8781381836600,
      'fairMethod':'FundingRate',
      'fairBasisRate':1.372035,
      'fairBasis':4.93,
      'fairPrice':12270.2,
      'markMethod':'FairPrice',
      'markPrice':12270.2,
      'indicativeTaxRate':0,
      'indicativeSettlePrice':12265.27,
      'optionUnderlyingPrice':None,
      'settledPrice':None,
      'timestamp':'2019-07-10T17:26:24.807Z'
   }
}
```
### Currencies
Get all Currencies available on an exchange<br>

<code>currencies(exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |

```python
import libkloudtrader.crypto as crypto

crypto.currencies()
```

```python
return type : json

{  
   'ADA':{  
      'id':'ADA',
      'code':'ADA',
      'info':{  
         'aclass':'currency',
         'altname':'ADA',
         'decimals':8,
         'display_decimals':6
      },
      'name':'ADA',
      'active':True,
      'fee':None,
      'precision':8,
      'limits':{  
         'amount':{  
            'min':1e-08,
            'max':100000000.0
         },
         'price':{  
            'min':1e-08,
            'max':100000000.0
         },
         'cost':{  
            'min':None,
            'max':None
         },
         'withdraw':{  
            'min':None,
            'max':100000000.0
         }
      }
   },
   .
   .
   .
   'USD':{  
      'id':'ZUSD',
      'code':'USD',
      'info':{  
         'aclass':'currency',
         'altname':'USD',
         'decimals':4,
         'display_decimals':2
      },
      'name':'USD',
      'active':False,
      'fee':None,
      'precision':4,
      'limits':{  
         'amount':{  
            'min':0.0001,
            'max':10000.0
         },
         'price':{  
            'min':0.0001,
            'max':10000.0
         },
         'cost':{  
            'min':None,
            'max':None
         },
         'withdraw':{  
            'min':None,
            'max':10000.0
         }
      }
   }
}
```
*** 

## Price Data

### Latest Quotes
Get latest quotes/ticker data for a given symbool from the given exchange<br>

<code>quotes(symbol,exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |

```python
return type : json

{  
   'symbol':'BTC/USD',
   'timestamp':1562781885468,
   'datetime':'2019-07-10T18:04:45.468Z',
   'high':13272.0,
   'low':12017.0,
   'bid':12281.5,
   'bidVolume':None,
   'ask':12282.0,
   'askVolume':None,
   'vwap':12722.6463,
   'open':12582.0,
   'close':12281.5,
   'last':12281.5,
   'previousClose':None,
   'change':-300.5,
   'percentage':-2.3883325385,
   'average':12431.75,
   'baseVolume':566260.6429116526,
   'quoteVolume':7203559472.0,
   'info':{  
      'symbol':'XBTUSD',
      'rootSymbol':'XBT',
      'state':'Open',
      'typ':'FFWCSX',
      'listing':'2016-05-13T12:00:00.000Z',
      'front':'2016-05-13T12:00:00.000Z',
      'expiry':None,
      'settle':None,
      'relistInterval':None,
      'inverseLeg':'',
      'sellLeg':'',
      'buyLeg':'',
      'optionStrikePcnt':None,
      'optionStrikeRound':None,
      'optionStrikePrice':None,
      'optionMultiplier':None,
      'positionCurrency':'USD',
      'underlying':'XBT',
      'quoteCurrency':'USD',
      'underlyingSymbol':'XBT=',
      'reference':'BMEX',
      'referenceSymbol':'.BXBT',
      'calcInterval':None,
      'publishInterval':None,
      'publishTime':None,
      'maxOrderQty':10000000,
      'maxPrice':1000000,
      'lotSize':1,
      'tickSize':0.5,
      'multiplier':-100000000,
      'settlCurrency':'XBt',
      'underlyingToPositionMultiplier':None,
      'underlyingToSettleMultiplier':-100000000,
      'quoteToSettleMultiplier':None,
      'isQuanto':False,
      'isInverse':True,
      'initMargin':0.01,
      'maintMargin':0.005,
      'riskLimit':20000000000,
      'riskStep':10000000000,
      'limit':None,
      'capped':False,
      'taxed':True,
      'deleverage':True,
      'makerFee':-0.00025,
      'takerFee':0.00075,
      'settlementFee':0,
      'insuranceFee':0,
      'fundingBaseSymbol':'.XBTBON8H',
      'fundingQuoteSymbol':'.USDBON8H',
      'fundingPremiumSymbol':'.XBTUSDPI8H',
      'fundingTimestamp':'2019-07-10T20:00:00.000Z',
      'fundingInterval':'2000-01-01T08:00:00.000Z',
      'fundingRate':0.001253,
      'indicativeFundingRate':0.000468,
      'rebalanceTimestamp':None,
      'rebalanceInterval':None,
      'openingTimestamp':'2019-07-10T18:00:00.000Z',
      'closingTimestamp':'2019-07-10T19:00:00.000Z',
      'sessionInterval':'2000-01-01T01:00:00.000Z',
      'prevClosePrice':13015.21,
      'limitDownPrice':None,
      'limitUpPrice':None,
      'bankruptLimitDownPrice':None,
      'bankruptLimitUpPrice':None,
      'prevTotalVolume':1453813020199,
      'totalVolume':1453830046867,
      'volume':17026668,
      'volume24h':7203559472,
      'prevTotalTurnover':21908643552311150,
      'totalTurnover':21908782105357452,
      'turnover':138553046301,
      'turnover24h':56626064291164,
      'homeNotional24h':566260.6429116526,
      'foreignNotional24h':7203559472,
      'prevPrice24h':12582,
      'vwap':12722.6463,
      'highPrice':13272,
      'lowPrice':12017,
      'lastPrice':12281.5,
      'lastPriceProtected':12282,
      'lastTickDirection':'ZeroMinusTick',
      'lastChangePcnt':-0.0239,
      'bidPrice':12281.5,
      'midPrice':12281.75,
      'askPrice':12282,
      'impactBidPrice':12281.5,
      'impactMidPrice':12284.75,
      'impactAskPrice':12288.0315,
      'hasLiquidity':True,
      'openInterest':1053677670,
      'openValue':8571667845450,
      'fairMethod':'FundingRate',
      'fairBasisRate':1.372035,
      'fairBasis':3.72,
      'fairPrice':12292.5,
      'markMethod':'FairPrice',
      'markPrice':12292.5,
      'indicativeTaxRate':0,
      'indicativeSettlePrice':12288.78,
      'optionUnderlyingPrice':None,
      'settledPrice':None,
      'timestamp':'2019-07-10T18:04:45.468Z'
   }
}
```
### Latest Quotes for all symbols
Get quotes/ticker data for all symbols listed on an exchange<br>

<code>quotes_for_all_symbols(exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |

```python 
Example:

import libkloudtrader.crypto as crypto

crypto.quotes_for_all_symbols()
```

```python
return type : json

{
  "ADA/CAD": {
    "symbol": "ADA/CAD",
    "timestamp": 1562782151317,
    "datetime": "2019-07-10T18:09:11.317Z",
    "high": 0.118,
    "low": 0.08782,
    "bid": 0.09174,
    "bidVolume": null,
    "ask": 0.095713,
    "askVolume": null,
    "vwap": 0.099434,
    "open": 0.104811,
    "close": 0.095902,
    "last": 0.095902,
    "previousClose": null,
    "change": null,
    "percentage": null,
    "average": null,
    "baseVolume": 306794.40352723,
    "quoteVolume": 30505.7947203266,
    "info": {
      "a": [
        "0.095713",
        "2090",
        "2090.000"
      ],
      "b": [
        "0.091740",
        "10700",
        "10700.000"
      ],
      "c": [
        "0.095902",
        "257.20693841"
      ],
      "v": [
        "210039.87747170",
        "306794.40352723"
      ],
      "p": [
        "0.092569",
        "0.099434"
      ],
      "t": [
        118,
        163
      ],
      "l": [
        "0.087820",
        "0.087820"
      ],
      "h": [
        "0.105621",
        "0.118000"
      ],
      "o": "0.104811"
    }
  },
  .
  .
  .
  "ZEC/USD": {
    "symbol": "ZEC/USD",
    "timestamp": 1562782151318,
    "datetime": "2019-07-10T18:09:11.318Z",
    "high": 105.12,
    "low": 94.53,
    "bid": 96.49,
    "bidVolume": null,
    "ask": 96.85,
    "askVolume": null,
    "vwap": 99.92976,
    "open": 100.7,
    "close": 97.25,
    "last": 97.25,
    "previousClose": null,
    "change": null,
    "percentage": null,
    "average": null,
    "baseVolume": 5619.90490087,
    "quoteVolume": 561595.747966763,
    "info": {
      "a": [
        "96.85000",
        "20",
        "20.000"
      ],
      "b": [
        "96.49000",
        "2",
        "2.000"
      ],
      "c": [
        "97.25000",
        "0.96512443"
      ],
      "v": [
        "4387.65346602",
        "5619.90490087"
      ],
      "p": [
        "99.93326",
        "99.92976"
      ],
      "t": [
        895,
        1265
      ],
      "l": [
        "94.53000",
        "94.53000"
      ],
      "h": [
        "105.12000",
        "105.12000"
      ],
      "o": "100.70000"
    }
  }
}
```

### Latest Trades
Get latest trades for a particular trading symbol.<br>

<code>trades(symbol, number_of_data_points, exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| number_of_data_points | required for some exchanges  | number of trades/data points you want. 0 by default|int|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |

```python 
Example:
import libkloudtrader.crypto as crypto 

crypto.trades('ETH/BTC', number_of_data_points=5)
```
```python
[  
   {  
      'id':None,
      'order':None,
      'info':[  
         '11516.10000',
         '0.00200000',
         1562831632.4331,
         's',
         'l',
         ''
      ],
      'timestamp':1562831632433,
      'datetime':'2019-07-11T07:53:52.433Z',
      'symbol':'BTC/USD',
      'type':'limit',
      'side':'sell',
      'takerOrMaker':None,
      'price':11516.1,
      'amount':0.002,
      'cost':23.0322,
      'fee':None
   },
   {  
      'id':None,
      'order':None,
      'info':[  
         '11514.50000',
         '0.25000000',
         1562831632.7141,
         's',
         'l',
         ''
      ],
      'timestamp':1562831632714,
      'datetime':'2019-07-11T07:53:52.714Z',
      'symbol':'BTC/USD',
      'type':'limit',
      'side':'sell',
      'takerOrMaker':None,
      'price':11514.5,
      'amount':0.25,
      'cost':2878.625,
      'fee':None
   },
   {  
      'id':None,
      'order':None,
      'info':[  
         '11514.50000',
         '0.00200000',
         1562831632.7182,
         's',
         'l',
         ''
      ],
      'timestamp':1562831632718,
      'datetime':'2019-07-11T07:53:52.718Z',
      'symbol':'BTC/USD',
      'type':'limit',
      'side':'sell',
      'takerOrMaker':None,
      'price':11514.5,
      'amount':0.002,
      'cost':23.029,
      'fee':None
   },
   {  
      'id':None,
      'order':None,
      'info':[  
         '11511.10000',
         '0.25700000',
         1562831632.721,
         's',
         'l',
         ''
      ],
      'timestamp':1562831632721,
      'datetime':'2019-07-11T07:53:52.721Z',
      'symbol':'BTC/USD',
      'type':'limit',
      'side':'sell',
      'takerOrMaker':None,
      'price':11511.1,
      'amount':0.257,
      'cost':2958.3527,
      'fee':None
   },
   {  
      'id':None,
      'order':None,
      'info':[  
         '11510.60000',
         '0.15800000',
         1562831632.7755,
         'b',
         'l',
         ''
      ],
      'timestamp':1562831632775,
      'datetime':'2019-07-11T07:53:52.775Z',
      'symbol':'BTC/USD',
      'type':'limit',
      'side':'buy',
      'takerOrMaker':None,
      'price':11510.6,
      'amount':0.158,
      'cost':1818.6748,
      'fee':None
   }
]
```
### OHLCV Data
Get OHLCV/bar data. Most exchanges don't go very back in time. The very few that go need pagination which will be released soon. Some exchanges return data for today only if interval is very less like 1 minute, 5 minutes, etc. <br>

<code>ohlcv(symbol, start, end, interval, exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| start            | required          | Starting date. (YYYY-MM-DD) for intervals: "1d","1w","1M", (YYYY-MM-DD HH:MM:SS) for intervals: "1m", "5m", "15m", "30m", "1h"| str|
| end           | required          | Ending date. (YYYY-MM-DD) for intervals: "1d","1w","1M", (YYYY-MM-DD HH:MM:SS) for intervals: "1m", "5m", "15m", "30m", "1h"| str|
| interval      | required          | Time Interval. E.g. (1m, 5m, 15m, 30m, 1h, 1d, 1w, 1M). See next table to find out more about time intervals. 1d by default.|str|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. False by default.   | bool  |


Supported time intervals: 



| Inverteal     | Accepted Symbol |
|-----------------|-------------------|
|1 minute         |1m         |
|5 minutes        |5m          |
|15 minutes        |15m        |
|30 minutes        |30m         |
|1 hour         |1h    |
|1 day        |1d   |
|1 week       |1w  |
|1 month      |1M  |

```python
Example:
import libkloudtrader.crypto as crypto

crypto.ohlcv(symbol='BTC/USD',start="2018-01-01",end="2019-01-01",dataframe=True)

crypto.ohlcv(symbol='BTC/USD',start="2019-01-01 15:30:00",end="2019-01-01 17:35:00",interval='1m')
```
```pyhton 
return type : pandas datframe

                        open     high      low    close        volume
time                                                                 
2018-01-01 00:00:00  12673.5  14350.0  12468.5  13873.0  8.144056e+08
2018-01-02 00:00:00  13873.0  14011.5  12772.0  13477.0  6.389587e+08
2018-01-03 00:00:00  13477.0  15269.0  12900.0  14786.5  9.041597e+08
2018-01-04 00:00:00  14786.5  15524.0  14555.0  15157.0  8.126866e+08
2018-01-05 00:00:00  15157.0  15500.0  14150.0  15186.0  8.141421e+08
2018-01-06 00:00:00  15186.0  17088.0  14805.0  16891.0  1.010611e+09
2018-01-07 00:00:00  16891.0  17422.0  16235.0  17210.0  7.643035e+08
2018-01-08 00:00:00  17210.0  17213.0  15770.5  16224.5  8.633417e+08
2018-01-09 00:00:00  16224.5  16329.0  13800.0  14952.5  1.473521e+09
2018-01-10 00:00:00  14952.5  15375.0  14183.0  14465.0  9.990242e+08
2018-01-11 00:00:00  14465.0  15012.5  13426.0  14963.5  1.154658e+09
2018-01-12 00:00:00  14963.5  15033.5  12703.5  13287.5  1.514630e+09
2018-01-13 00:00:00  13287.5  14197.0  12818.5  13874.5  8.862648e+08
2018-01-14 00:00:00  13874.5  14600.0  13810.0  14209.0  5.885310e+08
2018-01-15 00:00:00  14209.0  14364.0  13049.0  13645.0  8.069327e+08
2018-01-16 00:00:00  13645.0  14374.5  13400.0  13621.0  7.473986e+08
2018-01-17 00:00:00  13621.0  13619.0  10100.0  11330.0  2.755983e+09
2018-01-18 00:00:00  11330.0  11799.0   9209.0  11210.0  2.266854e+09
2018-01-19 00:00:00  11210.0  12183.0  10615.5  11252.0  1.431205e+09
2018-01-20 00:00:00  11252.0  12078.0  10956.5  11546.5  9.895290e+08
2018-01-21 00:00:00  11546.5  13008.0  11490.0  12746.5  9.306491e+08
2018-01-22 00:00:00  12746.5  12757.0  11088.5  11560.0  1.143588e+09
2018-01-23 00:00:00  11560.0  11855.0  10020.0  10792.5  1.486838e+09
2018-01-24 00:00:00  10792.5  11437.0   9874.0  10830.0  1.449900e+09
2018-01-25 00:00:00  10830.0  11499.0  10437.0  11394.5  1.131616e+09
2018-01-26 00:00:00  11394.5  11750.0  10840.5  11117.0  9.813252e+08
2018-01-27 00:00:00  11117.0  11653.0  10230.0  11110.0  1.452834e+09
2018-01-28 00:00:00  11110.0  11631.0  10777.5  11398.0  1.009596e+09
2018-01-29 00:00:00  11398.0  11970.0  11350.0  11631.5  7.520359e+08
2018-01-30 00:00:00  11631.5  11768.0  10865.0  11127.0  9.228316e+08
...                      ...      ...      ...      ...           ...
2018-12-03 00:00:00   4136.5   4270.0   4025.0   4096.5  1.787717e+09
2018-12-04 00:00:00   4096.5   4118.5   3729.5   3829.5  1.946678e+09
2018-12-05 00:00:00   3829.5   4042.0   3730.0   3902.0  1.935439e+09
2018-12-06 00:00:00   3902.0   3917.0   3655.0   3695.5  1.775228e+09
2018-12-07 00:00:00   3695.5   3843.0   3400.0   3430.5  2.752500e+09
2018-12-08 00:00:00   3430.5   3542.0   3200.0   3369.0  2.747024e+09
2018-12-09 00:00:00   3369.0   3500.0   3246.0   3397.0  1.640638e+09
2018-12-10 00:00:00   3397.0   3630.0   3370.5   3526.5  1.456050e+09
2018-12-11 00:00:00   3526.5   3596.0   3350.0   3406.0  1.601489e+09
2018-12-12 00:00:00   3406.0   3422.0   3281.5   3344.0  1.214572e+09
2018-12-13 00:00:00   3344.0   3493.5   3321.5   3431.5  1.211426e+09
2018-12-14 00:00:00   3431.5   3439.0   3217.5   3257.5  1.424966e+09
2018-12-15 00:00:00   3257.5   3300.0   3134.5   3193.0  1.536197e+09
2018-12-16 00:00:00   3193.0   3226.0   3121.0   3183.0  1.009583e+09
2018-12-17 00:00:00   3183.0   3260.0   3177.0   3189.5  1.025713e+09
2018-12-18 00:00:00   3189.5   3590.0   3178.0   3495.5  2.156459e+09
2018-12-19 00:00:00   3495.5   3690.0   3435.0   3665.0  2.155901e+09
2018-12-20 00:00:00   3665.0   3916.5   3641.0   3680.0  3.567542e+09
2018-12-21 00:00:00   3680.0   4174.0   3654.5   4069.0  3.971091e+09
2018-12-22 00:00:00   4069.0   4168.0   3770.0   3841.0  3.040224e+09
2018-12-23 00:00:00   3841.0   4007.0   3783.5   3981.0  1.679001e+09
2018-12-24 00:00:00   3981.0   4055.0   3903.0   3944.0  1.492831e+09
2018-12-25 00:00:00   3944.0   4241.0   3943.5   4033.5  2.193196e+09
2018-12-26 00:00:00   4033.5   4043.0   3670.5   3777.0  1.991915e+09
2018-12-27 00:00:00   3777.0   3868.0   3683.0   3806.5  1.419108e+09
2018-12-28 00:00:00   3806.5   3842.0   3565.0   3588.0  1.386767e+09
2018-12-29 00:00:00   3588.0   3960.0   3568.0   3889.5  1.542324e+09
2018-12-30 00:00:00   3889.5   3944.0   3650.0   3712.0  1.267439e+09
2018-12-31 00:00:00   3712.0   3898.5   3671.0   3830.5  1.225536e+09
2019-01-01 00:00:00   3830.5   3839.5   3615.0   3693.0  9.764756e+08

[366 rows x 5 columns]
```

```python
return type : json

[  
   {  
      'time':'2019-01-01 15:30:00',
      'open':3677.5,
      'high':3677.5,
      'low':3677.0,
      'close':3677.5,
      'volume':155170.0
   },
   {  
      'time':'2019-01-01 15:31:00',
      'open':3677.5,
      'high':3679.5,
      'low':3677.0,
      'close':3679.5,
      'volume':464216.0
   },
   .
   .
   .
   {  
      'time':'2019-01-01 17:34:00',
      'open':3688.0,
      'high':3688.0,
      'low':3687.5,
      'close':3688.0,
      'volume':49234.0
   },
   {  
      'time':'2019-01-01 17:35:00',
      'open':3688.0,
      'high':3688.0,
      'low':3687.5,
      'close':3687.5,
      'volume':54317.0
   }
]
```
### Order Book
Get L2/L3 orderbook for a particular market trading symbol.<br>

<code>order_book(symbol, number_of_data_points, exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| number_of_data_points | required for some exchanges  | number of entries/data points you want. 0 by default|int|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |

```python
Example:

import libkloudtrader.crypto as crypto

crypto.order_book('BTC/USD',number_of_data_points=5)
```

```python
return type : json

{  
   'bids':[  
      [  
         11500.0, #price
         63536.0 #amount
      ],
      [  
         11499.5, #price
         52609.0 #amount
      ],
      [  
         11499.0, #price
         1188.0 #amount
      ],
      [  
         11498.5, #price
         1660.0 #amount
      ],
      [  
         11498.0, #price
         42.0 #amount
      ]
   ],
   'asks':[  
      [  
         11500.5, #price
         833947.0 #amount
      ],
      [  
         11501.0, #price
         2757.0 #amount
      ],
      [  
         11501.5, #price
         261.0 #amount
      ],
      [  
         11502.0, #price
         666.0 #amount
      ],
      [  
         11502.5, #price
         140.0 #amount
      ]
   ],
   'timestamp':None,
   'datetime':None,
   'nonce':None
}
```

### L2 order Book
Get Level 2 (price-aggregated) order book for a particular symbol.<br>

<code>L2_order_book(symbol, limit, exchange)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| number_of_data_points | required for some exchanges  | number of entries/data points you want. 0 by default|int|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |

```python 
Example:

import libkloudtrader.crypto as crypto 

crypto.L2_order_book(symbol='BTC/USD',number_of_data_points=5)
```

```python 
return type : json

'bids':[  
   [  
      11435.0,
      30506.0
   ],
   [  
      11434.5,
      11317.0
   ],
   [  
      11434.0,
      117531.0
   ],
   [  
      11433.5,
      174.0
   ],
   [  
      11433.0,
      17546.0
   ]
],
'asks':[  
   [  
      11435.5,
      1012291.0
   ],
   [  
      11436.0,
      12891.0
   ],
   [  
      11436.5,
      310000.0
   ],
   [  
      11437.0,
      357006.0
   ],
   [  
      11437.5,
      16914.0
   ]
],
'timestamp':None,
'datetime':None,
'nonce':None
}
```