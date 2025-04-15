// App.jsx
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }
`;

// Theme
const lightTheme = {
  bgColor: "#f8f9fa",
  cardBg: "#ffffff",
  textColor: "#333333",
  primaryColor: "#0070f3",
  secondaryColor: "#6c757d",
  accentColor: "#f8f9fa",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
};

const darkTheme = {
  bgColor: "#121212",
  cardBg: "#1e1e1e",
  textColor: "#f8f9fa",
  primaryColor: "#0070f3",
  secondaryColor: "#a0a0a0",
  accentColor: "#2d2d2d",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
};

// Styled Components
const MainContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PortfolioContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${props => props.theme.cardBg};
  border-radius: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Header = styled.header`
  background: linear-gradient(135deg, ${props => props.theme.primaryColor}, #0056b3);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://www.transparenttextures.com/patterns/cubes.png');
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ThemeToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Content = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.primaryColor};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${props => props.theme.primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.theme.accentColor};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.primaryColor};
  margin-right: 1rem;
`;

const ContactText = styled.div`
  flex: 1;
`;

const ContactLabel = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 0.2rem;
`;

const ContactValue = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const ContactLink = styled.a`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme.textColor};
  margin-bottom: 1rem;
`;

const EducationCard = styled.div`
  background-color: ${props => props.theme.accentColor};
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const EducationTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const EducationSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.primaryColor};
  margin-bottom: 0.5rem;
`;

const EducationDetails = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.secondaryColor};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: ${props => props.theme.accentColor};
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  
  svg {
    margin-left: 0.3rem;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 1rem;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillChip = styled.span`
  background: linear-gradient(135deg, ${props => props.theme.primaryColor}, #0056b3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Portfolio = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Save theme preference to localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <MainContainer>
        <PortfolioContainer>
          <Header>
            <ThemeToggle onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </ThemeToggle>
            <Name>GIRI DHARAN B</Name>
            <Title>Aspiring AI Engineer</Title>
          </Header>

          <Content>
            {/* Contact Information */}
            <Section>
              <SectionTitle>Contact Information</SectionTitle>
              <ContactGrid>
                <ContactCard>
                  <ContactIcon>
                    <FaPhone />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>+91 6383608069</ContactValue>
                  </ContactText>
                </ContactCard>
                
                <ContactCard>
                  <ContactIcon>
                    <FaEnvelope />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>
                      <ContactLink href="mailto:giri.2004k@gmail.com">
                        giri.2004k@gmail.com
                      </ContactLink>
                    </ContactValue>
                  </ContactText>
                </ContactCard>
                
                <ContactCard>
                  <ContactIcon>
                    <FaGithub />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>GitHub</ContactLabel>
                    <ContactValue>
                      <ContactLink href="https://github.com/Giridharan002" target="_blank" rel="noopener noreferrer">
                        Giridharan002 <FaExternalLinkAlt size={12} />
                      </ContactLink>
                    </ContactValue>
                  </ContactText>
                </ContactCard>
                
                <ContactCard>
                  <ContactIcon>
                    <FaLinkedin />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>LinkedIn</ContactLabel>
                    <ContactValue>
                      <ContactLink href="https://www.linkedin.com/in/giri-dharan-667163260" target="_blank" rel="noopener noreferrer">
                        giri-dharan-667163260 <FaExternalLinkAlt size={12} />
                      </ContactLink>
                    </ContactValue>
                  </ContactText>
                </ContactCard>
                
                <ContactCard>
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Address</ContactLabel>
                    <ContactValue>2/124G1 Nadar Street Bharathi Nagar, Tiruchengode, Namakkal, TN</ContactValue>
                  </ContactText>
                </ContactCard>
              </ContactGrid>
            </Section>

            {/* Career Objective */}
            <Section>
              <SectionTitle>Career Objective</SectionTitle>
              <Paragraph>
                I am eager to join a dynamic environment where I can contribute
                innovative ideas, take on challenges, and grow both professionally and
                personally. I seek an opportunity that encourages creativity,
                collaboration, and continuous learning, helping me build a strong
                foundation for a successful career.
              </Paragraph>
            </Section>

            {/* Education */}
            <Section>
              <SectionTitle>Education</SectionTitle>
              <EducationCard>
                <EducationTitle>Bachelor's Degree in Artificial Intelligence and Data Science</EducationTitle>
                <EducationSubtitle>NATIONAL ENGINEERING COLLEGE</EducationSubtitle>
                <EducationDetails>2022 - 2026 | CGPA: 8.5</EducationDetails>
              </EducationCard>
              <EducationCard>
                <EducationTitle>Higher Secondary School Certificate (HSLC)</EducationTitle>
                <EducationDetails>Completed with 83.83%</EducationDetails>
              </EducationCard>
              
              <EducationCard>
                <EducationTitle>Secondary School Leaving Certificate (SSLC)</EducationTitle>
                <EducationDetails>Completed with 99.2%</EducationDetails>
              </EducationCard>
            </Section>

            {/* Projects */}
            <Section>
              <SectionTitle>Projects</SectionTitle>
              <ProjectsGrid>
                <ProjectCard>
                  <ProjectContent>
                    <ProjectTitle>ChatPulseAI - Micro SAAS</ProjectTitle>
                    <ProjectDescription>
                      A micro SaaS platform for AI-powered chat solutions (Under Development)
                    </ProjectDescription>
                    <ProjectLink href="https://chatpulse.dev" target="_blank" rel="noopener noreferrer">
                      View Project <FaExternalLinkAlt size={12} />
                    </ProjectLink>
                  </ProjectContent>
                </ProjectCard>
                
                <ProjectCard>
                  <ProjectContent>
                    <ProjectTitle>RCAI - AI for RocketChat</ProjectTitle>
                    <ProjectDescription>
                      An AI integration solution for the RocketChat platform
                    </ProjectDescription>
                    <ProjectLink 
                      href="https://github.com/Giridharan002/RocketChat-AI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View on GitHub <FaExternalLinkAlt size={12} />
                    </ProjectLink>
                  </ProjectContent>
                </ProjectCard>
                
                <ProjectCard>
                  <ProjectContent>
                    <ProjectTitle>IETE Chennai Website</ProjectTitle>
                    <ProjectDescription>
                      Website for The Institution of Electronics and Telecommunication Engineers, Chennai
                    </ProjectDescription>
                    <ProjectLink 
                      href="https://giridharan002.github.io/IETE_/#home" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit Website <FaExternalLinkAlt size={12} />
                    </ProjectLink>
                  </ProjectContent>
                </ProjectCard>
              </ProjectsGrid>
            </Section>

            {/* Expertise */}
            <Section>
              <SectionTitle>Expertise</SectionTitle>
              <SkillsContainer>
                <SkillsGrid>
                  <SkillChip>Development of Generative AI applications</SkillChip>
                  <SkillChip>Finetuning of open & closed source models</SkillChip>
                  <SkillChip>Workflow Automations using AI</SkillChip>
                  <SkillChip>Development of Custom Chatbots</SkillChip>
                </SkillsGrid>
              </SkillsContainer>
            </Section>

            {/* Tools */}
            <Section>
              <SectionTitle>Tools & Technologies</SectionTitle>
              <SkillsContainer>
                <SkillsGrid>
                  <SkillChip>Python</SkillChip>
                  <SkillChip>Javascript</SkillChip>
                  <SkillChip>React</SkillChip>
                  <SkillChip>Github</SkillChip>
                  <SkillChip>Docker</SkillChip>
                  <SkillChip>LLMs</SkillChip>
                  <SkillChip>GCP</SkillChip>
                  <SkillChip>Pinecone</SkillChip>
                  <SkillChip>Flask</SkillChip>
                  <SkillChip>MongoDB</SkillChip>
                  <SkillChip>Azure AI</SkillChip>
                  <SkillChip>FastAPI</SkillChip>
                  <SkillChip>HuggingFace</SkillChip>
                </SkillsGrid>
              </SkillsContainer>
            </Section>
          </Content>
        </PortfolioContainer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Portfolio;

    
          
