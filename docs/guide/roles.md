# Roles and Permissions


::: tip
By default, one organization can have **maximum 10 accounts** (of any combination of roles)
:::

## Superadmin

* There is **only one** superadmin per organization
* It **CANNOT be deleted** though it can be transferred
* It has the **full access permissions** to organisation and its assets and accounts

## Admin
* It has full access permissions to organisation's assets and accounts, **except for `superadmin`** account.
* Only administrators (incl. `superadmin`) **can create organisations**.
* Administrators can **transfer assets** between organisations (so long as the account takes admin roles in both organisations)

## Operator
* It has full **operational permissions** to organisation's assets
* It **CANNOT transfer assets**

## User
* Read-only permissions 


## Operational Permissions
| Role        | Resources           | Actions  |
| ------------- |-------------| -----|
| User | `SIM` | `read`, `export`|
| User | `SMS` | `read`|
| User | `CDR` | `read`|
| Operator | `SIM` | `read`,`export`, `suspend`, `resume`, `reset`, `tag`,`note`|
| Operator | `SMS` | `read`, `send` | 
| Operator | `CDR` | `read`|

## Account Management

Administrators can **create, delete, enable/disable, edit accounts** from `settings` page.

::: info
[Account Management - Deep Dive](/account/)
:::