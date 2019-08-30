---
id: getting_started_with_narwhal
title: Getting Started with Narwhal
sidebar_label: Getting Started with Narwhal
---

### Your guide to get started with Narwhal and swim live in the markets with your trading algorithms. Algorithmic and Automated Trading has never been easier.

## What is **[Narwhal](https://www.kloudtrader.com/narwhal)**?
**[Narwhal](https://www.kloudtrader.com/narwhal)** is an **end-to-end** Platform as a Service for algorithmic and automated trading. We call it **end-to-end** for a reason because you do not need any other tool to support your algorithmic trading workflow. Narwhal supports you through each stage wether it's **research**, **development** or **deployment**. You can spawn Jupyter Notebooks to research and model your hypothesis. After you are comfortable with your models, an Integrated Development Environment identical to the popular [Visual Studio Code](https://code.visualstudio.com/) is just a click away to meet all your development needs. And when you feel that your algorithms are ready, deploying them to live markets takes only 3 simple commands.

****

## What is a Runtime?
A Runtime is an isolated, personalized server like environment that you own. This means that yours and only yours algorithm will reside there and only you can communicate with the runtime. Each Runtime comes with it's own Jupyter Notebook, an IDE and can host one Trading Algorithm. Runtimes in Narwhal come in different plans. There are currently 3 plans that primarily vary on the basis of the provided memory size, storage size and most importantly CPU power. Here are the plans Narwhal offers and their description:

1. **Analyst Plan**  (7 day free trial included with this plan)
    * 2GB Memory
    * 1 vCPU
    * 50GB SSD storage
    * IDE/Code Editor
    * Jupyter Notebook

2. **Manager Plan** 
    * 4GB Memory
    * 2 vCPU
    * 80GB SSD storage
    * IDE/Code Editor
    * Jupyter Notebook

3. **Professional Plan** 
    * 4GB Memory
    * 2 vCPU with dedicated hyper-threads from best in class Intel CPUs
    * 25GB SSD storage
    * IDE/Code Editor
    * Jupyter Notebook

> For Pricing please refer this [section](https://www.kloudtrader.com/narwhal#pricing)
<p align="center">
  <img src="/img/runtime.png" alt="drawing" style="width:200vh;"/>
  <p align="center">Fig.1 Depicting 2 runtimes on Narwhal dashboard. One is ready, the other one is being set up.</p>
</p>

****

## Creating a Runtime

Creating a Runtime is as simple as filling out a few form fields. And bam! you have got your infrastructure and environment ready. When you create your first Runtime, you will asked for your Public ssh key. We use your Public key to set up a secure and private communication between your Personal Computer and your Runtime. This way your personal computer is the only machine that can interact with your Runtime. Know more about **[RSA encryption](https://en.wikipedia.org/wiki/RSA_(cryptosystem))** and **[SSH keys](https://jumpcloud.com/blog/what-are-ssh-keys/)**. 

Narwhal currently provides Runtimes at **New York City, United States** only. But many other worldwide locations like **San Francisco, U.S.**, **Singapore**, **Netherlands**, etc coming soon.

When speaking about languages, Narwhal supports **Python3** right now, since it is the most widely used programming language for trading and modelling. But many other languages like **R, Julia, C++, Java, Javascript,Golang**, etc will be available soon.
<p align="center">
  <img src="/img/create-runtime.png" alt="drawing" style="width:200vh;"/>
  <p align="center">Fig.2 Create New Runtime</p>
</p>

## Linking your Brokerage/Exchange
After you have created your Runtime, you should link your Brokerage or Cryptocurrency exchange before moving forward. After you have connected your Brokerage/Exchange your credentials are kept safely and only you can manage or access them. The credentials are set as environment variables on your runtime so that you don't have to explicitly include them in your algorithms. 

* **Stocks and Options**: Narwhal provides flat-rate brokerage for U.S. Stocks and Options via [Tradier Brokerage](https://tradier.com) that makes your trades commission free. Tradier charges $3.49/order for Equity order and $0.35/contract for Options order but when you link/create Tradier account via Narwhal, you enjoy flat-rate brokerage of just **$10/month**. This means you can trade as much volume as you want at just [**$10/month**, **comission-free**](https://www.kloudtrader.com/press).

* **Cryptocurrencies**: Narwhal support more than 100 cryptocurrency exchanges from around the world. Transaction fees and Rate Limits vary from Exchange to Exchange. For more information how does your favored Cryptocurrency exchange function and charges you for every trade, please visit your Exchange's information page.



> Note: Due to security reasons, Tradier Inc. forces that you re-generate their access token every 24 hours. Thus, you have to re-link Tradier Inc. every 24 hrs. Narwhal notifies you everyday before market starts to re-link Tradier, but if you do not want to be notified, you can change the settings under your [Account](https://narwhal.kloudtrader.com/account)



<p align="center">
  <img src="/img/link-exchange.png" alt="drawing" style="width:200vh;"/>
  <p align="center">Fig.3 Link your favored crypto currency exchange</p>
</p>

<p align="center">
  <img src="/img/link-brokerage.png" alt="drawing" style="width:200vh;"/>
  <p align="center">Fig.4 Link Tradier for Equity and Options trading at a flat-rate commission free brokerage</p>
</p>

## Experimenting with models

## Developing your algorithm

## Deploying to Narwhal


