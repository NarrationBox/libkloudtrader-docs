import talib
from kloudtrader.defaults import ACCESS_TOKEN,ACCOUNT_NUMBER
from kloudtrader.equities.data import *
import datetime
import pandas as pd
from kloudtrader.user import *
from kloudtrader.alert_me import *
window=15

def analysis(symbol):
    aapl_data=close_prices(symbol,'2018-09-01',datetime.date.today())
    df=pd.DataFrame(aapl_data)
    df['EMA']=talib.EMA(df['close'],timeperiod=window)
    df['long_entry_point']=df['EMA']-(5/100)*df['EMA']
    df['sell_entry_point']=df['EMA']+(5/100)*df['EMA']
    df=df.iloc[window:]
    df['Buy']=df.apply(lambda x : 1 if x['close']<x['long_entry_point'] else 0,axis=1)
    df['Sell']=df.apply(lambda x : 1 if x['close']>x['sell_entry_point'] else 0,axis=1)
    df['Signal']=df['Buy']+df['Sell']
    return df

def trade():
    
    today='2018-12-13'#str(datetime.date.today())
    
    data=analysis('GE')
    data=data.loc[data['date']==today]
    if data['Buy'].item()==1:
        #Entering long trade
        #Exit when today's last traded price is less than the entry point and funds in account reach 2000
        while data['close']<data['long_entry_point'] and account_balance()['balances']['total_cash']>=2000:
            #buy(5,'GE')
            print('Long')
        message="Mean-Reversion algo had a Long Signal and 5 of AAPL stock will be bought if cash is more than $2000"
        email('chetan@kloudtrader.com',message)
    elif data['Sell'].item()==1:
        #Entering selling trade
        #Exit when today's last traded price is greater than entry point and the quantity of that stock's positions is 0
        my_positions=account_positions()
        for k,v in my_positions.items():
            if v['position']['symbol']=='GE':
                GE_position_qantity=v['position']['quantity']
        while data['close']>data['sell_entry_point'] and GE_position_qantity>=0:
            #sell(2,'GE')
            print('Sell')
        message="Mean-Reversion algo had a Sell Signal, position will be closed."
        email('chetan@kloudtrader.com',message)
                
while intraday_status()['clock']['state']!='closed':
    trade()