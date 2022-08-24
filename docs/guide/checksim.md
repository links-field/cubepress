# 📶 SIMs
> in draft


## SIM List

You may check the basic information of the SIM in the list, and we offer enriched features above and beyond.

### Table Toolbar ⚙️
> Configuration of the table

![toolbar](/toolbar.png)

* **Height Setting** for table rows: _default, medium or compact._
* **Column Setting** to check only the columns you'd like to see
* **Refresh Table Data**
* **Global Search Bar** to search by ICCID/IMEI/MSISDN

::: tip 
When entering partial digits, the global search bar will return results that match either ICCID or IMEI or MSISDN (in that sequence) by **ending digits**.
E.g.: `023801`=> ICCID `89013113804763023801`
:::

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

### Columns
Data columns are:
#### ICCID
The unique **I**ntegrated **C**ircuit **C**ard **Id**entification Number of the SIM by global standards.

#### Organisation
Organisation that owns the SIM asset.


#### IMEI
**I**nternational **M**obile **E**quipment **I**dentity that identifies the device which uses the SIM.

::: tip
Dial `*#06#` on a screened device to find out the IMEI
:::



#### MSISDN
**M**obile **S**tation **I**ntegrated **S**ervices **D**igital **N**etwork is the phone number which identifies a device during calls or data sessions.


#### Status
It indicates the current life cycle stage of the SIM.
::: info
refer to [SIM status](/guide/simstatus) for more details.
:::


#### Tag
#### Notes
#### Expire At




### SIM Detail
You may press ▶ to expand SIM detail

SIM overview info

SIM bundle info

Bundle history and CDR info

SMS

You send SMS from the SIM List

Action column: Send SMS to the single SIM

Tool bar: Send SMS to selected multiple SIMs

After sending, it will direct you into the SMS List to check the status or reply.

Or you could simply go to SMS menu from the Sidebar navigation, and send SMS to SIMs in batch.

CDR

Related articles
