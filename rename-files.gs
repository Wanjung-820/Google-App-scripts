function renameFiles() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var count = 0;

  for (var i = 1; i < data.length; i++) {
    var fileId = data[i][0];
    var newName = data[i][2];
    
    if (!fileId || !newName) continue;
    
    try {
      Drive.Files.patch(
        {title: newName},
        fileId,
        {supportsAllDrives: true}
      );
      sheet.getRange(i + 1, 4).setValue("✅ Done");
      count++;
    } catch(e) {
      sheet.getRange(i + 1, 4).setValue("❌ Error: " + e.message);
    }
  }

  SpreadsheetApp.getUi().alert("✅ 完成！共修改 " + count + " 筆檔案");
}
