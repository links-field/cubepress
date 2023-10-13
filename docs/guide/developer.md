# Developer <Badge type="danger" text=">1.5"/>

🚀🎉 Introducing... The Spectacular Developer Module! 🎉🚀

Here is where magic happens ✨🪄🦄

## API Key
Before you are ready to connect to Cube via Cube API (Enterprise), you will first need to have a production API key. 

* You can apply for **multiple** API keys.
* **Safe keeping** the keys (RSA key pair) and the key ID is of paramount security importance. All members (all users) of the organisation can see contents of the keys.
* Only **Admin** can create or delete the API keys.



## Notification Key
Notifications are a feature of the Cube API (Enterprise). However, the flow of these notifications is from Cube to the servers of Cube's customers. Their primary purpose is to push notifications for specific event(s).

In order to ensure the authenticity and originality of the notification messages and to prevent tampering, you are recommended to use a notification key to verify the message.


* There should only be **one** notification key.
* It is automatically created by Cube whenever an API notification autoflow is to be sent or an API key is created.
* It can't be deleted.
* It can be refreshed by **admin** - same key ID with different key value.


## Logs
To facilitate efficient troubleshooting and enhance your system's diagnostic capabilities, we have furnished detailed API calling logs for both **API calls** and **Notification calls** for the last **30 days** for your reference. 


::: tip
* In notification logs, you can click **resend** should you fail to receive the api call.

* The re-sent notification will contain the same event-related information (but with a different transaction ID).
:::