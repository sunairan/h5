import React, { Component } from 'react';
import AxiosUtil from './util/axios'
import './App.css';
import Carousel from './components/carousel'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 0,
      courseInfo: {
        completeLesson: 10,
        totalShare: 20,
        readKnowledge: 30
      }
    }
    this.maxIndex = 7
    this.changePage = this.changePage.bind(this)
  }
  componentWillMount () {
    this.loadUserData()
  }

  loadUserData = async () => {
    try {
      const stageId = 1
      let courseInfo = await AxiosUtil.get(`/api/business-english/finish/${stageId}`)
      this.setState({
        courseInfo: courseInfo
      })
    } catch (e) {
      this.setState({
        error: e.message,
      })
    }
  }

  renderFunc (index) {
    let content = this.renderContent(index)
    let bg = this.renderBg(content, index)
    let container = this.renderContainer(bg, index)
    return container
  }

  renderContainer (component, index) {
    let dom
    let topStyle
    let bottom
    switch (index) {
      case this.maxIndex:
        topStyle = 'white'
        bottom = <div className='bottomRefresh2'>
          <img className='visible' src='./static/h5/img/item/img_1.png'/>
          <span>长按二维码图片识别</span>
          <style jsx>{`
           .visible {
          animation: visible 2000ms infinite linear;
          }
          @keyframes visible {
            0%   { opacity: 1; }
            50%   { opacity: 0; }
            100% { opacity: 1; }
          }
          `}</style>
        </div>
        break;
      default:
        topStyle = 'light-blue'
        bottom = <div className='bottomRefresh1'>
          <span>上拉继续查看</span>
          <div class="slider">
            <img src='./static/h5/img/item/arrow_1.png' class="sprite_global" />
          </div>
        </div>
    }
    return <div className='container'>
      <div className='topFixed'>
        <div className={`small ${topStyle}`}>小灶能力派</div>
      </div>
      {component}
      {bottom}
      <style global jsx>{`
        .container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .topFixed {
          position: absolute;
          top: 10px;
          left: 0px;
          width: 100%;
          text-align: center;
        }
        .bottomRefresh1 {
          position: absolute;
          bottom: 50px;
          left: 0px;
          width: 100%;
          text-align: center;

          color: rgba(6,150,189, 0.3);
        }

        .bottomRefresh2 {
          position: absolute;
          bottom: 30px;
          left: 0px;
          width: 100%;
          text-align: center;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .bottomRefresh2 img {
          width: 40px;
          height: 40px;
          margin-bottom: 20px;
        }
        .bottomRefresh2 span {
          color: rgba(5, 119, 149, 0.6);
        }

        .slider {position: absolute;width: 36px;height: 36px;margin-left: -18px;left: 50%;bottom: -40px;z-index: 9999;}
        .slider img {position: absolute;width: 20px;height: 15px;left: 50%;top: 50%;margin: -17px 0 0 -12px;background-position: -158px -46px;-webkit-animation: slide_up 2s infinite ease-out;}
        @-webkit-keyframes slide_up {
            0%,30%{opacity: 0;-webkit-transform: translate3d(0,10px,0);}
            60% {opacity: 1;-webkit-transform: translate3d(0,0,0);}
            100% {opacity: 0;-webkit-transform: translate3d(0,-8px,0);}
        }
      `}</style>
      <style jsx global>{`
        .small {
          font-size: 14px;
        }
        .light-blue {
          color: #18BCE8
        }
        .blue {
          color: #1EAEE2;
        }
        .red {
          color: #DD233B;
        }
        .white {
          color: #FFFFFF;
        }
      `}</style>
    </div>
  }

  renderBg (component, index) {
    let dom  = <div className='other'>
      <div className='container1'>
        <div className={`circle1`} >
          <img src='./static/h5/img/item/rocket_1.png'/>
        </div>
      </div>
      <div className='container2'>
        <div className={`circle2`} >
          <img src='./static/h5/img/item/rocket_2.png'/>
        </div>
      </div>
      <img className={`m1`} src='./static/h5/img/item/ball_1.png'/>
      <img className={`m2`} src='./static/h5/img/item/ball_1.png'/>
      <style jsx>{`
            .other >img {
              position: absolute;
            }
           .container1 {
              left: 9vw;
              top: 0;
              width: 140vw;
              height: 140vw;
              // border: 1px dotted red;
              border-radius: 50%;
              position: absolute;
              box-sizing: border-box;
            }
            .circle1 {
              position: absolute;
              z-index: 10;
              left: 50%;
              top: 0;
              width: 70px;
              height: 70px;
              transform-origin: 0 70vw;
              animation: spin1 6s infinite linear;
            }
            .circle1 img {
              width: 100%;
              height: 100%;
              transform: rotate(60deg);
            }
            .container2 {
              left: -28vw;
              bottom: 0vh;
              width: 80vw;
              height: 80vw;
              // border: 1px dotted red;
              border-radius: 50%;
              position: absolute;
              box-sizing: border-box;
            }
            .circle2 {
              z-index: 10;
              position: absolute;
              left: 50%;
              top: 0;
              width: 30px;
              height: 40px;
              transform-origin: 0 40vw;
              animation: spin2 4s infinite linear;
            }
            .circle2 img {
              width: 100%;
              height: 100%;
              transform: rotate(320deg)
            }

             @keyframes spin1 {
              0%   { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
             @keyframes spin2 {
              0%   { transform: rotate(360deg); }
              100% { transform: rotate(0deg); }
            }
            .m1 {
              width: 20vw;
              height: 20vw;
              left: 3vw;
              bottom: 12vh;
              animation: move 3.5s infinite ease-in-out;
            }
            .m2 {
              width: 40vw;
              height: 40vw;
              right: 10vw;
              bottom: 20px;
              animation: move 5s infinite ease-in-out;
              animation-delay: 1s;

            }
           @keyframes move {
              0%   { transform: translateY(15px); }
              50%   { transform: translateY(-15px); }
              100% { transform: translateY(15px); }
            }
          `}</style>
    </div>
    let bgImg
    let title
    const a1 = ``
    switch (index) {
      case 0:
        bgImg = './static/h5/img/bg/bg_1.png'
        dom = <div className='other'>
          <img className={`m1 ${a1}`} src='./static/h5/img/item/clock_1.png'/>
          <img className={`m2 ${a1}`} src='./static/h5/img/item/clock_2.png'/>
          <img className={`m3 ${a1}`} src='./static/h5/img/item/clock_3.png'/>
          <style jsx>{`
            .other >img {
              position: absolute;
              animation: spin 3800ms infinite linear;
            }
            @keyframes spin {
              0%   { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .m1 {
              width: 30vw;
              height: 30vw;
              left: 5vw;
              top: 5vw;
            }
            .m2 {
              width: 300px;
              height: 300px;
              right: -20vw;
              bottom: 30vh;

            }
            .m3 {
              width: 80px;
              height: 80px;
              left: 0px;
              bottom: 25vh;
            }
          `}</style>
        </div>
        break;
      case this.maxIndex - 1:
        bgImg = './static/h5/img/bg/bg_2.png'
        title = '现在'

        break;
      case this.maxIndex:
        bgImg = './static/h5/img/bg/bg_3.png'
        title = '读别人的故事，给自己一个答案'
        dom = <div></div>
        break;
      default:
        bgImg = './static/h5/img/bg/bg_2.png'
        title = '在这90天中'
    }

    return <div className='bg' style={{backgroundImage: `url(${bgImg})`}}>
      {title && <span className={'title'}>{title}</span>}
      {dom}
      {component}
      <style jsx>{`
      .bg {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-size: 100% 100%;

        }
        .title {
          font-size: 18px;
          font-weight: bold;
          width: 100%;
          position: absolute;
          top: 25vh;
          left: 0px;
          text-align: center;
          color: #215D71;
        }

      `}</style>
      <style jsx global>{`
        .other {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height:100%;
        }
      `}</style>
    </div>
  }

  renderContent (index) {
    let dom
    let caseIndex
    // let arr = ['jackInTheBox', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight']
    let arr = ['fadeInUp', 'fadeIn']
    // let defaultIn = arr[Math.floor(Math.random()* arr.length)]
    let defaultIn = arr[0]
    let defaultClass = `${defaultIn} ${this.state.currentPage === index ? 'animated' : 'hide'}`
    let defaultClass2 = `${arr[1]} ${this.state.currentPage === index ? 'animated' : 'hide'}`
    switch (index) {
      case 0:
        dom = <p style={{textAlign: "left", fontSize: '18px'}}>
          <span className={`d1 ${defaultClass}`}>第一期商业英文已经结束</span>
          <span className={`d2 ${defaultClass}`}>时间总是偷偷流逝</span>
          <span className={`d3 ${defaultClass}`}>这<span className="blue">90天</span>是不是过的不太一样呢</span>
        </p>
        break;
      case 1:
        dom = <p>
          <span className={`d1 ${defaultClass}`}>你阅读了<span className='red'> {this.state.courseInfo.completeLesson} </span>篇英文报道</span>
          <span className={`d2 ${defaultClass}`}>完成了<span className='red'> {4 * this.state.courseInfo.completeLesson} </span>个测试题目</span>
        </p>
        break;
      case 2:
        dom = <p>
          <span className={`d1 ${defaultClass}`}>有<span className='blue'>2413</span>个人和你一起战斗 </span>
          <span className={`d2 ${defaultClass}`}>共阅读了<span className='blue'>44,518</span>次英文报道 </span>
          <span className={`d3 ${defaultClass}`}>平均每人阅读<span className='blue'>18</span>篇 </span>
          <span className={`d4 ${defaultClass}`}>共完成了<span className='blue'>178,072</span>个测试题目</span>
          <span className={`d5 ${defaultClass}`}>平均每人完成<span className='blue'>72</span>个题目</span>
        </p>
        break;
      case 3:
        dom = <p>
          <span className={`d1 ${defaultClass}`}>你完成了<span className='red'>{this.state.courseInfo.totalShare}</span>次打卡</span>
          <span className={`d2 ${defaultClass}`}>所有人共完成了<span className='blue'>34,373</span>次打卡</span>
          <span className={`d3 ${defaultClass}`}>平均每人打卡<span className='blue'>14</span>次</span>
        </p>
        break;
        break;
      case 4:
        dom = <p>
          <span className={`d1 ${defaultClass}`}>你学会了<span className='blue'>{this.state.courseInfo.readKnowledge}</span>个商业知识</span>
          <span className={`d2 ${defaultClass}`}>所有人共学会了<span className='blue'>222,436</span>个商业知识</span>
          <span className={`d3 ${defaultClass}`}>平均每人学会<span className='blue'>91.5</span>个</span>
        </p>
        break;
      case 5:
        dom = <p>
          <span className={`d1 ${defaultClass}`}>导师回答了<span className="blue">468</span>位同学<span>提出的<span className="blue">597</span>专业问题</span></span>
          <span className={`d2 ${defaultClass}`}><span className="blue">492</span>位同学产生了<span className="blue">14,897</span>份读书笔记</span>
          <span className={`red d3 ${defaultClass}`}>你在偷懒的时候，别人都在悄悄努力</span>
        </p>
        break;
      case 6:
        dom = <p>
          <span className={`d1 ${defaultClass}`}><span className="blue">1123</span>人继续踏上<span className="blue">60天读商业人物传记</span>的征程</span>
          <span className={`d2 ${defaultClass}`}><span className="blue">1632</span>人拿到了优惠券奖励</span>
          <span className={`d3 ${defaultClass}`}><span className="blue">785</span>人拿到了实体书奖励</span>
          <span className={`red d4 ${defaultClass}`}>知识，也能转化为财富</span>
        </p>
        break;
      case 7:
        dom = <div className='flex'>
          <span className={`d1 ${defaultClass2}`}>60天商业人物传记已开启</span>
          <span className={`d1 ${defaultClass2}`}>打卡满48天可返学费</span>
          <img className='shadow' src='./static/h5/img/item/qrCode.png' alt='' />
          <img className={`qrcode d1 ${defaultClass2}`} src='./static/h5/img/item/qrCode.png'/>
          </div>
        break;
    }
    return <div className='normal'>
      {dom}
      <style global jsx>{`
        .normal {
          color: #333333;
          font-size: 14px;
          line-height: 40px;
          padding: 0px 10px;
          position: relative;
          top: -20px;
        }
        .flex {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          top: 40px;
        }
        .flex .qrcode {
          width: 150px;
          height: 150px;
        }
        .shadow {
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: 99;
        }
        p {
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .p1 {
          margin-top: -200px;
        }
        .d1 {
          animation-delay:0.5s;
        }
        .d2 {
          animation-delay:1s;
        }
        .d3 {
          animation-delay:1.5s;
        }
        .d4 {
          animation-delay:2s;
        }
        .d5 {
          animation-delay:2.5s;
        }
        // .d1 {
        //   animation-delay:0.4s;
        // }
        // .d2 {
        //   animation-delay:0.8s;
        // }
        // .d3 {
        //   animation-delay:1.2s;
        // }
        // .d4 {
        //   animation-delay:1.6s;
        // }
        // .d5 {
        //   animation-delay:2s;
        // }
        .hide {
          display: none;
        }
      `}</style>
    </div>
  }

  renderAll () {
    let arr = []
    if (this.state.courseInfo) {
      for (let i = 0; i < this.maxIndex + 1; i++) {
          arr.push(this.renderFunc(i))
      }
    }
    // arr.push(this.renderFunc(8))
    return arr
  }

  changePage (index) {
    this.setState({
      currentPage: index
    })
  }

  render(){

    return <Carousel axis='y' changePage={this.changePage}>
      {this.renderAll()}
    </Carousel >
  }

}

export default App;
