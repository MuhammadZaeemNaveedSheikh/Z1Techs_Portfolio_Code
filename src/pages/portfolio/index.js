import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,FaBehance
  
} from "react-icons/fa";
export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <h2>Please check my projects here</h2>
        <div className="mb-5 po_items_ho">
          <a href="github.com/muhammadzaeemnaveedsheikh" style={{textDecoration:'none'}}>Github <FaGithub /></a><br></br>
          <a href="https://www.youtube.com/channel/UCX-aNWwF69IlvJfANjEXgBw" style={{textDecoration:'none'}}>Youtube <FaYoutube /></a><br></br>
          <a href="https://www.instagram.com/z1techs/" style={{textDecoration:'none'}}>Instagram <FaInstagram /></a><br></br>
          <a href="https://www.behance.net/zaeemn" style={{textDecoration:'none'}}>Behance <FaBehance /></a><br></br>
          {/* {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })} */}
        </div>
      </Container>
    </HelmetProvider>
  );
};
