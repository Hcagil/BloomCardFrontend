import { useField } from "formik"
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Switch } from "@headlessui/react";


function Checkbox({label, ...props}) {

  const [field, meta, helpers] = useField(props.name);

  return (
    <div className="mb-5 mt-5">
      <Switch 
      checked={field.value}
      onChange={() => {
        helpers.setValue(!field.value)
      }}
      className={`${
        field.value ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          !field.value ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>

        <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer"
        htmlFor="flexSwitchCheckDefault"
        >Kişisel verilerimin saklanmasını ve işlenmesini kabul ediyorum.
        </label>
    
    </div>
  )
}

export default Checkbox;



