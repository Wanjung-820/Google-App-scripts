function listFiles() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt("請輸入資料夾 ID", "", ui.ButtonSet.OK_CANCEL);
  
  if (response.getSelectedButton() !== ui.Button.OK) return;
  
  var folderId = response.getResponseText().trim();
  if (!folderId) {
    ui.alert("資料夾 ID 不能為空！");
    return;
  }

  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  sheet.clearContents();
  sheet.appendRow(["File ID", "現有檔名", "新檔名"]);
  
  while (files.hasNext()) {
    var file = files.next();
    sheet.appendRow([file.getId(), file.getName(), ""]);
  }

  ui.alert("✅ 完成！共擷取 " + (sheet.getLastRow() - 1) + " 筆檔案");
}
