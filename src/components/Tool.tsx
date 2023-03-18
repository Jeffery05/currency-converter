import { MouseEvent } from "react";

// interface to determine the props that are recieved
interface ToolProps {
  onInput: Function;
}

function Tool({ onInput }: ToolProps) {
  const items = [
    "Australia Dollar	AUD",
    "Great Britain Pound	GBP",
    "Euro	EUR",
    "Japan Yen	JPY",
    "Switzerland Franc	CHF",
    "USA Dollar	USD",
    "Afghanistan Afghani	AFN",
    "Albania Lek	ALL",
    "Algeria Dinar	DZD",
    "Angola Kwanza	AOA",
    "Argentina Peso	ARS",
    "Armenia Dram	AMD",
    "Aruba Florin	AWG",
    "Australia Dollar	AUD",
    "Austria Schilling	ATS (EURO)",
    "Belgium Franc	BEF (EURO)",
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
    "Great Britain Pound	GBP",
    "Brunei Dollar	BND",
    "Bulgaria Lev	BGN",
    "Burundi Franc	BIF",
    "CFA Franc BCEAO	XOF",
    "CFA Franc BEAC	XAF",
    "CFP Franc	XPF",
    "Cambodia Riel	KHR",
    "Canada Dollar	CAD",
    "Cape Verde Escudo	CVE",
    "Cayman Islands Dollar	KYD",
    "Chili Peso	CLP",
    "China Yuan/Renminbi	CNY",
    "Colombia Peso	COP",
    "Comoros Franc	KMF",
    "Congo Franc	CDF",
    "Costa Rica Colon	CRC",
    "Croatia Kuna	HRK",
    "Cuba Convertible Peso	CUC",
    "Cuba Peso	CUP",
    "Cyprus Pound	CYP (EURO)",
    "Czech Koruna	CZK",
    "Denmark Krone	DKK",
    "Djibouti Franc	DJF",
    "Dominican Republich Peso	DOP",
    "East Caribbean Dollar	XCD",
    "Egypt Pound	EGP",
    "El Salvador Colon	SVC",
    "Estonia Kroon	EEK (EURO)",
    "Ethiopia Birr	ETB",
    "Euro	EUR",
    "Falkland Islands Pound	FKP",
    "Finland Markka	FIM (EURO)",
    "Fiji Dollar	FJD",
    "Gambia Dalasi	GMD",
    "Georgia Lari	GEL",
    "Germany Mark	DMK (EURO)",
    "Ghana New Cedi	GHS",
    "Gibraltar Pound	GIP",
    "Greece Drachma	GRD (EURO)",
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
    "Ireland Pound	IED (EURO)",
    "Israel New Shekel	ILS",
    "Italy Lira	ITL (EURO)",
    "Jamaica Dollar	JMD",
    "Japan Yen	JPY",
    "Jordan Dinar	JOD",
    "Kazakhstan Tenge	KZT",
    "Kenya Shilling	KES",
    "Kuwait Dinar	KWD",
    "Kyrgyzstan Som	KGS",
    "Laos Kip	LAK",
    "Latvia Lats	LVL (EURO)",
    "Lebanon Pound	LBP",
    "Lesotho Loti	LSL",
    "Liberia Dollar	LRD",
    "Libya Dinar	LYD",
    "Lithuania Litas	LTL (EURO)",
    "Luxembourg Franc	LUF (EURO)",
    "Macau Pataca	MOP",
    "Macedonia Denar	MKD",
    "Malagasy Ariary	MGA",
    "Malawi Kwacha	MWK",
    "Malaysia Ringgit	MYR",
    "Maldives Rufiyaa	MVR",
    "Malta Lira	MTL (EURO)",
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
    "Netherlands Guilder	NLG (EURO)",
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
    "Portugal Escudo	PTE (EURO)",
    "Qatar Rial	QAR",
    "Romania New Lei	RON",
    "Russia Rouble	RUB",
    "Rwanda Franc	RWF",
    "Samoa Tala	WST",
    "Sao Tome/Principe Dobra	STD",
    "Saudi Arabia Riyal	SAR",
    "Serbia Dinar	RSD",
    "Seychelles Rupee	SCR",
    "Sierra Leone Leone	SLL",
    "Singapore Dollar	SGD",
    "Slovakia Koruna	SKK (EURO)",
    "Slovenia Tolar	SIT (EURO)",
    "Solomon Islands Dollar	SBD",
    "Somali Shilling	SOS",
    "South Africa Rand	ZAR",
    "South Korea Won	KRW",
    "Spain Peseta	ESP (EURO)",
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
    "USA Dollar	USD",
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

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <div className="containe allMar">
        <h3>Conversion Tool:</h3>
        <hr></hr>
        <form onSubmit={onInput("j", "i", 100)} action="/result">
          <div className="row">
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                aria-describedby="Amount"
                placeholder="Enter Amount"
              />
              <small id="amountHelp" className="form-text text-muted">
                In the base currency.
              </small>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <select className="form-control mt-3">
                <option value="" selected disabled>
                  From...
                </option>
                {items.map((item) => (
                  <option key={item}>{item}</option> // rendering lists
                ))}
              </select>
            </div>
            <div className="col-md-2 mt-3">
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
              <select className="form-control mt-3">
                <option value="" selected disabled>
                  To...
                </option>
                {items.map((item) => (
                  <option key={item}>{item}</option> // rendering lists
                ))}
              </select>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              value="Submit"
              className="btn btn-outline-success"
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
