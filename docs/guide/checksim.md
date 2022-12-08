# 📶 SIMs

You may check the basic information of the SIMs from SIM menu in the sidebar, and we offer enriched features above and beyond.


## Table Toolbar ⚙️
> Configuration of the table

![toolbar](/toolbar.png)

* **Height Setting** for table rows: _default, medium or compact._
* **Column Setting** to check only the columns you'd like to see
* **Refresh Table Data** clear all the filters and pull the latest data
* **Global Search Bar** to search by ICCID/IMEI/MSISDN

::: tip 
Quickly find the SIM by entering **partial ending digits** in global search bar. Searching will happen in order of `ICCID`, `IMEI` then `MSISDN` and return all the matched results.

E.g.: `023801`=> 
* record 1: ICCID `89013113804763023801`, 
* record 2: ICCID `89013113804763079976`, IMEI `230A8X023801`

You could also search for **multiple SIMs** at one time by seperating the number with ','

E.g.: `023801, 8802` =>
* record 1: ICCID `89013113804763023801`
* record 2: ICCID `89013113804763948802`
:::



---
## Table Menu Bar ⚡️
> Actions present in menu bar allow users to perform quick bulk actions on selected SIMs (1 or more).

![menubar](/menubar.png)

* ↓ ：Export the selected SIMs or all SIMs into excel file
    * Selected SIMs: checked SIMs from current page and other pages
    * All SIMs: all the SIMs in the current table of all pages 

* Edit tags
* Edit notes
* Send SMS to the selected SIM
* Edit device name
* Transfer SIMs

::: tip
Edit tags or notes in bulk will **override** the existing tags/notes.
:::

::: info
**Transfer SIMs**
For more information on how to transfer SIMs between organisations, please check: [Transfer SIM How-to](/sim/transfer)

:::

---
## SIM List 🔢
Data columns of the SIM List are:

| Columns        | Description           | Remarks  |
| ------------- |-------------| -----|
| **Tags** | Customizable tags for SIMs.Tags can be used to filter and group SIMs.| Max. 5 tags per SIM and max. 10 characters per tag |
| **Name** |Device name for SIMs.| Max. 40 characters|
| **ICCID** |The unique **I**ntegrated **C**ircuit **C**ard **Id**entification Number of the SIM by global standards.||
| **MSISDN**| **M**obile **S**tation **I**ntegrated **S**ervices **D**igital **N**etwork is a unique number that can be useful in calls or sms service.||
| **Status** | It indicates the current life cycle stage of the SIM.| refer to [SIM status](/guide/simstatus) for more details.|
| **Cycle Usage** | Data usage of the current service cycle | day, month or year |
| **Limit** | Data limit of the current service cycle | day, month or year|


::: tip
You can also quick search a SIM by simply **entering its ending digits** in the ICCID or MSISDN column search bar.

**Multi-search mode** is supported here too.

![search imei](/searchiccid.png)
:::

::: tip
Quickly find out the top-10 data usage SIMs by sorting `Usage` column; And the usage will be painted in alerting red once it exceeds the limit, in order to raise awareness.

![sort usage](/sortusage.png) 
:::

::: tip
Hit `Refresh` icon button 🔄 in the tool bar to clear all the column **search, sorting and searching** citeria.
:::


## SIM Collpasible Detail 🔽
You may press ▶ to expand more SIM detail. There are 3 cards:
* **Basic**
* **Connection**
* **Service**

![3cards](/3cards.png)



### Basic Info Card
Basic information of a SIM. 

::: info Go to
[SIM - Basic](simbasic)
:::



### Connection Card
In connection section, you can see a consolidated information of SIM's most current status of connection, the last connected time and place, and we even offer diagnositics in the event of disconnection. 

::: info Go to
[SIM - Connection](simconnection)
:::


### Service Card
Services available with the SIM.

::: info Go to
[SIM - Service](simservice)
:::


