import { getPreferenceValues } from "@raycast/api";
import { InvoiceFormValues } from "./types";

export const preferences = getPreferenceValues();
export const {
  apiKey,
  address,
  defaultCurrency,
  defaultIncludeAddress,
  defaultIncludeTax,
  defaultLocale,
  includeAmountPaid,
  includePaymentTerms,
  includeShipping,
  invoiceDateFormat,
  invoiceNumberPrefix,
  logoUrl,
  name,
  termsAndConditions,
} = preferences;

export const initialInvoiceFormValues: InvoiceFormValues = {
  number: invoiceNumberPrefix,
  from: name,
  address: address,
  date: new Date(new Date().setHours(0, 0, 0, 1)),
  currency: defaultCurrency,
  terms: termsAndConditions,
  locale: defaultLocale,
};

export const initialInvoiceItemValues = [
  {
    name: "",
    quantity: "1",
    unit_cost: "0",
  },
];

export const initialCustomFields = [
  {
    name: "",
    value: "",
  },
];

export const locales = [
  { title: "English", value: "en-US" },
  { title: "French", value: "fr-FR" },
  { title: "German", value: "de-DE" },
  { title: "Spanish", value: "es-ES" },
  { title: "Thai", value: "th-TH" },
];

export const currencies = [
  { title: "ADB Unit of Account", value: "XUA" },
  { title: "Afghani", value: "AFN" },
  { title: "Algerian Dinar", value: "DZD" },
  { title: "Argentine Peso", value: "ARS" },
  { title: "Armenian Dram", value: "AMD" },
  { title: "Aruban Florin", value: "AWG" },
  { title: "Australian Dollar", value: "AUD" },
  { title: "Azerbaijan Manat", value: "AZN" },
  { title: "Bahamian Dollar", value: "BSD" },
  { title: "Bahraini Dinar", value: "BHD" },
  { title: "Baht", value: "THB" },
  { title: "Balboa", value: "PAB" },
  { title: "Barbados Dollar", value: "BBD" },
  { title: "Belarusian Ruble", value: "BYN" },
  { title: "Belize Dollar", value: "BZD" },
  { title: "Bermudian Dollar", value: "BMD" },
  { title: "Bolívar Soberano", value: "VES" },
  { title: "Bolívar Soberano", value: "VED" },
  { title: "Boliviano", value: "BOB" },
  { title: "Brazilian Real", value: "BRL" },
  { title: "Brunei Dollar", value: "BND" },
  { title: "Bulgarian Lev", value: "BGN" },
  { title: "Burundi Franc", value: "BIF" },
  { title: "Cabo Verde Escudo", value: "CVE" },
  { title: "Canadian Dollar", value: "CAD" },
  { title: "Cayman Islands Dollar", value: "KYD" },
  { title: "CFA Franc BCEAO", value: "XOF" },
  { title: "CFA Franc BEAC", value: "XAF" },
  { title: "CFP Franc", value: "XPF" },
  { title: "Chilean Peso", value: "CLP" },
  { title: "Colombian Peso", value: "COP" },
  { title: "Comorian Franc", value: "KMF" },
  { title: "Congolese Franc", value: "CDF" },
  { title: "Convertible Mark", value: "BAM" },
  { title: "Cordoba Oro", value: "NIO" },
  { title: "Costa Rican Colon", value: "CRC" },
  { title: "Cuban Peso", value: "CUP" },
  { title: "Czech Koruna", value: "CZK" },
  { title: "Dalasi", value: "GMD" },
  { title: "Danish Krone", value: "DKK" },
  { title: "Denar", value: "MKD" },
  { title: "Djibouti Franc", value: "DJF" },
  { title: "Dobra", value: "STN" },
  { title: "Dominican Peso", value: "DOP" },
  { title: "Dong", value: "VND" },
  { title: "East Caribbean Dollar", value: "XCD" },
  { title: "Egyptian Pound", value: "EGP" },
  { title: "El Salvador Colon", value: "SVC" },
  { title: "Ethiopian Birr", value: "ETB" },
  { title: "Euro", value: "EUR" },
  { title: "Falkland Islands Pound", value: "FKP" },
  { title: "Fiji Dollar", value: "FJD" },
  { title: "Forint", value: "HUF" },
  { title: "Ghana Cedi", value: "GHS" },
  { title: "Gibraltar Pound", value: "GIP" },
  { title: "Gourde", value: "HTG" },
  { title: "Guarani", value: "PYG" },
  { title: "Guinean Franc", value: "GNF" },
  { title: "Guyana Dollar", value: "GYD" },
  { title: "Hong Kong Dollar", value: "HKD" },
  { title: "Hryvnia", value: "UAH" },
  { title: "Iceland Krona", value: "ISK" },
  { title: "Indian Rupee", value: "INR" },
  { title: "Iranian Rial", value: "IRR" },
  { title: "Iraqi Dinar", value: "IQD" },
  { title: "Jamaican Dollar", value: "JMD" },
  { title: "Jordanian Dinar", value: "JOD" },
  { title: "Kenyan Shilling", value: "KES" },
  { title: "Kina", value: "PGK" },
  { title: "Kuwaiti Dinar", value: "KWD" },
  { title: "Kwanza", value: "AOA" },
  { title: "Kyat", value: "MMK" },
  { title: "Lao Kip", value: "LAK" },
  { title: "Lari", value: "GEL" },
  { title: "Lebanese Pound", value: "LBP" },
  { title: "Lek", value: "ALL" },
  { title: "Lempira", value: "HNL" },
  { title: "Leone", value: "SLE" },
  { title: "Liberian Dollar", value: "LRD" },
  { title: "Libyan Dinar", value: "LYD" },
  { title: "Lilangeni", value: "SZL" },
  { title: "Loti", value: "LSL" },
  { title: "Malagasy Ariary", value: "MGA" },
  { title: "Malawi Kwacha", value: "MWK" },
  { title: "Malaysian Ringgit", value: "MYR" },
  { title: "Mauritius Rupee", value: "MUR" },
  { title: "Mexican Peso", value: "MXN" },
  { title: "Mexican Unidad de Inversion (UDI)", value: "MXV" },
  { title: "Moldovan Leu", value: "MDL" },
  { title: "Moroccan Dirham", value: "MAD" },
  { title: "Mozambique Metical", value: "MZN" },
  { title: "Mvdol", value: "BOV" },
  { title: "Naira", value: "NGN" },
  { title: "Nakfa", value: "ERN" },
  { title: "Namibia Dollar", value: "NAD" },
  { title: "Nepalese Rupee", value: "NPR" },
  { title: "Netherlands Antillean Guilder", value: "ANG" },
  { title: "New Israeli Sheqel", value: "ILS" },
  { title: "New Taiwan Dollar", value: "TWD" },
  { title: "New Zealand Dollar", value: "NZD" },
  { title: "Ngultrum", value: "BTN" },
  { title: "North Korean Won", value: "KPW" },
  { title: "Norwegian Krone", value: "NOK" },
  { title: "Ouguiya", value: "MRU" },
  { title: "Pa’anga", value: "TOP" },
  { title: "Pakistan Rupee", value: "PKR" },
  { title: "Pataca", value: "MOP" },
  { title: "Peso Convertible", value: "CUC" },
  { title: "Peso Uruguayo", value: "UYU" },
  { title: "Philippine Peso", value: "PHP" },
  { title: "Pound Sterling", value: "GBP" },
  { title: "Pula", value: "BWP" },
  { title: "Qatari Rial", value: "QAR" },
  { title: "Quetzal", value: "GTQ" },
  { title: "Rand", value: "ZAR" },
  { title: "Rial Omani", value: "OMR" },
  { title: "Riel", value: "KHR" },
  { title: "Romanian Leu", value: "RON" },
  { title: "Rufiyaa", value: "MVR" },
  { title: "Rupiah", value: "IDR" },
  { title: "Russian Ruble", value: "RUB" },
  { title: "Rwanda Franc", value: "RWF" },
  { title: "Saint Helena Pound", value: "SHP" },
  { title: "Saudi Riyal", value: "SAR" },
  { title: "SDR (Special Drawing Right)", value: "XDR" },
  { title: "Serbian Dinar", value: "RSD" },
  { title: "Seychelles Rupee", value: "SCR" },
  { title: "Singapore Dollar", value: "SGD" },
  { title: "Sol", value: "PEN" },
  { title: "Solomon Islands Dollar", value: "SBD" },
  { title: "Som", value: "KGS" },
  { title: "Somali Shilling", value: "SOS" },
  { title: "Somoni", value: "TJS" },
  { title: "South Sudanese Pound", value: "SSP" },
  { title: "Sri Lanka Rupee", value: "LKR" },
  { title: "Sucre", value: "XSU" },
  { title: "Sudanese Pound", value: "SDG" },
  { title: "Surinam Dollar", value: "SRD" },
  { title: "Swedish Krona", value: "SEK" },
  { title: "Swiss Franc", value: "CHF" },
  { title: "Syrian Pound", value: "SYP" },
  { title: "Taka", value: "BDT" },
  { title: "Tala", value: "WST" },
  { title: "Tanzanian Shilling", value: "TZS" },
  { title: "Tenge", value: "KZT" },
  { title: "Trinidad and Tobago Dollar", value: "TTD" },
  { title: "Tugrik", value: "MNT" },
  { title: "Tunisian Dinar", value: "TND" },
  { title: "Turkish Lira", value: "TRY" },
  { title: "Turkmenistan New Manat", value: "TMT" },
  { title: "UAE Dirham", value: "AED" },
  { title: "Uganda Shilling", value: "UGX" },
  { title: "Unidad de Fomento", value: "CLF" },
  { title: "Unidad de Valor Real", value: "COU" },
  { title: "Unidad Previsional", value: "UYW" },
  { title: "Uruguay Peso en Unidades Indexadas (UI)", value: "UYI" },
  { title: "US Dollar", value: "USD" },
  { title: "Uzbekistan Sum", value: "UZS" },
  { title: "Vatu", value: "VUV" },
  { title: "WIR Euro", value: "CHE" },
  { title: "WIR Franc", value: "CHW" },
  { title: "Won", value: "KRW" },
  { title: "Yemeni Rial", value: "YER" },
  { title: "Yen", value: "JPY" },
  { title: "Yuan Renminbi", value: "CNY" },
  { title: "Zambian Kwacha", value: "ZMW" },
  { title: "Zimbabwe Dollar", value: "ZWL" },
  { title: "Zloty", value: "PLN" },
];
