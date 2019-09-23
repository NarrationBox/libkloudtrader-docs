***
### Hilbert Transform - Dominant Cycle Period

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_dom_cyc_per(data)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data       | required          | Data                      |Pandas series|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.hilbert_transform_dom_cyc_per(aapl_data['close'])
```
```python 
return type : Pandas series

Friday, August 30, 2019 10:36:32 PM INFO: Calculating Hilbert Transform - Dominant Cycle Period

date
2018-01-02          NaN
2018-01-03          NaN
2018-01-04          NaN
2018-01-05          NaN
2018-01-08          NaN
                ...    
2018-12-24    24.295141
2018-12-26    23.350891
2018-12-27    22.695126
2018-12-28    22.273510
2018-12-31    22.070809

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Hilbert Transform - Dominant Cycle Phase

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_dom_cyc_phase(data)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data         | required          | Data                      |Pandas series|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.hilbert_transform_dom_cyc_phase(aapl_data['close'])
```
```python 
return type : Pandas series

Friday, August 30, 2019 10:40:15 PM INFO: Calculating Hilbert Transform - Dominant Cycle Phase

date
2018-01-02          NaN
2018-01-03          NaN
2018-01-04          NaN
2018-01-05          NaN
2018-01-08          NaN
                ...    
2018-12-24   -15.042917
2018-12-26   -19.351484
2018-12-27   -15.028136
2018-12-28    -4.230537
2018-12-31     4.311873

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Hilbert Transform - Instantaneous Trendline

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_inst_trendline(data)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data         | required          | Data                      |Pandas series|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->


```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.hilbert_transform_inst_trendline(aapl_data['close'])
```
```python 
return type : Pandas series

Friday, August 30, 2019 10:50:41 PM INFO: Calculating Hilbert Transform - Instantaneous Trendline...

date
2018-01-02           NaN
2018-01-03           NaN
2018-01-04           NaN
2018-01-05           NaN
2018-01-08           NaN
                 ...    
2018-12-24    173.580756
2018-12-26    171.152430
2018-12-27    169.462166
2018-12-28    168.155874
2018-12-31    167.216551

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Hilbert Transform - Phasor Components

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_phasor_components(data)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data      | required          | Data                      |Pandas series|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks 

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.hilbert_transform_phasor_components(aapl_data['close'])
```
```python 
returns: inphase, quadrature
return type : Pandas DataFrame

              inphase  quadrature
date                             
2018-01-02        NaN         NaN
2018-01-03        NaN         NaN
2018-01-04        NaN         NaN
2018-01-05        NaN         NaN
2018-01-08        NaN         NaN
...               ...         ...
2018-12-24  -6.658545   -4.234801
2018-12-26  -5.300593   -2.400738
2018-12-27  -6.805108   -8.416180
2018-12-28 -10.232868   -6.383109
2018-12-31 -12.106739   -2.837278

[251 rows x 2 columns]
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Hilbert Transform - SineWave

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_sine_wave(data)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data        | required          | Data                      |Pandas series|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.hilbert_transform_sine_wave(aapl_data['close'])
```
```python 
returns: sine leadsine
return type : Pandas DataFrame

Friday, August 30, 2019 11:09:02 PM INFO: Calculating Hilbert Transform - Sine Wave...

                sine  leadsine
date                          
2018-01-02       NaN       NaN
2018-01-03       NaN       NaN
2018-01-04       NaN       NaN
2018-01-05       NaN       NaN
2018-01-08       NaN       NaN
...              ...       ...
2018-12-24 -0.259542  0.499351
2018-12-26 -0.331362  0.432849
2018-12-27 -0.259293  0.499575
2018-12-28 -0.073770  0.653017
2018-12-31  0.075185  0.758269

[251 rows x 2 columns]
```

<!--END_DOCUSAURUS_CODE_TABS-->

***
### Hilbert Transform - Trend vs Cycle Mode

<a href="https://books.google.co.in/books?id=_KjOT1b9bfUC&printsec=frontcover#v=onepage&q&f=false" target="_blank">Learn More</a>

<code>hilbert_transform_trend_vs_cycle_mode(data)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data       | required          | Data                      |Pandas series|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.hilbert_transform_trend_vs_cycle_mode(aapl_data['close'])
```
```python 
return type : Pandas series

Friday, August 30, 2019 11:16:18 PM INFO: Calculating Hilbert Transform - Trend vs cycle mode...

date
2018-01-02    0
2018-01-03    0
2018-01-04    0
2018-01-05    0
2018-01-08    0
             ..
2018-12-24    1
2018-12-26    1
2018-12-27    1
2018-12-28    1
2018-12-31    1

Length: 251, dtype: int32
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Parabolic SAR
The parabolic SAR is a technical indicator used to determine the price direction of an asset, as well draw attention to when the price direction is changing. Sometimes known as the "stop and reversal system," the parabolic SAR was developed by Welles Wilder, creator of the relative strength index (RSI).
<br><br>
<a href="https://www.investopedia.com/trading/introduction-to-parabolic-sar/" target="_blank">Learn More</a>

<code>parabolic_sar(high, low, acceleration=0, maximum=0)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas series|
| low          | required          | Low Prices Data                      |Pandas series|
| acceleration          | optional          | 0 by default.               |Int|
| maximum          | optional          | 0 by default.                |Int|

#### Example


<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->


```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.parabolic_sar(aapl_data['high'],aapl_data['low'])
```
```python 
return type : Pandas series

Saturday, August 31, 2019 05:35:09 PM INFO: Calculating Parabolic SAR...

date
2018-01-02       NaN
2018-01-03    169.26
2018-01-04    169.26
2018-01-05    169.26
2018-01-08    169.26
               ...  
2018-12-24    233.47
2018-12-26    233.47
2018-12-27    233.47
2018-12-28    233.47
2018-12-31    233.47

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Linear Regression

<a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank">Learn More</a>

<code>linear_regression(data,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| close           | required          | Data                      |Pandas series|
| time period           | required          | time Period                    |int|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.linear_regression(aapl_data['close'],7)
```
```python 
return type: Pandas series

Saturday, August 31, 2019 01:25:58 PM INFO: Calculating Linear Regression for period = 7

date
2018-01-02           NaN
2018-01-03           NaN
2018-01-04           NaN
2018-01-05           NaN
2018-01-08           NaN
                 ...    
2018-12-24    148.866071
2018-12-26    150.106786
2018-12-27    151.324286
2018-12-28    154.022143
2018-12-31    156.995357

Length: 251, dtype: float64
```

<!--END_DOCUSAURUS_CODE_TABS-->

***
### Linear Regression Angle

<a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank">Learn More</a>

<code>linear_regression_angle(data, period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data          | required          | Data                      |Pandas series|
| period           | required          | time Period                  |Int|

#### Example

```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.linear_regression_angle(aapl_data['close'],7)
```
```python 
return type : Pandas seires

Saturday, August 31, 2019 01:33:35 PM INFO: Calculating Linear Regression Angle for period = 7

date
2018-01-02          NaN
2018-01-03          NaN
2018-01-04          NaN
2018-01-05          NaN
2018-01-08          NaN
                ...    
2018-12-24   -73.004569
2018-12-26   -67.898353
2018-12-27   -59.322720
2018-12-28   -17.633230
2018-12-31    39.461699

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Linear Regression Intercept

<a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank">Learn More</a>

<code>linear_regression_intercept(data,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data          | required          | Data                      |Pandas series|
| period           | required          | time Period                  |Int|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.linear_regression_intercept(aapl_data['close'],7)
```
```python 
return type : Pandas series

Saturday, August 31, 2019 01:39:23 PM INFO: Calculating Linear Regression Intercept for period = 7

date
2018-01-02           NaN
2018-01-03           NaN
2018-01-04           NaN
2018-01-05           NaN
2018-01-08           NaN
                 ...    
2018-12-24    168.496786
2018-12-26    164.881786
2018-12-27    161.438571
2018-12-28    155.929286
2018-12-31    152.056071

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Linear Regression Slope

<a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank">Learn More</a>

<code>linear_regression_slope(data, period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data          | required          | Data                      |Pandas series|
| period           | required          | time Period                  |Int|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.linear_regression_slope(aapl_data['close'],7)
```
```python 
return type : Pandas DataFrame

Saturday, August 31, 2019 01:43:44 PM INFO: Calculating Linear Regression Slope for period = 7

date
2018-01-02         NaN
2018-01-03         NaN
2018-01-04         NaN
2018-01-05         NaN
2018-01-08         NaN
                ...   
2018-12-24   -3.271786
2018-12-26   -2.462500
2018-12-27   -1.685714
2018-12-28   -0.317857
2018-12-31    0.823214

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

### MidPoint over period

MidPoint over period is simply moving average of the sum of highest and lowest value over a period of days.

<code>midpoint_over_period(data,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data          | required          | Data                      |Pandas series|
| period           | required          | time period                     |Int|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.midpoint_over_period(aapl_data['close'],7)
```
```python 
return type : Pandas series

Saturday, August 31, 2019 02:24:42 PM INFO: Calculating Midpoint Over Period for period = 7

date
2018-01-02        NaN
2018-01-03        NaN
2018-01-04        NaN
2018-01-05        NaN
2018-01-08        NaN
               ...   
2018-12-24    156.450
2018-12-26    156.450
2018-12-27    156.450
2018-12-28    153.860
2018-12-31    152.285

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### MidPoint price over period

MidPoint price over period is simply moving average of the sum of highest high and lowest low over a period of days.

<code>midpoint_price_over_period(high,low,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas series|
| low           | required          | Low Prices Data                      |Pandas series|
| time period           | required          | time period                  |Int|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.midpoint_price_over_period(aapl_data['high'],aapl_data['low'],7)
```
```python 
return type : Pandas series

Saturday, August 31, 2019 02:27:31 PM INFO: Calculating Midpoint Price Over Period for period = 7

date
2018-01-02        NaN
2018-01-03        NaN
2018-01-04        NaN
2018-01-05        NaN
2018-01-08        NaN
               ...   
2018-12-24    157.835
2018-12-26    157.470
2018-12-27    157.060
2018-12-28    157.020
2018-12-31    154.350

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Absolute Price Oscillator
Absolute Price Oscillator is a technical indicator calculating the percentage difference between two price moving averages. The Absolute Price Oscillator is the MACD indicator in absolute values.<br><br>
<a href="https://www.marketvolume.com/technicalanalysis/apo.asp" target="_blank">Learn More</a>

<code>absolute_price_oscillator(database,short_period,long_period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| data          | required         | Data   | Pandas dataframe column |
| short_period    | required          | Short Period/Fast Period | int|
| long_period     | required          | Long period/Slow period | int |

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2019-01-01','2019-07-07')
analysis.absolute_price_oscillator(aapl_data['close'],2,10)
```

```python
return type : Pandas Series

Thursday, August 29, 2019 07:27:25 PM INFO: Calculating Absolute Price Oscillator for Short period = 2 and Long period = 10

date
2019-01-02      NaN
2019-01-03      NaN
2019-01-04      NaN
2019-01-07      NaN
2019-01-08      NaN
              ...  
2019-06-28    0.824
2019-07-01    0.963
2019-07-02    2.940
2019-07-03    3.716
2019-07-05    3.989
Length: 128, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Normalized Average True Range
Normalized Average True Range is a measure of volatility.
Because Normalized Average True Range is normalized, it can be more useful than Average True Range when comparing across different price levels.
<br><br>
<a href="https://tulipindicators.org/natr" target="_blank">Learn More</a>

<code>normalized_average_true_range(high, low, close, period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas series|
| low           | required          | Low Prices Data                      |Pandas series|
| close           | required          | Close Prices Data                      |Pandas series|
| period          | required          | time period                   |Int|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.normalized_average_true_range(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 

return type : Pandas series

Saturday, August 31, 2019 04:35:00 PM INFO: Calculating Normalized Average True Range for period = 7

date
2018-01-02         NaN
2018-01-03         NaN
2018-01-04         NaN
2018-01-05         NaN
2018-01-08         NaN
                ...   
2018-12-24    4.092780
2018-12-26    4.232593
2018-12-27    4.301194
2018-12-28    4.047868
2018-12-31    3.719856

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### True Range
The True Range function is used in the calculation of many indicators, most notably, the Welles Wilder DX. It is a base calculation that is used to determine the normal trading range of a stock or commodity.
<br><br>
<a href="https://www.fmlabs.com/reference/default.htm?url=TR.htm" target="_blank">Learn More</a>

<code>true_range(high, low, close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required          | High prices data                      |Pandas series|
| low          | required          | Low prices data                      |Pandas series|
| close          | required          | Close prices data                      |Pandas series|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.true_range(aapl_data['high'],aapl_data['low'],aapl_data['close'])
```
```python 
return type : Pandas series

Sunday, September 01, 2019 06:16:49 PM INFO: Calculating True Range...

date
2018-01-02      NaN
2018-01-03     2.59
2018-01-04     1.39
2018-01-05     2.34
2018-01-08     1.68
              ...  
2018-12-24     4.96
2018-12-26    10.51
2018-12-27     7.10
2018-12-28     3.97
2018-12-31     3.13

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Balance of Power
Balance Of Power (BOP) is an indicator that measures the market strength by assessing the strength of total buyers against that of total sellers and their ability to drive the price to extreme ends.
<br><br>

<code>balance_of_power(open, high, low, close)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| open        | required         | Open prices data| Pandas series  |
| high          | required         | High prices data| Pandas series  |
| low          | required         | Low prices data| Pandas series  |
| close         | required         | Close prices data| Pandas series  |

#### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->
```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.balance_of_power(aapl_data['open'],aapl_data['high'],aapl_data['low'],aapl_data['close'])
```
```python
return type : Pandas Series

Friday, August 30, 2019 11:48:59 AM INFO: Calculating balance of Power...

date
2018-01-02    0.690789
2018-01-03   -0.115830
2018-01-04    0.352518
2018-01-05    0.672414
2018-01-08    0.000000
                ...   
2018-12-24   -0.266129
2018-12-26    0.843958
2018-12-27    0.046269
2018-12-28   -0.319899
2018-12-31   -0.274306

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Correlation Coefficient
The correlation coefficient is a statistical measure that calculates the strength of the relationship between the relative movements of the two variables.
<br><br>
<a href="https://www.investopedia.com/terms/c/correlationcoefficient.asp" target="_blank">Learn More</a>

<code>correlation_coefficient(high,low,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high            | required          | High Prices Data                      |Pandas series|
| low            | required          | Low Prices Data                      |Pandas series|
| period                | required          | time period           |int|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->
```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.correlation_coefficient(aapl_data['high'],aapl_data['low'],5)
```
```python
return type : Pandas series

Friday, August 30, 2019 02:58:59 PM INFO: Calculating Correlation Coefficient for period = 5

date
2018-01-02         NaN
2018-01-03         NaN
2018-01-04         NaN
2018-01-05         NaN
2018-01-08    0.936435
                ...   
2018-12-24    0.946665
2018-12-26    0.936427
2018-12-27    0.836791
2018-12-28    0.626376
2018-12-31    0.753480

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Chaikin Oscillator
Developed by Marc Chaikin, the Chaikin Oscillator measures the momentum of the Accumulation Distribution Line using the MACD formula. This makes it an indicator of an indicator. The Chaikin Oscillator is the difference between the 3-day EMA of the Accumulation Distribution Line and the 10-day EMA of the Accumulation Distribution Line. Like other momentum indicators, this indicator is designed to anticipate directional changes in the Accumulation Distribution Line by measuring the momentum behind the movements. 
<br><br>
<a href="https://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:chaikin_oscillator" target="_blank">Learn More</a>

<code>chaikin_oscillator(high,low,close,volume,short_period=3,long_period=10)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high            | required          | High Prices Data                        |Pandas series|
| low            | required          | Low Prices Data                        |Pandas series|
| close            | required          | Close Prices Data                        |Pandas series|
| volume           | required          | Volume Data                        |Pandas series|
| short_period      | optional          | Short Period/Fast Period. 3 by default.          |int|
| long_period      | optional          | Long Period/Slow Period. 10 by default.          | int|

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

#### Example

```python
import libkloudtrader.stocks as stocks 
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.chaikin_oscillator(aapl_data['high'],aapl_data['low'],aapl_data['close'],aapl_data['volume'])
```
```python
returns: chaikin_ad_line, chaikin_oscillator

return type : Pandas DataFrame

Friday, August 30, 2019 02:36:56 PM INFO: Calculating Chaikin Oscillator for short period = 3 and long period = 10

            chaikin_ad_line  chaikin_oscillator
date                                           
2018-01-02     2.488341e+07                 NaN
2018-01-03     1.519821e+06                 NaN
2018-01-04     9.751220e+06                 NaN
2018-01-05     2.586451e+07                 NaN
2018-01-08     1.558063e+07                 NaN
...                     ...                 ...
2018-12-24    -3.137997e+08       -8.352595e+07
2018-12-26    -2.558860e+08       -6.309343e+07
2018-12-27    -2.125996e+08       -3.522594e+07
2018-12-28    -2.190978e+08       -2.269085e+07
2018-12-31    -2.234732e+08       -1.689223e+07

[251 rows x 2 columns]
```
<!--END_DOCUSAURUS_CODE_TABS-->


***
### Average Directional Movement Index
The Average Directional Index (ADX) was developed by J. Welles Wilder to evaluate the strength of a trend and to define a period of sideway trading. For better results from the signals generated by technical analysis, many traders use ADX to determine whether the market is trending or trading (moving sideways) and adjust their indicators' settings to the current market condition.
<br><br>
<a href="https://www.marketvolume.com/technicalanalysis/adx.asp/" target="_blank">Learn More</a>

<code>average_directional_movement_index(high,low,close,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required         | High prices data| Pandas series |
| low          | required         | Low prices data| Pandas series |
| close         | required         | Close prices data| Pandas series |
| period         | required         | time period| int  |

#### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->
```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.average_directional_moving_index(aapl_data['high'],aapl_data['low'],aapl_data['close'],4)
```
```python
return type : Pandas Series

Friday, August 30, 2019 12:04:21 AM INFO: Calculating Average Directional Movement Index for period = 4

date
2018-01-02          NaN
2018-01-03          NaN
2018-01-04          NaN
2018-01-05          NaN
2018-01-08          NaN
                ...    
2018-12-24    80.292175
2018-12-26    66.908432
2018-12-27    56.870626
2018-12-28    44.259004
2018-12-31    34.065343

Length: 251, dtype: float64
```

<!--END_DOCUSAURUS_CODE_TABS-->

***
### Average Directional Movement Index Rating
ADXR stands for Average Directional Movement Index Rating. ADXR is a component of the Directional Movement System developed by Welles Wilder. This system attempts to measure the strength of a price movement in positive and negative directions, as well as the overall strength of the trend. The Average Directional Movement Rating quantifies the change of momentum in the ADX (Average Directional Index).
<br><br>
<a href="https://www.marketvolume.com/technicalanalysis/adxr.asp" target="_blank">Learn More</a>

<code>average_directional_movement_index_rating(high,low,close,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high          | required         | High prices data| Pandas series |
| low          | required         | Low prices data| Pandas series |
| close         | required         | Close prices data| Pandas series |
| period         | required         | time period| int  |

#### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->
```python
import libkloudtrader.stocks as stocks
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.average_directional_moving_index_rating(aapl_data['high'],aapl_data['low'],aapl_data['close'],4)
```
```python
return type : Pandas Series

Friday, August 30, 2019 12:10:36 AM INFO: Calculating Average Directional Movement Index Rating for period = 4

date
2018-01-02          NaN
2018-01-03          NaN
2018-01-04          NaN
2018-01-05          NaN
2018-01-08          NaN
                ...    
2018-12-24    71.724095
2018-12-26    68.258208
2018-12-27    66.187378
2018-12-28    62.275589
2018-12-31    50.486888

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Directional Movememnt Index
The Directional Movement Index (DMI) assists in determining if a security is trending and attempts to measure the strength of the trend. The DMI disregards the direction of the security. It only attempts to determine if there is a trend and that trends strength.
<br><br>
<a href="https://www.danielstrading.com/education/technical-analysis-learning-center/directional-movement-index" target="_blank">Learn More</a>

<code>directional_movement_index(high, low, close, period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas series|
| low           | required          | Low Prices Data                      |Pandas series|
| close           | required          | Close Prices Data                      |Pandas series|
| period            | required          | time period         |Int|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.stocks as stocks 
import libkloudtrader.analysis as analysis

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.directional_movement_index(aapl_data['high'],aapl_data['low'],aapl_data['close'],5)
```
```python
return type: Pandas series

Friday, August 30, 2019 07:23:28 PM INFO: Calculating Directional Movement Index for period = 5

date
2018-01-02          NaN
2018-01-03          NaN
2018-01-04          NaN
2018-01-05          NaN
2018-01-08          NaN
                ...    
2018-12-24    90.639645
2018-12-26    34.747986
2018-12-27    34.747986
2018-12-28    18.082128
2018-12-31     9.924722

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->


***
### Minus Directional Indicator

Minus Directional Indicator or Negative Directional Indicator is a negative directional indicator is a component of the average directional index (ADX) that is used to measure the presence of a downtrend. When the -DI is sloping upward, it is a signal that the strength of the downtrend is increasing. 
<br><br>
<a href="https://www.investopedia.com/terms/n/negativedirectionalindicator.asp" target="_blank">Learn More</a>
<code>minus_directional_indicator(high,low,close,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas series|
| low           | required          | Low Prices Data                      |Pandas series|
| close           | required          | Close Prices Data                      |Pandas series|
| period           | required          | time period                 |Int|

#### Example
<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')

analysis.minus_directional_indicator(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 
return type : Pandas series

Saturday, August 31, 2019 02:30:16 PM INFO: Calculating Minus Directional Indicator for period = 7

date
2018-01-02          NaN
2018-01-03          NaN
2018-01-04          NaN
2018-01-05          NaN
2018-01-08          NaN
                ...    
2018-12-24    50.409614
2018-12-26    39.032245
2018-12-27    33.137666
2018-12-28    30.165839
2018-12-31    27.867078

Length: 251, dtype: float64
```
<!--END_DOCUSAURUS_CODE_TABS-->

***
### Minus Directional Movement

<code>minus_directional_moevement(high,low,close,period)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| high           | required          | High Prices Data                      |Pandas series|
| low           | required          | Low Prices Data                      |Pandas series|
| close           | required          | Close Prices Data                      |Pandas series|
| period           | required          | time Period                |Int|

#### Example 

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python
Example:
import libkloudtrader.analysis as analysis
import libkloudtrader.stocks as stocks

#load data
aapl_data=stocks.ohlcv('AAPL','2018-01-01','2019-01-01')['history']['day'])

analysis.minus_directional_movement(aapl_data['high'],aapl_data['low'],aapl_data['close'],7)
```
```python 
return type : Pandas series

Saturday, August 31, 2019 02:34:27 PM INFO: Calculating Minus Directional Movement for period = 7

date
2018-01-02          NaN
2018-01-03          NaN
2018-01-04          NaN
2018-01-05          NaN
2018-01-08          NaN
                ...    
2018-12-24    21.205308
2018-12-26    18.175978
2018-12-27    15.579410
2018-12-28    13.353780
2018-12-31    11.446097

Length: 251, dtype: float64
```

<!--END_DOCUSAURUS_CODE_TABS-->
