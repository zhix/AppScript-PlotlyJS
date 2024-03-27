const REFSHEET = "Sheet1"

function doGet(e) { 
  const htmlTemplate = HtmlService.createTemplateFromFile('index.html'); 
  
  htmlTemplate.tableData = getValue("A1");
  
  const htmlService = htmlTemplate.evaluate(); 
  return htmlService
  
} 

function getValue(cellNotation){ 
  var ss=SpreadsheetApp.getActiveSpreadsheet(); 
  var dataSheet=ss.getSheetByName(REFSHEET); 

  return dataSheet.getRange(cellNotation).getValue()
} 

function getTable(col){ 
  var ss=SpreadsheetApp.getActiveSpreadsheet(); 
  var dataSheet=ss.getSheetByName(REFSHEET); 
  var getLastrow=dataSheet.getLastRow(); 

  data = dataSheet.getRange(2,col,getLastrow-1,1).getValues();
  
  // Logger.log(flattenArray(data));  
  return flattenArray(data)
}

function flattenArray(arr) {
  return [].concat(...arr);
}

function x(){
 return getTable(1) 
}

function y(){
 return getTable(2)
}