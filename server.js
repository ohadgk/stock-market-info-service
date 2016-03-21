//using yahoo-finance-api link for more info on the readme.


var request = require("request");

getStockCurrentPriceBySymbol('GOOGL')

function getStockCurrentPriceBySymbol(sym){
    request(`http://finance.yahoo.com/d/quotes.csv?s=${sym}&f=ab`, function(error, response, body) {
        var parsedBody = body.split(',')
        var ASK = parseFloat(parsedBody[0])
        var BID = parseFloat(parsedBody[1])
        var currentPrice = (ASK + BID) /2
      console.log(currentPrice);
    });
}