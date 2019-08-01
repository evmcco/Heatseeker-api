const { Expo } = require("expo-server-sdk");
const fetch = require("node-fetch");

const sneakersModel = require("../models/sneakers");

// Create a new Expo SDK client
let expo = new Expo();

exports.send_notif_when_raffle_added = async raffleData => {
  console.log("RAFFLE DATA", raffleData);
  const sneakerData = await sneakersModel.getSneakerById(raffleData.sneaker_id);
  console.log("SNEAKER DATA", sneakerData);
  // Get all user data from auth0 database
  const apiUrl = `https://heatseeker.auth0.com/api/v2/users`;
  const auth0Token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16Y3pOakk1UXpnME1VRkROVGsyTWpJM1F6VTBORVpHTlRJNU1rVXpRa0l4UXpsQ1JUbEJOdyJ9.eyJpc3MiOiJodHRwczovL2hlYXRzZWVrZXIuYXV0aDAuY29tLyIsInN1YiI6IlVLTlE2U0ZFU3dUeG1uRTIwTnBqdXp3RVBTTlh2M0dQQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2hlYXRzZWVrZXIuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1NjQ2ODYwMTEsImV4cCI6MTU2NTI5MDgxMSwiYXpwIjoiVUtOUTZTRkVTd1R4bW5FMjBOcGp1endFUFNOWHYzR1AiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.n7vqoR8NzYJnaaItgpnnz4iZ_6zTBPnLIosjctY_w_xmfyBFkeEnVJMAWSCafi_cv6f5QdsOPwJdCTZ3f2_1mtmn7NvOFgG7ZFpUZ_T50aH4kTPN4OXzgkfcE8kQIv1qBm-9kz21Pfi-qpKzai41ksab16eKJhv6YvnJ9YhFMX4JSLAk6k0_gdEMQsw5IMaZwjrFeOBil0kNm1Qe8oHFs_s-NMywKjaPNjaFtjJy4U_HXb4gUxdl-eRgFbJOhudVooud_VPkSS-8fp5QW3IQLCAtIIt2H82OhURcFMe0zpDgqn92G79bwUjWAi3npIB46QH9aV1PxH2Xane7WXmijQ";
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${auth0Token}`
    },
    method: "GET"
  });
  // console.log("RESPONSE:", response);
  const allUsers = await response.json();
  // console.log("ALL USERS:", allUsers);

  //get all Notification Tokens from auth0 database
  let allNotifTokens = [];
  allUsers.forEach(element => {
    if (element.user_metadata.hasOwnProperty("Expo_Push_Notif_Token")) {
      allNotifTokens.push(element.user_metadata.Expo_Push_Notif_Token);
    }
  });
  // console.log("ALL NOTIF TOKENS:", allNotifTokens);
  // Create the messages that you want to send to clents
  let messages = [];
  for (let pushToken of allNotifTokens) {
    // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]

    // Check that all your push tokens appear to be valid Expo push tokens
    if (!Expo.isExpoPushToken(pushToken)) {
      console.error(`Push token ${pushToken} is not a valid Expo push token`);
      continue;
    }

    // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications.html)
    messages.push({
      to: pushToken,
      sound: "default",
      title: "New Raffle Alert!",
      body: `Check out the new raffle for the ${sneakerData.sneaker_name}`,
      data: { withSome: "data" },
      _displayInForeground: true
    });
  }
  console.log("MESSAGES", messages);
  // The Expo push notification service accepts batches of notifications so
  // that you don't need to send 1000 requests to send 1000 notifications. We
  // recommend you batch your notifications to reduce the number of requests
  // and to compress them (notifications with similar content will get
  // compressed).
  let chunks = expo.chunkPushNotifications(messages);
  let tickets = [];
  (async () => {
    // Send the chunks to the Expo push notification service. There are
    // different strategies you could use. A simple one is to send one chunk at a
    // time, which nicely spreads the load out over time:
    for (let chunk of chunks) {
      try {
        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        console.log(ticketChunk);
        tickets.push(...ticketChunk);
        // NOTE: If a ticket contains an error code in ticket.details.error, you
        // must handle it appropriately. The error codes are listed in the Expo
        // documentation:
        // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
      } catch (error) {
        console.error(error);
      }
    }
  })();
};
// // Later, after the Expo push notification service has delivered the
// // notifications to Apple or Google (usually quickly, but allow the the service
// // up to 30 minutes when under load), a "receipt" for each notification is
// // created. The receipts will be available for at least a day; stale receipts
// // are deleted.
// //
// // The ID of each receipt is sent back in the response "ticket" for each
// // notification. In summary, sending a notification produces a ticket, which
// // contains a receipt ID you later use to get the receipt.
// //
// // The receipts may contain error codes to which you must respond. In
// // particular, Apple or Google may block apps that continue to send
// // notifications to devices that have blocked notifications or have uninstalled
// // your app. Expo does not control this policy and sends back the feedback from
// // Apple and Google so you can handle it appropriately.
// let receiptIds = [];
// for (let ticket of tickets) {
//   // NOTE: Not all tickets have IDs; for example, tickets for notifications
//   // that could not be enqueued will have error information and no receipt ID.
//   if (ticket.id) {
//     receiptIds.push(ticket.id);
//   }
// }

// let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
// (async () => {
//   // Like sending notifications, there are different strategies you could use
//   // to retrieve batches of receipts from the Expo service.
//   for (let chunk of receiptIdChunks) {
//     try {
//       let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
//       console.log(receipts);

//       // The receipts specify whether Apple or Google successfully received the
//       // notification and information about an error, if one occurred.
//       for (let receipt of receipts) {
//         if (receipt.status === "ok") {
//           continue;
//         } else if (receipt.status === "error") {
//           console.error(
//             `There was an error sending a notification: ${receipt.message}`
//           );
//           if (receipt.details && receipt.details.error) {
//             // The error codes are listed in the Expo documentation:
//             // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
//             // You must handle the errors appropriately.
//             console.error(`The error code is ${receipt.details.error}`);
//           }
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
// })();
