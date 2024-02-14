import { Container, Step, StepButton, Stepper } from '@mui/material'
import React, { useState } from 'react'

const AddReservations = () => {

    const [activeStep, setActiveStep] = useState(0)
    const [steps, setSteps] = useState([
        {label:'Date Range', completed:false},
        {label:'Payment', completed:false},
    ])

  return (
    // container centeralises compnments within the page 
    <Container sx={{my:4}}>
        <Stepper
            alternativeLabel // labels under the stepper
            nonLinear // flexiable stepper
            activeStep={activeStep}
            sx={{mb:3}}
        >
            {steps.map((step, index)=>(
                <Step
                    key={step.label} 
                    completed={step.completed}
                >
                    <StepButton onClick={()=>setActiveStep(index)}>
                        {step.label}
                    </StepButton>
                </Step>
            ))}
        </Stepper>
    </Container>
  )
}

export default AddReservations;