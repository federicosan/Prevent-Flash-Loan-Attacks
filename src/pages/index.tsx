import styled from 'styled-components'
import React from 'react'

import Container from '../components/Container'
import Aside from '../components/Aside'
import Center from '../layouts/Center'
import SEO from '../components/seo'

import Logo from '../assets/svg/pfla-logo.svg'

// Pages
import Abstract from './abstract.mdx'
import HistoricAttacks from './historic-attacks.mdx'
import ProjectPostMortems from './project-post-mortems.mdx'
import WhatIsFlashLoan from './what-is-flash-loan.mdx'
import TypesOfAttacks from './types-of-attacks.mdx'
import MoreDetails from './more-details.mdx'

interface PageModule {
  title: string
  content: string
}

// Sub pages/sections
const pages: PageModule[] = [
  {
    title: 'Abstract',
    content: './abstract.mdx',
  },
  {
    title: 'Historic Attacks',
    content: './historic-attacks.mdx',
  },
  {
    title: 'Project Post Mortems',
    content: './project-post-mortems.mdx',
  },
  {
    title: 'Project Post Mortems',
    content: './project-post-mortems.mdx',
  },
  {
    title: 'What is Flash Loan?',
    content: './what-is-flash-loan.mdx',
  },
  {
    title: 'Types of Attacks?',
    content: './types-of-attacks.mdx',
  },
  {
    title: 'More Details',
    content: './more-details.mdx',
  },
]

const Section = styled.section`
  margin-bottom: 20px;
`

const TableOfContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TableOfContentNav = styled.nav(
  props => `
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  background-color: #fff;
  display: flex;
  gap: 10px;
  padding: 20px;
  min-height: 70%;
  border-radius: ${props.theme.radii.base};
  width: 90%;
`
)

const IndexPage = () => {
  const scrollTo = (selector: any) => {
    const element = document.querySelector<HTMLElement>(selector)

    if (element == null) return

    element.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <SEO title="Home" />
      <Aside>
        <TableOfContent>
          <TableOfContentNav>
            {pages.map((page, idx) => (
              <h5 role="button" key={page.content} onClick={() => scrollTo(`#s${idx}`)}>
                {page.title}
              </h5>
            ))}
          </TableOfContentNav>
        </TableOfContent>
      </Aside>
      <Center>
        <Logo />
        <h1>Prevent Flash Loan Attacks</h1>
      </Center>
      <Container>
        <Section id="s0">
          <Abstract />
        </Section>
        <Section id="s1">
          <HistoricAttacks />
        </Section>
        <Section id="s2">
          <ProjectPostMortems />
        </Section>
        <Section id="s3">
          <WhatIsFlashLoan />
        </Section>
        <Section id="s4">
          <TypesOfAttacks />
        </Section>
        <Section id="s5">
          <MoreDetails />
        </Section>
      </Container>
    </>
  )
}

export default IndexPage
