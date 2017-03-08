var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function totalTax(salesData, taxRates) {
  var taxRate = taxRates[salesData.province];
  var taxAmount = taxRate*totalSales(salesData.sales);
  console.log(taxRate);
  return taxAmount;
}

function totalSales(sales) {
  var salesSum = 0;
  for (var j = 0; j < sales.length; j++){
    salesSum += sales[j];
  }
  return salesSum;
}

function calculateSalesTax(salesData, taxRates) {
  
  var result= {};

  for ( var i = 0; i < salesData.length; i++){
    if (result[salesData[i].name] === undefined ){
      result[salesData[i].name] = {totalSales: totalSales( salesData[i].sales ) , totalTaxes: totalTax(salesData[i], taxRates)};
    } else {
      result[salesData[i].name].totalSales += totalSales(salesData[i].sales);
      result[salesData[i].name].totalTaxes += totalTax(salesData[i], taxRates);
    }
    
  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
