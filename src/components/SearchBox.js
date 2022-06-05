import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')
    
    let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const userInfo = localStorage.getItem('userInfo')
        if (keyword) {
            if(userInfo !== null){
                if(JSON.parse(userInfo).isAdmin === true){
                    navigate(`/admin/productlist/?keyword=${keyword}&page=1`)
                }else{
                    navigate(`/products/?keyword=${keyword}&page=1`)
                }
            }
        }else{
            navigate('/')
        }
    }
    return (
        <Form onSubmit={submitHandler}>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >
                Submit
            </Button>
        </Form>
    )
}

export default SearchBox