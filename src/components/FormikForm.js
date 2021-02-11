import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid email format').required('Required'),
    channel:Yup.string().required('Required')
})

export default function FormikForm() {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        },
        onSubmit:values=>{
            console.log(values)
        },
        validationSchema


        //     let errors={}
        //     if(!values.name){
        //         errors.name='Required'
        //     }
        //     if(!values.email){
        //         errors.email='Required'
        //     }
        //     if(!values.channel){
        //         errors.channel='Required'
        //     }

        //     return errors
        // }

    })
    console.log(formik.touched)
    return (
         <form>
             <div>

                <label>Name</label>
                <input type="text" id="name" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
                {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
             </div>
             <div>

                <label>Email</label>
                <input type='email' id="email" name="email" onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email}  />
                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
             </div>
             <div>

                <label>Channel</label>
                <input type="text" id="channel" name="channel" onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.channel}/>
                {formik.touched.channel && formik.errors.channel && <div>{formik.errors.channel}</div>}
             </div>
            </form>
    )
}
