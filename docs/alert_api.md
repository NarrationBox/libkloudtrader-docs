---
id: alert_api
title: Alerts
sidebar_label: Alerts
---
## With libkloudtrader, you can create customized alerts for both SMS and Email.


# Module

<code><h2>libkloudtrader.alert_me</h2></code>
*** 

### SMS alerts 
<code>sms(number,message)</code>

| Paramters     | Required/Optional | Description                        | Type |
|--------------|-------------------|-------------------------------------|------|
| number       | required          | Number you want to receive alert on | str  |
| message      | required          | The alert you create                | str  |

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

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
<!--END_DOCUSAURUS_CODE_TABS-->

*** 
### Email alerts 
<code>email(email_id,message)</code>
| Paramters    | Required/Optional | Description                           | Type |
|--------------|-------------------|---------------------------------------|------|
| email_id     | required          | Email Id you want to receive alert on | str  |
| message      | required          | The alert you create                  | str  |

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python 
Example:

from libkloudtrader.alert_me import email

if particular_condition is met:
    message="{} is met".format(particular_condition)
    email('123@abc.com',message)
```
<!--END_DOCUSAURUS_CODE_TABS-->

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
