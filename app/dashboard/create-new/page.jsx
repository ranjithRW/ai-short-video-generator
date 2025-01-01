"use client"
import React from 'react'
import { useState } from 'react'
import SelectTopics from './_components/selectTopics'
import SelectStyle from './_components/selectStyle'
import Duration from './_components/duration'
import CreateButton from './_components/createButton'

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldname,fieldvalue) => {
    console.log(fieldname,fieldvalue);
  }
  return (
    <div className='md:px-20'>
      <h1 className='font-bold text-2xl text-primary text-center'>Create New</h1>
      <div className='mt-10 p-10 shadow-md'>
        {/* {select topic} */}
        <SelectTopics onUserSelect={onHandleInputChange}/>

        {/* {select style} */}
        <SelectStyle />

        {/*Duration*/}
        {/* <Duration /> */}

        {/* {create Button} */}
        {/* <CreateButton /> */}

      </div>
    </div>
  )
}

export default CreateNew