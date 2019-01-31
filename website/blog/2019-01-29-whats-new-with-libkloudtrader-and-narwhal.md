---
title: What’s new with LibKloudTrader and Narwhal? 
author: 
authorURL: 
authorFBID: 
---
## Hey KloudTraders! How is 2019 treating you? We hope it’s all good.
<p align="center">
<img width="600" height="200" src="https://raw.githubusercontent.com/KloudTrader/libkloudtrader-docs/master/website/static/img/2019.png">
</p>
We know the markets haven’t been very predictable lately, but we are not the ones who just take what the markets offer. Remember, we <b>seek α</b>, and won't just <b>settle for β</b>. This is why we are constantly adding new features to both LibKloudTrader and <a href="https://kloudtrader.com/narwhal" target="_blank">Narwhal</a> so that it becomes easier to build and automate your trading systems.
<br>

To begin with, LibKloudTrader’s data module now provides **[Tick data](https://docs.kloudtrader.com/docs/data_api#tick-data), [5-minute bar data](https://docs.kloudtrader.com/docs/data_api#5-minute-bar-data), [15-minute bar data](https://docs.kloudtrader.com/docs/data_api#15-minute-bar-data) till last second for today/last trading day or tick data for a particular time**. The bar data contains **OHLCV data + VWAP data**. This is pretty good for backtesting precision. Now you don’t just have to backtest with historical 1-day bar data but can backtest on latest data points. The data points go up to 1 week in history (on Tradier accounts). Why is this good? Simple; because it’s recent. It’s pretty self-explanatory that testing one’s strategy on recent intraday price and volume points is much more efficient than testing it on much older interday bars(OHLCV). As usual, we have tried to make the APIs as simple as possible, so that even beginners can get hold of it easily.

E.g. Let’s say you want tick data for AAPL from 12:00 on 2019/01/28 till 12:10 on 2019/01/28, you can get it in 3 lines:

```python
from libkloudtrader.defaults import * 
from libkloudtrader.equities.data import tick_data 
tick_data('AAPL',start="2019-01-28 12:00", end="2019-01-28 12:10")

Returns:
[  
   {  
      'price':155.03,
      'time':'2019-01-28T12:30:00',
      'timestamp':1548696600,
      'volume':100
   },
   {  
      'price':155.03,
      'time':'2019-01-28T12:30:00',
      'timestamp':1548696600,
      'volume':100
   },
   .
   .
   .
   {  
      'price':155.0301,
      'time':'2019-01-28T12:39:56',
      'timestamp':1548697196,
      'volume':100
   },
   {  
      'price':155.0363,
      'time':'2019-01-28T12:39:57',
      'timestamp':1548697197,
      'volume':2200
   }
]
```
Another example is of 5-minute bar data. Let’s say you want 15-minute bar data for AAPL from 12:00 on 2019/01/28 till 12:10 on 2019/01/28, you can get it in 3 lines:

```python 
from libkloudtrader.defaults import * 
from libkloudtrader.equities.data import min15_bar_data
min15_bar_data('AAPL',start="2019-01-28 12:00",end="2019-01-28 16:00")

Returns:
[  
   {  
      'time':'2019-01-28T12:00:00',
      'timestamp':1548694800,
      'price':154.62,
      'open':154.46,
      'high':154.87,
      'low':154.37,
      'close':154.62,
      'volume':379628,
      'vwap':154.644
   },
   {  
      'time':'2019-01-28T12:15:00',
      'timestamp':1548695700,
      'price':154.85000000000002,
      'open':154.62,
      'high':155.08,
      'low':154.62,
      'close':155.0264,
      'volume':359301,
      'vwap':154.88267
   },
   .
   .
   .
   {  
   'time':'2019-01-28T15:45:00',
   'timestamp':1548708300,
   'price':156.03,
   'open':155.78,
   'high':156.33,
   'low':155.73,
   'close':156.3,
   'volume':1237206,
   'vwap':155.98216
  },
  {  
   'time':'2019-01-28T16:00:00',
   'timestamp':1548709200,
   'price':156.23000000000002,
   'open':156.3,
   'high':156.36,
   'low':156.1,
   'close':156.1,
   'volume':2831057,
   'vwap':156.29986
}
]
```
<p align="center">
<img width="600" height="200" src="https://raw.githubusercontent.com/KloudTrader/libkloudtrader-docs/master/website/static/img/portfolio.png">
</p>
We are also planning to ship a state of the art Portfolio optimizer very soon with LibKloudTrader and Narwhal. While we were working on the portfolio optimizer, we faced a very severe problem; there was no easy way to find out all the companies listed on major exchanges of the U.S., their symbols and some basic information related to them. We wanted all the companies in one place. And talking to the community, we realized other folks are facing or have faced this problem before. This is why <a href="https://docs.kloudtrader.com/docs/data_api#companie-listed-on-nasdaq-nyse-and-amex">LibKloudTrader’s data module now includes API to get all companies listed on NASDAQ, NYSE(New York Stock Exchange) and AMEX(American Stock Exchange)</a>
<br/>



E.g. To get companies listed on just NYSE, you have to do:

```
from libkloudtrader.defaults import * 
from libkloudtrader.equities.data import list_of_companies 
list_of_companies()
```
<p align="center">
<img width="600" height="200" src="https://raw.githubusercontent.com/KloudTrader/libkloudtrader-docs/master/website/static/img/companies.png">
</p>

And most importantly we are excited to announce that Narwhal now comes with Manual Trading. Although Narwhal’s main goal is to let you prototype your algorithms into production, we figured it would be great to have a manual trading console by your side for the days you don’t feel like writing code but do feel like trading. And we are proud to say that this makes **Narwhal** the **first** platform that provides both algorithmic and manual trading at a commission-free flat-rate brokerage so that you can trade to your heart’s content and your returns don’t get ruined by high, senseless brokerage fees.

On a final note, we are a company that grows on feedback. If you have any feature requests or issues for LibKloudTrader, [do open an issue on KloudTrader’s GitHub](https://github.com/KloudTrader/libkloudtrader/issues). You can always reach out our Help and Support team via email ([support@kloudtrader.com](mailto:support@kloudtrader.com)) or use the Chat button on Narwhal’s Dashboard if you have questions, issues or feedback. We also have a [Slack community](https://join.slack.com/t/kloudtradercommunity/shared_invite/enQtNDc5MjI4ODI4OTc4LWFjYzg4ODliZWZiMGU1ZDY1MjBiNmZkMThkNDVmODg5NDM2YmViOTVhZTA0MjI3MDkzODRjZGU5ZmNhNWMwMzg) where you can ask, discuss or even give feedback related to Narwhal and LibKloudTrader.

<center><h3>May the Markets be with you!</h3></center>
<br>

*This article is not intended to provide investment advice. This article is provided for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation or endorsement for any security or strategy, nor does it constitute an offer to provide investment advisory or other services by KloudTrader. KloudTrader makes no guarantees as to accuracy or completeness of the views expressed in this article. The views are subject to change and may have become unreliable for various reasons, including changes in market conditions or economic circumstances. All investments involve risk, including loss of principal. You should consult with an investment professional before making any investment decisions.*
<br>




<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<a href="https://twitter.com/KloudTrader?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @KloudTrader</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
<script type="IN/Share">