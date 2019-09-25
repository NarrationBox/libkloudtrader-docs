---
id: logging
title: Logging
sidebar_label: Logging
---

## Log everything your algorithm does so that you never miss what it is is upto. 

# Module
<code>libkloudtrader.logs</code>

Libkloudtrader uses python's very popular and convenient **logging** module. The levels of logging are same as in the **logging** module but libkloudtrader.logs changes some basic configs so that the logs' reading experience becomes more easy and user-friendly.

> Logging is always encouraged instead of using a print() statement because of the following reasons:
> 1. You can categorize your messages.
> 2. Reading and Viewing becomes better. 
> 3. Incident and Event Tracking becomes easier.
> 4. Can actaully find out when an event or signal ocurred which is pretty important for algorithmic trading.

### Initializing the logger

Initiating a logger is very simple. Once the logger is initialized you can continue to use it throughout your algorithm.

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍 -->

```python 
from libkloudtrader.logs import start_logger

logger = start_logger(__name__)
````
<!--END_DOCUSAURUS_CODE_TABS-->

## Examples

****

### Info

To log any kind of information you can use the INFO level of the logger. 

<code>logger.info(message)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| message          | required          | The message you want to log.                |str|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍-->

```python
from libkloudtrader.logs import start_logger

logger=start_logger(__name__)

logger.info("Hey! Your algorithm found something interesting.")
```
```python 

Tuesday, September 03, 2019 04:23:16 PM INFO: Hey! Your algorithm found something interesting.
```
<!--END_DOCUSAURUS_CODE_TABS-->

****

### Warning

To log any kind of warning you can use the WARNING level of the logger. 

<code>logger.warning(message)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| message          | required          | The message you want to log.            |str|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍-->

```python
from libkloudtrader.logs import start_logger

logger=start_logger(__name__)

logger.warning("Uh Oh! This isn't the trend we modelled.")
```

```python 

Tuesday, September 03, 2019 04:50:59 PM WARNING: Uh Oh! This isn't the trend we modelled.
```
<!--END_DOCUSAURUS_CODE_TABS-->

****

### Critical

To log any kind of Critical Information you can use the CRITICAL level of the logger. 

<code>logger.critical(message)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| message          | required          | The message you want to log.            |str|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍-->

```python
from libkloudtrader.logs import start_logger

logger=start_logger(__name__)

logger.critical("This did not go as planned.")
```

```python 

Tuesday, September 03, 2019 05:01:21 PM CRITICAL: This did not go as planned.
```
<!--END_DOCUSAURUS_CODE_TABS-->


****

### Error

To log any kind of error or exception you can use the ERROR level of the logger. 

<code>logger.error(message)</code>

| Paramters       | Required/Optional | Description                             | Type |
|-----------------|-------------------|-----------------------------------------|------|
| message          | required          | The message you want to log.            |str|

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Python 🐍-->

```python
from libkloudtrader.logs import start_logger

logger=start_logger(__name__)

logger.error("Oops! Something broke.")
```

```python 

Tuesday, September 03, 2019 05:02:26 PM ERROR: Oops! Something broke.
```
<!--END_DOCUSAURUS_CODE_TABS-->