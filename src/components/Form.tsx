import { useState } from "react"

const defaultFormData = {
    title: '',
    description:''
}

export const Form = () => {
    const [formData, setFormData] = useState(defaultFormData)
    const {title, description} = formData

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        setFormData(defaultFormData)
    }

  return (
    <>
    <h3>New user form</h3>
    <form onSubmit={handleSubmit}>
        <ul>
            <input onChange={handleChange} type="text" name="title" value={title} placeholder="Title" />
            <br />
            <input onChange={handleChange} type="text" name="description" value={description} placeholder="Description" />
        </ul>
        <button type="submit">
            Upload post
        </button>
    </form>
    </>
  )
}
