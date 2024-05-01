import { useField, ErrorMessage } from "formik"


function Input({label, ...props}) {
  const [field, meta, helpers] = useField(props)

  return (
    <div className="sm:col-span-2">
    <label className="block text-sm text-white font-semibold leading-6 text-gray-light">
    <div>{label}</div>
    <div className="mt-2.5">
    <input 
    className= "bg-grey border border-gray text-white text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5  "
    {...field} {...props} />
    <ErrorMessage name={field.name} component="small" className="text-xs bloc mt-2 text-red-600" />
    </div>
    </label>
    </div>
  )
}

export default Input;