import React, { Component } from 'react'

class Resume extends Component {
	render() {
		return (
			<div>
				<div className='resume-book-bg'>
					<div className="container">
						<div className="agile-logo">
							<h1><a>Creative<span>Resume</span></a></h1>
						</div>
						<div className="w3l-banner-grids">
							<div className="col-md-8 w3ls-banner-right">
								<div className="banner-right-img">
									<img src={require('../css/images/avatar.jpg')} alt="" />
								</div>
								<div className="banner-right-info">
									<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque tellus dignissim dolor dignissim, sit amet convallis nisi dignissim.</h2>
									<p>Donec dolor felis, consectetur eget massa non, mattis euismod est. Nam augue neque, hendrerit nec scelerisque non, ultrices at ligula. Praesent posuere, turpis eget lobortis elementum, ex ante ultricies ligula, sit amet varius lacus dui in magna. Aliquam erat volutpat. Nulla condimentum, enim vitae congue ultrices, nibh erat efficitur sem, vel iaculis lectus eros in turpis. Aliquam venenatis cursus suscipit.</p>
								</div>
								<div className="clearfix"> </div>
								<div className="w3-button">
									<div className="w3-button-info m_nav_item">
										<a className="hvr-sweep-to-bottom" href="#contact">联系我</a>
									</div>
								</div>
								<div className="social-grids">
									<div className="social-info">
										<h4>Follow : </h4>
									</div>
									<div className="agileinfo-social-grids">
										<ul>
											<li><a href="http://weibo.com/@ZhaoFeiFSP"><img className='social-img gmail' src={require('../css/images/weibo.png')} /></a></li>
											<li><a href="http://fb.me/fei.zhao.fsp"><img className='social-img facebook' src={require('../css/images/facebook.png')} /></a></li>
											<li><a href="http://twitter.com/fei_zhao_fei"><img className='social-img twitter' src={require('../css/images/twitter.png')} /></a></li>
											<li><a href="mailto:zhaofei199210@gmail.com"><img className='social-img gmail' src={require('../css/images/gmail.png')} /></a></li>
										</ul>
									</div>
									<div className="clearfix"> </div>
								</div>
							</div>
							<div className="col-md-4 w3ls-banner-left">
								<div className="w3ls-banner-left-info">
									<h4>职  位</h4>
									<p>iOS 开发工程师</p>
								</div>
								<div className="w3ls-banner-left-info">
									<h4>姓  名</h4>
									<p>赵飞 （Zhao fei）</p>
								</div>
								<div className="w3ls-banner-left-info">
									<h4>性  别</h4>
									<p>男</p>
								</div>
								<div className="w3ls-banner-left-info">
									<h4>地  址</h4>
									<p>中国，北京</p>
								</div>
								<div className="w3ls-banner-left-info">
									<h4>邮  箱</h4>
									<p><a href="mailto:zhaofei199210@gmail.com">zhaofei199210@gmail.com</a></p>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}

export default Resume