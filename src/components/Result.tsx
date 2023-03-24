import $ from "jquery";

// interface to determine the props that are recieved
interface ResultProps {
  currency1: string;
  currency2: string;
  amount: number;
  compareDate: string;
}

function Result({ currency1, currency2, amount, compareDate }: ResultProps) {
  // define from currency, to currency, and amount
  let from = currency1.substr(currency1.length - 3, 3);
  let to = currency2.substr(currency2.length - 3, 3);
  let amountStr = amount.toString();
  // set endpoint and your API key
  let endpoint = "convert";
  let access_key = "K8YFSppjiUVEsbPj4oeLcIGGhG7fvC3a";

  // variables to store result from basic conversion
  let rate = 0;
  let result = 0;
  let date = "";

  //variables to store result from fluctuation conversions
  let change = 0;
  let changePercent = 0;
  let prevRate = 0;

  // execute the conversion using the "convert" endpoint:
  $.ajax({
    method: "GET",
    url:
      "https://api.apilayer.com/exchangerates_data/" +
      endpoint +
      "?apikey=" +
      access_key +
      "&to=" +
      to +
      "&from=" +
      from +
      "&amount=" +
      amountStr,
    async: false,
    contentType: "application/json",
    success: function (json) {
      // access the conversion result in json.result
      alert(json.result + " ****" + json.info.rate + " ****" + json.date);
      rate = json.info.rate;
      result = json.result;
      date = json.date;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });

  // execute the conversion using the "fluctuation" endpoint:
  $.ajax({
    method: "GET",
    url:
      "https://api.apilayer.com/exchangerates_data/fluctuation?apikey=" +
      access_key +
      "&start_date=" +
      compareDate +
      "&end_date=" +
      date +
      "&base=" +
      from +
      "&symbols=" +
      to,
    //dataType: "json",
    async: false,
    contentType: "application/json",
    success: function (json) {
      // access the conversion result in json.result
      change = json.rates[to].change;
      changePercent = json.rates[to].change_pct;
      prevRate = json.rates[to].start_rate;
      console.log("change: " + change);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });

  let rounded = Math.round((result + Number.EPSILON) * 100) / 100;

  return (
    <>
      <div className="containe allMar">
        <h3>Conversion:</h3>
        <hr></hr>
        <div className="row text-center">
          <div className="card text-center">
            <div className="card-body">
              <h1>
                {amount} {from} = {rounded} {to}
              </h1>
            </div>
            <div className="card-footer text-muted">As of {date}.</div>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1>
                  {Math.round((changePercent + Number.EPSILON) * 100) / 100}%{" "}
                </h1>
                <h3>change</h3>
              </div>
              <div className="card-footer text-muted">Since {compareDate}.</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1>
                  1 {from} = {Math.round((rate + Number.EPSILON) * 100) / 100} {to}
                </h1>
                <h3>current exchange rate</h3>
              </div>
              <div className="card-footer text-muted">As of {date}.</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h1>{Math.round((change + Number.EPSILON) * 100) / 100} {to}</h1>
                <h3>difference</h3>
              </div>
              <div className="card-footer text-muted">Since {compareDate}.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
