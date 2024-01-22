import { countries } from "@/helpers/constants";
import { useEffect, useState } from "react";
import Select from "react-select";

interface Country {
  ccode: string;
  value: string;
  name: string;
  mcode: string;
}

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function PhoneNumberWithDropDown(props: any) {

  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    if (props.SelectedCountryValue) {
      setSelectedCountry(props.SelectedCountryValue);
    }
  }, [props.SelectedCountryValue]);


  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="flex items-center relative">
      <Select
        placeholder="Select Country"
        options={countries}
        value={selectedCountry}
        isClearable={false}
        getOptionLabel={(option) =>
          `${getFlagEmoji(option.ccode)} ${option.mcode}`
        }
        onChange={(value:any) => setSelectedCountry(value)}
        className="text-sm border-solid border-[#00395026] p-0 w-2/4"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "#00395026",
            padding: "6px",
            borderRadius: "8px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          }),
        }}
      />
      <input
        type="text"
        className="text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766] rounded-r-lg rounded-l-none"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
        Phone Number
      </label>
    </div>
  );
}
