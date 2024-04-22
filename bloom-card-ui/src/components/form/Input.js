import { useField, ErrorMessage } from "formik"


function Input({label, ...props}) {
  const [field, meta, helpers] = useField(props)

  return (
    <div className="sm:col-span-2">
    <label className="block text-sm text-white font-semibold leading-6 text-gray-light">
    <div>{label}</div>
    <div className="mt-2.5">
    <input 
    className= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    {...field} {...props} />
    <ErrorMessage name={field.name} component="small" className="text-xs bloc mt-2 text-red-600" />
    </div>
    </label>
    </div>
  )
}

export default Input;