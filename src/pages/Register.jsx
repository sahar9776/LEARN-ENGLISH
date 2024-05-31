import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

function Register() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        onSubmit: values => {
            alert("ثبت نام با موفقیت انجام شد!")
        },
        validationSchema: yup.object({
            firstName: yup.string().max(15, "نام باید حداکثر 15 کاراکتر باشد").min(3, "نام باید حداقل 3 کاراکتر باشد").required("فیلد نام الزامی است"),
            lastName: yup.string().max(15, "نام خانوادگی باید حداکثر 15 کاراکتر باشد").min(3, "نام خانوادگی باید حداقل 3 کاراکتر باشد").required("فیلد نام خانوادگی الزامی است"),
            email: yup.string().email().required("فیلد ایمیل الزامی است"),
            password: yup.string().max(12).min(7).required("فیلد رمز الزامی است")
        })
    })
    return (
        <div className='w-full py-16'>
            <div className="container">
                <h3 className=''>ثبت نام</h3>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[70%] lg:w-[50%] py-10">
                    {/* FirstName */}
                    <div className='w-full'>
                        <label htmlFor='firstName' className="w-full my-2">نام</label>
                        <input type='text'
                            id='firstName'
                            placeholder='سحر'
                            className="w-full outline-none border rounded-lg py-2 px-3"
                            {...formik.getFieldProps("firstName")}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (<div className="text-red-500 my-1">{formik.errors.firstName} </div>) : (null)}
                    </div>
                    {/* LastName */}
                    <div className='w-full'>
                        <label htmlFor='lastName' className="w-full my-2">نام خانوادگی</label>
                        <input type='text'
                            id='lastName'
                            placeholder='صمدی'
                            className="w-full outline-none border rounded-lg py-2 px-3"
                            {...formik.getFieldProps("lastName")}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (<div className="text-red-500 my-1">{formik.errors.lastName} </div>) : (null)}
                    </div>
                    {/* Email */}
                    <div className='w-full'>
                        <label htmlFor='email' className="w-full my-2">ایمیل</label>
                        <input type='email'
                            id='email'
                            placeholder='sahar@gmail.com'
                            className="w-full outline-none border rounded-lg py-2 px-3"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (<div className="text-red-500 my-1">{formik.errors.email} </div>) : (null)}
                    </div>
                    {/* password */}
                    <div className='w-full'>
                        <label htmlFor='password' className="w-full my-2">رمز</label>
                        <input type='password'
                            id='password'
                            className="w-full outline-none border rounded-lg py-2 px-3"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ? (<div className="text-red-500 my-1">{formik.errors.password} </div>) : (null)}
                    </div>
                    <button type="submit" className="text-secondary bg-white text-2xl border-2 border-secondary mt-10 py-1 px-6 rounded-lg duration-700 hover:bg-secondary hover:text-white">ثبت نام</button>
                </form >
            </div>
        </div>
    )
}
export default Register