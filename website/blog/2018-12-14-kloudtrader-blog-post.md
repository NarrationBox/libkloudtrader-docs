---
title: libkloudtrader's Alert System
author: 
authorURL: 
authorFBID: 
---
## Intro
We built [libkloudtrader](https://docs.kloudtrader.com) so that anyone whether a professional algorithmic trader or beginner can rapidly prototype their strategies in python(support for more languages coming soon) and deploy on Narwhal. No matter how complex your model/algorithm/strategy is, it can easily be made trading ready using libkloudtrader. libkloudtrader, being an open-source initiative is always looking for your contributions and feedback which shall help us in serving the quant and algo trading community in a much better and needed way.
In this post, we are going to talk about how to approach a strategy with libkloudtrader and how you can leverage the alert_me feature libkloudtrader provides. I will start with talking a little about algorithmic trading, libkloutrader's [alert_me](https://docs.kloudtrader.com/docs/alert_api) followed my a mean-reversion strategy written in python. 
<!--truncate-->

## Algorithmic Trading
For those of who are new to trading but even have the slightest of programming knowledge can easily understand that programming is the key to automation. Over the years, humans' majority of brains have gone into thinking:- "Hmm... How can we automate this?". And since the dawn of classical computing, humans have been able to automate a large number of things and that number is now rapidly growing than ever. Programming doesn't only provide automation capabilities but also allows us to perform multiple calculations and computations at the same time which are almost impossible for any human to perform in such small time (generally pertaining to seconds). This is why algorithmic Trading has been growing so exponentially lately. For those who are new to trading, Algorithmic Trading or Algo Trading is a method of automating your trading decisions based on basic if-else rules, technical/stock analysis or complex mathematical models. These set of rules that define your trading strategy are collectively known as an <b>algorithm</b>. There are several mathematical models and technical indicators  that one can use to make decisions based on Math and quantitative analysis instead of human emotion and [python has been really popular on the wall street lately](https://www.bloomberg.com/news/articles/2018-06-14/citi-wants-analysts-to-add-python-to-list-of-languages-on-resume). libkloudtrader provides and is continuously trying to provide more and more things needed for algorithmic trading in one single package and most importantly, using these APIs is extremely easy. E.g. buying 5 shares of Apple is ridiculously easy: 
```python 
buy('AAPL',5) #where AAPL is the symbol of Apple Inc. and 5 is the quantity of shares you want to buy.
```
## Leveraging libkloudtrader's Alert system to get alerts when you really want them!
Now moving on to libkloudtrader's Alert System. The <b>alert_me</b> module of libkloudtrader was a sheer epiphany when we were building Narwhal. Automation, as we know is really advantageous but you wouldn't mind knowing what's happening with your trading strategy, would you? This is where alert_me sweeps in. With alert_me API calls you can customize <b>what you get notified about, when you get notified and where you get notified. </b>
<div  >
<iframe style="margin-right: auto;margin-left: auto;display:block;" src="https://giphy.com/embed/DyAX4OUDFz4uk" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
</div>
<br>

[libkloudtrader.alert_me](http://docs.kloudtrader.com) provides three types of API calls which basically define where you get your alerts. You can get your alerts via:
* SMS <code>sms('+16xxxxxxxx','The alert you want to receive')</code>
* Email <code>email('123@abc.com','The alert you want to receive')</code>
* SMS and Email <code>sms_and_email('+16xxxxxxxx','123@abc.com','The alert you want to receive')</code>

For more information and documentation on how to use alert_me module please visit the [Alert section of libkloudtrader docs](https://docs.kloudtrader.com/docs/alert_api). We have tried our best to make the docs extremely easy to read and understand.

## Mean Reversion Strategy
Now let's build a Mean Reversion <b>Interday</b> strategy using python. An interday strategy is a strategy that does all the calculations based on interday prices, thus buy and sell signals are generated over a period of days.<br>
Mean reversion is a financial theory suggesting that asset prices and returns eventually return back to the long-run mean or average of the entire dataset. So basically a mean reversion strategy relies on any kind of moving average/mean to make trading decisions. <br>
Let's start by installing the dependencies needed for this algorithm:<br>
<br>
Narwhal uses [pipenv](https://pipenv.readthedocs.io) for installing your algorithm dependencies on your Python3 Runtime.
```python
pipenv install -e git+https://github.com/KloudTrader/libkloudtrader.git#egg=libkloudtrader
```
```python
pipenv install pandas ta
```
We will use [https://pandas.pydata.org/](pandas) and [ta](https://technical-analysis-library-in-python.readthedocs.io/en/latest/index.html) for the technical analysis part.<br>
After you have successfully installed the dependencies you will see 2 files, Pipfile and Pipfile.lock in your working Directory. <br>
<b>Pipfile</b> shall look like this:
```python
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]
libkloudtrader = {editable = true, git = "https://github.com/KloudTrader/libkloudtrader.git"}
pandas = "*"
ta = "*"

[dev-packages]

[requires]
python_version = "3.7"

```
Now, we will create a file called <b>main.py</b> that will contain our mean-reversion strategy.

Let's start by importing the packages needed for our algorithm:
```python
from libkloudtrader.defaults import *
from libkloudtrader.equities.data import close_prices
from libkloudtrader.user import account_positions,account_balance
from libkloudtrader.alert_me import *
import datetime
import pandas as pd
import ta
```
After the imports are done, we are going to create a function called <b>analysis</b>. This function will take an argument call <b>symbol</b> which is basically the symbol/ticker of the stock you want to trade. If you want to trade multiple stocks at a time, you can add more. The analysis function basically contains the following steps:
* Get the Close prices data for the stock from the date of your preference till today. We are pulling close prices since January 1, 2018 for this example.
 ```python 
aapl_data=close_prices(symbol,'2018-09-01',datetime.date.today())
df=pd.DataFrame(aapl_data)
```
* Calculate the [Exponential mean average](https://www.investopedia.com/terms/e/ema.asp) of last 3 or 4 months' Close prices including today's Last price. For this example, we are using a window of size 15, but you can choose any number according to your trading understanding. (We used EMA because it gives more weighting, or importance, to recent price data than as Simple Moving Average and as they say:- "Everything you need, is in the prices.")
* Calculate an Entry point for going Long/buying and another entry point for Selling the stocks. Entry point in this strategy is the price point where the algorithm shall enter the trade i.e. start trading. In this strategy we are taking -5% of price as a Long Entry point and +5% of price for Selling entry point.
```python 
window=15
df['EMA']=ta.trend.ema_indicator(df['close'],n=window)
df['long_entry_point']=df['EMA']-(5/100)*df['EMA']
df['sell_entry_point']=df['EMA']+(5/100)*df['EMA']
df=df.iloc[window:] #ignores the rows with NaN values
```
* Create Long/Buy and Sell entry signals based on the following conditions:
    * Buy Signal if the Close Price is less than the EMA as the price is expected to rise back to mean
    * Sell Signal if the Close Price is higher than the EMA as the price is expected to go back to mean
```python
df['Buy']=df.apply(lambda x : 1 if x['close']<x['EMA'] else 0,axis=1)
df['Sell']=df.apply(lambda x : 1 if x['close']>x['EMA'] else 0,axis=1)
```
Thus, the analysis function looks like:
```python
def analysis(symbol):
    close_data=close_prices(symbol,'2018-01-01',datetime.date.today())
    df=pd.DataFrame(close_data)
    window=15
    df['EMA']=ta.trend.ema_indicator(df['close'],n=window)
    df['long_entry_point']=df['EMA']-(5/100)*df['EMA']
    df['sell_entry_point']=df['EMA']+(5/100)*df['EMA']
    df=df.iloc[window:]
    df['Buy']=df.apply(lambda x : 1 if x['close']<x['EMA'] else 0,axis=1)
    df['Sell']=df.apply(lambda x : 1 if x['close']>x['EMA'] else 0,axis=1)
    return df
```
Next is the trading Logic:<br>
The trading logic will be defined in a function called <b>trade</b> which also takes symbol as an argument. 
* Gather the data points for today.
```python
today=str(datetime.date.today())
data=analysis(symbol.upper())
data=data.loc[data['date']==today]
```
This pretty self-explanatory. We pulled out the row that contains today's data from the whole DataFrame. The data in this row gets updated after seconds throughout the trading day and as the Last traded price of a stock is always changing.
* Define the entry and exit conditions of going long/buying:
    * If the signal is Buy, buy until the last traded price of the stock is less than the long entry point and exit if funds/amount/cash in your brokerage account is greater than or equal to "Amount of your choice". Or there can be any other exit condition, like buy till you hold 50 of AAPL stocks.
* Define the entry and exit conditions of selling:
    * If the signal is Sell, sell until the last traded price of the stock is higher than the sell entry point and exit if your AAPL position is 0 i.e. you own 0 stocks of AAPL. Again, exit point can be of your choice, but remember that exit point is the most crucial part of an algorithm because without an exit point, the algo will keep on buying or selling.
```python
if data['Buy'].item()==1:
    while data['close'].item()<data['long_entry_point'].item() and account_balance()['balances']['total_cash']>=2000:
        buy(5,symbol)
        print('Long')
        message="Mean-Reversion algo had a Long Signal and 5 of {} will be bought if cash is more than $2000".format(symbol)
        sms_and_email('+16xxxxxxxx','123@abc.com',message)
elif data['Sell'].item()==1:
    # Calculating the number of positions we hold for the given stock
    my_positions=account_positions()
    for k,v in my_positions.items():
        if v['position']['symbol']==symbol:
            symbol_position_qantity=v['position']['quantity']
    while data['close']>data['sell_entry_point'] and symbol_position_qantity>=0:
        sell(2,symbol)
        print('Sell')
        message="Mean-Reversion algo had a Sell Signal, position will be closed for {}".format(symbol)
        email('123@abc.com',message)
```            
One can clearly notice that we have called <b>sms_and_email()</b> while our algorithm is buying stocks and <b>email()</b> while selling the stocks. This shall help us to be stay updated on what our algorithm is doing. You can completely change the condition for receiving alerts and the information you receive via the alerts.
<br>
Hence, this is what the trade() function looks like:
```python
def trade(symbol):
    
    today=str(datetime.date.today())
    data=analysis(symbol.upper())
    data=data.loc[data['date']==today]
    if data['Buy'].item()==1:
        while data['close'].item()<data['long_entry_point'].item() and account_balance()['balances']['total_cash']>=2000:
            buy(5,symbol)
            print('Long')
            message="Mean-Reversion algo had a Long Signal and 5 of {} will be bought if cash is more than $2000".format(symbol)
            email('chetan@kloudtrader.com',message)
    elif data['Sell'].item()==1:
        # Calculating the number of positions we hold for the given stock
        my_positions=account_positions()
        for k,v in my_positions.items():
            if v['position']['symbol']==symbol:
                symbol_position_qantity=v['position']['quantity']
        while data['close']>data['sell_entry_point'] and symbol_position_qantity>=0:
            sell(2,symbol)
            print('Sell')
            message="Mean-Reversion algo had a Sell Signal, position will be closed for {}".format(symbol)
            email('chetan@kloudtrader.com',message)
                
        
```
> Note: When to buy/sell, what to buy/sell, how much to buy/sell is user-specific and does not reflect the decisions of the writer since this is for reference purposes.

Now comes the algorithm engine. We call it the algorithm engine since this snippet of code enables the algo to keep trading during the trading day.
```python
while intraday_status()['clock']['state']!='closed':
    trade('AAPL')
```
This will algorithm to trade when the market is not closed. This means that the algorithm will also be active during pre-market and post-market hours. If you want to trade in the open market only, you can change the condition accordingly. Reference for [intraday_status()](https://docs.kloudtrader.com/docs/data_api#intraday-status)
<br><br>
Finally, your <b>main.py</b> that contains a mean-reversion trading strategy shall look like this:
```python
#Mean Reversion Strategy in Python
from libkloudtrader.defaults import *
from libkloudtrader.equities.data import close_prices
from libkloudtrader.user import account_positions,account_balance
from libkloudtrader.alert_me import *
import datetime
import pandas as pd
import ta

def analysis(symbol):
    close_data=close_prices(symbol,'2018-01-01',datetime.date.today())
    df=pd.DataFrame(close_data)
    window=15
    df['EMA']=ta.trend.ema_indicator(df['close'],n=window)
    df['long_entry_point']=df['EMA']-(5/100)*df['EMA']
    df['sell_entry_point']=df['EMA']+(5/100)*df['EMA']
    df=df.iloc[window:]
    df['Buy']=df.apply(lambda x : 1 if x['close']<x['EMA'] else 0,axis=1)
    df['Sell']=df.apply(lambda x : 1 if x['close']>x['EMA'] else 0,axis=1)
    return df

def trade(symbol):
    
    today=str(datetime.date.today())
    data=analysis(symbol.upper())
    data=data.loc[data['date']==today]
    if data['Buy'].item()==1:
        while data['close'].item()<data['long_entry_point'].item() and account_balance()['balances']['total_cash']>=2000:
            buy(5,symbol)
            print('Long')
            message="Mean-Reversion algo had a Long Signal and 5 of {} will be bought if cash is more than $2000".format(symbol)
            email('chetan@kloudtrader.com',message)
    elif data['Sell'].item()==1:
        # Calculating the number of positions we hold for the given stock
        my_positions=account_positions()
        for k,v in my_positions.items():
            if v['position']['symbol']==symbol:
                symbol_position_qantity=v['position']['quantity']
        while data['close']>data['sell_entry_point'] and symbol_position_qantity>=0:
            sell(2,symbol)
            print('Sell')
            message="Mean-Reversion algo had a Sell Signal, position will be closed for {}".format(symbol)
            email('chetan@kloudtrader.com',message)
                
while intraday_status()['clock']['state']!='closed':
    trade('AAPL')
```

After you have successfully completed your trading algorithm, you are ready to deploy it on <a href="https://kloudtrader.com/narwhal" >Narwhal</a> and trade in the U.S. equity market. Please follow our Docs on getting started with libkloudtrader and Narwhal <a href="https://docs.kloudtrader.com/docs/intro" 
target="_blank">here</a>.

Many more features like Papertrading, trading for other asset classes like Crypto, Derivatives, Forex, etc coming soon. Subscribe to our <a href="https://www.kloudtrader.com/#getnotified" target="_blank">mailing list</a> to keep yourself updated on the latest developments at KloudTrader.
<br>
<br>
<center><h3>Happy Algo Trading!!</h3></center>
<br>
<figure>
      <b><figcaption><cite>Chetan Malhotra</cite></figcaption></b>
      <figcaption><cite>CTO, KloudTrader</cite></figcaption>
    </figure>
<br>
<script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
<script type="IN/Share"></script>
<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<a href="https://twitter.com/KloudTrader?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @KloudTrader</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
