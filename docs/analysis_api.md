---
id: analysis_api
title: Analysis
sidebar_label: Analysis
---

## Technical, portfolio, risk analysis APIs for your quantitative trading algorithms.
    
### Analysis API Index
#### Libkloudtrader provides various analysis APIs. The list below consists of the APIs that are currently implemented and the ones that are coming soon!
| Analysis Functions|Status 
| -------------     |:-------------:|
| [Accumulation/Distribution Index](#accumulation-distribution-index)| ✅ 
| [Absolute Price Oscillator](#absolute-price-oscillator)| ✅ 
| Advance Decline Line| 🔜
| Advance Decline Ratio| 🔜
| [Alpha](#alpha) |✅ 
| [Annual Return](#annual-return) | ✅ 
| [Annual Sharpe Ratio](#annual-sharpe-ratio)|✅ 
| [Annual Volatility](#annual-volatility)| ✅ 
| Arnaud Legoux Moving Average| 🔜
| [Aroon](#aroon)|✅ 
| [Average Directional Movement Index](#average-directional-movement-index)|✅ 
| [Average Directional Movement Index Rating](#average-directional-movement-index-rating)|✅ 
| [Average Price](#average-price) | ✅ 
| [Average True Range](#average_true_range)| ✅ 
| [Awesome Oscillator](#awesome-oscillator)| ✅ 
| [Balance of Power](#balance-of-power)|✅ 
| [Beta](#beta)|✅ 
| Berke Ratio| 🔜
| [Bollinger Bands](#bollinger-bands)|✅ 
| Calmar Ratio|🔜
| [CAGR (Compounded Annual Growth Rate)](#cagr-compounded-annual-growth-rate)|✅ 
| [Chaikin Money Flow](#chaikin-money-flow)|✅
| [Chaikin Oscillator](#chaikin-oscillator)|✅
| Chande Kroll Stop| 🔜
| [Chande Momentum Oscillator](#chande-momentum-oscillator)| ✅
| Choppiness Index| 🔜
| [Commodity Channel Index](#commodity-channel-index)| ✅
| ConnorsRSI| 🔜
| [Coppock Curve](#coppock-curve)|✅ 
| Conditional Sharpe ratio| 🔜
| [Correlation Coefficient](#correlation-coefficien)|✅ 
| [Cumulative Returns](#cumulative-returns) |✅ 
| Cumulative Volume Index| 🔜
| [Daily Returns](#daily-returns)|✅ 
| [Daily Log Returns](#daily-log-returns)|✅ 
| [Daily volatility](#daily-volatility)|✅
| [Detrended Price Oscillator](#detrended-price-oscillator)| ✅
| [Directional Movement Index](#directional-movement-index)|✅
| [Donchian Channel](#donchian-channel)|✅
| [Double EMA](#double-ema) |✅
| [Downside Risk](#downside-risk)|✅ 
| [Ease of Movement](#ease-of-movement)| ✅
| [EMA](#exponential-moving-averageema)|✅
| Envelope Indicator| 🔜
| Excess return on VaR| 🔜
| Expected shortfall| 🔜
| Fisher Transform| 🔜 
| [Force Index](#force-index)| ✅
| [Hilbert Transform - Dominant Cycle Period](#hilbert-transform-dominant-cycle-period)|✅
| [Hilbert Transform - Dominant Cycle Phase](#hilbert-transform-dominant-cycle-phase)|✅
| [Hilbert Transform - Instantaneous Trendline](#hilbert-transform-instantaneous-trendline)|✅
| [Hilbert Transform - Phasor Components](#hilbert-transform-phasor-components)|✅
| [Hilbert Transform - SineWave](#hilbert-transform-sinewave)|✅
| [Hilbert Transform - Trend vs Cycle Mode](#hilbert-transform-trend-vs-cycle-mode)|✅
| [Hull Moving Average](#hull-moving-average) |✅ 
| [Ichimoku Cloud](#ichimoku-cloud)|✅
| [Information Ratio](#information-raio)|✅ 
| Jensen's Alpha| 🔜
| [Kaufman Adaptive Moving Average](#kaufman-adaptive-moving-average)|✅
| [Keltner Channels](#kelter-channels) |✅
| Klinger Oscillator | 🔜
| [Know sure thing/KST](#know-sure-thing-kst)|✅
| [Kurtosis](#kurtosis)|✅ 
| Least Squares Moving Average| 🔜
| [Linear Regression](#linear-regression) |✅
| [Linear Regression Angle](#linear-regression-angle)|✅
| [Linear Regression Intercept](#linear-regression-intercept)|✅
| [Linear Regression Slope](#linear-regression-slop)|✅
| Lower partial moments| 🔜
| [(MACD) Moving Average Convergence Divergence ](#moving-average-convergence-divergence-macd)|✅
| [Mass Index](#mass-index) |✅
| Max Drawdown|🔜
| McGinley Dynamic | 🔜
| [MidPoint over period](#midpoint-over-period)|✅
| [MidPoint Price over period](#midpoint-price-over-period|✅
| [Minus Directional Indicator](#minus-directional-indicator)|✅
| [Minus Directional Movement](#minus-directional-movement)|✅
| [Median Price](#median-price)|✅
| [Momentum](#momentum) |✅
| [Money Flow Index](#money-flow-index) | ✅
| Moon Phases| 🔜
| Modigliani Ratio| 🔜
| [Moving Average](#moving-average) |✅
| [Moving Volatility](#moving-volatility)|✅ 
| [Negative Volume Index](#negative-volume-index)|✅
| [Normalized Average True Range](#normalized-average-true-range)|✅
| [On Balance Volume](#on-balance-volume)|✅
| [Omega Ratio](#omega-ratio)|✅ 
| [Parabolic SAR](#parabolic-sar)|✅
| [Percentage Price Oscillator](#percentage-price-oscillator)|✅
| Pivot Points HIgh Low| 🔜
| [Plus Directional Indicator](#plus-directional-indicator)|✅
| [Plus Directional Movement](#plus-directional-movement)|✅
| Positive Volume Index| 🔜
| [Rate of Change](#rate-of-change) |✅ 
| [Relative Strength index](#relative-strength-index)|✅ 
| Relative Givor Index| 🔜
| Relative Volatility Index| 🔜
| [Returns](#returns)| ✅ 
| [Sharpe Ratio](#sharpe-ratio)|✅ 
| [Skewness](#skewness)|✅ 
| SMI Ergodic Indicator | 🔜
| SMI Ergodic Oscillator | 🔜
| [Sortino Ratio](#sortino-ratio)|✅ 
| [Standard Deviation (Moving)](#standard-deviation-moving)|✅ 
| Sterling Ratio| 🔜
| [Stochastic Oscillator](#stochastic-oscillator)|✅ 
| [Stochastic RSI](#stochastic-rsi)|✅ 
| [Tail Ratio](#tail-ratio)|✅ 
| [Time Series Forecast](#time-series-forecast)|✅ 
| Treynor ratio| 🔜
| [TRIX](#trix)|✅ 
| [Triangular Moving Average](#triangular-moving-average)|✅ 
| [Triple EMA](#triple-ema)|✅ 
| [True Range](#true-range) | ✅ 
| [True Strength Index](#true-strength-index) |✅ 
| [Typical Price](#typical-price)|✅ 
| [Ultimate Oscillator](#ultimate-oscillator) |✅ 
| Upside-potential Ratio| 🔜
| [Value at Risk (Variance-Covariance method)](#value-at-risk-variance-covariance-method)|✅ 
| [Variance (Moving)](#variance-moving)|✅ 
| Vertical Horizontal Filter| 🔜
| [Volatility](#volatility)|✅ 
| Volatility Stop| 🔜
| Volume Osciallor | 🔜
| [Volume Price Trend](#volume-price-trend)|✅ 
| [Volume adjusted moving average](#volume-adjusted-moving-average)|✅ 
| Volume weighted moving average| 🔜
| [Vortex Indicator](#vortex-indicator) |✅ 
| [Volume Weighted Average Price (VWAP)](#volume-weighted-average-price-vwap)|✅ 
| [Weighted Close Price](#weighted-close-price)|✅ 
| [Williams %R](#williams-r)|✅ 
| Williams Aligator | 🔜
| Williams Fractal | 🔜
| [Weighted Moving Average (WMA)](#wma)|✅ 
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
| low          | required          | Low prices data | Pandas dataframe|
| close          | required          | Close Prices data | Pandas dataframe  |
| volume          | required          | Volume data  | Pandas dataframe  |

```python
Example:


from libkloudtrader.analysis import accumulation_distribution_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-31')['history']['day'])

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
| short_period    | required          | Short Period/Fast Period | int|
| long_period     | required          | Long period/Slow period | int |


```python
Example:


from libkloudtrader.analysis import absolute_price_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-31')['history']['day'])

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
| benchmark_close   | required          | Close prices data of market or benchmark like SPY, etc | Pandas dataframe |



```python
Example:


from libkloudtrader.analysis import alpha
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-31')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-31')['history']['day'])

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


from libkloudtrader.analysis import annual_return
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import annual_sharpe_ratio
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

annual_sharpe_ratio(aapl_data['close'])
```
```python
return type : float

-0.16537924137238377
```
***
### Annual Volatility
Volatility is a statistical measure of the dispersion of returns for a given security or market index. Volatility can either be measured by using the standard deviation or variance between returns from that same security or market index. Commonly, the higher the volatility, the riskier the security. Annual volatility is volatility over an year.
<br><br>
<a href="https://www.investopedia.com/terms/v/volatility.asp" target="_blank">Learn More</a>

<code>annual_volatility(close)</code>

> Note: annual_volatility() only takes a dataframe with 1 year data i.e. dataframe less than 257 trading days and greater 250 days because an average trading year has 250-257 days approximately. To calculate volaitlity on n number of trading days use <a href="#sharpe_ratio">volatility()</a>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required         | Close prices data for a year i.e. trading days<257 and trading days>250 | Pandas dataframe  |



```python
Example:


from libkloudtrader.analysis import annual_volatility
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

annual_volatility(aapl_data['close'])
```
```python
return type : float

28.63259383649376
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


from libkloudtrader.analysis import aroon
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import average_directional_movement_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import average_directional_movement_index_rating
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import average_price
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import average_true_range
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import awesome_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import awesome_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import balance_of_power
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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
| benchmark_close   | required          | Close prices data of market or benchmark like SPY, etc | Pandas dataframe |


```python
Example:


from libkloudtrader.analysis import beta
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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
| n   | required          | timeperiod/number of days | Pandas dataframe |


```python
Example:


from libkloudtrader.analysis import bollinger_bands
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import cagr
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import chaikin_money_flow
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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
| short_period      | optional          | Short Period/Fast Period. 3 by default.          |Int|
| long_period      | optional          | Long Period/Slow Period. 10 by default.          |Int|

```python
Example:


from libkloudtrader.analysis import chaikin_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import chande_momentum_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import commodity_channel_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import coppock_curve
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import correlation_coefficient
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import cumulative_returns
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import daily_returns
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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


from libkloudtrader.analysis import daily_log_returns
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

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
***
### Daily Volatility
Get daily volatility of trading strategy or stock prices.
<br><br>
<a href="https://www.investopedia.com/terms/v/volatility.asp/" target="_blank">Learn More</a>

<code>daily_volatility(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|



```python
Example:


from libkloudtrader.analysis import daily_volatility
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

daily_volatility(aapl_data['close'])
```
```python
return type : Float

1.8072732975767518
```
***
### Detrended Price Oscillator
The detrended price oscillator (DPO) is an indicator in technical analysis that attempts to eliminate the long-term trends in prices by using a displaced moving average so it does not react to the most current price action. This allows the indicator to show intermediate overbought and oversold levels effectively.
<br><br>
<a href="https://en.wikipedia.org/wiki/Detrended_price_oscillator/" target="_blank">Learn More</a>

<code>detrended_price_oscillator(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n                | required          | Time period/number of days            |Int|



```python
Example:


from libkloudtrader.analysis import detrended_price_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

detrended_price_oscillator(aapl_data['close'],5)
```
```python
return type : Pandas DataFrame

0        NaN
1        NaN
2        NaN
3        NaN
4     -1.144
5     -0.758
6      0.800
7     -0.300
8     -0.738
9     -1.146
10    -1.110
        ...
240   -0.122
241    1.480
242    3.842
243    0.014
244    1.298
245    6.378
246    4.620
247    2.340
248   -2.812
249   -6.592
250    2.346
```
***
### Directional Movememnt Index
The Directional Movement Index (DMI) assists in determining if a security is trending and attempts to measure the strength of the trend. The DMI disregards the direction of the security. It only attempts to determine if there is a trend and that trends strength.
<br><br>
<a href="https://www.danielstrading.com/education/technical-analysis-learning-center/directional-movement-index" target="_blank">Learn More</a>

<code>directional_movement_index(high, low, close, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n                | required          | Time period/number of days            |Int|



```python
Example:


from libkloudtrader.analysis import directional_movement_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

directional_movement_index(aapl_data['high'],aapl_data['low'],aapl_data['close'],5)
```
```python
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5      74.206349
6      54.560458
7      67.742880
8      79.466559
9      86.245089
10     52.972606
        ...
240    55.074842
241    63.602429
242    63.602429
243    77.482910
244    83.207269
245    88.618262
246    90.639645
247    34.747986
248    34.747986
249    18.082128
250     9.924722
```
***
### Donchain Channel 
A Donchian Channel is an indicator formed by upper and lower bands around the price bars. The upper band marks the highest price of an issue for n periods while the lower band marks the lowest price for n periods. The area between the upper and lower bands represents the Donchian Channel.
<br><br>
<a href="https://www.investopedia.com/terms/d/donchianchannels.asp" target="_blank">Learn More</a>

<code>donchian_channel(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n                | required          | Time period/number of days            |Int|



```python
Example:


from libkloudtrader.analysis import donchian_channel
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

donchian_channel(aapl_data['close'],5)
```
```python 
returns: dc_high_band, dc_high_band_indicator, dc_low_band, dc_low_band_indicator
return type : Pandas DataFrame 
 
         dc_high_band  dc_high_band_indicator  dc_low_band  dc_low_band_indicator
0             NaN                     0.0          NaN                    0.0
1             NaN                     0.0          NaN                    0.0
2             NaN                     0.0          NaN                    0.0
3             NaN                     0.0          NaN                    0.0
4          175.00                     0.0       172.23                    0.0
5          175.00                     0.0       172.23                    0.0
6          175.00                     0.0       173.03                    0.0
7          175.28                     1.0       174.29                    0.0
8          177.09                     1.0       174.29                    0.0
9          177.09                     0.0       174.29                    0.0
10         179.10                     1.0       174.29                    0.0
                                      ...
240        170.95                     0.0       165.48                    1.0
241        170.95                     0.0       163.94                    1.0
242        170.95                     0.0       163.94                    0.0
243        170.95                     0.0       160.89                    1.0
244        166.07                     0.0       156.83                    1.0
245        166.07                     0.0       150.73                    1.0
246        166.07                     0.0       146.83                    1.0
247        160.89                     0.0       146.83                    0.0
248        157.17                     0.0       146.83                    0.0
249        157.17                     0.0       146.83                    0.0
250        157.74                     1.0       146.83                    0.0
```
***
### Double EMA
The Double Exponential Moving Average (DEMA) indicator was introduced in January 1994 by Patrick G. Mulloy. It attempts to remove the inherent lag associated to Moving Averages by placing more weight on recent values. The name suggests this is achieved by applying a double exponential smoothing which is not the case. The name double comes from the fact that the value of an EMA (Exponential Moving Average) is doubled.
<br><br>
<a href="https://en.wikipedia.org/wiki/Double_exponential_moving_average" target="_blank">Learn More</a>

<code>double_ema(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n                | required          | Time period/number of days            |Int|



```python
Example:


from libkloudtrader.analysis import double_ema
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

double_ema(aapl_data['close'],5)
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
7             NaN
8      176.416830
9      176.546476
10     178.181155
           ...
240    166.747925
241    164.681302
242    164.863769
243    162.201113
244    158.616476
245    153.435918
246    148.666123
247    152.086645
248    153.605028
249    154.607084
250    156.071655
```
***
### Downside Risk
Downside risk is the financial risk associated with losses. That is, it is the risk of the actual return being below the expected return, or the uncertainty about the magnitude of that difference.
<br><br>
<a href="https://en.wikipedia.org/wiki/Downside_risk" target="_blank">Learn More</a>

<code>downside_risk(close,required_return=0)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| required_return | optional          | Required Return. 0 by default           |Int/Float|



```python
Example:


from libkloudtrader.analysis import downside_risk
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

downside_risk(aapl_data['close'])
```
```python 
return type : Float
 
20.749425627440665
```
***
### Ease of Movement
The Ease of Movement technical indicator shows the relationship between price and volume. Often times, traders use this indicator when assessing the strength of an underlying trend.
<br><br>
<a href="https://www.investopedia.com/terms/e/easeofmovement.asp" target="_blank">Learn More</a>

<code>ease_of_movement(high, low, close, volume, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low          | required          | Low Prices Data                      |Pandas Dataframe|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| volume           | required          | Volume Data                      |Pandas Dataframe|
| n               | required          | Timeperiod/ number of days           |Int |



```python
Example:


from libkloudtrader.analysis import ease_of_movement
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

ease_of_movement(aapl_data['high'], aapl_data['low'], aapl_data['close'], aapl_data['volume'], 7)
```
```python 
return type : Pandas DataFrame
0               NaN
1               NaN
2               NaN
3               NaN
4               NaN
5               NaN
6               NaN
7      5.326876e-08
8      3.681215e-08
9      6.084697e-08
10     3.023945e-08 
           ...
240   -1.878136e-07
241   -1.202826e-07
242   -8.951391e-08
243   -8.207138e-08
244   -1.894941e-07
245   -2.632130e-07
246   -3.631737e-07
247   -2.369739e-07
248   -1.812056e-07
249   -1.449995e-07
250   -6.321794e-08
```
***
### Exponential Moving Average(EMA)
An exponential moving average (EMA) is a type of moving average (MA) that places a greater weight and significance on the most recent data points. The exponential moving average is also referred to as the exponentially weighted moving average. 
<br><br>
<a href="https://www.investopedia.com/terms/e/ema.asp" target="_blank">Learn More</a>

<code>ema(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n               | required          | Timeperiod/ number of days           |Int |



```python
Example:


from libkloudtrader.analysis import ema
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

ema(aapl_data['close'], 7)
```
```python 
return type : Pandas DataFrame

0               NaN
1               NaN
2               NaN
3               NaN
4               NaN
5               NaN
6               NaN
7      5.326876e-08
8      3.681215e-08
9      6.084697e-08
10     3.023945e-08
           ...
240   -1.878136e-07
241   -1.202826e-07
242   -8.951391e-08
243   -8.207138e-08
244   -1.894941e-07
245   -2.632130e-07
246   -3.631737e-07
247   -2.369739e-07
248   -1.812056e-07
249   -1.449995e-07
250   -6.321794e-08 
```
***
### Force Index
The Force Index is an indicator that uses price and volume to assess the power behind a move or identify possible turning points developed by Alexander Elder. According to Elder, there are three essential elements to a stock's price movement: direction, extent and volume. The Force Index combines all three as an oscillator that fluctuates in positive and negative territory as the balance of power shifts. The Force Index can be used to reinforce the overall trend, identify playable corrections or foreshadow reversals with divergences.
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:force_index" target="_blank">Learn More</a>

<code>force_index(close,volume,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| volume           | required          | Volume Data                      |Pandas Dataframe|
| n               | required          | Timeperiod/ number of days           |Int |



```python
Example:


from libkloudtrader.analysis import force_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

force_index(aapl_data['close'], aapl_data['volume'],7)
```
```python 
return type : Pandas DataFrame

0               NaN
1               NaN
2               NaN
3               NaN
4               NaN
5               NaN
6               NaN
7     -2.080238e+07
8     -1.992512e+07
9      2.253507e+07
10     4.397995e+07
           ...
240    7.180812e+06
241   -1.282294e+07
242    2.042507e+07
243    1.130445e+08
244   -2.063973e+08
245   -1.104344e+09
246   -1.271463e+08
247   -1.485731e+08
248   -6.877902e+07
249   -8.314708e+07
250    4.424966e+07
```
***
### Hilbert Transform - Dominant Cycle Period

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_dom_cyc_per(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import hilbert_transform_dom_cyc_per
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

hilbert_transform_dom_cyc_per(aapl_data['close'])
```
```python 
return type : Pandas DataFrame

0          NaN
1          NaN
2          NaN
3          NaN
4          NaN
5          NaN
6          NaN
7          NaN
8          NaN
9          NaN
10         NaN
           ...
240    33.336852
241    31.890946
242    30.340229
243    28.709012
244    27.062946
245    25.526817
246    24.295141
247    23.350891
248    22.695126
249    22.273510
250    22.070809
```
***
### Hilbert Transform - Dominant Cycle Phase

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_dom_cyc_phase(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import hilbert_transform_dom_cyc_phase
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

hilbert_transform_dom_cyc_phase(aapl_data['close'])
```
```python 
return type : Pandas DataFrame

0          NaN
1          NaN
2          NaN
3          NaN
4          NaN
5          NaN
6          NaN
7          NaN
8          NaN
9          NaN
10         NaN
           ...
240    19.561229
241    23.836128
242    25.580045
243    26.905135
244    17.512746
245     3.211247
246   -15.042917
247   -19.351484
248   -15.028136
249    -4.230537
250     4.311873
```
***
### Hilbert Transform - Instantaneous Trendline

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_inst_trendline(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import hilbert_transform_inst_trendline
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

hilbert_transform_inst_trendline(aapl_data['close'])
```
```python 
return type : Pandas DataFrame

0          NaN
1          NaN
2          NaN
3          NaN
4          NaN
5          NaN
6          NaN
7          NaN
8          NaN
9          NaN
10         NaN
           ...
240    190.837872
241    188.391493
242    185.375011
243    182.635948
244    179.451931
245    176.557688
246    173.580756
247    171.152430
248    169.462166
249    168.155874
250    167.216551
```
***
### Hilbert Transform - Phasor Components

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_phasor_components(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import hilbert_transform_phasor_components
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

hilbert_transform_phasor_components(aapl_data['close'])
```
```python 
returns: inphase, quadrature
return type : Pandas DataFrame

       inphase  quadrature
0          NaN         NaN
1          NaN         NaN
2          NaN         NaN
3          NaN         NaN
4          NaN         NaN
5          NaN         NaN
6          NaN         NaN
7          NaN         NaN
8          NaN         NaN
9          NaN         NaN
10         NaN         NaN
           ...
240   -15.814747  -16.123834
241   -17.002610    7.959273
242   -10.577220   18.745264
243   -6.201544   15.765057
244   -1.509589    7.737092
245   -2.667140   -6.047104
246   -6.658545   -4.234801
247   -5.300593   -2.400738
248   -6.805108   -8.416180
249   -10.232868   -6.383109
250   -12.106739   -2.837278
```
***
### Hilbert Transform - SineWave

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_sine_wave(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import hilbert_transform_sine_wave
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

hilbert_transform_sine_wave(aapl_data['close'])
```
```python 
returns: sine leadsine
return type : Pandas DataFrame

         sine  leadsine
0         NaN       NaN
1         NaN       NaN
2         NaN       NaN
3         NaN       NaN
4         NaN       NaN
5         NaN       NaN
6         NaN       NaN
7         NaN       NaN
8         NaN       NaN
9         NaN       NaN
10        NaN       NaN
        ...
240  0.334814  0.903045
241  0.404122  0.932552
242  0.431772  0.943107
243  0.452515  0.950544
244  0.300918  0.887114
245  0.056017  0.745607
246 -0.259542  0.499351
247 -0.331362  0.432849
248 -0.259293  0.499575
249 -0.073770  0.653017
```
***
### Hilbert Transform - Trend vs Cycle Mode

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_trend_vs_cycle_mode(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import hilbert_transform_trend_vs_cycle_mode
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

hilbert_transform_trend_vs_cycle_mode(aapl_data['close'])
```
```python 
return type : Pandas DataFrame

0      0
1      0
2      0
3      0
4      0
5      0
6      0
7      0
8      0
9      0
10     0
      ...
240    1
241    1
242    1
243    1
244    1
245    1
246    1
247    1
248    1
249    1
250    1
```
***
### Hull Moving Average
Hull Moving Average, developed by Alan Hull is an extremely useful indicator to overcome the lag associated with traditional moving averages.
<br><br>
<a href="http://tradingtuitions.com/hull-moving-average-2/" target="_blank">Learn More</a>

<code>hull_moving_average(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time period/Number of days |Int|


```python
Example:


from libkloudtrader.analysis import hull_moving_average
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

hull_moving_average(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

      hull_mavg
0           NaN
1           NaN
2           NaN
3           NaN
4           NaN
5           NaN
6           NaN
7    174.935278
8    176.252540
9    177.007302
10   178.396270
        ...
240  167.964286
241  164.969524
242  163.761310
243  161.967421
244  158.174563
245  152.022063
246  146.015595
247  148.240040
248  153.541151
249  157.100635
250  158.416984
```
***
### Ichimoku Cloud
The Ichimoku Cloud, also known as Ichimoku Kinko Hyo, is a versatile indicator that defines support and resistance, identifies trend direction, gauges momentum and provides trading signals.
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:ichimoku_cloud" target="_blank">Learn More</a>

<code>ichimoku_cloud(high, low, short_period, medium_period, long_period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|
| short_period          | required          | Short Period |Int|
| medium_period          | required          | Medium Period |Int|
| long_period          | required          | Long Period |Int|


```python
Example:


from libkloudtrader.analysis import ichimoku_cloud
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

ichimoku_cloud(aapl_data['high'],aapl_data['low'],4,7,12)
```
```python 
returns: chimoku_cloud_a, ichimoku_cloud_b
return type : Pandas DataFrame

          ichimoku_cloud_a  ichimoku_cloud_b
0                 NaN               NaN
1                 NaN               NaN
2                 NaN               NaN
3                 NaN               NaN
4                 NaN               NaN
5                 NaN               NaN
6          173.370000               NaN
7          174.045000               NaN
8          174.950000               NaN
9          176.195000               NaN
10         176.567500               NaN
                ...
240        168.990000         174.13500
241        168.130000         173.83500
242        167.650000         173.83500
243        164.957500         172.01500
244        162.880000         168.84495
245        159.840000         162.20500
246        157.427500         160.54000
247        155.910000         159.58000
248        154.717500         159.58000
249        154.787500         159.58000
250        153.695000         159.58000
```
***
### Information Ratio
What is Information Ratio (IR)
The information ratio (IR) is a measure of portfolio returns above the returns of a benchmark, usually an index, to the volatility of those returns. 
<br><br>
<a href="https://www.investopedia.com/terms/i/informationratio.asp" target="_blank">Learn More</a>

<code>information_ratio(daily_Returns,benchmark_daily_returns)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| returns           | required          | Daily returns' Data                      |Pandas Dataframe|
| benchmark_returns   | required          | Daily returns' data of market or benchmark like SPY, etc | Pandas dataframe |



```python
Example:


from libkloudtrader.analysis import information_ratio
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

information_ratio( daily_returns(aapl_data['close']), daily_returns(spy_data['close']) )
```
```python 
return type : Float

0.0386038148944812
```
***
### Kaufman Adaptive Moving Average
Developed by Perry Kaufman, Kaufman's Adaptive Moving Average (KAMA) is a moving average designed to account for market noise or volatility. KAMA will closely follow prices when the price swings are relatively small and the noise is low. KAMA will adjust when the price swings widen and follow prices from a greater distance. This trend-following indicator can be used to identify the overall trend, time turning points and filter price movements.
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:kaufman_s_adaptive_moving_average" target="_blank">Learn More</a>

<code>kaufman_adaptive_moving_average(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close prices Data                      |Pandas Dataframe|
| n           | required          | Time period/number of days                      |Pandas Dataframe|




```python
Example:


from libkloudtrader.analysis import kaufman_adaptive_moving_average
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

kaufman_adaptive_moving_average(aapl_data['close'],7)
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
7      174.507414
8      175.234264
9      175.360034
10     175.963785
           ...
240    175.274526
241    173.154361
242    172.944440
243    171.361783
244    168.945479
245    164.667340
246    158.743575
247    158.670831
248    158.561945
249    158.407149
250    158.395037
```
***
### Keltner Channels
Keltner Channels are a popular technical indicator that traders use to help assess the current trend, spot potential reversals and provide trade signals. The channels use volatility and average prices to plot upper and lower lines, as well as a middle (or average) line. All three of these lines move with the price, creating a channel-like appearance.
<br><br>
<a href="https://www.thebalance.com/how-to-day-with-trade-keltner-channels-4051613" target="_blank">Learn More</a>

<code>keltner_channels(high, low, close, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High prices Data                      |Pandas Dataframe|
| high           | required          | Low prices Data                      |Pandas Dataframe|
| close           | required          | Close prices Data                      |Pandas Dataframe|
| n           | required          | Time period/number of days                      |Pandas Dataframe|



```python
Example:


from libkloudtrader.analysis import keltner_channels
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

keltner_channels(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 
returns:keltner_channel_central, keltner_channel_highband,  keltner_channel_highband_indicator, keltner_channel_lowband, keltner_channel_lowband_indicator
return type : Pandas DataFrame

        keltner_channel_central  keltner_channel_highband  keltner_channel_highband_indicator  keltner_channel_lowband  keltner_channel_lowband_indicator
0                        NaN                       NaN                                 0.0                      NaN                                0.0
1                        NaN                       NaN                                 0.0                      NaN                                0.0
2                        NaN                       NaN                                 0.0                      NaN                                0.0
3                        NaN                       NaN                                 0.0                      NaN                                0.0
4                        NaN                       NaN                                 0.0                      NaN                                0.0
5                        NaN                       NaN                                 0.0                      NaN                                0.0
6                 173.468571                175.464286                                 0.0               171.472857                                0.0
7                 174.013267                175.717352                                 0.0               172.309181                                0.0
8                 174.554219                176.132590                                 0.0               172.975848                                0.0
9                 175.179933                177.024019                                 0.0               173.335848                                0.0
10                175.656124                177.765924                                 0.0               173.546324                                0.0
                                                                                ...
240               169.742381                174.288095                                 0.0               165.196667                                0.0
241               168.556667                173.282381                                 0.0               163.830952                                0.0
242               167.923810                172.213810                                 0.0               163.633810                                0.0
243               167.181429                171.700000                                 0.0               162.662857                                0.0
244               165.601429                170.408571                                 0.0               160.794286                                0.0
245               163.148095                168.759524                                 0.0               157.536667                                0.0
246               159.905238                165.793810                                 0.0               154.016667                                0.0
247               158.061429                164.908571                                 0.0               151.214286                                0.0
248               156.536190                163.537619                                 0.0               149.534762                                0.0
249               155.170000                162.290000                                 0.0               148.050000                                0.0
250               154.510476                160.847619                                 0.0               148.173333                                0.0
```
***
### Know sure thing/KST
Developed by Martin Pring, Know Sure Thing (KST) is a momentum oscillator based on the smoothed rate-of-change for four different timeframes. In short, KST measures price momentum for four different price cycles, combining them into a single oscillator. Like any other unbound momentum oscillator, chartists can use KST to look for divergences, signal line crossovers, and centerline crossovers. Pring frequently applied trend lines to KST. Although trend line signals do not occur often.
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:know_sure_thing_kst" target="_blank">Learn More</a>

<code>know_sure_thing(close,r1,r2,r3,r4,n1,n2,n3,n4,nsig)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close prices Data                      |Pandas Dataframe|
| r1           | required          | r1 period          |Int|
| r2           | required          | r2 period          |Int|
| r3           | required          | r3 period          |Int|
| r4           | required          | r4 period          |Int|
| n1           | required          | n1 period          |Int|
| n2           | required          | n2 period          |Int|
| n3           | required          | n3 period          |Int|
| n4           | required          | n4 period          |Int|
| nsig           | required          | n period to signal          |Int|


```python
Example:


from libkloudtrader.analysis import know_sure_thing
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

know_sure_thing(aapl_data['close'],r1=10,r2=15,r3=20,r4=30,n1=10,n2=10,n3=10,n4=15,nsig=9)
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
7             NaN
8             NaN
9             NaN
10            NaN
           ...
240   -157.111992
241   -155.191326
242   -153.358367
243   -151.944131
244   -150.964752
245   -150.619253
246   -150.782541
247   -151.246561
248   -152.103549
249   -153.330159
250   -154.541015
```
***
### Kutosos
kurtosis is a statistical measure that is used to describe the distribution. Whereas skewness differentiates extreme values in one versus the other tail, kurtosis measures extreme values in either tail. Distributions with large kurtosis exhibit tail data exceeding the tails of the normal distribution (e.g., five or more standard deviations from the mean). Distributions with low kurtosis exhibit tail data that is generally less extreme than the tails of the normal distribution. 
<br><br>
<a href="https://www.investopedia.com/terms/k/kurtosis.asp" target="_blank">Learn More</a>

<code>kurtosis(data)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data           | required          | Price Data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import kurtosis
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

kurtosis(aapl_data['close'])
```
```python 
return type : Float

-0.9259846743013789
```
***
### Linear Regression

<a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank">Learn More</a>

<code>linear_regression(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n           | required          | Time Period/number of days                     |Int|


```python
Example:


from libkloudtrader.analysis import linear_regression
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

linear_regression(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0             NaN
1             NaN
2             NaN
3             NaN
4             NaN
5             NaN
6      174.885357
7      175.251429
8      176.125714
9      176.290000
10     178.029643
          ...
240    167.070714
241    165.930357
242    165.153929
243    162.548929
244    158.715000
245    153.447500
246    148.866071
247    150.106786
248    151.324286
249    154.022143
250    156.995357
```
***
### Linear Regression Angle

<a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank">Learn More</a>

<code>linear_regression_angle(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n           | required          | Time Period/number of days                     |Int|


```python
Example:


from libkloudtrader.analysis import linear_regression_angle
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

linear_regression_angle(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0             NaN
1             NaN
2             NaN
3             NaN
4             NaN
5             NaN
6      174.885357
7      175.251429
8      176.125714
9      176.290000
10     178.029643
          ...
240   -39.765293
241   -34.950799
242   -40.114138
243   -52.347572
244   -63.573423
245   -70.932990
246   -73.004569
247   -67.898353
248   -59.322720
249   -17.633230
250    39.461699
```
***
### Linear Regression Intercept

<a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank">Learn More</a>

<code>linear_regression_intercept(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n           | required          | Time Period/number of days                     |Int|


```python
Example:


from libkloudtrader.analysis import linear_regression_intercept
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

linear_regression_intercept(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0             NaN
1             NaN
2             NaN
3             NaN
4             NaN
5             NaN
6      172.397500
7      172.894286
8      173.408571
9      174.147143
10     173.578929
          ...
240    172.063571
241    170.123929
242    170.208929
243    170.325357
244    170.787857
245    170.806786
246    168.496786
247    164.881786
248    161.438571
249    155.929286
250    152.056071
```
***
### Linear Regression Slope

<a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank">Learn More</a>

<code>linear_regression_slope(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n           | required          | Time Period/number of days                     |Int|


```python
Example:


from libkloudtrader.analysis import linear_regression_slope
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

linear_regression_slope(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0           NaN
1           NaN
2           NaN
3           NaN
4           NaN
5           NaN
6      0.414643
7      0.392857
8      0.452857
9      0.357143
10     0.741786
          ...
240   -0.953560
241   -1.222352
242   -1.395868
243   -1.460593
244   -1.599011
245   -1.843824
246   -1.871934
247   -1.705648
248   -1.547648
249   -1.511121
250   -1.340967
```
### Moving Average Convergence Divergence (MACD)

The Moving Average Convergence Divergence (MACD) is a trend-following momentum indicator that shows the relationship between two moving averages of a security’s price. The MACD is calculated by subtracting the 26-period Exponential Moving Average (EMA) from the 12-period EMA. The result of that calculation is the MACD line. A nine-day EMA of the MACD, called the "signal line", is then plotted on top of the MACD line which can function as a trigger for buy and sell signals. Traders may buy the security when the MACD crosses above its signal line and sell, or short, the security when the MACD crosses below the signal line.<br><br>
<a href="https://www.investopedia.com/terms/m/macd.asp" target="_blank">Learn More</a>

<code>macd(close, n_sign, short_period=12, long_period=26)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n_sig           | required          | n period to signal |Int|
| short_period           | optional          | Short Period. 12 by default. |Int|
| long_period           | optional          | Long Period. 26 by default. |Int|



```python
Example:


from libkloudtrader.analysis import macd
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

macd(aapl_data['close'],9)
```
```python 
returns: macd, macd_signal, macd_difference
return type : Pandas DataFrame

          macd    macd_signal  macd_difference
0          NaN          NaN              NaN
1          NaN          NaN              NaN
2          NaN          NaN              NaN
3          NaN          NaN              NaN
4          NaN          NaN              NaN
5          NaN          NaN              NaN
6          NaN          NaN              NaN
7          NaN          NaN              NaN
8          NaN          NaN              NaN
9          NaN          NaN              NaN
10         NaN          NaN              NaN
          ...
240  -8.746099    -8.947839         0.201740
241  -8.826821    -8.923635         0.096814
242  -8.619561    -8.862820         0.243260
243  -8.772168    -8.844690         0.072522
244  -9.115638    -8.898880        -0.216759
245  -9.767467    -9.072597        -0.694870
246 -10.477960    -9.353670        -1.124290
247 -10.090364    -9.501009        -0.589355
248  -9.753069    -9.551421        -0.201649
249  -9.371279    -9.515392         0.144113
250  -8.844905    -9.381295         0.536390
```
### Mass Index

Mass index is a form of technical analysis that examines the range between high and low stock prices over a period of time. Mass index, developed by Donald Dorsey in the early 1990s, suggests that a reversal of the current trend will likely take place when the range widens beyond a certain point and then contracts. <br><br>
<a href="https://www.investopedia.com/terms/m/mass-index.asp" target="_blank">Learn More</a>

<code>mass_index(high, low, short_period, long_period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|
| short_period           | required         | Short Period. |Int|
| long_period           | required          | Long Period. |Int|



```python
Example:


from libkloudtrader.analysis import mass_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

mass_index(mass_index(aapl_data['high'], aapl_data['low'], 4,9)
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
240     8.803656
241     8.928701
242     8.821159
243     9.007526
244     9.083861
245     9.150000
246     9.153769
247     9.425518
248     9.624117
249     9.629589
250     9.397642
```
### MidPoint over period

MidPoint over period is simply moving average of the sum of highest and lowest value over a period of days.

<code>midpoint_over_period(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n           | required          | Time Period/Number of days                      |Int|



```python
Example:


from libkloudtrader.analysis import midpoint_over_period
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

midpoint_over_period(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0          NaN
1          NaN
2          NaN
3          NaN
4          NaN
5          NaN
6      173.615
7      173.755
8      175.060
9      175.690
          ...
240    170.100
241    167.445
242    167.445
243    165.920
244    163.890
245    160.840
246    156.450
247    156.450
248    156.450
249    153.860
250    152.285
```
***
### MidPoint price over period

MidPoint price over period is simply moving average of the sum of highest high and lowest low over a period of days.

<code>midpoint_price_over_period(high,low,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|
| n           | required          | Time Period/Number of days                      |Int|



```python
Example:


from libkloudtrader.analysis import midpoint_price_over_period
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

midpoint_price_over_period(aapl_data['high'],aapl_data['low'],7)
```
```python 
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6      172.43500
7      173.78500
8      174.72000
9      176.19500
10     176.19500
          ...
240    169.05500
241    168.61000
242    167.65000
243    165.83000
244    163.93500
245    161.10000
246    157.83500
247    157.47000
248    157.06000
249    157.02000
250    154.35000
```
***
### Minus Directional Indicator

Minus Directional Indicator or Negative Directional Indicator is a negative directional indicator is a component of the average directional index (ADX) that is used to measure the presence of a downtrend. When the -DI is sloping upward, it is a signal that the strength of the downtrend is increasing. 
<br><br>
<a href="https://www.investopedia.com/terms/n/negativedirectionalindicator.asp" target="_blank">Learn More</a>
<code>minus_directional_indicator(high,low,close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n           | required          | Time Period/Number of days                      |Int|



```python
Example:


from libkloudtrader.analysis import minus_directional_indicator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])
spy_data=pd.DataFrame(ohlcv('SPY','2018-01-01','2019-01-01')['history']['day'])

minus_directional_indicator(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
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
7       7.513108
8       6.114608
9       4.565457
10     10.358802
          ...
240    40.052851
241    40.839428
242    36.786601
243    42.437532
244    44.656821
245    48.955178
246    50.409614
247    39.032245
248    33.137666
249    30.165839
250    27.867078
```
***
### Minus Directional Movement

<code>minus_directional_moevement(high,low,close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n           | required          | Time Period/Number of days                      |Int|



```python
Example:


from libkloudtrader.analysis import minus_directional_movement
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

minus_directional_movement(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6       0.930000
7       0.797143
8       0.683265
9       0.585656
10      1.571991
          ...
240    15.138368
241    15.525744
242    13.307781
243    16.706669
244    18.110002
245    21.192859
246    21.205308
247    18.175978
248    15.579410
249    13.353780
250    11.446097
```
***
### Median Price
The Median Price indicator is simply the midpoint of each day's price. The Typical Price and Weighted Close are similar indicators.
<br><br>
<a href="https://www.metastock.com/customer/resources/taaz/?p=70" target="_blank">Learn More</a>
<code>median_price(high,low)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|




```python
Example:


from libkloudtrader.analysis import median_price
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

median_price(aapl_data['high'],aapl_data['low'])
```
```python 
return type : Pandas DataFrame

0      170.78000
1      173.25500
2      172.77500
3      174.21000
4      174.77000
5      174.23500
6      173.65000
7      174.98930
8      176.50500
9      177.76500
10     177.16000
          ...
240    167.18000
241    165.54000
242    165.96000
243    163.27000
244    158.70500
245    153.89500
246    149.07000
247    151.97500
248    153.42000
249    156.53500
250    157.92000
```
***
### Momentum
The Momentum indicator measures the amount that a security's price has changed over a given time span.
<br><br>
<a href="https://www.metastock.com/customer/resources/taaz/?p=72" target="_blank">Learn More</a>
<code>momentum(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time period/Number of days                     |Int|




```python
Example:


from libkloudtrader.analysis import momentum
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

momentum(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0        NaN
1        NaN
2        NaN
3        NaN
4        NaN
5        NaN
6        NaN
7       3.02
8       4.86
9       3.16
10      4.10
        ...
240   -11.21
241   -10.78
242    -2.42
243    -8.71
244   -11.80
245   -18.37
246   -24.12
247    -8.31
248    -7.79
249    -9.84
250    -3.15
```
***
### Money Flow Index
The Money Flow Index (MFI) is a technical oscillator used for identifying overbought or oversold conditions for an individual security or an ETF or index.
<br><br>
<a href="https://www.investopedia.com/terms/m/moneyflow.asp" target="_blank">Learn More</a>
<code>money_flow_index(high, low, close, volume, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| volume           | required          | Volume Data                      |Pandas Dataframe|
| n          | required          | Time period/Number of days                     |Int|

```python
Example:


from libkloudtrader.analysis import money_flow_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

money_flow_index(aapl_data['high'],aapl_data['low'],aapl_data['close'],aapl_data['volume'],7)
```
```python 
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6      32.506757
7      40.414256
8      57.782826
9      41.497793
10     45.290906
        ...
240    42.659057
241    42.793552
242    55.485357
243    36.303302
244    34.656558
245    19.089690
246     9.675114
247    24.255009
248    23.902232
249    25.124011
250    35.402272
```
***
### Moving Average
A moving average (MA) is a widely used indicator in technical analysis that helps smooth out price action by filtering out the “noise” from random price fluctuations. It is a trend-following, or lagging, indicator because it is based on past prices.
<br><br>
<a href="https://www.investopedia.com/terms/m/movingaverage.asp" target="_blank">Learn More</a>

<code>ma(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time period/Number of days                     |Int|

```python
Example:


from libkloudtrader.analysis import ma
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

ma(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0             NaN
1             NaN
2             NaN
3             NaN
4             NaN
5             NaN
6      173.641429
7      174.072857
8      174.767143
9      175.218571
10     175.804286
        ...
240    169.567143
241    168.027143
242    167.681429
243    166.437143
244    164.751429
245    162.127143
246    158.681429
247    157.494286
248    156.381429
249    154.975714
250    154.525714
```
***
### Moving Volatility

<code>moving_volatility(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time period/Number of days                     |Int|

```python
Example:


from libkloudtrader.analysis import moving_volatility
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

moving_volatility(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0                  NaN
1                  NaN
2                  NaN
3                  NaN
4                  NaN
5                  NaN
6                  NaN
7             1.339171
8             1.497183
9             1.743743
10            2.086822
                ...
240           4.871585
241           4.866343
242           4.121432
243           4.870786
244           5.175671
245           5.620052
246           4.680936
247          10.068871
248          10.064391
249           9.860238
250           9.586986
```
***
### Negative Volume Index
The Negative Volume Index (NVI) is a cumulative indicator that uses the change in volume to decide when the smart money is active. Paul Dysart first developed this indicator in the 1930s. Dysart's Negative Volume Index works under the assumption that the smart money is active on days when volume decreases and the not-so-smart money is active on days when volume increases.
<br><br>
<a href="https://www.investopedia.com/terms/m/movingaverage.asp" target="_blank">Learn More</a>

<code>negative_volume_index(close,volume)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| volume          | required          | Voluem Data                    |Pandas Dataframe|

```python
Example:


from libkloudtrader.analysis import negative_volume_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

negative_volume_index(aapl_data['close'],aapl_data['volume'])
```
```python 
return type : Pandas DataFrame

0      1000.000000
1      1000.000000
2      1004.644952
3      1004.644952
4      1000.913413
5      1000.913413
6      1000.913413
7      1006.598790
8      1006.598790
9      1006.598790
10     1006.598790
          ...
240    1307.285925
241    1307.285925
242    1324.270914
243    1324.270914
244    1324.270914
245    1324.270914
246    1290.006623
247    1290.006623
248    1281.634753
249    1282.291370
250    1294.685021
```
***
### Normalized Average True Range
Normalized Average True Range is a measure of volatility.
Because Normalized Average True Range is normalized, it can be more useful than Average True Range when comparing across different price levels.
<br><br>
<a href="https://tulipindicators.org/natr" target="_blank">Learn More</a>

<code>normalized_average_true_range(high, low, close, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low           | required          | Low Prices Data                      |Pandas Dataframe|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time Period/Number of days                    |Int|

```python
Example:


from libkloudtrader.analysis import normalized_average_true_range
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

normalized_average_true_range(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0      1000.000000
1      1000.000000
2      1004.644952
3      1004.644952
4      1000.913413
5      1000.913413
6      1000.913413
7      1006.598790
8      1006.598790
9      1006.598790
10     1006.598790
          ...
240    1307.285925
241    1307.285925
242    1324.270914
243    1324.270914
244    1324.270914
245    1324.270914
246    1290.006623
247    1290.006623
248    1281.634753
249    1282.291370
250    1294.685021
```
***
### On Balance Volume
On-balance volume (OBV) is a momentum indicator that uses volume flow to predict changes in stock price. Joseph Granville first developed the OBV metric in the 1960s. He believed that when volume increases sharply without a significant change in the stock's price, the price will eventually jump upward, and vice versa.
<br><br>
<a href="https://www.investopedia.com/terms/o/onbalancevolume.asp" target="_blank">Learn More</a>

<code>on_balance_volume(close, volume)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| volume          | required          | Volume Data                   |Pandas Dataframe|

```python
Example:


from libkloudtrader.analysis import on_balance_volume
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

on_balance_volume(aapl_data['close'], aapl_data['volume'])
```
```python 
return type : Pandas DataFrame

0       25555934.0
1       -3961965.0
2       18472632.0
3       42132650.0
4       21564884.0
5         -19113.0
6      -23979008.0
7       -5311279.0
8       20106801.0
9       -9459146.0
10      24927690.0
          ...
240   -177126586.0
241   -221414508.0
242   -187572990.0
243   -236620287.0
244   -301393247.0
245   -397137631.0
246   -434306863.0
247   -375724319.0
248   -428841384.0
249   -386549960.0
250   -351550174.0
```
***
### Omega Ratio
The Omega ratio is a risk-return performance measure of an investment asset, portfolio, or strategy. It was devised by Keating & Shadwick in 2002 and is defined as the probability weighted ratio of gains versus losses for some threshold return target.
<br><br>
<a href="https://en.wikipedia.org/wiki/Omega_ratio" target="_blank">Learn More</a>

<code>omega_ratio(close, risk_free=0.0, required_return=0.0, trading_days=252)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| risk_free          | optional          | risk free returns. 0 by default.                |Float|
| required_return          | optional          | required returns. 0 by default.                |Float|
| trading_days          | optional          | Number of trading days. 252 by default.                |Int|

```python
Example:


from libkloudtrader.analysis import omega_ratio
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

omega_ratio(aapl_data['close'])
```
```python 
return type : Float

0.971480867424712
```
***
### Parabolic SAR
The parabolic SAR is a technical indicator used to determine the price direction of an asset, as well draw attention to when the price direction is changing. Sometimes known as the "stop and reversal system," the parabolic SAR was developed by Welles Wilder, creator of the relative strength index (RSI).
<br><br>
<a href="https://www.investopedia.com/trading/introduction-to-parabolic-sar/" target="_blank">Learn More</a>

<code>parabolic_sar(high, low, acceleration=0, maximum=0)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low          | required          | Low Prices Data                      |Pandas Dataframe|
| acceleration          | optional          | 0 by default.               |Int|
| maximum          | optional          | 0 by default.                |Int|

```python
Example:


from libkloudtrader.analysis import parabolic_sar
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

parabolic_sar(aapl_data['high'],aapl_data['low'])
```
```python 
return type : Pandas DataFrame

0         NaN
1      169.26
2      169.26
3      169.26
4      169.26
5      169.26
6      169.26
7      169.26
8      169.26
9      169.26
10     169.26
        ...
240    150.24
241    150.24
242    150.24
243    150.24
244    150.24
245    233.47
246    233.47
247    233.47
248    233.47
249    233.47
250    233.47
```
***
### Percentage Price Oscillator
The Percentage Price Oscillator (PPO) is a momentum oscillator that measures the difference between two moving averages as a percentage of the larger moving average.
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:price_oscillators_ppo" target="_blank">Learn More</a>

<code>percentage_price_oscillator(close, short_period, long_period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| short_period          | required          | Short Period/Fast moving period                     |Int|
| long_period          | required          | Long Period/Slow moving period                     |Int|


```python
Example:


from libkloudtrader.analysis import percentage_price_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

percentage_price_oscillator(aapl_data['close'],4,9)
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
8      0.597470
9      0.612200
10     0.859907
        ...
240   -2.042002
241   -1.393853
242   -1.152949
243   -1.749326
244   -2.286137
245   -3.052383
246   -4.579479
247   -4.370035
248   -3.483628
249   -1.977962
250    0.196111
```
***
### Plus Directional Indicator
The Plus or Positive Directional Indicator (+DI) is a component of the Average Directional Index (ADX) and is used to measure the presence of an uptrend. When the +DI is sloping upward, it is a signal that the uptrend is getting stronger. 
<br><br>
<a href="https://www.investopedia.com/terms/p/positivedirectionalindicator.asp" target="_blank">Learn More</a>

<code>plus_directional_indicator(high, low, close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low          | required          | Low Prices Data                      |Pandas Dataframe|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time Period/number of days                     |Int|



```python
Example:


from libkloudtrader.analysis import plus_directional_indicator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

plus_directional_indicator(aapl_data['high'],aapl_data['low'],aapl_data['close'],14)
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
240    14.344027
241    13.356301
242    12.752221
243    11.453159
244    10.513606
245     9.466106
246     8.910193
247    14.243830
248    13.116187
249    14.525150
250    14.983120
```
***
### Plus Directional Movement

<code>plus_directional_movement(high, low, close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas Dataframe|
| low          | required          | Low Prices Data                      |Pandas Dataframe|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time Period/number of days                     |Int|



```python
Example:


from libkloudtrader.analysis import plus_directional_movement
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

plus_directional_movement(aapl_data['high'],aapl_data['low'],aapl_data['close'],14)
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
240    11.739282
241    10.900762
242    10.122136
243     9.399126
244     8.727760
245     8.104349
246     7.525467
247    12.667933
248    11.763081
249    12.672861
250    12.607657
```
***
### Rate of Change
The Rate-of-Change (ROC) indicator, which is also referred to as simply Momentum, is a pure momentum oscillator that measures the percent change in price from one period to the next. The ROC calculation compares the current price with the price “n” periods ago. The plot forms an oscillator that fluctuates above and below the zero line as the Rate-of-Change moves from positive to negative. As a momentum oscillator, ROC signals include centerline crossovers, divergences and overbought-oversold readings. 
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:rate_of_change_roc_and_momentum" target="_blank">Learn More</a>

<code>rate_of_change(close,n)</code>


| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time Period/number of days                     |Int|



```python
Example:


from libkloudtrader.analysis import rate_of_change
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

rate_of_change(aapl_data['close'],7)
```
```python 
returns: rate_of_change, rate_of_change_precentage, rate_of_change_ratio, rate_of_change_ratio_100_scale
return type : Pandas DataFrame

        rate_of_change  rate_of_change_precentage  rate_of_change_ratio  rate_of_change_ratio_100_scale
0               NaN                        NaN                   NaN                             NaN
1               NaN                        NaN                   NaN                             NaN
2               NaN                        NaN                   NaN                             NaN
3               NaN                        NaN                   NaN                             NaN
4               NaN                        NaN                   NaN                             NaN
5               NaN                        NaN                   NaN                             NaN
6               NaN                        NaN                   NaN                             NaN
7          1.753164                   0.017532              1.017532                      101.753164
8          2.821808                   0.028218              1.028218                      102.821808
9          1.826273                   0.018263              1.018263                      101.826273
10         2.342857                   0.023429              1.023429                      102.342857
        ...
240       -6.344445                  -0.063444              0.936556                       93.655555
241       -6.169872                  -0.061699              0.938301                       93.830128
242       -1.436287                  -0.014363              0.985637                       98.563713
243       -5.135613                  -0.051356              0.948644                       94.864387
244       -6.997569                  -0.069976              0.930024                       93.002431
245      -10.863394                  -0.108634              0.891366                       89.136606
246      -14.109389                  -0.141094              0.858906                       85.890611
247       -5.021755                  -0.050218              0.949782                       94.978245
248       -4.751738                  -0.047517              0.952483                       95.248262
249       -5.925212                  -0.059252              0.940748                       94.074788
250       -1.957859                  -0.019579              0.980421                       98.042141
```
***
### Relative Strength Index
The relative strength index (RSI) is a momentum indicator that measures the magnitude of recent price changes to evaluate overbought or oversold conditions in the price of a stock or other asset. 
<br><br>
<a href="https://www.investopedia.com/terms/r/rsi.asp" target="_blank">Learn More</a>
<code>relative_strength_index(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|
| n          | required          | Time Period/number of days                     |Int|



```python
Example:


from libkloudtrader.analysis import relative_strength_index
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

relative_strength_index(aapl_data['close'],9)
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
9      70.691394
10     84.811944
        ...
240    26.631614
241    23.696571
242    35.908549
243    24.156090
244    18.291000
245    12.562527
246    10.047678
247    45.923875
248    43.771230
249    44.028448
250    49.480936
```
***
### Returns
Get return for any number of trading days. Daily Returns*Number of trading days.

<code>returns(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|




```python
Example:


from libkloudtrader.analysis import returns
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2014-01-01','2019-01-01')['history']['day'])

returns(aapl_data['close'])
```
```python 
return type : Float

83.53058080994171
```
***
### Sharpe Ratio
The Sharpe ratio was developed by Nobel laureate William F. Sharpe, and is used to help investors understand the return of an investment compared to its risk. The ratio is the average return earned in excess of the risk-free rate per unit of volatility or total risk. Subtracting the risk-free rate from the mean return allows an investor to better isolate the profits associated with risk-taking activities. Get sharpe_ratio for any number of days with this function.
<br><br>
<a href="https://www.investopedia.com/terms/s/sharperatio.asp" target="_blank">Learn More</a>

<code>sharpe_ratio(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Close Prices Data                      |Pandas Dataframe|




```python
Example:


from libkloudtrader.analysis import sharpe_ratio
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2014-01-01','2019-01-01')['history']['day'])

sharpe_ratio(aapl_data['close'])
```
```python 
return type : Float

1.5606810484680016
```
***
### Skewness
Skewness is the degree of distortion from the symmetrical bell curve, or normal distribution, in a set of data. Skewness can be negative, positive, zero or undefined.
<br><br>
<a href="https://www.investopedia.com/terms/s/skewness.asp" target="_blank">Learn More</a>

<code>skewness(data)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| Data           | required          | Data                      |Pandas Dataframe|



```python
Example:


from libkloudtrader.analysis import skewness
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

skewness(aapl_data['close'])
```
```python 
return type : Float

0.4281548957296929
```
***
### Sortino Ratio
The Sortino ratio improves upon the Sharpe ratio by isolating downside volatility from total volatility by dividing excess return by the downside deviation.
<br><br>
<a href="https://www.investopedia.com/terms/s/sortinoratio.asp" target="_blank">Learn More</a>

<code>sortino_ratio(close,target_return)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| target_return         | required          | Target Return/Required Return/Risk free return                     |Float|



```python
Example:


from libkloudtrader.analysis import skewness
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

sortino_ratio(aapl_data['close'],7.0)
```
```python 
return type : Float

-0.5655692286577482
```
***
### Standard Deviation (Moving)
The standard deviation is a statistic that measures the dispersion of a dataset relative to its mean and is calculated as the square root of the variance. It is calculated as the square root of variance by determining the variation between each data point relative to the mean. If the data points are further from the mean, there is higher deviation within the data set; thus, the more spread out the data, the higher the standard deviation.
<br><br>
<a href="https://www.investopedia.com/terms/s/standarddeviation.asp" target="_blank">Learn More</a>

<code>standard_deviation(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n        | required          | Time period/Number of days                    |Int|



```python
Example:


from libkloudtrader.analysis import standard_deviation
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

standard_deviation(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0           NaN
1           NaN
2           NaN
3           NaN
4           NaN
5           NaN
6      1.036263
7      0.999324
8      1.154082
9      0.993097
10     1.669900
          ...
240    2.602931
241    2.265844
242    2.351835
243    3.169559
244    4.438788
245    6.180640
246    6.973944
247    6.399218
248    5.833900
249    4.318779
250    3.813659
```
***
### Stochastic Oscillator
The stochastic oscillator is a momentum indicator comparing theclosing price
of a security to the range of its prices over a certain period of time. The sensitivity of the oscillator to market movements is reducible by adjusting that time period or by taking a moving average of the result.
<br><br>
<a href="https://www.investopedia.com/terms/s/stochasticoscillator.asp" target="_blank">Learn More</a>

<code>stochastic_oscillator(high,low,close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas Dataframe|
| low          | required          | Low prices data                      |Pandas Dataframe|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n        | required          | Time period/Number of days                    |Int|



```python
Example:


from libkloudtrader.analysis import stochastic_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

stochastic_oscillator(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6      79.212598
7      90.958904
8      94.886364
9      49.921753
10     95.461659
          ...
240    18.777293
241    10.289116
242    33.943089
243    13.353116
244     8.859294
245     4.795118
246     1.067141
247    48.621324
248    45.654250
249    46.212848
250    71.842784
```
***
### Stochastic RSI
The StochRSI is an indicator used in technical analysis that ranges between zero and one and is created by applying the Stochastic Oscillator formula to a set of Relative Strength Index (RSI) values rather than to standard price data.
<br><br>
<a href="https://www.investopedia.com/terms/s/stochrsi.asp" target="_blank">Learn More</a>

<code>stochastic_rsi(close, n, fast_period1=5, fast_period2=3)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n        | required          | Time period/Number of days                    |Int|
| fast_period1        | required          | Fast-Period1/Short-Period1. 5 by default.                    |Int|
| fast_period2       | required          | Fast-Period2/Short-Period2. 3 by default.                    |Int|



```python
Example:


from libkloudtrader.analysis import stochastic_rsi
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

stochastic_rsi(aapl_data['close'],14)
```
```python 
returns: fast_period1, fast_period2
return type : Pandas DataFrame

        fast_period1  fast_period2
0             NaN           NaN
1             NaN           NaN
2             NaN           NaN
3             NaN           NaN
4             NaN           NaN
5             NaN           NaN
6             NaN           NaN
7             NaN           NaN
8             NaN           NaN
9             NaN           NaN
10            NaN           NaN
          ...
240      0.000000  4.544704e+01
241      0.000000  3.333333e+01
242     63.443512  2.114784e+01
243      0.000000  2.114784e+01
244      0.000000  2.114784e+01
245      0.000000 -9.473903e-14
246      0.000000 -9.473903e-14
247    100.000000  3.333333e+01
248     95.065715  6.502191e+01
249     95.798841  9.695485e+01
250    100.000000  9.695485e+01
```
***
### Tail Ratio
Tail Ratio is the Ratio between the 95th and (absolute) 5th percentile of the daily returns distribution.
<br><br>
<a href="https://www.quora.com/What-is-a-tail-ratio-in-a-finance-or-statistical-context" target="_blank">Learn More</a>

<code>tail_ratio(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import tail_ratio
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

tail_ratio(aapl_data['close'])
```
```python 
return type : Float

0.9290594476193894
```
***
### Time Series Forecast
The Time Series Forecast indicator displays the statistical trend of a security's price over a specified time period. The trend is based on linear regression analysis. Rather than plotting a straight linear regression trendline, the Time Series Forecast plots the last point of multiple linear regression trendlines. The resulting Time Series Forecast indicator is sometimes referred to as the "moving linear regression" indicator or the "regression oscillator."
<br><br>
<a href="https://www.metastock.com/customer/resources/taaz/?p=109" target="_blank">Learn More</a>

<code>time_series_forecast(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n      | required          | Time Period/Number of days                     |Int|


```python
Example:


from libkloudtrader.analysis import time_series_forecast
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

time_series_forecast(aapl_data['close'],8)
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
7      175.704643
8      176.760000
9      176.837143
10     178.230714
          ...
240    165.290000
241    164.257143
242    164.951786
243    161.758214
244    157.745357
245    151.704286
246    145.798929
247    148.110357
248    149.434643
249    151.248571
250    155.404286
```
***
### TRIX
TRIX is a momentum oscillator that displays the percent rate of change of a triple exponentially smoothed moving average. It was developed in the early 1980's by Jack Hutson, an editor for Technical Analysis of Stocks and Commodities magazine. With its triple smoothing, TRIX is designed to filter insignificant price movements.
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:trix" target="_blank">Learn More</a>

<code>trix(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n      | required          | Time Period/Number of days                     |Int|


```python
Example:


from libkloudtrader.analysis import trix
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

trix(aapl_data['close'],8)
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
240   -0.656981
241   -0.665464
242   -0.658780
243   -0.671034
244   -0.709557
245   -0.787507
246   -0.892349
247   -0.923051
248   -0.911543
249   -0.871167
250   -0.802735
```
***
### Triangular Moving Average
The triangular moving average (also known as the TMA) is similar to other moving averages in that it shows the average (or mean) price over a specified number of data points (usually a number of price bars). However, the triangular moving average differs in that it is double smoothed—which also means averaged twice.
<br><br>
<a href="https://www.thebalance.com/triangular-moving-average-tma-description-and-uses-1031203" target="_blank">Learn More</a>

<code>triangular_ma(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n      | required          | Time Period/Number of days                     |Int|


```python
Example:


from libkloudtrader.analysis import triangular_ma
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

triangular_ma(aapl_data['close'],8)
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
7      174.0030
8      174.4265
9      174.8385
10     175.3860
          ...
240    169.9600
241    168.9585
242    168.2085
243    167.2365
244    165.7090
245    163.7270
246    161.0175
247    158.2735
248    155.9985
249    154.4310
250    154.0695
```
***
### Triple EMA
The triple exponential moving average, or TEMA, was developed by Patrick Mulloy in 1994 to filter out volatility from conventional moving averages. While the name implies that it's a triple exponential smoothing, it's actually a composite of a single exponential moving average, a double exponential moving average, and a triple exponential moving average.
<br><br>
<a href="https://www.investopedia.com/terms/t/triple-exponential-moving-average.asp" target="_blank">Learn More</a>

<code>triple_ema(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n      | required          | Time Period/Number of days                     |Int|


```python
Example:


from libkloudtrader.analysis import triple_ema
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

triple_ema(aapl_data['close'],8)
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
7             NaN
8             NaN
9             NaN
10            NaN
          ...
240    166.929698
241    164.867222
242    164.904133
243    162.335174
244    158.787792
245    153.613712
246    148.690645
247    151.534347
248    153.025219
249    154.179433
250    155.819359
```
***
### True Range
The True Range function is used in the calculation of many indicators, most notably, the Welles Wilder DX. It is a base calculation that is used to determine the normal trading range of a stock or commodity.
<br><br>
<a href="https://www.fmlabs.com/reference/default.htm?url=TR.htm" target="_blank">Learn More</a>

<code>true_range(high, low, close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas Dataframe|
| low          | required          | Low prices data                      |Pandas Dataframe|
| close          | required          | Close prices data                      |Pandas Dataframe|

```python
Example:


from libkloudtrader.analysis import true_range
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

true_range(aapl_data['high'],aapl_data['low'],aapl_data['close'])
```
```python 
return type : Pandas DataFrame

0          NaN
1       2.5900
2       1.3900
3       2.3400
4       1.6800
5       1.6500
6       1.3300
7       1.1986
8       2.0800
9       3.2500
10      4.1800
          ...
240     5.6700
241     5.6200
242     3.5900
243     8.3600
244     6.8100
245     8.5300
246     4.9600
247    10.5100
248     7.1000
249     3.9700
250     3.1300
```
***
### True Strength Index
The true strength index is a technical momentum indicator that helps traders identify short-term price swings while trading in the direction of the trend. The indicator is useful for determining overbought and oversold conditions of a security by incorporating the short-term momentum of the market with the lagging benefits of moving averages.
<br><br>
<a href="https://www.investopedia.com/terms/t/tsi.asp" target="_blank">Learn More</a>

<code>true_strength_index(close,high_period,low_period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| high_period         | required          | High Period                     |Int|
| low_period         | required          | Low Period                     |Int|

```python
Example:


from libkloudtrader.analysis import true_range
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

true_strength_index(aapl_data['close'],25,13)
```
```python 
return type : Pandas DataFrame

0             NaN
1     -100.000000
2       81.100159
3       92.863506
4       79.135730
5       73.739236
6       70.454540
7       69.820933
8       71.364465
9       67.960841
10      67.917664
          ...
240    -22.147206
241    -22.714944
242    -23.030292
243    -23.610509
244    -24.361747
245    -25.377251
246    -26.499802
247    -26.526134
248    -26.604845
249    -26.667434
250    -26.581779
```
***
### Typical Price
The Typical Price is the average of the high + low + close of a bar. It is used in the calculation of several indicators. It can be used to smooth an indicator that normally takes just the closing price as input.
<br><br>
<a href="https://www.fmlabs.com/reference/default.htm?url=TypicalPrices.htm" target="_blank">Learn More</a>

<code>typical_price(high, low, close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas Dataframe|
| low         | required          | Low prices data                      |Pandas Dataframe|
| close          | required          | Close prices data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import typical_price
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

typical_price(aapl_data['high'],aapl_data['low'],aapl_data['close'])
```
```python 
return type : Pandas DataFrame

0      171.273333
1      172.913333
2      172.860000
3      174.473333
4      174.630000
5      174.266667
6      173.863333
7      175.086200
8      176.700000
9      177.240000
10     177.806667
          ...
240    166.613333
241    165.006667
242    165.996667
243    162.476667
244    158.080000
245    152.840000
246    148.323333
247    153.706667
248    154.330000
249    156.433333
250    157.860000
```
***
### Ultimate Oscillator
The Ultimate Oscillator is a technical indicator that was developed by Larry Williams in 1976 to measure momentum across multiple timeframes. By using the weighted average of three different timeframes, the indicator has less volatility and fewer trade signals compared to other indicators that rely on a single timeframe.
<br><br>
<a href="https://www.investopedia.com/terms/u/ultimateoscillator.asp" target="_blank">Learn More</a>

<code>ultimate_oscillator(high, low, close, short_period, medium_period, long_period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas Dataframe|
| low         | required          | Low prices data                      |Pandas Dataframe|
| close          | required          | Close prices data                      |Pandas Dataframe|
| short_period         | required          | Short Period                    |Int|
| medium_period          | required          | Medium Period                  |Int|
| long_period          | required          | Long Period                    |Int|


```python
Example:


from libkloudtrader.analysis import ultimate_oscillator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

ultimate_oscillator(aapl_data['high'],aapl_data['low'],aapl_data['close'],4,8,15)
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
240    30.499671
241    29.839476
242    33.687805
243    30.045550
244    28.422731
245    25.247009
246    20.149444
247    39.725496
248    51.587739
249    58.854791
250    64.956589
```
***
### Value at Risk (Variance-Covariance method)
The 5% Value at Risk of a hypothetical profit-and-loss probability density function
Value at risk (VaR) is a measure of the risk of loss for investments. It estimates how much a set of investments might lose (with a given probability), given normal market conditions, in a set time period such as a day.
<br><br>
<a href="http://treasurytoday.com/2001/11/value-at-risk-the-variance-covariance-method" target="_blank">Learn More</a>

<code>value_at_risk(close,tabular=True)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| tabular          | optional          | True if you want output in form of table else False. True by Default                   |Bool|


```python
Example:


from libkloudtrader.analysis import value_at_risk
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

value_at_risk(aapl_data['close'])
```
```python 
return type : table

Confidence Level      Value at Risk
------------------  ---------------
90%                        -2.33498
95%                        -2.99157
99%                        -4.22321
```
***
### Variance (Moving)
The 5% Value at Risk of a hypothetical profit-and-loss probability density function
Variance is a measurement of the spread between numbers in a data set. The variance measures how far each number in the set is from the mean. Variance is calculated by taking the differences between each number in the set and the mean, squaring the differences (to make them positive) and dividing the sum of the squares by the number of values in the set.
<br><br>
<a href="https://www.investopedia.com/terms/v/variance.asp" target="_blank">Learn More</a>

<code>variance(close, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n          | required         | Time Period/Number of days                  |Bool|


```python
Example:


from libkloudtrader.analysis import variance
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

variance(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame
0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6       1.073841
7       0.998649
8       1.331906
9       0.986241
10      2.788567
          ...
240     6.775249
241     5.134049
242     5.531127
243    10.046106
244    19.702841
245    38.200306
246    48.635898
247    40.949996
248    34.034384
249    18.651853
250    14.54399
```
***
### Volatility
Get volatility for any number of trading days.

<code>volatility(close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|



```python
Example:


from libkloudtrader.analysis import volatility
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2014-01-01','2018-01-01')['history']['day'])

volatility(aapl_data['close'])
```
```python 
return type : Float

45.19526597527543
```
***
### Volume Price Trend
The volume price trend (VPT) indicator helps determine a security’s price direction and strength of price change. The indicator consists of a cumulative volume line that adds or subtracts a multiple of the percentage change in a share price’s trend and current volume, depending upon the security’s upward or downward movements.
<br><br>
<a href="https://www.investopedia.com/terms/v/vptindicator.asp" target="_blank">Learn More</a>

<code>volume_price_trend(close,volume)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| volume          | required          | Volume data                      |Pandas Dataframe|             


```python
Example:


from libkloudtrader.analysis import volume_price_trend
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

volume_price_trend(aapl_data['close'],aapl_data['volume'])
```
```python 
return type : Pandas DataFrame

0                   NaN
1                   NaN
2          9.906692e+04
3          3.735842e+05
4          1.929821e+05
5         -7.887050e+04
6         -7.973534e+03
7          1.005386e+05
8          3.685118e+05
9          1.122167e+05
10         4.176830e+05
                ...
240       -9.534526e+05
241       -1.714578e+06
242        2.753295e+04
243       -1.090179e+06
244       -3.164389e+06
245       -5.358559e+06
246       -4.685757e+06
247        3.163755e+06
248        3.780757e+06
249       -3.230514e+05
250        3.599483e+05
```
***
### Volume adjusted moving average
the volume-adjusted moving average indicator (sometimes  called Equivolume charting) makes price and volume equal partners in computing the price average. The volume value is used as a weight factor for the price value. Therefore, the VAMA is responsive to changes in the trading volume. Important days on the market (high trading volume) have greater contribution in the moving average than days with low trading volume.
<br><br>
<a href="http://www.neuroshell.com/manuals/ais1/index.html?vama.htm" target="_blank">Learn More</a>

<code>volume_adjusted_moving_average(close, volume, n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| volume          | required          | Volume data                      |Pandas Dataframe| 
| n         | required          | Time Period/Number of days                     |Int|             


```python
Example:


from libkloudtrader.analysis import volume_adjusted_moving_average
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

volume_adjusted_moving_average(aapl_data['close'],aapl_data['volume'],7)
```
```python 
return type : Pandas DataFrame

0                    NaN
1                    NaN
2                    NaN
3                    NaN
4                    NaN
5                    NaN
6             181.952947
7             174.869999
8             171.218931
9             179.537621
10            192.185684
                ...
240           321.877315
241           320.187763
242           310.762276
243           294.289988
244           307.985008
245           360.671679
246           360.700663
247           376.191401
248           382.669465
249           388.855864
250           374.000702
```
***
### Vortex Indicator
Developed by Etienne Botes and Douglas Siepman, the Vortex Indicator consists of two oscillators that capture positive and negative trend movement. In creating this indicator, Botes and Seipman drew on the work of Welles Wilder and Viktor Schauberger, who is considered the father of implosion technology. Despite a rather involved formula, the indicator is quite straightforward to understand and easy to interpret. A bullish signal triggers when the positive trend indicator crosses above the negative trend indicator or a key level. A bearish signal triggers when the negative trend indicator crosses above the positive trend indicator or a key level. The Vortex Indicator is either above or below these levels, which means it always has a clear bullish or bearish bias.
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:vortex_indicator" target="_blank">Learn More</a>

<code>vortex_indicator(high,low,close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas Dataframe|
| low          | required          | Low prices data                      |Pandas Dataframe|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n         | required          | Time Period/Number of days                     |Int|             


```python
Example:


from libkloudtrader.analysis import vortex_indicator
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

vortex_indicator(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 
returns: vortex_inidicator_positive, vortex_indicator_negative
return type : Pandas DataFrame

              vortex_inidicator_positive  vortex_indicator_negative
0                           NaN                        NaN
1                           NaN                        NaN
2                           NaN                        NaN
3                           NaN                        NaN
4                           NaN                        NaN
5                           NaN                        NaN
6                           NaN                        NaN
7                      1.408914                   0.748855
8                      1.263099                   0.766279
9                      1.254276                   0.568529
10                     1.092396                   0.754226
                           ...
240                    0.674939                   1.230704
241                    0.730983                   1.096891
242                    0.815306                   1.114492
243                    0.814314                   0.985053
244                    0.621842                   1.177126
245                    0.495363                   1.261356
246                    0.440974                   1.429490
247                    0.607069                   1.235635
248                    0.729041                   1.215203
249                    0.796178                   1.171377
250                    0.927572                   1.165297
```
***
### Volume Weighted Average Price (VWAP)
Volume-Weighted Average Price (VWAP) is exactly what it sounds like: the average price weighted by volume. VWAP equals the dollar value of all trading periods divided by the total trading volume for the current day. The calculation starts when trading opens and ends when trading closes. Because it is good for the current trading day only, intraday periods and data are used in the calculation.
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:vwap_intraday" target="_blank">Learn More</a>

<code>vwap(high,low,close,volume)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas Dataframe|
| low          | required          | Low prices data                      |Pandas Dataframe|
| close          | required          | Close prices data                      |Pandas Dataframe|
| volume          | required          | Volume data                      |Pandas Dataframe|            


```python
Example:


from libkloudtrader.analysis import vwap
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

vwap(aapl_data['high'],aapl_data['low'],aapl_data['close'],aapl_data['volume'])
```
```python 
return type : Pandas DataFrame

0    170.780000
1    172.106525
2    172.300013
3    172.746697
4    173.088541
5    173.261198
6    173.316887
7    173.484784
8    173.847984
9    174.328661
10   174.682290
        ...
240  189.229560
241  189.099553
242  189.002923
243  188.848115
244  188.610523
245  188.210709
246  188.036491
247  187.785268
248  187.569560
249  187.415232
250  187.294345
```
***
### Weighted Close Price
The Weighted Close is the average of the high, low and close of a bar, but the close is weighted, actually counted twice. It is used in the calculation of several indicators. It can be used to smooth an indicator that normally takes just the closing price as input.
<br><br>
<a href="https://www.fmlabs.com/reference/default.htm?url=WeightedCloses.htm" target="_blank">Learn More</a>

<code>weighted_close_price(high, low, close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas Dataframe|
| low          | required          | Low prices data                      |Pandas Dataframe|
| close          | required          | Close prices data                      |Pandas Dataframe|


```python
Example:


from libkloudtrader.analysis import weighted_close_price
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

weighted_close_price(aapl_data['high'],aapl_data['low'],aapl_data['close'])
```
```python 
return type : Pandas DataFrame

0      171.520000
1      172.742500
2      172.902500
3      174.605000
4      174.560000
5      174.282500
6      173.970000
7      175.134650
8      176.797500
9      176.977500
10     178.130000
        ...
240    166.330000
241    164.740000
242    166.015000
243    162.080000
244    157.767500
245    152.312500
246    147.950000
247    154.572500
248    154.785000
249    156.382500
250    157.830000
```
***
### Williams %R
Developed by Larry Williams, Williams %R is a momentum indicator that is the inverse of the Fast Stochastic Oscillator. Also referred to as %R, Williams %R reflects the level of the close relative to the highest high for the look-back period. In contrast, the Stochastic Oscillator reflects the level of the close relative to the lowest low. %R corrects for the inversion by multiplying the raw value by -100. As a result, the Fast Stochastic Oscillator and Williams %R produce the exact same lines, only the scaling is different. Williams %R oscillates from 0 to -100. Readings from 0 to -20 are considered overbought. Readings from -80 to -100 are considered oversold. 
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:williams_r" target="_blank">Learn More</a>

<code>williams_r(high,low,close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas Dataframe|
| low          | required          | Low prices data                      |Pandas Dataframe|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n         | required          | Time period/Number of days                     |Int|

```python
Example:


from libkloudtrader.analysis import williams_r
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

williams_r(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0            NaN
1            NaN
2            NaN
3            NaN
4            NaN
5            NaN
6     -20.787402
7      -9.041096
8      -5.113636
9     -50.078247
10     -4.538341
         ...
240   -81.222707
241   -89.710884
242   -66.056911
243   -86.646884
244   -91.140706
245   -95.204882
246   -98.932859
247   -51.378676
248   -54.345750
249   -53.787152
250   -28.157216
```
***
### Weighted Moving Average (WMA)
The Weighted Moving Average calculates a weight for each value in the series. The more recent values are assigned greater weights. The Weighted Moving Average is similar to a Simple Moving average in that it is not cumulative, that is, it only includes values in the time period (unlike an Exponential Moving Average). The Weighted Moving Average is similar to an Exponential Moving Average in that more recent data has a greater contribution to the average.
<br><br>
<a href="https://www.fmlabs.com/reference/default.htm?url=WeightedMA.htm" target="_blank">Learn More</a>

<code>wma(close,n)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close          | required          | Close prices data                      |Pandas Dataframe|
| n         | required          | Time period/Number of days                     |Int|

```python
Example:


from libkloudtrader.analysis import wma
from libkloudtrader.stocks import ohlcv
import pandas as pd

#load data
aapl_data=pd.DataFrame(ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

wma(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

0             NaN
1             NaN
2             NaN
3             NaN
4             NaN
5             NaN
6      174.056071
7      174.465714
8      175.220000
9      175.575714
10     176.546071
         ...
240    168.735000
241    167.328214
242    166.838929
243    165.141071
244    162.739286
245    159.233929
246    155.409643
247    155.031786
248    154.695714
249    154.657857
250    155.348929
```