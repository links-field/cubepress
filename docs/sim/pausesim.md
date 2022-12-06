# Pause SIM Deep Dive

## Definition

Suspend a SIM is to suspend all of its services, including data, sms, or voice service should it have any. Suspension of a SIM can only happen when it is in `ACTIVE` state.

Resume a SIM is to resume all of its suspended services according to its service contract in effect. Resumption of a SIM can only happen when it is in `SUSPENDED` state.

## 🤔 What to expect
### 🚗 Device
Suspension of the SIM will be effective immediately after system successfully handles such request. Device will have no data service, nor sms service - neither sending nor receiving.

Device may or may not be able to connect with any network.

### 🖥️ SIM status and its statistics with Cube

- SIM status will turn into `Paused`, indicating its suspension mode

- There will be no data consumption or CDR records generated during this period.


### 🔖 Service Contract
The service contract is still rolling without being impacted by the SIM suspension, therefore the service validity will shorten with time until the contract expires. 


**Be noted:** 
::: warning
Suspension will apply to the add-on data service too. If by the time of resumption the add-on has expired, the data service won't be made available again. 
For example: 
- **Jul-10** add-on 10MB/month
- **Jul-15** consumed 2MB from add-on; suspended SIM
- **Aug-30** resumed SIM; add-on expired.
:::


### 💶 Payment during suspension
1. In any calendar month, if there is any service usage occurring to the SIM, 1-month contractual fee is chargeable. 

    - Bundle: the bundle is chargeable.
    - Pay As You Go: the used data prior to suspension is chargeable.
    - Bundle Data Pool: 

::: tip
**Supsension a SIM on `Data Pool` scheme:**
SIM will be considered an Active SIM in the current cycle of Data Pool, until next cycle.

**For example**:
- **Jul-10** active SIMs 10MB/month x 10 => Pool size = 100MB
- **Jul-11** suspend SIM x 1 => Pool size = 100MB still
- **Aug-01** active SIMs 10MB/month X 9 => Pool size = 90MB
:::

::: warning
Prepaid bundles are not refundable in the event of suspension
:::

2. In any calendar month, if SIM is in suspension mode and there is no service usage at all, there will be no charge unless stated otherwise in the service contract where there maybe minimum monthly charges or handling fees. 

::: info
📆 **Calendar month:** from 1st day 00:00:00 (GMT+8) to last day of the month 23:59:59 (GMT+8)
::: 




## Resumption
All services will be resumed immediately after such request is successfully handled by the system, according to its service contract in effect; in other words:

:::warning
it is not a viable option to resume a SIM when its service contract already expires during suspension. 
:::

## 🙋🏾 Q&A 

### What To Do ...
### ❓ When my contract expires

SIM in `EXPIRED` state indicates the service contract has expired. To revive a SIM, please contact sales to renew the service contract first. 


### ❓ When my SIM just won’t suspend
If the system prompts: it has failed to suspend SIM when you press suspend button while SIM is `ACTIVE` mode, please raise a ticket to our support team. **It may be caused by temporary error - which  you can try again later (1-minute apart)**, or **suspension is simply not supported by the MNO who provides the service**.
 
### ❓ When my SIM just won’t resume
If the system prompts: it has failed to resume SIM when you press resume button while SIM is `ACTIVE` mode, raise a ticket to our support team or directly contact our technical support to find out if such operation is rejected by MNO due to inactivity of SIM for too long.

### ❓ When the suspension or resumption Switch seem to be loading for a long time
When system is handling a lot of operation requests at the same time, these requests will be put in a queue. It may take as long as 10 minutes to complete such a request. You may continue browsing other pages and revisit the SIM list to check the final result.  