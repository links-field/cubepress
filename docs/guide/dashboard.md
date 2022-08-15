# :joystick: Dashboard

## 📊 Dashboard Analysis

Cube dashboard enables and renders a statistical analyis of your assets for a better business visibility and easier strategizing.

### Information Cards

### 1. Active SIMs

This card shows all the **activated SIM** that your organization owns and uses and the **monthly trend** of the count. Click to jump to SIM list that displays all the activated cards (filtered)

::: info SIM Status 
To know more about various SIM status and how it works, click [here](simstatus)
:::

![Card - Active SIMs](/activesim.png)

### 2. Current Usage

Total data usage of all the cards in use since the **1st day of current month**. Refreshed daily.

![Card - Current Usage](/usage.png)

### 3. Overage SIMs

Number of SIMs that have experienced **data overage** in current billing cycle and the total data overage. (It could lead to extra cost depending on the billing mode.)

click to jump to SIM list to check the overage SIMs in detail.
![Card - Total Overage](/overage.png)

### 4. Expire Soon

Number of SIMs that will **expire soon ( in 45 days)**.Click to jump to SIM list to check on those SIMs.

### Usage Overview Chart

In the chart you may view your data/sms usage in different timeframes. The update frequency varies, depending on different MNOs' system synchronization stretegies.

::: warning Latency
More commonly, expect a latency that spans between 10 minutes ~ 24 hours.
:::
![Card - Usage Chart](/usagechart.png)


## 🌎 Dashboard - Heatmap
Heatmap shows the geographical (according to Mobile Country Code) distribution of all your Active SIM assets based on their last 24-hour activity. 

::: info Active SIMs
Active SIMs refer to those that have at least 1 CDR data in the last 24(default)/48/72 hours
:::

* SIMs are grouped and counted by the **Mobile Country Code** (regions may have different MCC even though they belong to the same country)

* **Darker** the color, **more SIMs** are inside that region. 