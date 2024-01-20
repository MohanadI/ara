import React, { useState, ChangeEvent, useRef, useEffect } from "react";

interface SelectWithSearchProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const SelectWithSearch: React.FC<SelectWithSearchProps> = ({
  options,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);
  const selectRef = useRef<HTMLSelectElement>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  const handleInputClick = () => {
    setIsDropdownOpen(true);
    selectRef.current?.focus();
  };

  const handleSelectBlur = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      selectRef.current?.focus();
    }
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-300 bg-white rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 w-full"
        placeholder="Search options..."
        value={searchTerm}
        onChange={handleInputChange}
        onClick={handleInputClick}
      />
      <select
        ref={selectRef}
        className={`absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none appearance-none border-none bg-transparent ${
          isDropdownOpen ? "block" : "block"
        }`}
        onBlur={handleSelectBlur}
        onChange={handleSelectChange}
      >
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectWithSearch;
