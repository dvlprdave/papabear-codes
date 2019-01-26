import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Header, Button } from '../components'

import config from '../../config'
import theme from './../../config/theme';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }

`

const About = () => (
    <Layout>
        <Wrapper>
            <Helmet title={`Contact | ${config.siteTitle}`} />
            <Header>
                <Link to="/">{config.siteTitle}</Link>
            </Header>
            <Content>
                <h1>PapaBearCodes?</h1>
                <p>
                    Hi, I'm David. A self-taught Developer & father of two. This blog is a
                    catalog / notebook of all the things that have either confused me or
                    caught my interest in web development.
                </p>

                <p>
                    My goal is to provide a place where I can share a pieces of what I've learned
                    and spread it to all.
                </p>

                <p>
                    I genuinly hope you enjoy your stay and take a good wealth from it. ✌️
                </p>

                <blockquote>
                    "To make claim of having achieved the best version of anything is to
                    expell any idea and motivation of becoming better tomorrow. You are
                    always a rough draft."
                </blockquote>
            </Content>
        </Wrapper>
    </Layout>
)

export default About
