# Autoflow <Badge type="tip" text=">1.4"/>

**Streamline Your Operations Effortlessly** :
The Autoflow feature is an automation tool designed to transform the way you manage and execute tasks. With this feature enabled, you can efficiently automate repetitive tasks, enhance productivity, and minimize human error.

## Overview

![autoflow](/autoflow-1.png)

On the Autoflow page, you'll find a comprehensive list of all the autoflows created for your organization. This list is accessible to all users, ensuring that everyone stays informed and up-to-date.

We've also provided a selection of **popular Autoflow templates** at the bottom of the page, to facilitate a seamless experience and help you kickstart your automation journey with ease.

## Create
Click "create" button or use a template to start creation.

### 1. Event Trigger & Condition

Set up the event and the right conditions for the automated task. Here is the list of supported events & conditions:

|Event|Sub-type| Condition Detail| Support |
|--|--|--|--|
| Data usage | single SIM - value & percentage | monitor single SIM's usage by value or percentage of quota | `yes` |
|| mutiple SIMs - total value| monitor total usage of multiple SIMs by value  | `yes`|
|| mutiple SIMs - percentage | monitor total usage of multiple SIMs by data pool percentage | `developing`|
|SMS usage| | monitor SMS Usage| `developing`|
|SIM status change| | monitor SIM Life cycle changes | `developing`|
|SMS MO | | upon receiving SMS MO for a SIM | `developing`|



### 2. Scope

Once the event & trigger condition is set, you may decide the scope to apply this event to. There are several methods:


|Method| Detail| Special Note|
|--|--|--|
| `All SIMs` | All SIMs owned by the organistaion | `dynamically` changed when new SIMs are added or SIMs are transferred out |
|`Upload SIMs`| Upload a list of ICCIDs| `static` |
|`Manual Input`| Input ICCIDs | `static` |
|`Choose tags`| SIMs with the tags will be selected | `dynamic` |
|`Package`| SIMs that have been assigned with the package | `dynamic` |

:::tip
The dynamic selection is a convenient method for monitoring all eligible SIMs/Devices based on criteria such as `Tags`, `Package`, or `Organization`. For instance, when setting tags to `USA-FleetA`, any new SIMs given this tag will be automatically included in the scope of this autoflow.

:::



### 3. Action
Action is what task is to be performed when the event is triggered.

:::tip
You may set up multiple actions for one event trigger
:::

Supported Actions:

|Category|Action| Detail | Status|
|--|--|--|--|
|Notification|Email| you can create an email group for multiple recipients to receive notification | Support |
||API| Set a URL to receive event notification | `Developing`|
|Operation| Stop/resume SIM Service |  | `developing` |
||Top up| | `developing`|
||Auto renew| |`developing`|


### 4. Time
* Activation
> You may decide to activate this autoflow now or at a later time.

* Expiration
> You may set the autoflow to expire after a period of time or to never expire.

## Manage 
Accounts with **sufficient permissions** can edit, disable, enable, or delete your autoflow at any time. This allows for better control and management of the automated processes, ensuring they remain up-to-date and relevant to the organization's needs.

**Permissions**:
|Action| User | Operator| Admin |
|--|--|--|--|
|Read List| ✅ | ✅ | ✅|
|Read Detail| ✅ | ✅ | ✅|
|Create, Edit, Delete |❌ | ✅ | ✅|

## Detail

### 1. Details

Click on the autoflow name, you will be able to see the flow's details.

![autoflow-detail](/autoflow-detail.png)

::: info
In the scope section of the detail, you may see the list of the **ICCIDs** included in the scope, but only when the **static** scope is set for the auto flow.
:::

### 2. History

On the bottom, we also make information on autoflow run history and the activity of the autoflow available. 
![autoflow-history](/autoflow-history.png)

::: info
Click on "view", you may see futher details about each action's result, for example, if the email has been sent successfully.
:::