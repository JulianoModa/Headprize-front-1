import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Steps = (props) => {
  const { isMobile } = props;
  const steps = [
    {
      number: 1,
      description: "É só publicar sua vaga com todos os detalhes que ela merece."
    },
    {
      number: 2,
      description: "E definir um prêmio em dinheiro para a melhor indicação."
    },
    {
      number: 3,
      description: "Você começa a receber indicações de quem mais entende de bons profissionais: as pessoas que os conhecem!"
    },
    {
      number: 4,
      description: "Gerencie em um clique quem mais te interessa para as próximas fases, e aprove a melhor escolha!."
    }
  ];
 
  return (
    <section className={isMobile ? "mobile-steps" : "steps"} id="steps">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility key={15488}>
              {({ isVisible }) =>
              <div key={1548} className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>
                    Os melhores profissionais do mercado para sua vaga a uma Indicação de distância
                </h2>

                  {
                      isMobile ? (
                        <div className={isMobile ? "inline-div mobile-div-steps" :"inline-div div-steps"}>
                          {steps.map((step, i) =>
                            <div key={i} className={(i == (steps.length - 1) ? "mobile-step-last" : "mobile-step") + " inline-div"}>
                              <span>{step.number}</span>
                              <p>{step.description}</p>
                          </div>
                          )}
                          
                        </div>) : (
                        <div className="inline-div div-steps">
                          {steps.map((step, i) =>
                            <div key={i} className={(i == (steps.length - 1) ? "step-last" : "step") + " inline-div"}>
                              <span>{step.number}</span>
                              <p>{step.description}</p>
                          </div>
                          )}
                          
                        </div> 
                      )
                  }

                                   
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}
