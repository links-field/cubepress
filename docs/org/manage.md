# Management of Organistaion Structure

Cube's Organisations are loosely coupled as Administrators are allowed to create new organisations and invite collaborators with great flexibility. When you hava an organistaional structure or hierarchy, you can use below patterns:


## Company Hierarchy
When you are setting up a structure for your company and branch offices around the world, you may adopt the hierarchy pattern as illustrated below:

![company hierarchy](/companyhierarchy.png)

---

* **Thomas (CTO)** - is responsible for the company hierarchy. He is `superadmin` for HQ and **created Brazil and UK companies** - therefore their `superadmin` as well. He then invited **Lucy** and **Mark** to be in charge of the local operations.

* **Lucy(Brazil)** - is invited to be an `admin` and is responsible for Brasil operations. She created a local branch **Brasilia** and becomes its `superadmin`.

* **Mark(UK operational PIC)** - **Created London and Sheffield branches** and invite **Mary** to oversee Sheffield as a user.

* **Mary(Sheffield)** - is invited to **Sheffield** branch as a **user**. She can observe and monitor. But she CANNOT create organisation.

:::tip
However, Thomas won't know **what's going on with local branches, e.g., London.** since he doesn't have any role there. Therefore Mark invites Thomas to be the admin so that he can be overseeing its operations.
:::

Below is the table of who can access which organisations:

| Person | Organisations | Role
| --- | --- | --- | 
| Thomas | HQ| superadmin|
|  | Brazil | superadmin | 
|  | UK | superadmin |
|  | London | admin |
| Lucy | Brazil | admin |
|| Brasilia | superadmin |
| Mark | UK | admin |
|  | London | superadmin |
|  | Sheffield | superadmin |
| Mary | Sheffield | user |


## Centralised Model

In a more **centralised model**, Thomas can choose to create all companies and local branches so that he will naturally be able to monitor all.

In this model, Thomas has a greater control over local operations.

![Centralized Model](/centralised.png)

| Person | Organisations | Role
| --- | --- | --- | 
| Thomas | HQ| superadmin|
|  | Brazil | superadmin | 
|  | Brasilia | superadmin |
|  | UK | superadmin |
|  | London | superadmin |
|  | Sheffield | superadmin |
| Lucy | Brazil | operator |
|| Brasilia | user |
| Mark | UK | admin |
|  | London | operator |
|  | Sheffield | admin |

* **Be noted:** in this case, Mark **can no longer invite anyone to manage London branch** as he is `operator` with London branch now.

## Agent Hierarchy
Similarly as company hierarchy, agent hierarchy **authorises its sub level Organisations to manage their own operations.** In this case, these (sub level) organisations do not invite Thomas to engage in their operational activities, **so each agent company has full autonomy.**

![agent hierarchy](/agenthierarchy.png)

| Person | Organisations | Role
| --- | --- | --- | 
| Thomas | Company| superadmin|
|  | Distributor A | superadmin | 
| Lucy | Industry A | superadmin |
|  | Industry B | superadmin |
| Mark | Industry A | admin |
| Mary |  Industry B | admin |
|  |  UK Branch | superadmin |

Unlike company hierarchy, in this case operations of Industry A and B are **of no interest** to Thomas.

## Mixed Model
In the example above, **Mary** can also develop her own organisational structure based on either company hierarchy or centralised model. 


---
**From simple to complex, Cube's organisation feature can help you acheive your desired network of organisations,offering both security and flexibility.** 