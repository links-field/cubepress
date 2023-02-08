# SIM - Service

This card is to provide service informatin of the SIM

![simservice](/simservice.png)


## Status
The service bundle's current status.
Possible values are: `in use`, `expired`, `not started`

## Billing
`RFU` (Reserved For Future Use)

## Bundle 
The bundle ID

## Limit
Data limit for the bundle. 
x / y `period`
x = data size
y = number of the period

For example:
30 MB / 3 `Month` indicates total 30MB is allowed in a 3-month period

## Validity
The whole validity period ( in its cycle unit, for example `month`) and a timeline bar to show its current progress

## Coverage
The list of the covered countries

## Policy
Overage policy label:
- Stop at overage: data service stops after data limit is reached in current cycle.
- Overage allowance: a certain amount or percentage of overage is allowed before service comes to a complete stop.
- No limit: no limit on data consumption.
- Throttle: data speed throttled to 128 or 256kbps in the event of overage.

## Bundle History
You may refer to bundle history in case SIM has subscribed to more than 1 service bundle. The list can be exported.


::: warning Limitation
Usage history can't be dated back to more than 12 months ago.
:::