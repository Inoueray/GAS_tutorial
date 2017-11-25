function sendEmail(){
	var sheet = SpreadsheetApp.getActiveSheet();
	var starRow = 2;
	var numRows = 2;
	var dataRange = sheet.getRange(startRow, 1, numRows, 2)
	var data = dataRange.getValue();
	for (i in data){
		var row = data[i];
		var emailAdress = row[0];
		var message = row[1];
		var subject = "Senfing emails from a Spreadsheet";
		MailApp.sendEmail(emailAdress, subject, message)
	}
}

var EMAIL_SENT = "EMAIL_SENT";

function sendEmails2(){
	var sheet = SpreadsheetApp.getActiveSheet();
	var starRow = 2;
	var numRows = 2;
	var dataRange = sheet.getRange(startRow, 1, numRows, 3)
	var data = dataRange.getValues();
	for (var i = 0; i < data.length; ++i){
		var row = data[i];
		var emailAdress = row[0];
		var message = row[1];
		var emailSent = row[2];
		if (emailSent != EMAIL_SENT){
			var subject = "Sending emails from a Spreadsheet";
			MailApp.sendEmail(emailAdress, subject, message);
			sheet.getRamge(startRow + i, 3).setValue(EMAIL_SENT);
			SpreadsheetApp.flush();
		}
	}

}