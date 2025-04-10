export async function sendTelegramMessage(message) {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    throw new Error("This function can only be called in the browser");
  }

  // Get environment variables from window object
  const TELEGRAM_BOT_TOKEN = window.TELEGRAM_BOT_TOKEN;
  const MY_ID = window.MY_ID;

  if (!TELEGRAM_BOT_TOKEN || !MY_ID) {
    throw new Error("Telegram configuration is missing");
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: MY_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    throw error;
  }
}
