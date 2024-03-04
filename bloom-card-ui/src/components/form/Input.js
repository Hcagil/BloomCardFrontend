import { useField, ErrorMessage } from "formik"


function Input({label, ...props}) {
  const [field, meta, helpers] = useField(props)

  return (
    <div className="sm:col-span-2">
    <label className="block text-sm font-semibold leading-6 text-gray-900">
    <div>{label}</div>
    <div className="mt-2.5">
    <input 
    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    {...field} {...props} />
    <ErrorMessage name={field.name} component="small" className="text-xs bloc mt-2 text-red-600" />
    </div>
    </label>
    </div>
  )
}

export default Input;