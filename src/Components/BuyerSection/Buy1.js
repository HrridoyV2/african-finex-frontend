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
        <div>
            <form>
            <ReactCountryFlagsCurrencySelect onSelect={onSelectFlag} /><br />
            <input type='number' id='name' name='name' placeholder='quantity' />
                <p>Total cost @price AOA/TAOA</p>

                <Link to="/page2">
                <button>Next</button>
                </Link>
                </form>
        </div>
    )
}

export default FirstPage;
