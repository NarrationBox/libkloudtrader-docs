---
id: alert_api
title: Alerts
sidebar_label: Alerts
---
## With kloudtrader, you can create your customized alerts for both SMS and Email


### Module
<code>kloudtrader.alert_me</code>
*** 

<code>sms(number,message)</code>
```python 
| Paramter     | Required/optional | Description                         | Type |
|--------------|-------------------|-------------------------------------|------|
| number       | required          | number you want to receive alert on | str  |
| message      | required          | The alert you create                | str  |
| access_token | optional          |                                     | str  |

Example:

from kloudtrader.alert_me import *

if certain_condition is met:
    message="{} is met".format(certain_condition)
    sms('+16xxxxxxxxx',message)
```
