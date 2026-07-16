function copyFiles() {
  var sourceFolder = DriveApp.getFolderById("來源資料夾ID");//來源資料夾ID
  var targetFolder = DriveApp.getFolderById("目標資料夾ID");//目標資料夾ID
  var files = sourceFolder.getFiles();
  
  while (files.hasNext()) {
    var file = files.next();
    Drive.Files.copy(
      {title: file.getName(), parents: [{id: targetFolder.getId()}]},
      file.getId(),
      {supportsAllDrives: true}
    );
  }
}
