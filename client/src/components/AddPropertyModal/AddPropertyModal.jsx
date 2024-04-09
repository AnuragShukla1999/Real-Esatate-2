import React, { useState } from 'react'
import { Container, Modal, Stepper } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import AddLocation from '../AddLocation/AddLocation';
import UploadImage from '../UploadImage/UploadImage';

const AddPropertyModal = ({ opened, setOpened }) => {

    const [active, setActive] = useState(0);
    const { user } = useAuth0();

    const [propertyDetails, setPropertyDetails] = useState({
        title: "",
        description: "",
        price: 0,
        city: "",
        address: "",
        image: null,
        facilities: {
            bedroom: 0,
            parkings: 0,
            bathrooms: 0,
        },
        userEmail: user?.email,
    });


    const nextStep = () => {
        setActive((current) => (current < 4 ? current + 1 : current));
    };

    const prevStep = () => {
        setActive((current) => (current > 0 ? current - 1 : current));
    };

  return (
     <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnClickOutside
        size={"90rem"}
     >
        <Container h={"40rem"} w={"100%"}>
            <Stepper
                active={active}
                onStepClick={setActive}
                breakpoint="sm"
                allowNextStepsSelect={false}
            >
                <Stepper.Step label="location" description="Address">
                    <AddLocation
                        nextStep={nextStep}
                        propertyDetails={propertyDetails}
                        setPropertyDetails={setPropertyDetails}
                    />
                </Stepper.Step>

                <Stepper.Step>
                    <UploadImage
                        prevStep={prevStep}
                        nextStep={nextStep}
                        propertyDetails={propertyDetails}
                        setPropertyDetails={setPropertyDetails}
                    />
                </Stepper.Step>

                <Stepper.Step>
                    <BasicDetails
                        prevStep={prevStep}
                        nextStep={nextStep}
                        
                    />
                </Stepper.Step>
            </Stepper>
        </Container>
     </Modal>
  )
}

export default AddPropertyModal