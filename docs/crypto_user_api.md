---
id: crypto_user_api
title: User
sidebar_label: User
---


## Get user account related data from your prefrred exchanges. More than 100 exchanges supported.
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

> **Note:** All of the User APIs in libkloudtrader.crypto have a test mode flag which lets you talk to your exchange's sandbox/test account. This means that you can place orders, etc in test mode with virtaul currency. But not all exchanges support test mode. Infact very few do. Also, in most of the cases you have to create a different account with your exchange for test/sandbox privileges thus you will have different API credentials for your test account. The exchanges that support test mode are:

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


> ***Note:*** Not every exchange supports every API. But all of them support the major ones. You will receive {'message': '400 Bad Request: Functionality not available for this exchange.'} if your exchange doesn't support it.
 
> ***Note:*** Returned data may differ from exchange to exchange

### Balance
Get your account balance<br>

<code>user_balance(exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

#### Example

```python 
import libkloudtrader.crypto as crypto 

crypto.user_balance()
```
```python 
{  
   'info':[  
      {  
         'id':'*****',
         'currency':'BTC',
         'balance':'0.0000000000000000',
         'available':'0',
         'hold':'0.0000000000000000',
         'profile_id':'*******'
      },
      .
      .
      .
      'free':{  
      'BTC':0.0,
      'USDC':0.0,
      'USD':112.0,
      'GBP':0.0,
      'EUR':0.0,
      'ETH':0.0,
      'BAT':0.0
   },
   'used':{  
      'BTC':0.0,
      'USDC':0.0,
      'USD':0.0,
      'GBP':0.0,
      'EUR':0.0,
      'ETH':0.0,
      'BAT':0.0
   },
   'total':{  
      'BTC':0.0,
      'USDC':0.0,
      'USD':112.0,
      'GBP':0.0,
      'EUR':0.0,
      'ETH':0.0,
      'BAT':0.0
   }
}
```
### Ledger History
Get your latest ledger history<br>

<code>user_ledger(currency_code, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| currency_code   | required          | Currency Code. E.g. BTC, USD, ETH, etc  |  str |
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

#### Example

```python
import libkloudtrader.crypto as crypto 

crypto.user_ledger(currency_code="USD")
```

```python
return type : json

[  
   {  
      'info':{  
         'transactID':'00000000-0000-0000-0000-000000000000',
         'account':****,
         'currency':'XBt',
         'transactType':'UnrealisedPNL',
         'amount':****,
         'fee':0,
         'transactStatus':'Pending',
         'address':'XBTUSD',
         'tx':'',
         'text':'',
         'transactTime':None,
         'walletBalance':****,
         'marginBalance':****,
         'timestamp':None
      },
      'id':'00000000-0000-0000-0000-000000000000',
      'direction':'out',
      'account':'****',
      'referenceId':'',
      'referenceAccount':None,
      'type':'UnrealisedPNL',
      'currency':'BTC',
      'amount':****,
      'before':****,
      'after':****,
      'status':'pending',
      'timestamp':None,
      'datetime':None,
      'fee':{  
         'cost':0.0,
         'currency':'BTC'
      }
   }
]
```

### Trades
Get your latest trades.

<code>user_trades(symbol, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The symbol you want your trades of(E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

### Closed Orders 
Get all of your closed orders<br>

<code>user_closed_orders(symbol, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The symbol you want your closes orders of(E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

#### Example

```python
import libkloudtrader.crypto as crypto

crypto.user_closed_orders(symbol='BTC/USD')
```

```python
return type : json

[  
   {  
      'id':'55d7e42e-3a6c-41f7-a692-9bdcd23dce70',
      'info':{  
         'id':'55d7e42e-3a6c-41f7-a692-9bdcd23dce70',
         'product_id':'BTC-USD',
         'side':'buy',
         'funds':'99.7008973000000000',
         'specified_funds':'100.0000000000000000',
         'type':'market',
         'post_only':False,
         'created_at':'2019-07-11T15:10:25.795687Z',
         'done_at':'2019-07-11T15:10:25.803Z',
         'done_reason':'filled',
         'fill_fees':'0.2991026897760000',
         'filled_size':'0.96413263',
         'executed_value':'99.7008965920000000',
         'status':'done',
         'settled':True
      },
      'timestamp':1562857825795,
      'datetime':'2019-07-11T15:10:25.795Z',
      'lastTradeTimestamp':None,
      'status':'closed',
      'symbol':'BTC/USD',
      'type':'market',
      'side':'buy',
      'price':None,
      'cost':99.700896592,
      'amount':99.7008973,
      'filled':0.96413263,
      'remaining':98.73676467,
      'fee':{  
         'cost':0.2991026898,
         'currency':'USD',
         'rate':None
      }
   },
   {  
      'id':'b5a605a6-70de-493a-a2b8-714d4be1d9f1',
      'info':{  
         'id':'b5a605a6-70de-493a-a2b8-714d4be1d9f1',
         'product_id':'BTC-USD',
         'side':'buy',
         'funds':'19.9401794600000000',
         'specified_funds':'20.0000000000000000',
         'type':'market',
         'post_only':False,
         'created_at':'2019-07-11T15:11:13.041405Z',
         'done_at':'2019-07-11T15:11:13.47Z',
         'done_reason':'filled',
         'fill_fees':'0.0598205371410000',
         'filled_size':'0.19282670',
         'executed_value':'19.9401790470000000',
         'status':'done',
         'settled':True
      },
      'timestamp':1562857873041,
      'datetime':'2019-07-11T15:11:13.041Z',
      'lastTradeTimestamp':None,
      'status':'closed',
      'symbol':'BTC/USD',
      'type':'market',
      'side':'buy',
      'price':None,
      'cost':19.940179047,
      'amount':19.94017946,
      'filled':0.1928267,
      'remaining':19.74735276,
      'fee':{  
         'cost':0.0598205371,
         'currency':'USD',
         'rate':None
      }
   }
]
```

### Individual Order
Get info about an individual order

<code>get_order(order_id, symbol, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| order_id        | required          | Id of the order you want info about   | str |
| symbol          | required          | The symbol you want your closes orders of(E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

#### Example

```python 
import libkloudtrader.crypto as crypto 

crypto.get_order(order_id="55d7e42e-3a6c-41f7-a692-9bdcd23dce70",symbol='BTC/USD')
```

```python
return type : json

{  
   'id':'55d7e42e-3a6c-41f7-a692-9bdcd23dce70',
   'info':{  
      'id':'55d7e42e-3a6c-41f7-a692-9bdcd23dce70',
      'product_id':'BTC-USD',
      'side':'buy',
      'funds':'99.7008973000000000',
      'specified_funds':'100.0000000000000000',
      'type':'market',
      'post_only':False,
      'created_at':'2019-07-11T15:10:25.795687Z',
      'done_at':'2019-07-11T15:10:25.803Z',
      'done_reason':'filled',
      'fill_fees':'0.2991026897760000',
      'filled_size':'0.96413263',
      'executed_value':'99.7008965920000000',
      'status':'done',
      'settled':True
   },
   'timestamp':1562857825795,
   'datetime':'2019-07-11T15:10:25.795Z',
   'lastTradeTimestamp':None,
   'status':'closed',
   'symbol':'BTC/USD',
   'type':'market',
   'side':'buy',
   'price':None,
   'cost':99.700896592,
   'amount':99.7008973,
   'filled':0.96413263,
   'remaining':98.73676467,
   'fee':{  
      'cost':0.2991026898,
      'currency':'USD',
      'rate':None
   }
}
```

### All orders
Get info about all of your orders wether they are closed, half filled or even rejected.

<code>user_orders(symbol, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The symbol you want your closes orders of(E.g BTC/USD, ETH/BTC)|str| 
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

#### Example

```python
import libkloudtrader.crypto as crypto 

crypto.user_orders(symbol="BTC/USD")
```

```python
return type : json

[  
   {  
      'id':'55d7e42e-3a6c-41f7-a692-9bdcd23dce70',
      'info':{  
         'id':'55d7e42e-3a6c-41f7-a692-9bdcd23dce70',
         'product_id':'BTC-USD',
         'side':'buy',
         'funds':'99.7008973000000000',
         'specified_funds':'100.0000000000000000',
         'type':'market',
         'post_only':False,
         'created_at':'2019-07-11T15:10:25.795687Z',
         'done_at':'2019-07-11T15:10:25.803Z',
         'done_reason':'filled',
         'fill_fees':'0.2991026897760000',
         'filled_size':'0.96413263',
         'executed_value':'99.7008965920000000',
         'status':'done',
         'settled':True
      },
      'timestamp':1562857825795,
      'datetime':'2019-07-11T15:10:25.795Z',
      'lastTradeTimestamp':None,
      'status':'closed',
      'symbol':'BTC/USD',
      'type':'market',
      'side':'buy',
      'price':None,
      'cost':99.700896592,
      'amount':99.7008973,
      'filled':0.96413263,
      'remaining':98.73676467,
      'fee':{  
         'cost':0.2991026898,
         'currency':'USD',
         'rate':None
      }
   },
   {  
      'id':'b5a605a6-70de-493a-a2b8-714d4be1d9f1',
      'info':{  
         'id':'b5a605a6-70de-493a-a2b8-714d4be1d9f1',
         'product_id':'BTC-USD',
         'side':'buy',
         'funds':'19.9401794600000000',
         'specified_funds':'20.0000000000000000',
         'type':'market',
         'post_only':False,
         'created_at':'2019-07-11T15:11:13.041405Z',
         'done_at':'2019-07-11T15:11:13.47Z',
         'done_reason':'filled',
         'fill_fees':'0.0598205371410000',
         'filled_size':'0.19282670',
         'executed_value':'19.9401790470000000',
         'status':'done',
         'settled':True
      },
      'timestamp':1562857873041,
      'datetime':'2019-07-11T15:11:13.041Z',
      'lastTradeTimestamp':None,
      'status':'closed',
      'symbol':'BTC/USD',
      'type':'market',
      'side':'buy',
      'price':None,
      'cost':19.940179047,
      'amount':19.94017946,
      'filled':0.1928267,
      'remaining':19.74735276,
      'fee':{  
         'cost':0.0598205371,
         'currency':'USD',
         'rate':None
      }
   }
]
```

### Positions
Get your positions. Many exchanges don't support this functionality via their APIs.

<code>user_positions(exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

#### Example

```python
import libkloudtrade.crypto as crypto

crypto.user_positions()
```

```python 
return type : json

[  
   {  
      'account':****,
      'symbol':'ETHUSD',
      'currency':'XBt',
      'underlying':'ETH',
      'quoteCurrency':'USD',
      'commission':0.00075,
      'initMarginReq':0.02,
      'maintMarginReq':0.01,
      'riskLimit':5000000000,
      'leverage':50,
      'crossMargin':True,
      'deleveragePercentile':1,
      'rebalancedPnl':3186,
      'prevRealisedPnl':0,
      'prevUnrealisedPnl':0,
      'prevClosePrice':274.38,
      'openingTimestamp':'2019-07-11T18:00:00.000Z',
      'openingQty':-1,
      'openingCost':-29710,
      'openingComm':-96,
      'openOrderBuyQty':0,
      'openOrderBuyCost':0,
      'openOrderBuyPremium':0,
      'openOrderSellQty':0,
      'openOrderSellCost':0,
      'openOrderSellPremium':0,
      'execBuyQty':0,
      'execBuyCost':0,
      'execSellQty':0,
      'execSellCost':0,
      'execQty':0,
      'execCost':0,
      'execComm':0,
      'currentTimestamp':'2019-07-11T18:05:46.007Z',
      'currentQty':-1,
      'currentCost':-29710,
      'currentComm':-96,
      'realisedCost':0,
      'unrealisedCost':-29710,
      'grossOpenCost':0,
      'grossOpenPremium':0,
      'grossExecCost':0,
      'isOpen':True,
      'markPrice':274.2,
      'markValue':-27420,
      'riskValue':27420,
      'homeNotional':-0.0116767865,
      'foreignNotional':3.2017748716,
      'posState':'',
      'posCost':-29710,
      'posCost2':-29176,
      'posCross':534,
      'posInit':595,
      'posComm':24,
      'posLoss':534,
      'posMargin':619,
      'posMaint':322,
      'posAllowance':0,
      'taxableMargin':0,
      'initMargin':0,
      'maintMargin':2909,
      'sessionMargin':0,
      'targetExcessMargin':0,
      'varMargin':0,
      'realisedGrossPnl':0,
      'realisedTax':0,
      'realisedPnl':96,
      'unrealisedGrossPnl':2290,
      'longBankrupt':0,
      'shortBankrupt':0,
      'taxBase':2290,
      'indicativeTaxRate':0,
      'indicativeTax':0,
      'unrealisedTax':0,
      'unrealisedPnl':2290,
      'unrealisedPnlPcnt':0.0771,
      'unrealisedRoePcnt':3.8539,
      'simpleQty':None,
      'simpleCost':None,
      'simpleValue':None,
      'simplePnl':None,
      'simplePnlPcnt':None,
      'avgCostPrice':297.1,
      'avgEntryPrice':297.1,
      'breakEvenPrice':329.9,
      'marginCallPrice':10361.65,
      'liquidationPrice':10361.65,
      'bankruptPrice':10364.65,
      'timestamp':'2019-07-11T18:05:46.007Z',
      'lastPrice':274.2,
      'lastValue':-27420
   },
   {  
      'account':****,
      'symbol':'XBTUSD',
      'currency':'XBt',
      'underlying':'XBT',
      'quoteCurrency':'USD',
      'commission':0.00075,
      'initMarginReq':0.01,
      'maintMarginReq':0.005,
      'riskLimit':20000000000,
      'leverage':100,
      'crossMargin':True,
      'deleveragePercentile':1,
      'rebalancedPnl':0,
      'prevRealisedPnl':0,
      'prevUnrealisedPnl':0,
      'prevClosePrice':11727.31,
      'openingTimestamp':'2019-07-11T18:00:00.000Z',
      'openingQty':1,
      'openingCost':-8435,
      'openingComm':6,
      'openOrderBuyQty':0,
      'openOrderBuyCost':0,
      'openOrderBuyPremium':0,
      'openOrderSellQty':0,
      'openOrderSellCost':0,
      'openOrderSellPremium':0,
      'execBuyQty':0,
      'execBuyCost':0,
      'execSellQty':0,
      'execSellCost':0,
      'execQty':0,
      'execCost':0,
      'execComm':0,
      'currentTimestamp':'2019-07-11T18:05:46.007Z',
      'currentQty':1,
      'currentCost':-8435,
      'currentComm':6,
      'realisedCost':0,
      'unrealisedCost':-8435,
      'grossOpenCost':0,
      'grossOpenPremium':0,
      'grossExecCost':0,
      'isOpen':True,
      'markPrice':11688.93,
      'markValue':-8555,
      'riskValue':8555,
      'homeNotional':8.555e-05,
      'foreignNotional':-1,
      'posState':'',
      'posCost':-8435,
      'posCost2':-8435,
      'posCross':120,
      'posInit':85,
      'posComm':7,
      'posLoss':0,
      'posMargin':212,
      'posMaint':81,
      'posAllowance':0,
      'taxableMargin':0,
      'initMargin':0,
      'maintMargin':92,
      'sessionMargin':0,
      'targetExcessMargin':0,
      'varMargin':0,
      'realisedGrossPnl':0,
      'realisedTax':0,
      'realisedPnl':-6,
      'unrealisedGrossPnl':-120,
      'longBankrupt':0,
      'shortBankrupt':0,
      'taxBase':0,
      'indicativeTaxRate':0,
      'indicativeTax':0,
      'unrealisedTax':0,
      'unrealisedPnl':-120,
      'unrealisedPnlPcnt':-0.0142,
      'unrealisedRoePcnt':-1.4226,
      'simpleQty':None,
      'simpleCost':None,
      'simpleValue':None,
      'simplePnl':None,
      'simplePnlPcnt':None,
      'avgCostPrice':11855.5,
      'avgEntryPrice':11855.5,
      'breakEvenPrice':11864,
      'marginCallPrice':99,
      'liquidationPrice':99,
      'bankruptPrice':99,
      'timestamp':'2019-07-11T18:05:46.007Z',
      'lastPrice':11688.93,
      'lastValue':-8555
   }
]
```

### User Transactions
Get all of your latest transactions

<code>user_transactions(currency_code, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| currency_code   | required          | Currency Code. E.g. BTC, USD, ETH, etc  |  str |
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

#### Example

```python
import libkloudtrader.crypto as crypto 

crypto.user_transactions('USD')
```

```python

[  
   {  
      'info':{  
         'id':'*******',
         'type':'deposit',
         'created_at':'2019-07-11 10:20:27.876097+00',
         'completed_at':'2019-07-11 10:20:27.882044+00',
         'canceled_at':None,
         'processed_at':'2019-07-11 10:20:27.882044+00',
         'user_nonce':None,
         'amount':'*******',
         'details':{  
            'coinbase_account_id':'*******',
            'coinbase_transaction_id':'*******'
         },
         'currency':'USD'
      },
      'id':'*******',
      'txid':None,
      'timestamp':1562840427876,
      'datetime':'2019-07-11T10:20:27.876Z',
      'address':None,
      'tag':None,
      'type':'deposit',
      'amount':*******,
      'currency':'USD',
      'status':'ok',
      'updated':1562840427882,
      'fee':None
   },
   {  
      'info':{  
         'id':'*******',
         'type':'deposit',
         'created_at':'2019-07-11 10:22:21.470484+00',
         'completed_at':'2019-07-11 10:22:21.477402+00',
         'canceled_at':None,
         'processed_at':'2019-07-11 10:22:21.477402+00',
         'user_nonce':None,
         'amount':'*******',
         'details':{  
            'coinbase_account_id':'*******',
            'coinbase_transaction_id':'*******'
         },
         'currency':'USD'
      },
      'id':'*******',
      'txid':None,
      'timestamp':1562840541470,
      'datetime':'2019-07-11T10:22:21.470Z',
      'address':None,
      'tag':None,
      'type':'deposit',
      'amount':****,
      'currency':'USD',
      'status':'ok',
      'updated':1562840541477,
      'fee':None
   }
]
```