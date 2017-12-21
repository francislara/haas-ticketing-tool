export const postColumn = () => (
  $.ajax({
    url: "https://sheets.googleapis.com/v4/spreadsheets/1_l9Bnd0AntmPT-h_m5m3kdkUnrzh7qPej_FKex01kfc/values/Sheet1!A1:D5?valueInputOption=USER_ENTERED",
    method: "PUT",
    data: 
    {
    data: [{
      range: "Sheet1!A1:D5",
      majorDimension: "ROWS",
      values: [
        ["Item", "Cost", "Stocked", "Ship Date"],
        ["Wheel", "$20.50", "4", "3/1/2016"],
        ["Door", "$15", "2", "3/15/2016"],
        ["Engine", "$100", "1", "30/20/2016"],
        ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
      ],
    }],
    valueInputOption: "USER_ENTERED"
    
  }
  }).then(resp => (console.log),
    resp => (console.log))
);