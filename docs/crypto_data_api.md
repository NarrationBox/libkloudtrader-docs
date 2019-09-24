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

#### Example

```python
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

<code>markets(exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python
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

<code>market_strcuture(symbol, exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python
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

<code>currencies(exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

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

### Latest Price Information
Get latest price related information for a given symbool from the given exchange<br>

<code>latest_price_info(symbol, exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python 
import libkloudtrader.crypto as crypto

crypto.latest_price_info('BTC/USD')
```

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
### Latest Price information for all symbols
Get latest price related information for all symbols listed on an exchange<br>

<code>quotes_for_all_symbols(exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python 
import libkloudtrader.crypto as crypto

crypto.latest_price_info_for_all()
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

<code>trades(symbol, number_of_data_points, exchange, rate_liit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| number_of_data_points | required for some exchanges  | number of trades/data points you want. 1 by default|int|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python 
import libkloudtrader.crypto as crypto 

crypto.trades('BTC/USD')
```
```python
[ 
   { 
      'id':'74451323',
      'order':None,
      'info':{ 
         'time':'2019-09-23T08:57:47.89Z',
         'trade_id':74451323,
         'price':'9926.08000000',
         'size':'0.16232422',
         'side':'sell'
      },
      'timestamp':1569229067089,
      'datetime':'2019-09-23T08:57:47.089Z',
      'symbol':'BTC/USD',
      'type':None,
      'takerOrMaker':None,
      'side':'buy',
      'price':9926.08,
      'amount':0.16232422,
      'fee':{ 
         'cost':None,
         'currency':'USD',
         'rate':None
      },
      'cost':1611.2431936576
   }
]
```
### OHLCV Data
Get OHLCV/bar data. Most exchanges don't go very back in time. The very few that go need pagination which will be released soon. Some exchanges return data for today only if interval is very less like 1 minute, 5 minutes, etc. <br>

<code>ohlcv(symbol, start, end, interval, exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| start            | required          | Starting date. (YYYY-MM-DD) for intervals: "1d","1w","1M", (YYYY-MM-DD HH:MM:SS) for intervals: "1m", "5m", "15m", "30m", "1h"| str|
| end           | required          | Ending date. (YYYY-MM-DD) for intervals: "1d","1w","1M", (YYYY-MM-DD HH:MM:SS) for intervals: "1m", "5m", "15m", "30m", "1h"| str|
| interval      | required          | Time Interval. E.g. (1m, 5m, 15m, 30m, 1h, 1d, 1w, 1M). See next table to find out more about time intervals. 1d by default.|str|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
| dataframe       | optional          | True if you want data as pandas dataframe. False for JSON. True by default.   | bool  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|


Supported time intervals: 



| Interval    | Accepted Symbol |
|-----------------|-------------------|
|1 minute         |1m         |
|5 minutes        |5m          |
|15 minutes        |15m        |
|30 minutes        |30m         |
|1 hour         |1h    |
|1 day        |1d   |
|1 week       |1w  |
|1 month      |1M  |

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python 
import libkloudtrader.crypto as crypto

crypto.ohlcv(symbol='BTC/USD',start="2019-01-01",end="2019-07-01")

crypto.ohlcv(symbol='BTC/USD',start="2019-01-01 15:30:00",end="2019-01-01 17:35:00",interval='1m')
```
<!--END_DOCUSAURUS_CODE_TABS-->

```python 
return type : pandas datframe

                open      high       low     close        volume
datetime                                                            
2019-01-02   3826.10   3916.57   3770.07   3890.79   9982.470846
2019-01-03   3890.80   3893.80   3758.07   3787.57   9327.647089
2019-01-04   3787.57   3849.00   3730.00   3820.82   9225.150500
2019-01-05   3820.82   3874.12   3775.00   3798.62   6451.007750
2019-01-06   3799.99   4088.00   3756.01   4040.99  10057.453673
...              ...       ...       ...       ...           ...
2019-06-28  11159.29  12444.77  10737.87  12360.45  42092.854956
2019-06-29  12360.42  12379.99  11318.94  11865.29  28879.349941
2019-06-30  11869.84  12200.00  10650.06  10761.26  28722.485390
2019-07-01  10761.26  11210.52   9953.00  10577.63  39825.954711
2019-07-02  10578.23  10925.00   9651.00  10829.18  43614.893653

[182 rows x 5 columns]

```

```python
return type :  pandas dataframe

                        open     high      low    close    volume
time                                                             
2019-01-01 15:31:00  3679.22  3680.39  3679.22  3680.39  4.498412
2019-01-01 15:32:00  3680.39  3687.00  3679.45  3687.00  7.759357
2019-01-01 15:33:00  3684.50  3687.43  3684.50  3687.43  2.075761
2019-01-01 15:34:00  3687.41  3689.39  3684.49  3685.41  4.141909
2019-01-01 15:35:00  3687.43  3689.39  3687.43  3688.11  2.015642
...                      ...      ...      ...      ...       ...
2019-01-01 17:32:00  3694.71  3694.71  3694.70  3694.71  2.954000
2019-01-01 17:33:00  3694.71  3694.71  3694.70  3694.71  1.222838
2019-01-01 17:34:00  3694.71  3694.93  3694.00  3694.00  2.965331
2019-01-01 17:35:00  3694.69  3694.72  3694.00  3694.01  1.171569
2019-01-01 17:36:00  3694.01  3694.01  3694.00  3694.01  1.098283

[126 rows x 5 columns]
```

### Latest Order book entry
Get latest entry from the orderbook direct from your favorite exchange exchange<br>

<code>latest_order_book_entry(symbol, exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python
import libkloudtrader.crypto as crypto

crypto.latest_order_book_entry('BTC/USD')
```

```python
return type: dict

{ 
   'symbol':'BTC/USD',
   'ask':9889.91,
   'asksize':0.46499152,
   'bid':9889.01,
   'bidsize':2.0,
   'datetime':None,
   'nonce':None
}
```

### Latest entry from Level 2 order book
Get latest entry from the Level 2 (price-aggregated) orderbook direct from your favorite exchange exchange<br>

<code>latest_L2_order_book_entry(symbol, exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python
import libkloudtrader.crypto as crypto

crypto.latest_L2_order_book_entry('BTC/USD')
```

```python
return type: dict

{ 
   'symbol':'BTC/USD',
   'ask':9889.89,
   'asksize':6.6737705,
   'bid':9889.88,
   'bidsize':0.10065141,
   'datetime':None,
   'nonce':None
}
```



### Order book
Get order book for a particular market trading symbol.<br>

<code>order_book(symbol, number_of_data_points, exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
| number_of_data_points | required for some exchanges  | number of entries/data points you want. 1 by default|int|
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python
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

<code>L2_order_book(symbol, limit, exchange, rate_limit)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The Symbol of your crypto currencies (E.g BTC/USD, ETH/BTC)|str| 
| number_of_data_points | required for some exchanges  | number of entries/data points you want. 0 by default|int|
| exchange        | required as environment variable| The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|rate_limit|optional|Flag for setting wether your requests to the exchange should be rate limited or not. True by default.|bool|

#### Example

```python 
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