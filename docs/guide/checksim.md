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


## Advanced SIM Search <Badge type="danger" text="NEW"/>
![advancedsearch](/advancedsearch.png)

**Advanced Search** offers a streamlined and efficient way to locate the SIMs you need, reducing the time and effort required. You can use a combination of filters, with default logical relationship of **AND** (`&&`), to query the SIMs you need. 

Click the search bar and select from the list of supported keywords and select/input the value for each condition.

![searchkeywords](/searchkeywords.png)

Please be noted that there are 4 types of operators to define the condition:
|Operator| Definition| Example | Result | 
|----|----|---| ----| 
|= | exact match| ICCID `=` `892023832048402010001` | found the SIM that has exact ICCID of xxxx001 |
|in|  or, match any of the value | Status `in` ( `pre-activated`, `active` )| found a list of SIMs that are either in pre-activated or active status | 
|>=, <=, between| number range | Usage between (`1`, `100`) | found a list of SIMs that has a current cyclic usage of between 1 - 100MB, inclusive of both values. | 
|~| like, fuzzy search | Device name `~` `Fleet` | found SIMs with device name `fleet abc`, `fleet US`, `US Fleet 183B`|

:::warning NOTICE
But do note that: combining two conflicting search conditions, could result in `no data` found.

For example: 
`ICCID` `=` `8910304824984911130` `IMSI` `=` `1038`

There will be no SIM that could match these two conditions at the same time.

:::



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


