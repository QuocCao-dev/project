import React from "react";
import "./App.css";
import Background from "./images/bes-bg.jpg";
import { Grid, Image, Icon } from "semantic-ui-react";
import data from "./data.js";
//import "./public/images/what-happened-market/";
class App extends React.Component {
  state = { infImages: data };
  render() {
    const { infImages } = this.state;
    console.log({ infImages });
    return (
      <div className="App">
        {/*HEADER NAVBAR*/}
        <div class="box">
          <div>
            <a href="#what-happened" className="logo">
              What happened
            </a>
          </div>
          <div>
            <a href="#introduction" className="header-navbar">
              INTRODUCTION
            </a>
            <a href="#contact" className="header-navbar">
              SOLUTION
            </a>
            <a href="#contact" className="header-navbar">
              RATE PLAN
            </a>
            <a href="#login" className="header-navbar">
              LOGIN
            </a>
            <a href="apply" className="header-navbar">
              APPLY FOR FREE USE
            </a>
          </div>
        </div>
        {/*MAIN-BANNER*/}
        <div className="first-banner">
          <div className="main-banner">
            <img
              src="../public/../images/what-happened-market/main-banner.png"
              alt="main-banner"
            />
          </div>
        </div>
        {/*WHAT HAPPENDED*/}
        <div className="Gradient-Map-577">
          <img
            src="../public/../images/what-happened-market/introduction-bg@2x.png"
            alt="Gradient-Map-577"
          />
          <div className="What-Happened">What Happened!</div>
          <div className="How-to-create-mobile-optimized-videos-in-minutes-Not-a-designe">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand's success. How to create mobile-optimized videos in
            minutes.
          </div>
        </div>
        {/*BEST-PRODUCT*/}
        <div
          className="best-product-list"
          style={{ background: `url(${Background})` }}
        >
          <div className="advertisement-product-text">
            <div>
              <p className="Best-Product">Best Product</p>
            </div>
            <br />

            <div>
              <p className="How-to-create-mobile-optimized-videos-in-minutes-Not-a-design">
                How to create mobile-optimized videos in minutes. Not a
                designer, every team makes a lot of videos Can be trimmed. Take
                the first
              </p>
            </div>
          </div>
          <div className="img-best-products">
            <div>
              <div>
                <div className="img-container ">
                  <Image
                    className="best-img-container "
                    src="../public/../images/Products/best-image-01.png"
                    alt="bes-bg"
                  />
                </div>
                <div className="overlay-img">
                  <Image
                    src="../public/../images/Products/producticon-01@3x.png"
                    alt="bes-bg"
                    className="number-for-img"
                  />
                  <div class="name-box">
                    <div className="best-product-text">
                      <span className="How-to-create-mobile-optimized-Text-Style">
                        How to create
                        <br />
                        mobile-optimized
                      </span>
                    </div>
                    
                      <img
                        className="name-box-img"
                        src="../public/../images/Products/go-icon.png"
                        alt="bes-bg"
                      />
                    
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="img-container-2 ">
                  <Image
                    src="../public/../images/Products/best-image-02.jpg"
                    alt="bes-bg"
                    className="best-img-container"
                  />
                </div>
                <div className="overlay-img-2">
                  <Image
                    src="../public/../images/Products/producticon-02.png"
                    alt="bes-bg"
                    className="number-for-img"
                  />
                  <div class="name-box">
                    <div className="best-product-text">
                      <span class="How-to-create-mobile-optimized-Text-Style">
                        How to create
                        <br />
                        mobile-optimized
                      </span>
                    </div>
                    <div>
                      <img
                        className="name-box-img"
                        src="../public/../images/Products/go-icon.png"
                        alt="bes-bg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="third-img-container ">
                  <Image
                    src="../public/../images/Products/best-image-03.jpg"
                    alt="bes-bg"
                    className="best-img-container"
                  />
                </div>
                <div className="third-overlay-img">
                  <Image
                    src="../public/../images/Products/producticon-03@2x.png"
                    alt="bes-bg"
                    className="number-for-img"
                  />
                  <div class="name-box">
                    <div className="best-product-text">
                      <span class="How-to-create-mobile-optimized-Text-Style">
                        How to create
                        <br />
                        mobile-optimized
                      </span>
                    </div>
                    <div >
                      <img
                        className="name-box-img"
                        src="../public/../images/Products/go-icon.png"
                        alt="bes-bg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*PRODUCTS LIST*/}
        <div class="_Wht30s_main">
          <Grid doubling columns={5} className="list-products">
            {infImages.map((infImage) => (
              <Grid.Column key={infImage.id}>
                <Image src={infImage.img} className="products" />
                <span class="what-happen-How-to-create-copy">
                  [what happen] How to create
                </span>
                <br></br>
                <span class="-won-copy">2,500 won</span>
                <Icon name="heart" className="Heart-icon" />
                <span class="-copy">236</span>
              </Grid.Column>
            ))}
          </Grid>
          <div className="btn-of-products-list">
            <button className="common-btn">SEE MORE</button>
          </div>
        </div>
        {/*BAND STORY*/}
        <div className="brand-story-box">
          <div className="Object_01">
            <img 
              src="../public/../images/band-story/object-01.png"
              alt="band-story"
            />
          </div>
          <div className="text">
            <div className="logo-text">
              <span class="Brand-Story Text-Style-3">Brand Story</span>
            </div>
            <br />
            <br />
            <div className="content-text">
              <span class="\-">
                ???????????? ???????????? ???????????? ??? ??? ??? ?????? ??????????????????.
                ??????????????? ???????????????, ?????? ????????? ????????? ??? ????????????.
                <br /> ???????????? ????????? ?????? ??? ????????? ??????????????????. ???????????? ???
                ??? ??? ?????? ??????????????????.
              </span>
            </div>
          </div>
          <div className="Object_02">
            <img
              src="../public/../images/band-story/object-02.png"
              alt="band-story"
            />
          </div>
          <div className="Object_03">
            <img
              src="../public/../images/band-story/object-03.png"
              alt="band-story"
            />
          </div>
          <div>
            <img
              src="../public/../images/band-story/object-06.png"
              alt="band-story"
              class="Object_06"
            />
          </div>
          <div className="Object_07">
            <img
              src="../public/../images/band-story/object-07.png"
              alt="band-story"
            />
          </div>
          <div >
            <img className="Object_04"
              src="../public/../images/band-story/object-04.png"
              alt="band-story"
            />
          </div>
          <div className="Object_05">
            <img
              src="../public/../images/band-story/object-05.png"
              alt="band-story"
            />
          </div>
          <div className="window">
            <img
              src="../public/../images/band-story/window.jpg"
              alt="band-story"
              className="largest-img-in-brand-story"
            />
            <div className="what-happened-text">
              <span class="What-Happeneds-Brand-story">
                What Happened???s Brand story
              </span>
              <br />
              <div className="content-text-1">
              <span class="\-">
                ????????? ?????? ?????????, ?????????. ?????? ??????????????? ?????? ????????????
                <br /> ????????? ?????? ?????? ???????????????. ??? ????????? ?????? ?????? ??????{" "}
                <br />
                ????????? ???????????? ????????????, ?????????. ??? ?????? ????????? ????????? ?????????
                <br /> ????????? ?????????. ?????? ?????? ???????????? ??????. ????????? ?????? ??????
                <br />
                ????????? ???????????? ????????? ????????? ?????????. ????????? <br />
                ????????? ?????? ?????? ????????? ??? ????????? ???????????? ????????? ?????? <br />
                ???????????? ??????????????? ????????? ??????.
              </span>
              </div>
              <br />
              <br />
              <div className="what-happened-btn">
              <button
                className="common-btn"
                
              >
                SEE MORE
              </button>
              </div>
            </div>
          </div>
        </div>
        {/*HAPPENED-ISSUE    */}
        <div class="happened-issue-box">
          <div className="text-happened-issue-box">
            <div className="two-dice">
              <img className="dice-object-03"

                src="../public/../images/Happened-issue/news-object-03.png"
                alt="happened-pic"
              />
              <br />
              <img className="dice-object-02"
                src="../public/../images/Happened-issue/news-object-02.png"
                alt="happened-pic"
              />
            </div>
            <span class="Happeneds-issue">Happened???s issue</span>
            <br />
            <br />
            <span class="text-of-happened-issue-1">
              ???????????? ???????????? ???????????? ??? ??? ??? ?????? ??????????????????. ???????????????
              ???????????????,{" "}
            </span>
            <br /> <br />
            <span class="text-of-happened-issue-2">
              ?????? ????????? ????????? ??? ????????????. ???????????? ????????? ?????? ??? ?????????
              ??????????????????. ???????????? ??? ??? ??? ?????? ??????????????????.
            </span>
            <br />
            <br />
            <div className="btn-of-brand-story">
              <button
                className="common-btn"
                style={{ backgroundColor: "#fcd32a" }}
              >
                SEE MORE
              </button>
            </div>
          </div>
          <div className="title-pics">
            <div className="title-pic">
              <p className="b-brand">E BRAND</p>
            </div>

            <div className="title-pic">
              <p className="b-brand">E BRAND</p>
            </div>
            <div className="title-pic-special">
              <p className="b-brand">E BRAND</p>
            </div>
            <div className="title-pic">
              <p className="b-brand">E BRAND</p>
            </div>
          </div>
          <div className="line-pics">
            <div className="pic-1">
              <p class="whpn-issue">whpn issue</p>
              <div className="pic-1-image">
                <img
                  src="../public/../images/Happened-issue/news-img-01.png"
                  alt="happened-pic"
                />
              </div>
            </div>
            <div className="pic-2">
              <img
                className="line-pics-image"
                src="../public/../images/Happened-issue/news-img-05.png"
                alt="happened-pic"
              />
              <div className="add-pic-in-pic-2">
                <img
                  src="../public/../images/Happened-issue/news-object-04.png"
                  alt="happened-pic"
                />
              </div>
              <div className="add-pic-in-pic-circle">
                <img
                  src="../public/../images/Happened-issue/news-object-circle-03.png"
                  alt="happened-pic"
                />
              </div>
            </div>
            <div className="pic-3">
              <img
                className="line-pics-image"
                src="../public/../images/Happened-issue/news-img-03.png"
                alt="happened-pic"
              />
            </div>
            <div className="pic-4">
              <img
                className="line-pics-image"
                src="../public/../images/Happened-issue/news-img-04.png"
                alt="happened-pic"
              />
            </div>
            <div className="pic-5">
              <Image
                src="../public/../images/Happened-issue/news-img-05.png"
                alt="happened-pic"
              />
            </div>
          </div>
        </div>
        {/*THE END OF PAGE position: relative;
    top: -562px; */}
        <div className="the-end-of-page">
          <div className="image-part-of-page">
            <div className="image-1">
              <Image
                src="../public/../images/what-happened/video-object-05.png"
                alt="image=of-the-end-page"
              />
            </div>
            <div className="text-of-the-end-page">
              <span class="title-end-page ">what happened </span>

              <span class="text-end-page-1">
                How to create mobile-optimized videos in minutes. Not a
                designer, every team
                <br />
              </span>
              <p className="text-end-page-2">
                makes a lot of videos Can be trimmed. Take the first
              </p>
              <br />
              <div className="button-end-page">
                <button className="common-btn">SEE MORE</button>
              </div>
            </div>
            <div className="image-2"></div>
            <div className="image-3">
              <Image
                src="../public/../images/what-happened/what-happened-3.png"
                alt="image=of-the-end-page"
              />
            </div>
            <div className="image-4">
              <Image
                src="../public/../images/what-happened/what-happened-4.png"
                alt="image=of-the-end-page"
              />
            </div>
            <div className="image-5">
              <Image
                src="../public/../images/what-happened/video-object-04.png"
                alt="image=of-the-end-page"
              />
            </div>
            <div className="image-6">
              <Image
                src="../public/../images/what-happened/video-object-03.png"
                alt="image=of-the-end-page"
              />
            </div>
            <div className="image-7">
              <Image
                src="../public/../images/what-happened/video-object-01.png"
                alt="image=of-the-end-page"
              />
            </div>

            <div className="image-8">
              <Image
                src="../public/../images/what-happened/what-happened-1.png"
                alt="image=of-the-end-page"
              />
            </div>
            <div className="image-9">
              <Image
                src="../public/../images/what-happened/video-object-08.png"
                alt="image=of-the-end-page"
              />
            </div>
            <div className="image-10">
              <Image
                src="../public/../images/what-happened/video.png"
                alt="image=of-the-end-page"
              />
            </div>
          </div>
          <div className="footer">
            <div className="row-1">
              <div className="footer-what-happened">
                
                <p1 >What happened</p1>
                
                <div className="footer-text-what-happened">
                <p >
                  [??????] ?????? ?????? ?????? ?????? ?????? ?????? ??????
                  <br />
                  [??????] 29CM ?????? ????????? ?????? ??????
                  <br />
                  [??????] ?????? ?????? ?????? ?????? ?????? ?????? ??????
                  <br />
                  [??????] iOS 10 ?????? ?????? ?????? ?????? ??????
                  <br />
                  [??????] ?????? ?????? ?????? ?????? ?????? ?????? ??????
                </p>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-items">
                  <p1>about us</p1>
                  <br />
                  <div className="footer-text">
                  <p >
                    ?????? ??????
                    <br />
                    ?????? ??????
                    <br />
                    ?????? ?????? ??????
                  </p >
                  </div>
                </div>
                <div className="footer-items">
                  <p1>my order</p1>
                  <div className="footer-text">
                  <p >
                    {" "}
                    ??? ??????
                    <br />
                    ?????? ??????
                    <br />
                    ?????? / ?????? / ?????? ??????
                    <br />
                    ?????? ?????? ??????
                    <br />
                    ?????? ?????? ??????
                  </p>
                  </div>
                </div>
                <div className="footer-items">
                  <p1>my account</p1>
                  <div className="footer-text">
                  <p >
                    ?????? ?????? ??????
                    <br />
                    ?????? ??????
                    <br />
                    ???????????? ??????
                    <br />
                    ??????
                  </p>
                  </div>
                </div>
                <div className="footer-items">
                  <p1>help</p1>
                  <div className="footer-text">
                  <p >
                    1 : 1 ?????? ??????
                    <br />
                    ?????? Q & A ??????
                    <br />
                    ?????? ??????
                    <br />
                    ???????????? ??????
                    <br />
                    ????????? ??????
                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-2">
              <div className="text-row-2">
                <div className="footer-text-1" >
                <p >
                  ?? 2020-2021 what happened corp l (???) ????????? ??? ????????? :
                  ????????? ??? ????????? ???????????? : 356-00-00000 ??? test0101@what
                  happened.co.kr
                  <br />
                  ??????????????? ????????? ???????????? 8??? 17 ??? FAX : 070-0000-0000 l
                  ????????? ???????????? l ????????????????????????
                </p>
                </div>
              </div>
              <div className="icons-row-2">
                <div className="icon">
                  <Image
                    src="../public/../images/footer/snsicon-01.png"
                    alt="footer-icon"
                  />
                </div>
                <div className="icon">
                  <Image
                    src="../public/../images/footer/snsicon-02.png"
                    alt="footer-icon"
                  />
                </div>
                <div className="icon">
                  <Image
                    src="../public/../images/footer/snsicon-03.png"
                    alt="footer-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
