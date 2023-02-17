function doPost(e) {
  let dataJSON = e?.postData.contents;
  let data = dataJSON ? JSON.parse(dataJSON) : {};

  sendEmail(data?.name, data?.email, data?.message);

  return ContentService.createTextOutput(
    JSON.stringify({ result: e })
  ).setMimeType(ContentService.MimeType.JSON);
}

function sendEmail(name, email, message) {
  const content =
    "www.marikone.com" +
    "\n" +
    "\n" +
    "Name: " +
    name +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Message: " +
    message;
  const timeStamp = new Date();

  Logger.log(timeStamp);

  if (MailApp.getRemainingDailyQuota() > 0) {
    MailApp.sendEmail({
      to: "gio.digmel1@gmail.com",
      subject: timeStamp,
      body: content,
    });
  } else {
    Logger.log("Out of the daily quotas");
  }
}
