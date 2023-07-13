import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
} from "../../../../components/Grid/Grid.component";
import { Card, DisplayCard } from "../../../../components/Card/Card.component";
import { useForm, FormProvider } from "react-hook-form";
import EditFormComponent from "./EditForm.component";

const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: "Nicholas",
        lastName: "Shamrock",
        email: "nicholas.shamrock@openvantage.co.za",
        phone: "001122334455",
        status: "option2",
      });
    }, 2000);
  });

const EditForm = () => {
  const [data, setData] = useState({});
  const methods = useForm({
    defaultValues: async () => await getUser(),
  });

  const submit = (values) => {
    setData(values);
    // alert(JSON.stringify(values, undefined, 2));
  };

  return (
    <Container>
      <Col>
        <Row>
          <Card>
            <h2 style={{ marginTop: 0, color: "white" }}>Edit Form</h2>
            <FormProvider {...methods}>
              <EditFormComponent submit={submit} />
            </FormProvider>
          </Card>
        </Row>
        <Row>
          <DisplayCard>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
          </DisplayCard>
        </Row>
      </Col>
    </Container>
  );
};

export default EditForm;
