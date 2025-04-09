
export default function SimpleInput({ id, simpleInputTitle, name, value, onChange, placeholder }) {

    return(
        <div className="max-w-sm mx-auto">
            <label htmlFor={id} className="block text-black mb-2 text-sm font-medium text-start"> {simpleInputTitle}
            </label>
            <input  aria-describedby="helper-text-explanation"
                    className=" w-[500px] border bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  "
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    />
        </div>

    )
}