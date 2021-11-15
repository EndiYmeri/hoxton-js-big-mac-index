// The Big Mac PPP exchange rate between two countries is obtained by dividing the price of a Big Mac in one country (in its currency) by the price of a Big Mac in another country (in its currency). This value is then compared with the actual exchange rate; if it is lower, then the first currency is under-valued (according to PPP theory) compared with the second, and conversely, if it is higher, then the first currency is over-valued.

const USBigMacPriceUSD = 5.66 /* Price in USD*/
const ItalianBigMacPriceEur = 6.80 /* Price in Euro*/
const SwedenBigMacPriceSEK = 52.88 /* Price in Swedish Krona*/
const RussianBigMacPriceRUB = 169 /* Price in Russian Ruble*/
const SwissBigMacPriceCHF = 6.50 /* Price in Swiss Franc*/
const CananadianBigMacPriceCAD = 6.77 /* Price in Canadian Dollar*/

// Exhange Rates

const USDtoEUR = 0.88
const USDtoSEK = 8.77
const USDtoRUB = 74.53
const USDtoCHF = 0.92
const USDtoCAD = 1.25

// Purchasing Power Parity
// ppp = priceCountry1 / priceCountr2

const ItalyToUS = ItalianBigMacPriceEur / USBigMacPriceUSD
const SwedenToUS = SwedenBigMacPriceSEK / USBigMacPriceUSD
const RussianToUS = RussianBigMacPriceRUB / USBigMacPriceUSD
const SwissToUs = SwissBigMacPriceCHF / USBigMacPriceUSD
const CanadianToUS = CananadianBigMacPriceCAD / USBigMacPriceUSD

// Indexes of Big Macs compared to US price:

// index =  (ExRate - ppp) / ppp

let indexOfItaly = (USDtoEUR - ItalyToUS) / ItalyToUS
let indexOfSweden = (USDtoSEK - SwedenToUS) / SwedenToUS
let indexOfRussia = (USDtoRUB - RussianToUS) / RussianToUS
let indexOfSwiss = (USDtoCHF - SwissToUs) / SwissToUs
let indexOfCanada = (USDtoCAD - CanadianToUS) / CanadianToUS

console.log("Italy price index compard to US " + indexOfItaly.toFixed(2));
console.log("Sweden price index compard to US " + indexOfSweden.toFixed(2));
console.log("Russia price index compard to US " + indexOfRussia.toFixed(2));
console.log("Swiss price index compard to US " + indexOfSwiss.toFixed(2));
console.log("Canada price index compard to US " + indexOfCanada.toFixed(2));


// Challenge 2

// OverValued

indexOfItaly < 0 && console.log("The Italian Euro is: " + -indexOfItaly.toFixed(2) * 100 + "% overvalued")
indexOfSweden < 0 && console.log("The Swedish Krona is: " + -indexOfSweden.toFixed(2) * 100 + "% overvalued")
indexOfRussia < 0 && console.log("The Russian Ruble is: " + -indexOfRussia.toFixed(2) * 100 + "% overvalued")
indexOfSwiss < 0 && console.log("The Swiss Franc is: " + -indexOfSwiss.toFixed(2) * 100 + "% overvalued")
indexOfCanada < 0 && console.log("The Canadian Dollar is: " + -indexOfCanada.toFixed(2) * 100 + "% overvalued")



// UnderValued
indexOfItaly > 0 && console.log("The Italian Euro is: " + indexOfItaly.toFixed(2) * 100 + "% undervalued")
indexOfSweden > 0 && console.log("The Swedish Krona is: " + indexOfSweden.toFixed(2) * 100 + "% undervalued")
indexOfRussia > 0 && console.log("The Russian Ruble is: " + indexOfRussia.toFixed(2) * 100 + "% undervalued")
indexOfSwiss > 0 && console.log("The Swiss Franc is: " + indexOfSwiss.toFixed(2) * 100 + "% undervalued")
indexOfCanada > 0 && console.log("The Canadian Dollar is: " + indexOfCanada.toFixed(2) * 100 + "% undervalued")