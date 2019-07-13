---
id: crypto_trading_api
title: Crypto Trading
sidebar_label: Crypto Trading
---

## Buy, Sell crypto currencies of your choice. More than 100 exchanges supported.
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

> ***Note:*** libkloudtrader.crypto only supports Buy and Sell orders right now. Selling Short/Leverage trading is not supported yet but will be available soon. 

### Buy
Place a buy order.

<code>buy(symbol, quantity, order_type, limit, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The symbol of currency pair you want to trade(E.g BTC/USD, ETH/BTC)|str| 
| quantity        | required          | Quantity to be bought                   |int/float |
| order_type      | required          | Type of order to be placed (Options: market, limit). Market by default.|
| price           | optional (required for limit order)         | The desired limit price for "limit" order.|
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

```python
Example:

import libkloudtrader.crypto as crypto

crypto.buy('BTC/USD',1,order_type='limit',price=11760)
```

```python
return type : json

{  
   'info':{  
      'orderID':'e0e6b6cf-916e-02eb-b972-fdf82e8e56f4',
      'clOrdID':'',
      'clOrdLinkID':'',
      'account':212143,
      'symbol':'XBTUSD',
      'side':'Buy',
      'simpleOrderQty':None,
      'orderQty':1,
      'price':11760,
      'displayQty':None,
      'stopPx':None,
      'pegOffsetValue':None,
      'pegPriceType':'',
      'currency':'USD',
      'settlCurrency':'XBt',
      'ordType':'Limit',
      'timeInForce':'GoodTillCancel',
      'execInst':'',
      'contingencyType':'',
      'exDestination':'XBME',
      'ordStatus':'Filled',
      'triggered':'',
      'workingIndicator':False,
      'ordRejReason':'',
      'simpleLeavesQty':None,
      'leavesQty':0,
      'simpleCumQty':None,
      'cumQty':1,
      'avgPx':11722,
      'multiLegReportingType':'SingleSecurity',
      'text':'Submitted via API.',
      'transactTime':'2019-07-12T10:50:06.211Z',
      'timestamp':'2019-07-12T10:50:06.211Z'
   },
   'id':'e0e6b6cf-916e-02eb-b972-fdf82e8e56f4',
   'timestamp':1562928606211,
   'datetime':'2019-07-12T10:50:06.211Z',
   'lastTradeTimestamp':1562928606211,
   'symbol':'BTC/USD',
   'type':'limit',
   'side':'buy',
   'price':11760.0,
   'amount':1.0,
   'cost':11722.0,
   'average':11722.0,
   'filled':1.0,
   'remaining':0.0,
   'status':'closed',
   'fee':None
}
```

### Sell
Place a sell order.

<code>sell(symbol, quantity, order_type, limit, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| symbol          | required          | The symbol of currency pair you want to trade(E.g BTC/USD, ETH/BTC)|str| 
| quantity        | required          | Quantity to be bought                   |int/float |
| order_type      | required          | Type of order to be placed (Options: market, limit). Market by default.|
| price           | optional (required for limit order)         | The desired limit price for "limit" order.|
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

```python
Example:

import libkloudtrader.crypto as crypto

crypto.sell('BTC/USD',1,order_type='limit',price=11765)
```

```python
return type : json

{  
   'info':{  
      'orderID':'4a00fa7a-787c-9988-94b5-205c6f582e16',
      'clOrdID':'',
      'clOrdLinkID':'',
      'account':212143,
      'symbol':'XBTUSD',
      'side':'Sell',
      'simpleOrderQty':None,
      'orderQty':1,
      'price':11765,
      'displayQty':None,
      'stopPx':None,
      'pegOffsetValue':None,
      'pegPriceType':'',
      'currency':'USD',
      'settlCurrency':'XBt',
      'ordType':'Limit',
      'timeInForce':'GoodTillCancel',
      'execInst':'',
      'contingencyType':'',
      'exDestination':'XBME',
      'ordStatus':'New',
      'triggered':'',
      'workingIndicator':True,
      'ordRejReason':'',
      'simpleLeavesQty':None,
      'leavesQty':1,
      'simpleCumQty':None,
      'cumQty':0,
      'avgPx':None,
      'multiLegReportingType':'SingleSecurity',
      'text':'Submitted via API.',
      'transactTime':'2019-07-12T11:08:49.509Z',
      'timestamp':'2019-07-12T11:08:49.509Z'
   },
   'id':'4a00fa7a-787c-9988-94b5-205c6f582e16',
   'timestamp':1562929729509,
   'datetime':'2019-07-12T11:08:49.509Z',
   'lastTradeTimestamp':1562929729509,
   'symbol':'BTC/USD',
   'type':'limit',
   'side':'sell',
   'price':11765.0,
   'amount':1.0,
   'cost':0.0,
   'average':None,
   'filled':0.0,
   'remaining':1.0,
   'status':'open',
   'fee':None
}
```

### Cancel Order
Cancel an order if it is not filled yet.

<code>cancel_order(order_id, exchange, api_key, api_secret, exchange_password, exchange_uid, test_mode)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| order_id        | required          | Id of the order you want to cancel  | str |
| exchange        | required as environment variable          | The exchange you want to trade on. Will automatically be present when you deploy to Narwhal after you link your favored exchange| str  |
|api_key          | required as environment variable          | Your API Key. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|api_secret          | required as environment variable          | Your API Secret. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_password          | optional/set as environment variable          | Your password or any special passphrase provided by your exchange(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|exchange_uid         | optional/set as environment variable          | A unique Id provided by your exchange for trading(if needed). Not all exchanges need this, thus it is optional. Will automatically be present when you deploy to Narwhal after linking your exchange. | str |
|test_mode        | optional          | True if you want to want the API to be executed in test/sandbox mode. False by default. | bool|

```python 
Example:

import libkloudtrader.crypto as crypto 

crypto.cancel_order(order_id="4a00fa7a-787c-9988-94b5-205c6f582e16")
```

```python 
return type : json

{  
   'info':{  
      'orderID':'4a00fa7a-787c-9988-94b5-205c6f582e16',
      'clOrdID':'',
      'clOrdLinkID':'',
      'account':212143,
      'symbol':'XBTUSD',
      'side':'Sell',
      'simpleOrderQty':None,
      'orderQty':1,
      'price':11765,
      'displayQty':None,
      'stopPx':None,
      'pegOffsetValue':None,
      'pegPriceType':'',
      'currency':'USD',
      'settlCurrency':'XBt',
      'ordType':'Limit',
      'timeInForce':'GoodTillCancel',
      'execInst':'',
      'contingencyType':'',
      'exDestination':'XBME',
      'ordStatus':'Canceled',
      'triggered':'',
      'workingIndicator':False,
      'ordRejReason':'',
      'simpleLeavesQty':None,
      'leavesQty':0,
      'simpleCumQty':None,
      'cumQty':0,
      'avgPx':None,
      'multiLegReportingType':'SingleSecurity',
      'text':'Canceled: Canceled via API.\nSubmitted via API.',
      'transactTime':'2019-07-12T11:08:49.509Z',
      'timestamp':'2019-07-12T11:17:13.770Z'
   },
   'id':'4a00fa7a-787c-9988-94b5-205c6f582e16',
   'timestamp':1562930233770,
   'datetime':'2019-07-12T11:17:13.770Z',
   'lastTradeTimestamp':1562929729509,
   'symbol':'BTC/USD',
   'type':'limit',
   'side':'sell',
   'price':11765.0,
   'amount':1.0,
   'cost':0.0,
   'average':None,
   'filled':0.0,
   'remaining':1.0,
   'status':'canceled',
   'fee':None
}
```