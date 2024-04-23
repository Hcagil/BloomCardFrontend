import { useField } from "formik"
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
        field.value ? 'bg-green' : 'bg-gray-700'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          !field.value ? 'translate-x-1' : 'translate-x-6'
        } inline-block h-4 w-4 transform rounded-full bg-darkgrey transition`}
      />
    </Switch>

        <label
        className=" pl-1 hover:cursor-pointer text-white "
       
        > Kişisel verilerimin saklanmasını ve işlenmesini kabul ediyorum.
        </label>
    
    </div>
  )
}

export default Checkbox;



