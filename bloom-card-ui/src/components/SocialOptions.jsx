import React from 'react'
import { useField } from 'formik'

export default function SocialOptions({label, options, ...props}) {

    const [filed, meta, helpers] = useField(props)
  return (
    <div>SocialOptions</div>
  )
}

