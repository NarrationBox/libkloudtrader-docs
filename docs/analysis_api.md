---
id: analysis_api
title: Analysis
sidebar_label: Analysis
---

## Technical, portfolio, risk analysis APIs for your quantitative trading algorithms.
> #### Important
> 
> The algorithm you want to deploy should be in a file called **main.py**
> 
> Your algorithm must have these imports:
> 
> <b>from libkloudtrader.defaults import * </b>
> 
> This will help Narwhal to access your access token and account number from the Narwhal Environment so that you don't have to explicitly pass them with each API call. Narwhal would not be able to load your access token and account number from the Narwhal Environment if you don't link your tradier account. So the best practice is to link your tradier account before deploying your Trading Algorithm.

> Note: Your access token will expire after 24 hours. In order to allow your deployed algorithm to trade seemlessly, please manually link your tradier account after 24 hours. Don't worry this is just in Beta Version and will be automated soon!       
### Analysis API Index
#### libkloudtrader provides various analysis APIs. The list below consists of the APIs that are currently implemented and the ones that are coming soon!
| Analysis Functions|Status 
| -------------     |:-------------:|
| [Accumulation/Distribution Index](#accumulation-distribution-index)| ✅ 
| [Absolute Price Oscillator](#absolute-price-oscillator)| ✅ 
| Advance Decline Line| 🔜
| Advance Decline Ratio| 🔜
| [Alpha](#alpha) |✅ 
| [Annual Return](#annual-return) | ✅ 
| [Annual Sharpe Ratio](#annual-sharpe-ratio)|✅ 
| Annual Volatility| ✅ 
| Arnaud Legoux Moving Average| 🔜
| Aroon|✅ 
| Aroon Oscillator |✅ 
| Average Directional Movement Index|✅ 
| Average Directional Movement Index Rating|✅ 
| Average Price | ✅ 
| Average True Range| ✅ 
| Awesome Oscillator| ✅ 
| Balance of Power|✅ 
| Beta|✅ 
| Berke Ratio| 🔜
| Bollinger Bands|✅ 
| Calmar Ratio|✅ 
| CAGR (Compounded Annual Growth Rate)|✅ 
| Chaikin Money Flow|✅
| Chaikin Oscillator|✅
| Chande Kroll Stop| 🔜
| Chande Momentum Oscillator| ✅
| Choppiness Index| 🔜
| Commodity Channel Index| ✅
| ConnorsRSI| 🔜
| Coppock Curve|✅ 
| Conditional Sharpe ratio| 🔜
| Correlation Cofficient|✅ 
| Cumulative Returns |✅ 
| Cumulative Volume Index| 🔜
| Daily Returns|✅ 
| Daily Log Returns|✅ 
| Daily volatility|✅ 
| Detrended Price Oscillator| ✅
| Directional Movement Index|✅
| Donchian Channels|✅
| Double EMA |✅
| Downside Risk|✅ 
| Ease of Movement| ✅
| EMA|✅
| Envelope Indicator| 🔜
| Excess return on VaR| 🔜
| Expected shortfall| 🔜
| Fisher Transform| 🔜 
| Force Index| ✅
| Hilbert Transform - Instantaneous Trendline|✅
| Hilbert Transform - Dominant Cycle Period|✅
| Hilbert Transform - Dominant Cycle Phase|✅
| Hilbert Transform - Phasor Components|✅
| Hilbert Transform - SineWave|✅
| Hilbert Transform - Trend vs Cycle Mode|✅
| Hull Moving Average |✅ 
| Ichimoku Cloud|✅
| Information Ratio|✅ 
| Jensen's Alpha| 🔜
| Kaufman Adaptive Moving Average|✅
| Keltner Channels |✅
| Klinger Oscillator | 🔜
| Know sure thing/KST|✅
| Kurtosis|✅ 
| Least Squares Moving Average| 🔜
| Linear Regression |✅
| Linear Regression Angle|✅
| Linear Regression Intercept|✅
| Linear Regression Slope|✅
| Lower partial moments| 🔜
| MACD (Moving Average Convergence Divergence)|✅
| Mass Index |✅
| Max Drawdown|✅ 
| McGinley Dynamic | 🔜
| MidPoint over period|✅
| MidPoint Price over period|✅
| Minus Directional Indicator|✅
| Minus Directional Movement|✅
| Median Price|✅
| Momentum |✅
| Money Flow | ✅
| Moon Phases| 🔜
| Modigliani Ratio| 🔜
| Moving Average |✅
| Moving Volatility|✅ 
| Negative Volume Index|✅
| Normalized Average True Range|✅
| On Balance Volume|✅
| Omega Ratio|✅ 
| Parabolic SAR|✅
| Percentage Price Oscillator|✅
| Pivot Points HIgh Low| 🔜
| Plus Directional Indicator|✅
| Plus Directional Movement|✅
| Positive Volume Index| 🔜
| Rate of Change |✅ 
| Relative Strength index|✅ 
| Relative Givor Index| 🔜
| Relative Volatility Index| 🔜
| Returns| ✅ 
| Sharpe Ratio|✅ 
| Simple Moving Average|✅ 
| Skewness|✅ 
| SMI Ergodic Indicator | 🔜
| SMI Ergodic Oscillator | 🔜
| Sortino Ratio|✅ 
| Standard Deviation|✅ 
| Sterling Ratio| 🔜
| Stochastic Oscillator|✅ 
| Stochastic RSI|✅ 
| Tail Ratio|✅ 
| Time Series Forecast|✅ 
| Treynor ratio| 🔜
| TRIX|✅ 
| Triangular Moving Average|✅ 
| Triple EMA|✅ 
| True Range | ✅ 
| True Strength Indicator |✅ 
| Typical Price|✅ 
| Ultimate Oscillator |✅ 
| Upside-potential Ratio| 🔜
| Value at Risk (Variance-Covariance method)|✅ 
| Variance|✅ 
| Vertical Horizontal Filter| 🔜
| Volatility|✅ 
| Volatility Stop| 🔜
| Volume Osciallor | 🔜
| Volume Price Trend|✅ 
| Volume adjusted moving average|✅ 
| Volume weighted moving average| 🔜
| Vortex Indicator |✅ 
| VWAP|✅ 
| Weighted Close Price|✅ 
| Williams %R|✅ 
| Williams Aligator | 🔜
| Williams Fractal | 🔜
| WMA|✅ 
| Zig Zag | 🔜







# Module
<code>libkloudtrader.analysis</code>

### Accumulation/Distribution Index
Developed by Marc Chaikin, the Accumulation Distribution Line is a volume-based indicator designed to measure the cumulative flow of money into and out of a security.<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:accumulation_distribution_line" target="_blank">Learn More</a>

<code>accumulation_distribution_index(high,low,close,volume)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high         | required          | High prices data       | Pandas dataframe  |
| low          | reqired          | Low prices data | Pandas dataframe|
| close          | reqired          | Close Prices data | Pandas dataframe  |
| volume          | reqired          | Volume data  | Pandas dataframe  |

```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import accumulation_distribution_index
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-31')['history']['day'])

accumulation_distribution_index(aapl_data['high'],aapl_data['low'],aapl_data['close'],aapl_data['volume'])
```
```python
return type : Pandas Dataframe

0               NaN
1      1.519821e+06
2     -1.513219e+07
3      2.434469e+07
4      5.829405e+06
5     -7.798453e+06
6      2.607671e+07
7      3.445991e+07
8      2.825995e+07
9     -1.126491e+07
10     3.262656e+06
            ...
240   -3.874279e+07
241   -6.163643e+07
242   -2.284626e+07
243   -2.555539e+07
244   -6.359438e+07
245   -1.067186e+08
246   -1.046228e+08
247    2.434146e+07
248    1.012001e+08
249    3.678827e+07
250   -1.087315e+07
```
***
### Absolute Price Oscillator
Absolute Price Oscillator is a technical indicator calculating the percentage difference between two price moving averages. The Absolute Price Oscillator is the MACD indicator in absolute values.<br><br>
<a href="https://www.marketvolume.com/technicalanalysis/apo.asp" target="_blank">Learn More</a>

<code>absolute_price_oscillator(close,short_period,long_period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required         | Close prices data       | Pandas dataframe  |
| short_period    | reqired          | Short Period/Fast Period | int|
| long_period     | reqired          | Long period/Slow period | int |


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import absolute_price_oscillator
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-31')['history']['day'])

absolute_price_oscillator(aapl_data['close'],4,9)
```
```python
return type : Pandas Dataframe

0           NaN
1           NaN
2           NaN
3           NaN
4           NaN
5           NaN
6           NaN
7           NaN
8      1.040833
9      1.069167
10     1.508333
        ...
240   -3.513333
241   -2.365833
242   -1.943333
243   -2.921667
244   -3.788611
245   -4.994444
246   -7.382222
247   -6.986667
248   -5.512222
249   -3.109444
250    0.306944
```
***
### Alpha
Alpha is a measure of the active return on an investment, the performance of that investment compared with a suitable market index. An alpha of 1% means the investment's return on investment over a selected period of time was 1% better than the market during that same period; a negative alpha means the investment underperformed the market.<br><br>
<a href="https://en.wikipedia.org/wiki/Alpha_(finance)" target="_blank">Learn More</a>

<code>alpha(close,benchmark_close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required         | Close prices data       | Pandas dataframe  |
| benchmark_close   | reqired          | Close prices data of market or benchmark like SPY, etc | Pandas dataframe |



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import alpha
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-31')['history']['day'])
spy_data=pd.DataFrame(OHLCV('SPY','2018-01-01','2019-01-31')['history']['day'])

alpha(aapl_data['close'],spy['close'])
```
```python
return type : float

2.589179508866167
```

***
### Annual Return
Annual return is the return an investment provides over a period of time, expressed as a time-weighted annual percentage.<br><br>
<a href="https://www.investopedia.com/terms/a/annual-return.asp" target="_blank">Learn More</a>

<code>annual_return(close)</code>

> Note: annual_return() only takes a dataframe with 1 year data i.e. dataframe less than 257 trading days and greater 250 days because an average trading year has 250-257 days approximately. To calculate return on n number of trading days use <a href="#Return">returns()</a>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required         | Close prices data for a year i.e. trading days<257 and trading days>250 | Pandas dataframe  |



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import annual_return
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

annual_return(aapl_data['close'])
```
```python
return type : float (%age)

-4.73523664720293
```
***
### Annual Sharpe Ratio
The Sharpe ratio is simply the return per unit of risk (represented by variance). The higher the Sharpe ratio, the better the combined performance of "risk" and return.
Using an annual/annualized Sharpe Ratio is useful for comparison of multiple return streams. The annualized Sharpe ratio is computed by dividing the annualized mean monthly excess return by the annualized monthly standard deviation of excess return.
<br><br>
<a href="https://www.quantinsti.com/blog/sharpe-ratio-applications-algorithmic-trading" target="_blank">Learn More</a>

<code>annual_sharpe_ratio(close)</code>

> Note: annual_sharpe_ratio() only takes a dataframe with 1 year data i.e. dataframe less than 257 trading days and greater 250 days because an average trading year has 250-257 days approximately. To calculate sharpe_ratio on n number of trading days use <a href="#sharpe_ratio">sharpe_ratio()</a>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required         | Close prices data for a year i.e. trading days<257 and trading days>250 | Pandas dataframe  |



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import annual_sharpe_ratio
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

annual_sharpe_ratio(aapl_data['close'])
```
```python
return type : float

-0.16537924137238377
```
***
### Aroon
The Aroon indicator is used to help traders know when a market is uptrending, downtrending, or is in a range-bound, trendless market.
<br><br>
<a href="https://commodity.com/technical-analysis/aroon/" target="_blank">Learn More</a>

<code>aroon(high,low,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required         | High prices data| Pandas dataframe  |
| low          | required         | Low prices data| Pandas dataframe  |
| n         | required         | timeperiod/number of days| Int  |



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import aroon
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

aroon(aapl_data['high'],aapl_data['low'],4)
```
```python
returns: arronup, aroondown, aroon_oscillator
return type : Pandas DataFrame

        aroondown  aroonup  aroon_oscillator
0          NaN      NaN               NaN
1          NaN      NaN               NaN
2          NaN      NaN               NaN
3          NaN      NaN               NaN
4          0.0    100.0             100.0
5          0.0     75.0              75.0
6          0.0     50.0              50.0
7          0.0     25.0              25.0
8        100.0      0.0            -100.0
9         75.0      0.0             -75.0
10       100.0     25.0             -75.0
                ...
240        0.0     50.0              50.0
241      100.0     25.0             -75.0
242       75.0      0.0             -75.0
243      100.0     25.0             -75.0
244      100.0      0.0            -100.0
245      100.0     25.0             -75.0
246      100.0      0.0            -100.0
247       75.0      0.0             -75.0
248       50.0      0.0             -50.0
249       25.0    100.0              75.0
250        0.0     75.0              75.0
```
***
### Average Directional Movement Index
The Average Directional Index (ADX) was developed by J. Welles Wilder to evaluate the strength of a trend and to define a period of sideway trading. For better results from the signals generated by technical analysis, many traders use ADX to determine whether the market is trending or trading (moving sideways) and adjust their indicators' settings to the current market condition.
<br><br>
<a href="https://www.marketvolume.com/technicalanalysis/adx.asp/" target="_blank">Learn More</a>

<code>average_directional_movement_index(high,low,close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required         | High prices data| Pandas dataframe  |
| low          | required         | Low prices data| Pandas dataframe  |
| close         | required         | Close prices data| Pandas dataframe  |
| n         | required         | timeperiod/number of days| Int  |



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import average_directional_movement_index
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

average_directional_moving_index(aapl_data['high'],aapl_data['low'],aapl_data['close'],4)
```
```python
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6            NaN
7      71.495363
8      69.917531
9      67.628396
10     68.153175
11     60.730823
12     49.259490
13     42.728528
14     45.091676
        ...
240    32.017729
241    32.156497
242    27.717607
243    36.589518
244    45.137380
245    54.612348
246    61.858012
247    52.131699
248    42.735035
249    32.778837
250    31.301982
```
***
### Average Directional Movement Index Rating
ADXR stands for Average Directional Movement Index Rating. ADXR is a component of the Directional Movement System developed by Welles Wilder. This system attempts to measure the strength of a price movement in positive and negative directions, as well as the overall strength of the trend. The Average Directional Movement Rating quantifies the change of momentum in the ADX (Average Directional Index).
<br><br>
<a href="https://www.marketvolume.com/technicalanalysis/adxr.asp" target="_blank">Learn More</a>

<code>average_directional_movement_index_rating(high,low,close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required         | High prices data| Pandas dataframe  |
| low          | required         | Low prices data| Pandas dataframe  |
| close         | required         | Close prices data| Pandas dataframe  |
| n         | required         | timeperiod/number of days| Int  |



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import average_directional_movement_index_rating
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

average_directional_moving_index_rating(aapl_data['high'],aapl_data['low'],aapl_data['close'],4)
```
```python
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6            NaN
7            NaN
8            NaN
9            NaN
10     69.824269
11     65.324177
12     58.443943
13     55.440852
14     52.911250
15     48.770118
16     46.700538
        ...
240    26.548196
241    29.908893
242    30.157933
243    34.303623
244    38.646939
245    41.164978
246    49.223765
247    48.634540
248    48.673691
249    47.318424
250    41.716840
```
***
### Average Price
The Average Price is the average of the open + high + low + close of a bar. It can be used to smooth an indicator that normally takes just the closing price as input.
<br><br>
<a href="https://www.fmlabs.com/reference/default.htm?url=AvgPrices.htm" target="_blank">Learn More</a>

<code>average_price(open,high,low,close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| open         | required         | OPen prices data| Pandas dataframe  |
| high          | required         | High prices data| Pandas dataframe  |
| low          | required         | Low prices data| Pandas dataframe  |
| close         | required         | Close prices data| Pandas dataframe  |




```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import average_price
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

average_price(aapl_data['open'],aapl_data['high'],aapl_data['low'],aapl_data['close'])
```
```python
return type : Pandas DataFrame

0      179.557500
1      183.165000
2      184.884900
3      186.067500
4      187.677500
5      188.117500
6      187.075000
7      187.987500
8      179.077500
9      179.920000
10     177.995000
        ...
240    143.980000
241    141.652500
242    142.625025
243    137.965000
244    132.417500
245    129.165000
246    124.980000
247    130.077500
248    132.905000
249    134.165000
250    132.532500
```
***
### Average True Range
The ATR is a Welles Wilder style moving average of the True Range. The ATR is a measure of volatility. High ATR values indicate high volatility, and low values indicate low volatility, often seen when the price is flat. 
<br><br>
<a href="https://www.fmlabs.com/reference/default.htm?url=ATR.htm" target="_blank">Learn More</a>

<code>average_true_range(high, low, close, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required         | High prices data| Pandas dataframe  |
| low          | required         | Low prices data| Pandas dataframe  |
| close         | required         | Close prices data| Pandas dataframe  |
| n         | required         | timeperiod/number of days| Int  |





```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import average_true_range
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

average_true_range(aapl_data['high'],aapl_data['low'],aapl_data['close'],4)
```
```python
return type : Pandas DataFrame

0           NaN
1           NaN
2           NaN
3           NaN
4      2.675100
5      2.431325
6      2.388494
7      2.046370
8      4.127278
9      4.022958
10     3.897219
        ...
240    3.960521
241    4.595391
242    4.971518
243    6.831139
244    6.515854
245    7.756891
246    7.497668
247    8.168251
248    7.456188
249    6.522141
250    6.064106
```
***
### Awesome Oscilator
The Awesome Oscillator is an indicator used to measure market momentum. AO calculates the difference of a 34 Period and 5 Period Simple Moving Averages. The Simple Moving Averages that are used are not calculated using closing price but rather each bar’s midpoints. AO is generally used to affirm trends or to anticipate possible reversals. 
<br><br>
<a href="https://www.ifcmarkets.co.in/en/ntx-indicators/awesome-oscillator" target="_blank">Learn More</a>

<code>awesome_oscillator(high,low,short_period,long_period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required         | High prices data| Pandas dataframe  |
| low          | required         | Low prices data| Pandas dataframe  |


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import awesome_oscillator
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

awesome_oscillator(aapl_data['high'],aapl_data['low'],4,9)
```
```python
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6            NaN
7            NaN
8            NaN
9            NaN
10           NaN
        ...
240     1.211454
241     1.478572
242     1.587463
243     0.490403
244    -1.271450
245    -3.647627
246    -5.965480
247    -7.977019
248    -8.747460
249    -7.981872
250    -6.868254
```
***
### Awesome Oscilator
The Awesome Oscillator is an indicator used to measure market momentum. AO calculates the difference of a 34 Period and 5 Period Simple Moving Averages. The Simple Moving Averages that are used are not calculated using closing price but rather each bar’s midpoints. AO is generally used to affirm trends or to anticipate possible reversals. 
<br><br>
<a href="https://www.ifcmarkets.co.in/en/ntx-indicators/awesome-oscillator" target="_blank">Learn More</a>

<code>awesome_oscillator(high,low)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required         | High prices data| Pandas dataframe  |
| low          | required         | Low prices data| Pandas dataframe  |


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import awesome_oscillator
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

awesome_oscillator(aapl_data['high'],aapl_data['low'])
```
```python
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6            NaN
7            NaN
8            NaN
9            NaN
10           NaN
        ...
240   -20.128684
241   -18.865919
242   -18.172625
243   -18.172772
244   -18.884066
245   -19.609007
246   -21.124478
247   -22.471331
248   -22.977066
249   -21.924007
250   -19.633272
```
***
### Balance of Power
Balance Of Power (BOP) is an indicator that measures the market strength by assessing the strength of total buyers against that of total sellers and their ability to drive the price to extreme ends.
<br><br>

<code>balance_of_power(open, high, low, close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| open        | required         | Open prices data| Pandas dataframe  |
| high          | required         | High prices data| Pandas dataframe  |
| low          | required         | Low prices data| Pandas dataframe  |
| close         | required         | Close prices data| Pandas dataframe  |


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import balance_of_power
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

balance_of_power(aapl_data['open'],aapl_data['high'],aapl_data['low'],aapl_data['close'])
```
```python
return type : Pandas DataFrame

0      0.690789
1     -0.115830
2      0.352518
3      0.672414
4      0.000000
5     -0.133333
6      0.869231
7      0.690967
8      0.532164
9     -0.526154
10     0.705742
        ...
240   -0.926316
241   -0.268683
242    0.219745
243   -0.611244
244   -0.524229
245   -0.718640
246   -0.266129
247    0.843958
248    0.046269
249   -0.319899
250   -0.274306
```
***
### Beta
Beta is a measure of the volatility, or systematic risk, of a security or a portfolio in comparison to the entire market or a benchmark. Beta is used in the capital asset pricing model (CAPM), which calculates the expected return of an asset based on its beta and expected market returns. Beta is also known as the beta coefficient.

<code>beta(close,benchmark_close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close         | required         | Close prices data| Pandas dataframe  |
| benchmark_close   | reqired          | Close prices data of market or benchmark like SPY, etc | Pandas dataframe |


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import beta
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

beta(aapl_data['open'],spy_data['close'])
```
```python
return type : float

0.4526075135378216
```
***
### Bollinger Bands
Bollinger Bands consist of three lines. The middle band is a simple moving average (generally 20 periods) of the typical price (TP). The upper and lower bands are F standard deviations (generally 2) above and below the middle band. The bands widen and narrow when the volatility of the price is higher or lower, respectively.
Bollinger Bands do not, in themselves, generate buy or sell signals; they are an indicator of overbought or oversold conditions. When the price is near the upper or lower band it indicates that a reversal may be imminent. The middle band becomes a support or resistance level. The upper and lower bands can also be interpreted as price targets. When the price bounces off of the lower band and crosses the middle band, then the upper band becomes the price target.
<br><br>
<a href="https://www.investopedia.com/terms/b/bollingerbands.asp" target="_blank">Learn More</a>

<code>bollinger_bands(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close         | required         | Close prices data| Pandas dataframe  |
| n   | reqired          | timeperiod/number of days | Pandas dataframe |


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import bollinger_bands
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

bollinger_bands(aapl_data['close'],20)
```
```python
returns: upperband,middleband,lowerband
return type : Pandas DataFrame

        upperband    middleband   lowerband
0           NaN         NaN         NaN
1           NaN         NaN         NaN
2           NaN         NaN         NaN
3           NaN         NaN         NaN
4           NaN         NaN         NaN
5           NaN         NaN         NaN
6           NaN         NaN         NaN
7           NaN         NaN         NaN
8           NaN         NaN         NaN
9           NaN         NaN         NaN
10          NaN         NaN         NaN
                        ...
240     191.579846    176.6630  161.746154
241     189.566979    175.2895  161.012021
242     186.031060    173.9165  161.801940
243     184.748400    172.6680  160.587600
244     185.383678    171.6605  157.937322
245     186.603458    170.3580  154.112542
246     188.252671    169.0850  149.917329
247     187.875175    168.2125  148.549825
248     187.437157    167.3080  147.178843
249     185.730965    166.0725  146.414035
250     183.936049    164.9820  146.027951
```
***
### CAGR (Compounded Annual Growth Rate)
The compound annual growth rate (CAGR) is the rate of return that would be required for an investment to grow from its beginning balance to its ending balance assuming the profits were reinvested at the end of each year of the investment’s lifespan.
<br><br>
<a href="https://www.investopedia.com/terms/c/cagr.asp" target="_blank">Learn More</a>

<code>cagr(start_value,end_value,period_in_years)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| start_value        | required         | Starting value of the investment  |
| end_value       | required         | End value of the investment  |
| period_in_years      | required         | Life of investment(in years)  |

```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import cagr
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

cagr(100000,136009,2)
```
```python
return type : Float (%age)

16.622896551234746
```
***
### Chaikin Money Flow
Developed by Marc Chaikin, Chaikin Money Flow measures the amount of Money Flow Volume over a specific period. Money Flow Volume forms the basis for the Accumulation Distribution Line. Instead of a cumulative total of Money Flow Volume, Chaikin Money Flow simply sums Money Flow Volume for a specific look-back period, typically 20 or 21 days. The resulting indicator fluctuates above/below the zero line just like an oscillator. 
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:chaikin_money_flow_cmf" target="_blank">Learn More</a>

<code>chaikin_money_flow(high, low, close, volume, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high            | required          | High Prices Data                        |Pandas Dataframe|
| low            | required          | Low Prices Data                        |Pandas Dataframe|
| close            | required          | Close Prices Data                        |Pandas Dataframe|
| volume           | required          | Volume Data                        |Pandas Dataframe|
| n            | required          | Time period/number of days                        |Int|

```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import chaikin_money_flow
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

chaikin_money_flow(aapl_data['high'],aapl_data['low'],aapl_data['close'],aapl_data['volume'],20)
```
```python
return type : Pandas DataFrame

0           NaN
1           NaN
2           NaN
3           NaN
4           NaN
5           NaN
6           NaN
7           NaN
8           NaN
9           NaN
10          NaN
        ...
240    0.008964
241   -0.063752
242   -0.082122
243   -0.079995
244   -0.081821
245   -0.124110
246   -0.135223
247   -0.112727
248   -0.097448
249   -0.148081
250   -0.141593
```
***
### Chaikin Oscillator
Developed by Marc Chaikin, the Chaikin Oscillator measures the momentum of the Accumulation Distribution Line using the MACD formula. This makes it an indicator of an indicator. The Chaikin Oscillator is the difference between the 3-day EMA of the Accumulation Distribution Line and the 10-day EMA of the Accumulation Distribution Line. Like other momentum indicators, this indicator is designed to anticipate directional changes in the Accumulation Distribution Line by measuring the momentum behind the movements. 
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:chaikin_oscillator" target="_blank">Learn More</a>

<code>chaikin_oscillator(high,low,close,volume,short_period=3,long_period=10)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high            | required          | High Prices Data                        |Pandas Dataframe|
| low            | required          | Low Prices Data                        |Pandas Dataframe|
| close            | required          | Close Prices Data                        |Pandas Dataframe|
| volume           | required          | Volume Data                        |Pandas Dataframe|
| short_period      | required          | Short Period/Fast Period. 3 by default.          |Int|
| long_period      | required          | Long Period/Slow Period. 10 by default.          |Int|

```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import chaikin_oscillator
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

chaikin_oscillator(aapl_data['high'],aapl_data['low'],aapl_data['close'],aapl_data['volume'])
```
```python
returns: chaikin_ad_line, chaikin_oscillator
return type : Pandas DataFrame

       chaikin_ad_line    chaikin_oscillator
0       2.488341e+07                 NaN
1       1.519821e+06                 NaN
2       9.751220e+06                 NaN
3       2.586451e+07                 NaN
4       1.558063e+07                 NaN
5       1.806606e+07                 NaN
6       4.165734e+07                 NaN
7       5.252597e+07                 NaN
8       6.991729e+07                 NaN
9       4.126106e+07        1.143408e+07
10      7.317994e+07        1.724639e+07
                ...
240    -1.227356e+08       -1.461823e+07
241    -1.479529e+08       -2.718628e+07
242    -1.455819e+08       -2.910185e+07
243    -1.735083e+08       -3.612556e+07
244    -2.091762e+08       -4.706364e+07
245    -2.802269e+08       -6.986682e+07
246    -3.137991e+08       -8.352593e+07
247    -2.558854e+08       -6.309340e+07
248    -2.125990e+08       -3.522592e+07
249    -2.190971e+08       -2.269083e+07
250    -2.234721e+08       -1.689208e+07
```
***
### Chande Momentum Oscillator
The Chande momentum oscillator is a technical momentum indicator invented by Tushar Chande.“It is created by calculating the difference between the sum of all recent gains and the sum of all recent losses and then dividing the result by the sum of all price movement over the period.
<br><br>
<a href="https://www.investopedia.com/terms/c/chandemomentumoscillator.asp" target="_blank">Learn More</a>

<code>chande_momentum_oscillator(close, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close            | required          | Close Prices Data                      |Pandas Dataframe|
| n                | required          | Time period/Number of days             |Int|


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import chande_momentum_oscillator
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

chande_momentum_oscillator(aapl_data['close'],8)
```
```python
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6            NaN
7            NaN
8      76.545166
9      51.800662
10     68.246524
        ...
240   -40.593699
241   -44.270567
242   -31.413650
243   -45.029151
244   -53.328369
245   -62.936640
246   -67.782887
247   -20.171553
248   -22.646215
249   -22.306363
250   -15.407946
```
***
### Commodity Channel Index
The Commodity Channel Index​ (CCI) is a momentum-based technical trading tool used most often to help determine when an investment vehicle is reaching a condition of being overbought or oversold. As the price of an investment moves continually in one direction, these indicators help traders to determine when institutional conviction may be changing, and a pause or pullback in the market price may be coming. This information can permit traders to take profit or add to an existing position following a price pullback.
<br><br>
<a href="https://www.investopedia.com/terms/c/commoditychannelindex.asp" target="_blank">Learn More</a>

<code>commodity_channel_index(high, low, close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low            | required          | Low Prices Data                      |Pandas Dataframe|
| close            | required          | Close Prices Data                      |Pandas Dataframe|
| n                | required          | Time period/Number of days             |Int|


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import commodity_channel_index
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

commodity_channel_index(aapl_data['high'],aapl_data['low'],aapl_data['close'],8)
```
```python
return type : Pandas DataFrame

0             NaN
1             NaN
2             NaN
3             NaN
4             NaN
5             NaN
6             NaN
7       95.178816
8      179.469367
9      143.854058
10     117.373234
        ...
240   -109.323726
241   -135.278515
242    -78.014802
243   -143.157500
244   -168.344563
245   -159.899761
246   -140.376508
247    -61.358976
248    -41.107963
249     -1.413150
250     48.940871
```
***
### Coppock Curve
The Coppock curve is intended as a long-term forecasting tool to find trending securities and generate buy signals. It was originally published by E.S.C. Coppock in Barron’s Magazine in 1962.
The indicator is trend following in nature. Given it’s mathematically calculated as a weighted moving average, it is not designed to pick bottoms. The Coppock curve was developed to pick trending stocks and thus, by initial design, generates buy signals only.
<br><br>
<a href="https://www.daytrading.com/coppock-curve" target="_blank">Learn More</a>

<code>coppock_curve(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close            | required          | Close Prices Data                      |Pandas Dataframe|
| n                | required          | Time period/Number of days             |Int|


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import coppock_curve
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

coppock_curve(aapl_data['close'],8)
```
```python
return type : Pandas DataFrame

        coppock_curve
0              NaN
1              NaN
2              NaN
3              NaN
4              NaN
5              NaN
6              NaN
7              NaN
8              NaN
9              NaN
10             NaN
        ...
240      -0.102676
241      -0.111788
242      -0.112682
243      -0.118926
244      -0.130802
245      -0.149299
246      -0.177311
247      -0.164170
248      -0.155265
249      -0.153064
250      -0.133795
```
***
### Correlation Coefficient
The correlation coefficient is a statistical measure that calculates the strength of the relationship between the relative movements of the two variables.
<br><br>
<a href="https://www.investopedia.com/terms/c/correlationcoefficient.asp" target="_blank">Learn More</a>

<code>correlation_coefficient(high,low,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high            | required          | High Prices Data                      |Pandas Dataframe|
| low            | required          | Low Prices Data                      |Pandas Dataframe|
| n                | required          | Time period/Number of days             |Int|


```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import correlation_coefficient
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

correlation_coefficient(aapl_data['high'],aapl_data['low'],5)
```
```python
return type : Pandas DataFrame

 0           NaN
1           NaN
2           NaN
3           NaN
4      0.936435
5      0.823446
6      0.898113
7      0.648593
8      0.962489
9      0.949877
10     0.856626
        ...
240    0.836647
241    0.949250
242    0.945109
243    0.865475
244    0.881233
245    0.950200
246    0.946665
247    0.936427
248    0.836791
249    0.626376
250    0.753480
```
***
### Cumulative Returns
A cumulative return is the aggregate amount an investment has gained or lost over time, independent of the period of time involved. 
<br><br>
<a href="https://www.investopedia.com/terms/c/cumulativereturn.asp" target="_blank">Learn More</a>

<code>cumulative_returns(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import cumulative_returns
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

cumulative_returns(aapl_data['close'])
```
```python
return type : Pandas DataFrame

0       0.000000
1      -0.017416
2       0.446999
3       1.590619
4       1.213282
5       1.201672
6       1.178451
7       1.753164
8       2.803901
9       2.281435
10      3.970742
        ...
240    -3.935911
241    -4.829908
242    -3.593405
243    -6.600488
244    -8.957390
245   -12.498549
246   -14.762568
247    -8.760014
248    -9.352142
249    -9.305701
250    -8.429119
```
***
### Daily Returns
Get daily returns of a trading strategy or a stock.

<code>daily_returns(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import daily_returns
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

daily_returns(aapl_data['close'])
```
```python
return type : Pandas DataFrame

0           NaN
1     -0.017416
2      0.464495
3      1.138531
4     -0.371429
5     -0.011471
6     -0.022945
7      0.568019
8      1.032634
9     -0.508216
10     1.651626
        ...
240   -3.199766
241   -0.930626
242    1.299256
243   -3.119167
244   -2.523463
245   -3.889562
246   -2.587408
247    7.042158
248   -0.648979
249    0.051233
250    0.966524
```
***
### Daily Log Returns
Get daily log returns of a trading strategy or a stock.
<br><br>
<a href="https://quantivity.wordpress.com/2011/02/21/why-log-returns/" target="_blank">Learn More</a>

<code>daily_log_returns(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import daily_log_returns
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

daily_log_returns(aapl_data['close'])
```
```python
return type : Pandas DataFrame

0           NaN
1     -0.017417
2      0.463420
3      1.132098
4     -0.372120
5     -0.011472
6     -0.022948
7      0.566412
8      1.027338
9     -0.509512
10     1.638135
        ...
240   -3.252077
241   -0.934983
242    1.290888
243   -3.168848
244   -2.555849
245   -3.967226
246   -2.621470
247    6.805257
248   -0.651094
249    0.051220
250    0.961883
``` ***
### Daily Log Returns
Get daily log returns of a trading strategy or a stock.
<br><br>
<a href="https://quantivity.wordpress.com/2011/02/21/why-log-returns/" target="_blank">Learn More</a>

<code>daily_log_returns(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|



```python
Example:

from libkloudtrader.defaults import *
from libkloudtarder.analysis import daily_log_returns
from libkloudtrader.equities.data import OHLCV
import pandas as pd

#load data
aapl_data=pd.DataFrame(OHLCV('AAPL','2018-01-01','2019-01-01')['history']['day'])

daily_log_returns(aapl_data['close'])
```
```python
return type : Pandas DataFrame

0           NaN
1     -0.017417
2      0.463420
3      1.132098
4     -0.372120
5     -0.011472
6     -0.022948
7      0.566412
8      1.027338
9     -0.509512
10     1.638135
        ...
240   -3.252077
241   -0.934983
242    1.290888
243   -3.168848
244   -2.555849
245   -3.967226
246   -2.621470
247    6.805257
248   -0.651094
249    0.051220
250    0.961883
```