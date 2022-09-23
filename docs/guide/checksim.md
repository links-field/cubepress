# 📶 SIMs



## SIM List

You may check the basic information of the SIM in the list, and we offer enriched features above and beyond.


---
### Table Toolbar ⚙️
> Configuration of the table

![toolbar](/toolbar.png)

* **Height Setting** for table rows: _default, medium or compact._
* **Column Setting** to check only the columns you'd like to see
::: tip
Tick 3-4 columns of interets, view data **without left and right scrolling**
:::

* **Refresh Table Data**
* **Global Search Bar** to search by ICCID/IMEI/MSISDN

::: tip 
Quick find the SIM by entering **partial ending digits** in global search bar. Searching will happen in order of `ICCID`, `IMEI` then `MSISDN` and return all the matched results.

E.g.: `023801`=> ICCID `89013113804763023801`, IMEI `230A8X023801`
:::


---
### Table Menu Bar ⚡️
> Actions present in menu bar allow users to perform quick bulk actions on selected SIMs (1 or more).

![menubar](/menubar.png)

* Export the selected SIMs or all SIMs into excel file
* Edit tags
* Edit notes
* Send SMS to the selected SIM
::: tip
Edit tags or notes in bulk will **override** the existing tags/notes.
:::


---
### Columns
Data columns of the SIM List are:

| Columns        | Description           | Remarks  |
| ------------- |-------------| -----|
| **ICCID** |The unique **I**ntegrated **C**ircuit **C**ard **Id**entification Number of the SIM by global standards.||
| **Organisation** |Organisation that owns the SIM asset.||
| **IMEI** | **I**nternational **M**obile **E**quipment **I**dentity that identifies the device which uses the SIM.| Dial `*#06#` on a screened device to find out the IMEI|
| **MSISDN**| **M**obile **S**tation **I**ntegrated **S**ervices **D**igital **N**etwork is the phone number which identifies a device during calls or data sessions.||
| **Status** | It indicates the current life cycle stage of the SIM.| refer to [SIM status](/guide/simstatus) for more details.|
| **Tags** |Add, edit or remove tags for individual SIM or SIMs in bulk.Tags can be used to filter and group SIMs.| Max. 5 tags per SIM and max. 10 characters per tag |
| **Notes** |Add, edit or remove notes for SIMs.| Max. 40 characters per note|
| **Expire At** | When service contract expires for the SIM. | [Grace period](simstatus) applies upon expiration.|
| **Network** | Local network of the last data session | Empty if no session in the last 3 months |
| **Last Session Time** | Last data session start time | Empty if no session in the last 3 months |
| **Usage** | Data usage of the current service cycle | day, month or year |
| **Limit** | Data limit of the current service cycle | day, month or year|


::: tip
Search for IMEI, ICCID, MSISDN etc in the column. You can also quick search a SIM by simply **entering its ending digits**.

It also applies to `IMEI`, `MSISDN` searching.

![search imei](/searchiccid.png)
:::

::: tip
Quickly find out the top-10 data usage SIMs by sorting `Usage` column
![sort usage](/sortusage.png) 
:::

::: tip
Hit `Refresh` icon button 🔄 in the tool bar to clear all the filtering, sorting and searching citeria.
:::


---
### SIM Detail
You may press ▶ to expand more SIM detail. Some important information include:


---
#### Status progress
![status progress](/statusprogress.png)

It indicates the **start and estimated end date** of the **current** SIM status.

---
#### Bundle Info
![bundle info](/bundleinfo.png)

Validity of the bundle is usually comensurate with the "active" status progress. Expiration of the service bundle could very well mean the expiration of the SIM should there be **NO** other service bundle or top-up package in place.

::: info
Click [here](/sim/overage) for **overage policy deep-dive**
:::

---
#### Usage History
Data usage history can be queried via date picker and can be downloaded.

::: warning Limitation
Usage history can't be dated back to more than 12 months ago.
:::
---
### Bundle History
You may refer to bundle history in case SIM has subscribed to more than 1 service bundle. It can be exported.

---
### CDR
![cdr](/more.png)

Click **CDR** to check all the **data/voice/sms sessions** of the SIM in a given time span.