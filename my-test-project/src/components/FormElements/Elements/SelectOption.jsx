import Select from "react-select";

const SelectOption = ({ id, name, value, onChange, genderTitle, options }) => {
    const handleChange = (selectedOption) => {
        onChange({
            target: {
                name: name,
                value: selectedOption.value
            }
        });
    };

    return (
        <div className="w-32 text-start mr-[256px]">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
                {genderTitle}
            </label>
            <Select
                id={id}
                name={name}
                options={options}
                value={options.find(option => option.value === value)}
                onChange={handleChange}
                className="text-sm"
            />
        </div>
    );
};

export default SelectOption;
