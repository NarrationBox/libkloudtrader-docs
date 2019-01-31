---
title: Reducing WhatsApp Digital Footprint in the Age of Facebook
author: 
authorURL: 
authorFBID: 
---
## Leverage Android User Profiles to Sandbox WhatsApp

It is 2019 and Facebook is [integrating its services into a single unified backend](https://www.cnn.com/2019/01/25/tech/facebook-integrating-whatsapp-instagram-messenger/index.html). Illicit [data sharing](https://www.bbc.com/news/technology-46618582) and [election scandals](https://www.theguardian.com/news/2018/mar/17/cambridge-analytica-facebook-influence-us-election) aside, this would significantly affect the privacy of WhatsApp users, perhaps even more for those under the assumption that their personal chat data would remain separate from their public social media profiles. For Android users, there are however methods to mitigate further damages to their privacy by limiting Facebook’s ability to [build virtual profiles](https://www.recode.net/2018/4/20/17254312/facebook-shadow-profiles-data-collection-non-users-mark-zuckerberg).

Android Lollipop (5.0+) and above has a feature known as “User Profiles”, designed to support multi-user sharing of devices and isolating workplace and personal systems. On a 2017 Android flagship device, switching profiles can usually be done in under 3 seconds. We will be using this feature to isolate WhatsApp.

<p align="center">
<img width="600" height="550" src="https://raw.githubusercontent.com/KloudTrader/libkloudtrader-docs/master/website/static/img/whatsapp-security1.jpeg">
</p>

Go to Android > Settings > System > Multiple Users and add a new user. This can also be done by clicking the user profile icon in the notification bar pull-down menu.

<p align="center">
<img width="600" height="550" src="https://raw.githubusercontent.com/KloudTrader/libkloudtrader-docs/master/website/static/img/whatsapp-security2.jpeg">
</p>
Follow the account setup and instructions, but most importantly, do NOT link a Google account of any form. After finishing with account setup, return to your main account through the user profile shortcut in the notification menu and follow the procedure for migrating <a href="https://faq.whatsapp.com/en/android/28000018/?category=5245246">WhatsApp to a new phone (backup data to both file and drive & take note of where the file is stored)</a>. Go back to the new user profile and <a href="https://www.whatsapp.com/download/">install WhatsApp by downloading the APK installation file directly from WhatsApp’s Website</a>. After installation, link and set up your account as normal. Restore backups from file where necessary.

Now’s the step that would significantly boost your privacy — **whitelisting contacts**. Whitelist by default means only selected groups of people would be on your contact list, significantly reducing the ability of WhatsApp to build social graphs of your daily lives. Acquaintances and strangers whose numbers you have won’t automatically show up, and any settings that are set to “my contacts only” would only apply to those that you explicitly add. If you restored from backup, this would generally mean the people you most frequently talk to. To start, enter the following URL in browser followed by the number you want to add (replace 123456789 with your desired contact’s number): <code>https://wa.me/123456789</code> including the country code but remove all parentheses and + signs etc. only numbers. Rinse and repeat for every contact you are currently having a conversation with or plan to talk to.

By itself, this method of sandboxing would not do much to improve your privacy. However, it is a simple step that can be combined with other methods such as reducing the usage of social media in general to lower the amount of data being shared online. Whitelisting contacts would significantly limit the social graphs that internet services are able to build up and monetize, reducing risks of exploitation. Do share this with your friends and family so that we can work together to build a better and more secure internet for all.

<figure>
      <b><figcaption><cite>Security Team</cite></figcaption></b>
      <figcaption><cite>KloudTrader Ltd.</cite></figcaption>
    </figure>
    <br>

**We take your security very seriously at KloudTrader. To learn more and stay up to date with KloudTrader follow us on [Linkedin](https://www.linkedin.com/company/kloudtrader/) and [Twitter](https://twitter.com/KloudTrader) and subscribe to our [newsletter](https://www.kloudtrader.com/#get-notified). To contact our Engineering team, tweet to us at [KloudTrader Engineering](https://twitter.com/KloudTraderEng). For any security disclosure and more information, please visit [KloudTrader's Security Page](https://kloudtrader.com/security.html).**


<br>
<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<a href="https://twitter.com/KloudTrader?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @KloudTrader</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
<script type="IN/Share">