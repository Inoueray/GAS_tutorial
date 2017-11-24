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