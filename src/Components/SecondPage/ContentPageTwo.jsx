import React from 'react'
import Logo from '../assets/Logo.png'
import Article from '../assets/Article.png'

const ContentPageTwo = () => {
  return (
    <div>
      <header className='header'>
        <div className="container">
          <a href="http://itschool.megacom.kg">
            <img src={Logo} alt="IT School Logo" />
          </a>
          <div className="headers-icons">
            <i className="bx bx-search header-icon"></i>
            <i className="bx bx-user-circle header-icon"></i>
            <i className="bx bx-menu header-icon"></i>
          </div>
          <h1 className="Header-Title">Новости</h1>
        </div>
      </header>
      <section className="Article">
        <div className="container">
          <div className="row">
            <i class="bx bx-arrow-back article-icon"></i>
            <div className="article-block">
              <p className="article-date">
                29.11.2022 <i class="bx bx-heart article-icon1"></i>
              </p>
              <h3 className="article-title">Заголовок новости</h3>
              <p className="article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio <br />{" "}
                mattis. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
              <img src={Article} alt="" />
              <p className="article-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed <br />
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas eget <br />
                condimentum velit, sit amet feugiat lectus. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per <br />
                inceptos himenaeos. Praesent auctor purus luctus enim egestas,
                ac scelerisque ante pulvinar. Donec ut rhoncus ex. <br />{" "}
                Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
                bibendum lorem. Morbi convallis convallis diam sit amet <br />
                lacinia. Aliquam in elementum tellus. <br /> Curabitur tempor
                quis eros tempus lacinia. Nam bibendum pellentesque quam a
                convallis. Sed ut vulputate <br /> nisi. Integer in felis sed
                leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                feugiat ex eu vestibulum <br />
                vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor
                eu mauris a, blandit ultrices nibh. Mauris sit amet <br /> magna
                non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
                lacinia. Nam eget mi in purus lobortis eleifend. <br /> Sed nec
                ante dictum sem condimentum ullamcorper quis venenatis nisi.
                Proin vitae facilisis nisi, ac posuere leo. <br /> Nam pulvinar
                blandit velit, id condimentum diam faucibus at. Aliquam lacus
                nisi, sollicitudin at nisi nec, <br />
                fermentum congue felis. Quisque mauris dolor, fringilla sed
                tincidunt ac, finibus non odio. Sed vitae mauris nec ante <br />
                pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus
                aliquam ligula. Nullam dictum, tellus tincidunt tempor <br />
                laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam
                nec nisl. Aenean gravida turpis nisi, consequat dictum <br />
                risus dapibus a. Duis felis ante, varius in neque eu, tempor
                suscipit sem. Maecenas ullamcorper gravida sem sit amet <br />
                cursus. Etiam pulvinar purus vitae justo pharetra consequat.
                Mauris id mi ut arcu feugiat maximus. Mauris consequat <br />
                tellus id tempus aliquet.
              </p>
              <i class="bx bx-share-alt article-icon2"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="comment">
        <div className="container">
          <div className="row">
            <h3 className="comment-title">Комментарии</h3>
            <div className="comment-block">
              <h5 className="comment-user-name">Олег Петров</h5>
              <p className="user-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio <br />
                mattis. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
              <p className="comment-date">
                30.11.2022
                <a href="#" className="answer-link">
                  Ответить
                </a>
              </p>
            </div>
            <div className="comment-answer-block">
              <h5 className="comment-user-name">Олег Петров</h5>
              <p className="user-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio <br />
                mattis. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
              <p className="comment-date">
                30.11.2022
                <a href="#" className="answer-link">
                  Ответить
                </a>
              </p>
              <label>
                Вы
                <input type="text" className="input-answer" />
              </label>
              <button className="answer-btn">Ответить</button>
            </div>
            <div className="comment-block-alt">
              <h5 className="comment-user-name">Олег Петров</h5>
              <p className="user-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio <br />
                mattis. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </p>
              <p className="comment-date">
                30.11.2022
                <a href="#" className="answer-link">
                  Ответить
                </a>
              </p>
              <label>
                Вы
                <input type="text" className="input-answer" />
              </label>
              <button className="answer-btn">Ответить</button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <a href="#" className="footer-logo">
          <img src={Logo} alt="" />
        </a>
        <div className="footer-block ">
          <br />
          <br />
          <a href="" className="footer-link">
            Мой профиль
          </a>
          <a href="" className="footer-link">
            Избранные новости
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContentPageTwo;
