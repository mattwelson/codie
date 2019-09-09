import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const BoxWrapper = styled.div`
  display: grid;
  justify-content: stretch;
  margin: ${props => (props.sideBySide ? "0 0 80px" : "0 auto 80px")};
  max-width: ${props => props.theme.maxWidth};

  .box {
    border: 1px solid ${props => props.theme.colorGreyLight};
    border-radius: 20px;
    padding: 40px;
    overflow: hidden;
    display: grid;
    justify-items: ${props => (props.centered ? "center" : "start")};
    text-align: ${props => (props.centered ? "center" : "left")};
  }

  img {
    display: block;
    margin: 0;
  }

  // styles for a full width no bleed image
  .full-width {
    margin: 0 -40px -40px;
    max-width: none;
    width: calc(100% + 80px);
  }

  @media screen and (max-width: ${props =>
      props.theme.breakpointMedium}) and (min-width: ${props =>
      props.theme.breakpointSmallMin}) {
    padding-left: ${props => props.theme.padding};
    padding-right: ${props => props.theme.padding};
  }

  @media screen and (max-width: ${props => props.theme.breakpointSmall}) {
    .box {
      border: none;
      border-radius: 0;
    }
  }
`

const variants = {
  offScreen: {
    y: 200,
    transition: 0.5,
  },
  onScreen: {
    y: 0,
    transition: 0.5,
  },
}

const Box = ({ children, ...props }) => {
  const [ref, inView] = useInView({
    fireOnce: true,
    threshold: 0.05,
  })
  return (
    <BoxWrapper {...props} ref={ref}>
      <motion.div
        variants={variants}
        animate={inView ? "onScreen" : "offScreen"}
      >
        <div className="box">{children}</div>
      </motion.div>
    </BoxWrapper>
  )
}

// TODO: stack for single col!
// TODO: figure out how to keep image down the bottom
export const SideBySide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  max-width: 1040px;
  margin: 0 auto;

  @media screen and (max-width: ${props => props.theme.breakpointMedium}) {
    grid-template-columns: 1fr;
    max-width: ${props => props.theme.maxWidth};
  }
`

export default Box
