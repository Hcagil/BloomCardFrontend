import { useField } from "formik"
import { UserCircleIcon } from "@heroicons/react/24/outline"

export default function File({label, ...props}) {
  const [field, meta, helpers] = useField(props.name)

  const changeHandle = e => {
    helpers.setValue(e.target.files[0])
  }

  return (
    <div className="pb-10 sm:col-span-2">
      
    <label className="flex place-content-center text-sm font-semibold leading-6 text-gray-900">
    <div>{label}</div>
    <div className="mt-2.5">
    <UserCircleIcon className="flex h-10 w-10 mx-5 stroke-violet-400" />
    <input type="file" onChange={changeHandle} {...props} />
    </div>
    </label>
    </div>
   
   
  ) 
}

