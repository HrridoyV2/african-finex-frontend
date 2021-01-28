import React, { useContext, useState } from 'react'
import ReactCountryFlagsCurrencySelect from 'react-country-flag-currency-picker'
import 'react-country-flag-currency-picker/css/react-flags-select.css'

import { useFormik } from 'formik';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

function FirstPage() {
    const { country, setCountry } = useContext(UserContext);
    const initialValues = {
        quantity: '',
        country: country
    }
    const onSelectFlag = (country) => {
        setCountry(country.name)
    }
    const onSubmit = (values) => {
        console.log("form data", values)
    }
    
    return (
        <div className="container container_border my-5 px-5 pt-5">
            <form>
            <ReactCountryFlagsCurrencySelect onSelect={onSelectFlag} className="mb-5" />
            <br/>
            <input type='number' id='name' name='name' placeholder='quantity' className="form-control mt-5" /><br/>
                <p>Total cost @price AOA/TAOA</p>

                <Link to="/buy2">
                <button className="mb-4 btn_next btn-block">Next</button>
                </Link>
                </form>
        </div>
    )
}

export default FirstPage;
