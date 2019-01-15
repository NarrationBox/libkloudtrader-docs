---
id: alert_api
title: Alerts
sidebar_label: Alerts
---
## With libkloudtrader, you can create customized alerts for both SMS and Email.

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
> 
# Module
<code>libkloudtrader.alert_me</code>
*** 

### SMS alerts 
<code>sms(number,message)</code>

| Paramters     | Required/Optional | Description                        | Type |
|--------------|-------------------|-------------------------------------|------|
| number       | required          | Number you want to receive alert on | str  |
| message      | required          | The alert you create                | str  |


``` python
Example:

from libkloudtrader.alert_me import sms

if certain_condition is met:
    message="{} is met".format(certain_condition)
    sms('+16xxxxxxxxx',message)
```
```python
Returns: SMS alert Created!
```

*** 
### Email alerts 
<code>email(email_id,message)</code>
| Paramters    | Required/Optional | Description                           | Type |
|--------------|-------------------|---------------------------------------|------|
| email_id     | required          | Email Id you want to receive alert on | str  |
| message      | required          | The alert you create                  | str  |
```python 
Example:

from libkloudtrader.alert_me import email

if particular_condition is met:
    message="{} is met".format(particular_condition)
    email('123@abc.com',message)
```

```python
Returns: Email alert Created!
```
*** 
### Both sms and email alerts
<code>sms_and_email(number,email_id,message)</code> 
| Paramters    | Required/Optional | Description                           | Type |
|--------------|-------------------|---------------------------------------|------|
| number       | required          | Number you want to receive alert on   | str  |
| email_id     | required          | Email Id you want to receive alert on | str  |
| message      | required          | The alert you create                  | str  |
```python 
Example:

from libkloudtrader.alert_me import sms_and_email

if some_condition is met:
    message="{} is met".format(some_condition)
    sms_and_email('+16xxxxxxxxx','123@abc.com',message)
```
```python
Returns: 
SMS alert created!
Email alert Created!
```
