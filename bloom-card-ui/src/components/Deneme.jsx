import { useFormik } from "formik";
import React from 'react'

function Deneme() {
  return (
    <div>
        <form>
            <label>
                Başlık
            </label>
            <input
                id="namesurname"
                type="text"
                placeholder="Adınızı ve soyadınızı giriniz"
            />
        </form>
    </div>
  )
}

export default Deneme