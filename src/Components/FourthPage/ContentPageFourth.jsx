import React from 'react'
import ColourLogo from '../assets/ColourLogo.png'
import Logo from '../assets/Logo.png'
import Profile from '../assets/Profile.png'
import NewsLine from '../assets/NewsLine1.png'
import NewsLineTwo from '../assets/NewsLine2.png'
import NewsLineThree from '../assets/NewsLine3.png'
import NewsLineFour from '../assets/NewsLine4.png'
import NewsLineFive from '../assets/NewsLine5.png'

const ContentPageFourth = () => {
  return (
    <div>
      <header className="favourite-header">
        <div className="container">
          <div className="row">
            <a href="#" className="logo">
              <img src={ColourLogo} alt="" />
            </a>
            <div className="favourite-icons">
              <i className="bx bx-search favourite-icon"></i>
              <i className="bx bx-user-circle favourite-icon"></i>
              <i className="bx bx-menu favourite-icon"></i>
            </div>
          </div>
        </div>
      </header>
      <section className="profile">
        <div className="container">
          <div className="row">
            <div className="new-profile">
            <div className="ellipse-container">
              <img src={Profile} alt="" />
              <div className="profile-editor">
              <p>
                Добавить Фото <i class="bx bx-download edit-icon"></i>
              </p>
              <p>
                Удалить{" "}
                <i
                  class="bx bx-trash edit-icon"
                  style={{ color: "#A01313" }}
                ></i>
              </p>
            </div>
            </div>
            <div className="profile-block">
              <div className="profile-info">
                <label className="profile-input-container">
                  Фамилия
                  <input
                    type="text"
                    placeholder="Олегов"
                    className="profile-input"
                  />
                  <i class="bx bx-edit profile-icon"></i>
                </label>
                <br />
                <label className="profile-input-container">
                  Имя
                  <input
                    type="text"
                    placeholder="Олег"
                    className="profile-input profile-input-margin"
                  />
                  <i class="bx bx-edit profile-icon"></i>
                </label>
                <br />
                <label className="profile-input-container">
                  Никнейм
                  <input
                    type="text"
                    placeholder="oleg.olegov"
                    className="profile-input"
                  />
                  <i class="bx bx-edit profile-icon"></i>
                </label>
                <br />
                <button className="edit-btn">Сохранить</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="publication">
        <div className="container">
          <div className="row">
            <h1 className="publication-title">
              Мои публикации{" "}
              <button className="publication-btn">Новая публикация</button>
            </h1>
            <div className="publication-block-cards">
              <div className="fw-cards" style={{ maxWidth: 940 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={NewsLine} alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-date">
                        29.11.2022
                        <i
                          class="bx bxs-trash fw-icon"
                          style={{ color: "#A01313" }}
                        ></i>
                      </p>
                      <h5 className="card-title">Заголовок новости</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate <br /> libero et velit interdum, ac
                        aliquet odio mattis. Class aptent tacitia sociosqu
                        torquent per conubia nostra, per inceptos himenaeos.
                      </p>
                      <a href="" className="card-link">
                        Читать дальше{">>"}
                      </a>
                      <i class="bx bx-share-alt card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fw-cards" style={{ maxWidth: 940 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={NewsLineTwo} alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-date">
                        29.11.2022
                        <i
                          class="bx bxs-trash fw-icon"
                          style={{ color: "#A01313" }}
                        ></i>
                      </p>
                      <h5 className="card-title">Заголовок новости</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate <br /> libero et velit interdum, ac
                        aliquet odio mattis. Class aptent tacitia sociosqu
                        torquent per conubia nostra, per inceptos himenaeos.
                      </p>
                      <a href="" className="card-link">
                        Читать дальше{">>"}
                      </a>
                      <i class="bx bx-share-alt card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fw-cards" style={{ maxWidth: 940 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={NewsLineThree} alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-date">
                        29.11.2022
                        <i
                          class="bx bxs-trash fw-icon"
                          style={{ color: "#A01313" }}
                        ></i>
                      </p>
                      <h5 className="card-title">Заголовок новости</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate <br /> libero et velit interdum, ac
                        aliquet odio mattis. Class aptent tacitia sociosqu
                        torquent per conubia nostra, per inceptos himenaeos.
                      </p>
                      <a href="" className="card-link">
                        Читать дальше{">>"}
                      </a>
                      <i class="bx bx-share-alt card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fw-cards" style={{ maxWidth: 940 }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={NewsLineFour} alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-date">
                        29.11.2022
                        <i
                          class="bx bxs-trash fw-icon"
                          style={{ color: "#A01313" }}
                        ></i>
                      </p>
                      <h5 className="card-title">Заголовок новости</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate <br /> libero et velit interdum, ac
                        aliquet odio mattis. Class aptent tacitia sociosqu
                        torquent per conubia nostra, per inceptos himenaeos.
                      </p>
                      <a href="" className="card-link">
                        Читать дальше{">>"}
                      </a>
                      <i class="bx bx-share-alt card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="fw-cards"
                style={{ maxWidth: 940, paddingBottom: 103 }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={NewsLineFive} alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-date">
                        29.11.2022
                        <i
                          class="bx bxs-trash fw-icon"
                          style={{ color: "#A01313" }}
                        ></i>
                      </p>
                      <h5 className="card-title">Заголовок новости</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate <br /> libero et velit interdum, ac
                        aliquet odio mattis. Class aptent tacitia sociosqu
                        torquent per conubia nostra, per inceptos himenaeos.
                      </p>
                      <a href="" className="card-link">
                        Читать дальше{">>"}
                      </a>
                      <i class="bx bx-share-alt card-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
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

export default ContentPageFourth
