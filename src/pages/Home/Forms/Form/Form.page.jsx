import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
} from "../../../../components/Grid/Grid.component";
import { Card, DisplayCard } from "../../../../components/Card/Card.component";
import { useForm, FormProvider } from "react-hook-form";
import FormComponent from "./Form.component";

const Form = () => {
  const [data, setData] = useState({});
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      status: "",
    },
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
            <h2 style={{ marginTop: 0, color: "white" }}>Form</h2>
            <FormProvider {...methods}>
              <FormComponent submit={submit} />
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

export default Form;
