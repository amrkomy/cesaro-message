// netlify/functions/sendNotification.js

const ONESIGNAL_APP_ID = "503fdf76-180b-4f34-8633-882fa0e19af7";
const ONESIGNAL_REST_KEY = "os_v2_app_ka7565qybnhtjbrtrax2bym266uxn2eww5uugqeycbke6bd2qethmdgvbgv45kr4pajz7ldaijufp6cf2vb7zygy2sqmbgpn6fn73na";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { title, message, imageUrl } = JSON.parse(event.body);

  const payload = {
    app_id: ONESIGNAL_APP_ID,
    included_segments: ["All"],
    headings: { en: title },
    contents: { en: message },
    chrome_web_image: imageUrl || undefined,
  };

  const response = await fetch("https://onesignal.com/api/v1/notifications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${ONESIGNAL_REST_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify(result),
  };
};
