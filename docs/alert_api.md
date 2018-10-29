---
id: alert_api
title: Alerts
sidebar_label: Alerts
---
## With kloudtrader, you can create your customized alerts for both SMS and Email.


# Module
<code>kloudtrader.alert_me</code>
*** 

### SMS alerts 
<code>sms(number,message)</code>

| Paramters     | Required/Optional | Description                        | Type |
|--------------|-------------------|-------------------------------------|------|
| number       | required          | Number you want to receive alert on | str  |
| message      | required          | The alert you create                | str  |


``` python
Example:

from kloudtrader.alert_me import sms

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

from kloudtrader.alert_me import email

if particular_condition is met:
    message="{} is met".format(particular_condition)
    email('123@abc.com',message)
```

```python
Returns: Email alert Created!
```
*** 
### Both sma and email alerts
<code>sms_and_email(number,email_id,message)</code> 
| Paramters    | Required/Optional | Description                           | Type |
|--------------|-------------------|---------------------------------------|------|
| number       | required          | Number you want to receive alert on   | str  |
| email_id     | required          | Email Id you want to receive alert on | str  |
| message      | required          | The alert you create                  | str  |
```python 
Example:

from kloudtrader.alert_me import email

if some_condition is met:
    message="{} is met".format(some_condition)
    sms('123@abc.com',message)
```
```python
Returns: 
SMS alert created!
Email alert Created!
```