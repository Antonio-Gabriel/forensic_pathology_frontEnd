import { Input, Button } from "antd";
import { Row, Col } from "antd";

import {
  AuthCard,
  Container,
  Form,
  FormBottomContainer,
  PassContainer,
  TextContent,
} from "./styles";

export function Login() {
  return (
    <>
      <Container>
        <Row className="row">
          <Col lg={{ span: 12 }} md={{ span: 12 }} className="text">
            <TextContent>
              <img
                src="/images/logo.svg"
                alt="forensic phatology"
                className="logo"
              />
              <h1>Faça seu login na plataforma</h1>
              <p>
                Entre para poder navegar na plataforma e realizar actividades
              </p>
            </TextContent>
          </Col>
          <Col lg={{ span: 12 }} md={{ span: 12 }} className="card">
            <AuthCard>
              <Form>
                <Input
                  placeholder="Your email"
                  prefix={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C13.466 22 14.961 21.629 16.442 20.896L15.557 19.103C14.353 19.698 13.156 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V13C20 13.692 19.687 15 18.5 15C17.104 15 17.006 13.181 17 13V8H15V8.025C14.1393 7.36395 13.0853 7.00383 12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C13.45 17 14.748 16.369 15.662 15.379C16.186 16.269 17.07 17 18.5 17C20.773 17 22 14.939 22 13V12C22 6.486 17.514 2 12 2ZM12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15Z" />
                    </svg>
                  }
                />

                <PassContainer>
                  <Input.Password
                    placeholder="Password"
                    iconRender={(visible) =>
                      visible ? (
                        <img src="/images/show.svg" alt="show password" />
                      ) : (
                        <img src="/images/hide.svg" alt="hide password" />
                      )
                    }
                    prefix={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" />
                      </svg>
                    }
                  />
                  <a>Esqueci minha senha</a>
                </PassContainer>

                <FormBottomContainer>
                  <Button>ENTRAR</Button>

                  <span className="register">
                    Não tem uma conta?
                    <a>Registar-se</a>
                  </span>
                </FormBottomContainer>
              </Form>
            </AuthCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}
