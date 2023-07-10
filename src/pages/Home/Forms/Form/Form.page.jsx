import React, { useContext, useEffect, useState } from "react";
// import { APP_CONTEXT } from "../../../../utils/context";
import {
  Row,
  Col,
  Container,
} from "../../../../components/Grid/Grid.component";
import { Card } from "../../../../components/Card/Card.component";
// import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import FormComponent from "./Form.component";

const Form1 = () => {
  // const { setActiveSideNav, setPageTitle } = useContext(APP_CONTEXT);
  const [data, setData] = useState({});
  const methods = useForm();
  // useEffect(() => {
  //   setActiveSideNav("form1");
  //   setPageTitle("Form 1");
  // });

  const submit = (values) => {
    setData(values);
    alert(JSON.stringify(values, undefined, 2));
  };

  return (
    <Container>
      <Col>
        <Row style={{ textAlign: "center" }}>
          <Card>
            <h2 style={{ marginTop: 0, color: "white" }}>Form</h2>
            <FormProvider {...methods}>
              <FormComponent submit={submit} />
            </FormProvider>
          </Card>
        </Row>
      </Col>
    </Container>
  );
};

export default Form1;
