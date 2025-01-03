'use client'
import { Button, Card, CardBody } from '@nextui-org/react'
import React, { useState } from 'react'

const Calculator = () => {
  const [output, setOutput] = useState('')
  const buttons = [
    [{ key: 'AC', className: 'bg-gray-300' },
    { key: '+/-', className: 'bg-gray-300' },
    { key: '%', className: 'bg-gray-300' },
    { key: '/', className: 'bg-orange-300' }],
    [{ key: '7', className: 'bg-gray-300' },
    { key: '8', className: 'bg-gray-300' },
    { key: '9', className: 'bg-gray-300' },
    { key: '*', className: 'bg-orange-300' }],
    [{ key: '4', className: 'bg-gray-300' },
    { key: '5', className: 'bg-gray-300' },
    { key: '6', className: 'bg-gray-300' },
    { key: '-', className: 'bg-orange-300' }],
    [{ key: '1', className: 'bg-gray-300' },
    { key: '2', className: 'bg-gray-300' },
    { key: '3', className: 'bg-gray-300' },
    { key: '+', className: 'bg-orange-300' }],
    [{ key: '0', className: 'bg-gray-300' },
    { key: '.', className: 'bg-gray-300' },
    { key: '=', className: 'bg-orange-300' }]
  ]

  const handleChange = (key) => {
    switch (key) {
      case '+', '-', '*', '/':
        setOutput(output + key)
        break;
      case 'AC':
        setOutput('')
        break;
      case '+/-':
        setOutput(eval(output * -1))
        break;
      default:
        setOutput(output + key)
        break;
    }

  }
  return (
    <div className='flex justify-center items-center h-screen'>

      <Card className='flex items-center w-1/3 bg-black'>
        <CardBody>
          <div className='text-white'>{output}</div>
          {buttons.map((item, id) => {
            return <div className='m-4'>
              {item.map((val, idx) => {
                return <Button onClick={() => handleChange(val.key)} className={val.className + ' rounded-full mx-1'}>{val.key}</Button>
              })}
            </div>
          })}
        </CardBody>
      </Card>
    </div>



  )
}

export default Calculator