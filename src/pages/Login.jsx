import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      alert("خوش آمدید!")
    },
    validationSchema: yup.object({
      email: yup.string().email().required("فیلد ایمیل الزامی است"),
      password: yup.string().max(12, "رمز حداکثر باید 15 کاراکتر باشد").min(7, "رمز حداقل باید 7 کاراکتر باشد").required("فیلد رمز الزامی است")
    })
  })
  return (
    <div className='w-full py-16'>
      <div className="container">
        <h3 className=''>ورود</h3>
        <form onSubmit={formik.handleSubmit} className="w-full md:w-[70%] lg:w-[50%] py-10">
          {/* Email    */}
          <div className='w-full'>
            <label htmlFor='email' className="w-full my-2">ایمیل</label>
            <input type='emai'
              id='email'
              placeholder='sahar@gmail.com'
              className="w-full outline-none border rounded-lg py-2 px-3"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (<div className="text-red-500 my-1">{formik.errors.email} </div>) : (null)}
          </div>
          {/* Password  */}
          <div className='w-full'>
            <label htmlFor='password' className="w-full my-2">رمز</label>
            <input type='password'
              id='password'
              className="w-full outline-none border rounded-lg py-2 px-3"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (<div className="text-red-500 my-1">{formik.errors.password} </div>) : (null)}
          </div>
          <button type="submit" className="text-secondary bg-white text-2xl border-2 border-secondary mt-10 py-1 px-6 rounded-lg duration-700 hover:bg-secondary hover:text-white">ورود</button>
        </form>
        <p className="text-slate-400 my-10">
          اگر ثبت نام نکرده اید
          <Link to='/register' className='text-primary px-1'>اینجا</Link>
          کلیک کنید
        </p>
      </div>
    </div>
  )
}

export default Login