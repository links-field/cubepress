# SIM Diagnose

Hit the `diagnose` button, you can get a quick diagnosis revolving the status and the service availability of the SIM. It comes handy in the trouble shooting for disconnection of the device. 


![simdiagnose](/diagnose.png)


## Citeria

- ✅ indicates this item works for the SIM connection.
- ❌ indicates this item works against the SIM connection and might contribute to the issue. 


## Items `V1.0`
| Item        | ✅           | ❌  |
| ------------- |-------------| -----|
|ICCID| Information available| -|
|IMSI| Information available| -|
|SIM Status| `Active` | other values|
|Produced At| Information available| -|
|Pre-activated Period| Information available| -|
|Pre-deactivated Period| Information available| -|
|Test Data Status| Active if in Pre-activated state| Not active in pre-activated state|
|Test Data Period| >0 if in Pre-activated state| otherwise in Pre-activated state|
|In use bundle| true: there is a bundle in use| false: no bundle |
|Bundle Auto Enable| true: bundle is enabled automatically when added| otherwise|
|MNO Status| Active | other values|


## A quick map to conclude

| SIM State        | ✅  Healthy        | ❌ Reasons of disconnection |
| ------------- |-------------| -----|
| Pre-activated | Test Data > 0 |  Test Data < 0 or unavailable|
|  | Test Period > 0 |  Test Period < 0 or unavailable|
|  | MNO Status is `active` |  MNO Status is not `active`|
| Active | In use bundle == true |  In use bundle == false or unavailable|
|  | MNO Status is `active` |  MNO Status is not `active`|

When SIM is in `expired` or `terminated` state, expections are the SIM is not connected.