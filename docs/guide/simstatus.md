# SIM Status


This chapter describes SIM life cycle stages.

## Overview
![all states](/states.png)

| Status        | Description           | Billing  |
| ------------- |-------------| -----|
| `Pre-activated`     | SIM is in test.active stage | `not started` |
| `Active`     | SIM is fully activated and in use | `started` |
| `Paused`     | SIM service is temporarily suspended | `suspended` |
| `Expired`     | SIM service is expired but can be renewed | `stopped` |
| `Terminated`     | SIM service is terminated and can NOT be renewed | `ended` |



## Pre-activated

* When SIMs are **shipped**, by default they are set to be in **pre-activated period/state**.

* SIMs that come with a complementary **Test Package**, (100KB or other volume, depending on the terms of the service contract), could use the test package service during pre-activated period.

* Pre-activation period is typically set to be **0~6** months (depending on the terms of the service contract and it could be extended in some cases).

* At the **expiry** of the pre-activation period, or after the test package quota is **used up**, **whichever occurs earlier**, SIMs will automatically go into **"activated(active)"** state, when the **billing starts**.

## Active
> or `Activated`

Once SIMs are in activated state, the billing starts. Services are provided according to the **bundle** assigned to the SIMs. 

If the bundle comes with a **service warranty/validity period**, the service will automatically **expire** at the end of the period should there be no renewal or replacement.

## Paused
In activated state, when you forsee a period of inactivity of the SIMs, you could suspend the service until the need to use them rises again. The SIMs will then be placed in `paused` state when the billing temporarily halts.

::: info More Info
[Pause a SIM - Deep Dive](../sim/pausesim)
:::

::: tip
Toggle between `paused` and `active` on the SIM List by using toggle switch.
![toggleswitch](/toggleswitch.png)
![pause gif](/pause.gif)

The operations are done in real-time and effect is immediate.
:::


## Expired
When service reaches the end of validity period, the SIMs are `expired` and the services are stopped. **A typical grace period of 1-6 months applies.**

Before grace period expires, if there is a **renewal**, SIM will be back to activated/ pre-activated state.


## Terminated
At the end of the grace period, SIMs will go into `terminated` state. More often than not this state is **irreversible** where the services cannot be reinstated. 