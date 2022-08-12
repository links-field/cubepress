# Getting Started

::: info Cubers
Welcome to join us! :tada:
:::

## :woman_technologist: First, account!

* If you already have an account (email, password) with Cube, sign in [here](https://beta.iotcube.link).

* Else check [here](getaccount) for information on getting a new account.

::: tip
Additionally, when you already have an account, but you have forgotten the password, simply choose “forget password” on the sign-in page to reset your password.
:::

## 🏢 Organization
When you sign in, Cube will sign you in with your default organization (if not appointed, the first organization you have joined). 

One account (uniquely identified by email) can have roles with multiple organizations. 

::: info Create Organization
Admin and above roles can [create organizations](organization).
:::

## 👨🏻‍💼 Roles
There are following roles:

| Roles        | Description          |
| ------------- |:-------------:|
| **`superadmin`**    | One per organization, full access  |
| **`admin`** | administrators and operational access |
| **`operator`** | operational access |
| **`user`** | read-only access |

::: info Roles
Click [here]() for a deep-dive in **permissions and roles**.
:::
## SIMs
After you sign-in, you will be able to see all the SIMs your oganization currently owns. 

Depending on which role you have with the organization, you will have permission to access the SIMs accordingly.

SIM has its own life cycle status, in which SIM exhibits different behaviours. 

::: info SIM Status
Click [here](simstatus) for more information. 
:::

::: info Order SIMs
Click [here](order) to checkout SIM ordering.
:::

::: info SIM operations
Click [here](sim) to find out more about the SIM operations.
:::

## SMS
Cube offers a way to send SMS to SIMs, either individually or in bulk. 

::: tip 
Do note that not all SIMs support this feature. The greyed button suggests 'not supported'.
:::

::: info SMS
Check [here](sms) to learn how to send SMS from Cube.
:::
## CDR
We generate a standard CDR (Call Detail Record) on each data/call session or SMS. But there is usually latency between the actual session and the data synchronization. 

::: tip Latency
Latency varies from operator to operator, more commonly, it is between 10 minutes to 24 hours.
:::

Cube provides CDR records for each SIM, detailing session duration, type, direction of data link, volume, country, MNO and so on, which can be traced back to 3 months ago. For CDR that is more than 3 months old will be archived and can be 

::: info CDR query
For more details, click [here](cdr)
:::