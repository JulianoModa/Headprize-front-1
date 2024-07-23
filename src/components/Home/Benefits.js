import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import TimerIcon from '../../assets/img/timer-icon.svg';
import AviatorIcon from '../../assets/img/aviator-icon.svg';
import CommunityIcon from '../../assets/img/community-icon.svg';
import ConfigIcon from '../../assets/img/config-icon.svg';
import HeartIcon from '../../assets/img/heart-icon.svg';
import NecktieIcon from '../../assets/img/necktie-icon.svg';
import PeopleIcon from '../../assets/img/people-icon.svg';
import ChartIcon from "../../assets/img/chart-icon.svg";

export const Benefits = (props) => {
    const {isMobile}=props;
    const benefits = [
        {
            icon: TimerIcon,
            title: "Acerte no alvo. Sempre!",
            description: "Candidaturas mais precisas e alinhadas com o perfil de sua vaga."
        },
        {
            icon: NecktieIcon,
            title: "O mercado indica antes",
            description: "Tenha acesso aos melhores profissionais que o mercado tem a oferecer antes mesmo que pensem em mudar de emprego."
        },
        {
            icon: ConfigIcon,
            title: "Comece a contratar imediatamente",
            description: "Inicie o processo antes de todo mundo podendo engajar com candidatos assim que uma indicação chegar."
        },
        {
            icon: CommunityIcon,
            title: "Vá direto para a entrevista",
            description: "Esqueça os testes online com perguntas Que não dizem nada. Aproveite a validação do mercado e pule direto para as etapas decisivas."
        },
        {
            icon: HeartIcon,
            title: "Pessoas em primeiro lugar",
            description: "Uma seleção mais humanizada, feita para não descartar profissionais diferenciados e colocar o ser humano no centro do processo"
        },
        {
            icon: ChartIcon,
            title: "Maior taxa de conversão de inscrições para contratações",
            description: "Melhore o indicador de RH mais valorizado do mercado, ao se focar na atração dos melhores talentos para a sua vaga."
        },
        {
            icon: PeopleIcon,
            title: "Employer branding forte",
            description: "Melhore ainda mais sua marca empregadora e se consolide como uma empresa que contrata e mantém os melhores profissionais do mercado."
        },
        {
            icon: AviatorIcon,
            title: "Contrate mais rápido e tenha tempo para feedbacks",
            description: "Um processo mais efetivo para você ter tempo para o que realmente importa: desenvolver gente e dar melhores feedbacks"
        }
]

  return (
    <section className="benefits" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div key={1869489} className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className={isMobile?"mobile-benefits-title":""}>
                    Conheça nossos benefícios e veja como é fácil ganhar por indicação:
                    </h2>
                    <div className={isMobile?"mobile-all-benefits":"all-benefits"}>
                        {
                        benefits.map((benefit, key) => 
                            <div key={key} className={isMobile ? "mobile-benefit" : "benefit"}>
                                <div className="benefit-img">
                                    <img src={benefit.icon}/>
                                </div>
                                <span>{benefit.title}</span>
                                <p>{benefit.description}</p>
                            </div>
                        )}
                    </div>  
                      
                </div>
                }
                </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
