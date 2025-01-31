import React from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import Animated from "../common/Animated";

const HeroContainer = styled.section`
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  padding: var(--spacing-3xl);
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 100%
  );

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: 60vh;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-xl);
  max-width: 600px;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-full);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all var(--transition-medium);
  align-self: flex-start;

  @media (max-width: 1024px) {
    align-self: center;
  }

  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateX(4px);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TenantHero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <Animated animation="slideUp">
          <Title>Find Your Perfect Home with EstateMentor</Title>
        </Animated>

        <Animated animation="fadeIn" delay={0.2}>
          <Subtitle>
            Discover premium properties with professional management,
            transparent processes, and 24/7 maintenance support. Your dream
            rental is just a few clicks away.
          </Subtitle>
        </Animated>

        <Animated animation="slideRight" delay={0.4}>
          <CTAButton>
            View Available Properties
            <ArrowRight size={20} />
          </CTAButton>
        </Animated>
      </ContentWrapper>

      <Animated animation="fadeInScale" delay={0.3}>
        <ImageWrapper>
          <img
            src="/api/placeholder/tenant.svg"
            alt="Modern Living Space"
            style={{
              maxWidth: "80%",
              borderRadius: "var(--radius-xl)",
              //   boxShadow: "var(--shadow-lg)",
            }}
          />
        </ImageWrapper>
      </Animated>
    </HeroContainer>
  );
};

export default TenantHero;
