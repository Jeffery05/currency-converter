import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// interface to determine the props that are recieved
interface ToolProps {
  onInput: Function;
}

function Tool({ onInput }: ToolProps) {
  const items = [
    "Canada Dollar	CAD",
    "US Dollar	USD",
    "Great Britain Pound	GBP",
    "Euro	EUR",
    "China Yuan/Renminbi	CNY",
    "Japan Yen	JPY",
    "Russia Rouble	RUB",
    "Afghanistan Afghani	AFN",
    "Albania Lek	ALL",
    "Algeria Dinar	DZD",
    "Angola Kwanza	AOA",
    "Argentina Peso	ARS",
    "Armenia Dram	AMD",
    "Aruba Florin	AWG",
    "Australia Dollar	AUD",
    "Azerbaijan New Manat	AZN",
    "Bahamas Dollar	BSD",
    "Bahrain Dinar	BHD",
    "Bangladesh Taka	BDT",
    "Barbados Dollar	BBD",
    "Belarus Ruble	BYR",
    "Belize Dollar	BZD",
    "Bermuda Dollar	BMD",
    "Bhutan Ngultrum	BTN",
    "Bolivia Boliviano	BOB",
    "Bosnia Mark	BAM",
    "Botswana Pula	BWP",
    "Brazil Real	BRL",
    "Brunei Dollar	BND",
    "Bulgaria Lev	BGN",
    "Burundi Franc	BIF",
    "CFA Franc BCEAO	XOF",
    "CFA Franc BEAC	XAF",
    "CFP Franc	XPF",
    "Cambodia Riel	KHR",
    "Cape Verde Escudo	CVE",
    "Cayman Islands Dollar	KYD",
    "Chili Peso	CLP",
    "Colombia Peso	COP",
    "Comoros Franc	KMF",
    "Congo Franc	CDF",
    "Costa Rica Colon	CRC",
    "Croatia Kuna	HRK",
    "Cuba Convertible Peso	CUC",
    "Cuba Peso	CUP",
    "Czech Koruna	CZK",
    "Denmark Krone	DKK",
    "Djibouti Franc	DJF",
    "Dominican Republich Peso	DOP",
    "East Caribbean Dollar	XCD",
    "Egypt Pound	EGP",
    "El Salvador Colon	SVC",
    "Ethiopia Birr	ETB",
    "Falkland Islands Pound	FKP",
    "Fiji Dollar	FJD",
    "Gambia Dalasi	GMD",
    "Georgia Lari	GEL",
    "Ghana New Cedi	GHS",
    "Gibraltar Pound	GIP",
    "Guatemala Quetzal	GTQ",
    "Guinea Franc	GNF",
    "Guyana Dollar	GYD",
    "Haiti Gourde	HTG",
    "Honduras Lempira	HNL",
    "Hong Kong Dollar	HKD",
    "Hungary Forint	HUF",
    "Iceland Krona	ISK",
    "India Rupee	INR",
    "Indonesia Rupiah	IDR",
    "Iran Rial	IRR",
    "Iraq Dinar	IQD",
    "Israel New Shekel	ILS",
    "Jamaica Dollar	JMD",
    "Jordan Dinar	JOD",
    "Kazakhstan Tenge	KZT",
    "Kenya Shilling	KES",
    "Kuwait Dinar	KWD",
    "Kyrgyzstan Som	KGS",
    "Laos Kip	LAK",
    "Lebanon Pound	LBP",
    "Lesotho Loti	LSL",
    "Liberia Dollar	LRD",
    "Libya Dinar	LYD",
    "Macau Pataca	MOP",
    "Macedonia Denar	MKD",
    "Malagasy Ariary	MGA",
    "Malawi Kwacha	MWK",
    "Malaysia Ringgit	MYR",
    "Maldives Rufiyaa	MVR",
    "Mauritania Ouguiya	MRO",
    "Mauritius Rupee	MUR",
    "Mexico Peso	MXN",
    "Moldova Leu	MDL",
    "Mongolia Tugrik	MNT",
    "Morocco Dirham	MAD",
    "Mozambique New Metical	MZN",
    "Myanmar Kyat	MMK",
    "NL Antilles Guilder	ANG",
    "Namibia Dollar	NAD",
    "Nepal Rupee	NPR",
    "New Zealand Dollar	NZD",
    "Nicaragua Cordoba Oro	NIO",
    "Nigeria Naira	NGN",
    "North Korea Won	KPW",
    "Norway Kroner	NOK",
    "Oman Rial	OMR",
    "Pakistan Rupee	PKR",
    "Panama Balboa	PAB",
    "Papua New Guinea Kina	PGK",
    "Paraguay Guarani	PYG",
    "Peru Nuevo Sol	PEN",
    "Philippines Peso	PHP",
    "Poland Zloty	PLN",
    "Qatar Rial	QAR",
    "Romania New Lei	RON",
    "Rwanda Franc	RWF",
    "Samoa Tala	WST",
    "Sao Tome/Principe Dobra	STD",
    "Saudi Arabia Riyal	SAR",
    "Serbia Dinar	RSD",
    "Seychelles Rupee	SCR",
    "Sierra Leone Leone	SLL",
    "Singapore Dollar	SGD",
    "Solomon Islands Dollar	SBD",
    "Somali Shilling	SOS",
    "South Africa Rand	ZAR",
    "South Korea Won	KRW",
    "Sri Lanka Rupee	LKR",
    "St Helena Pound	SHP",
    "Sudan Pound	SDG",
    "Suriname Dollar	SRD",
    "Swaziland Lilangeni	SZL",
    "Sweden Krona	SEK",
    "Switzerland Franc	CHF",
    "Syria Pound	SYP",
    "Taiwan Dollar	TWD",
    "Tanzania Shilling	TZS",
    "Thailand Baht	THB",
    "Tonga Pa'anga	TOP",
    "Trinidad/Tobago Dollar	TTD",
    "Tunisia Dinar	TND",
    "Turkish New Lira	TRY",
    "Turkmenistan Manat	TMM",
    "Uganda Shilling	UGX",
    "Ukraine Hryvnia	UAH",
    "Uruguay Peso	UYU",
    "United Arab Emirates Dirham	AED",
    "Vanuatu Vatu	VUV",
    "Venezuela Bolivar	VEB",
    "Vietnam Dong	VND",
    "Yemen Rial	YER",
    "Zambia Kwacha	ZMK",
    "Zimbabwe Dollar	ZWD",
  ];
  const nav = useNavigate();
  const { register, getValues } = useForm();

  return (
    <>
      <div className="container allMar">
        <h3>Conversion Tool:</h3>
        <hr></hr>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            onInput(
              getValues("currency1"),
              getValues("currency2"),
              getValues("amount"),
              getValues("date")
            );
            nav("/result");
          }}
        >
          <div className="row">
            <div className="col-md-5">
              <label>Convert From:</label>
              <select
                className="form-control"
                id="currency1"
                {...register("currency1")}
              required>
                <option defaultValue="From..." selected disabled></option>
                {items.map((item) => (
                  <option key={item}>{item}</option> // rendering lists
                ))}
              </select>
            </div>
            <div className="col-md-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </div>
            <div className="col-md-5">
              <label>Convert To:</label>
              <select
                className="form-control"
                id="currency2"
                {...register("currency2")}
                required>
                <option defaultValue="To..." selected disabled></option>
                {items.map((item) => (
                  <option key={item}>{item}</option> // rendering lists
                ))}
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="float"
                  className="form-control"
                  id="amount"
                  aria-describedby="Amount"
                  placeholder="Enter Amount"
                  {...register("amount")}
                  required
                />
                <small id="amountHelp" className="form-text text-muted">
                  In the base currency.
                </small>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Compare To Date:</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  aria-describedby="Date"
                  placeholder="Enter Date"
                  {...register("date")}
                required/>
                <small id="date" className="form-text text-muted">
                  Must be within the past 365 days.
                </small>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              value="Submit"
              className="btn btn-success"
            >
              Convert
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Tool;
