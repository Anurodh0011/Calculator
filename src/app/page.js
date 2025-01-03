'use client'
import { Button, Card, CardBody } from '@nextui-org/react'
import React, { useState } from 'react'

const Calculator = () => {
  const [output, setOutput] = useState('')
  const buttons = [
    [{ key: 'AC', className: 'bg-gray-300' },
    { key: '+/-', className: 'bg-gray-300' },
    { key: '%', className: 'bg-gray-300' },
    { key: '/', className: 'bg-orange-500 text-white' }],
    [{ key: '7', className: 'bg-gray-300' },
    { key: '8', className: 'bg-gray-300' },
    { key: '9', className: 'bg-gray-300' },
    { key: '*', className: 'bg-orange-500 text-white' }],
    [{ key: '4', className: 'bg-gray-300' },
    { key: '5', className: 'bg-gray-300' },
    { key: '6', className: 'bg-gray-300' },
    { key: '-', className: 'bg-orange-500 text-white' }],
    [{ key: '1', className: 'bg-gray-300' },
    { key: '2', className: 'bg-gray-300' },
    { key: '3', className: 'bg-gray-300' },
    { key: '+', className: 'bg-orange-500 text-white' }],
    [{ key: '0', className: 'bg-gray-300 col-span-2' },
    { key: '.', className: 'bg-gray-300' },
    { key: '=', className: 'bg-orange-500 text-white' }]
  ]

  const handleChange = (key) => {
    switch (key) {
      case '+':
      case '-':
      case '*':
      case '/':
        setOutput(output + key)
        break
      case 'AC':
        setOutput('')
        break
      case '+/-':
        setOutput(eval(output * -1))
        break
      case '=':
        try {
          setOutput(eval(output).toString())
        } catch {
          setOutput('Error')
        }
        break
      default:
        setOutput(output + key)
        break
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <Card className='w-full max-w-md bg-black rounded-lg shadow-lg'>
        <CardBody>
          {/* Output Display */}
          <div className='text-right text-white text-4xl p-4 bg-gray-800 rounded-md mb-4'>
            {output || '0'}
          </div>

          {/* Buttons */}
          <div className='grid grid-cols-4 gap-2'>
            {buttons.flat().map((val, idx) => (
              <Button
                key={idx}
                onClick={() => handleChange(val.key)}
                className={`${val.className} h-16 text-lg font-semibold rounded-lg flex justify-center items-center ${val.key === '0' ? 'col-span-2' : ''}`}
              >
                {val.key}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Calculator
