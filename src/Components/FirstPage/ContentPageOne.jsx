import React from 'react'
import Logo from '../assets/Logo.png'
import NewsLine from '../assets/NewsLine1.png'
import NewsLineTwo from "../assets/NewsLine2.png";
import NewsLineThree from "../assets/NewsLine3.png";
import NewsLineFour from "../assets/NewsLine4.png";
import NewsLineFive from "../assets/NewsLine5.png";

const ContentPage = () => {
  return (
    <div>
      <header className="header">
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
      <div className="container content">
        <div className="filter">
          <h3 className="filter-title">Фильрация</h3>
          <div className="filter-item">
            <input
              type="checkbox"
              id="filter-1"
              name="filter"
              className="filter-input"
              defaultValue="sport"
            />
            <label htmlFor="filter-1" className="filter-text">
              Спорт
            </label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="filter-2"
              className="filter-input"
              name="filter"
              defaultValue="politic"
            />
            <label htmlFor="filter-2" className="filter-text">
              Политика
            </label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="filter-3"
              name="filter"
              className="filter-input"
              defaultValue="celebrety"
            />
            <label htmlFor="filter-3" className="filter-text">
              Звезды
            </label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="filter-4"
              name="filter"
              className="filter-input"
              defaultValue="art"
            />
            <label htmlFor="filter-4" className="filter-text">
              Искусство
            </label>
          </div>
          <div className="filter-item">
            <input
              type="checkbox"
              id="filter-5"
              name="filter"
              className="filter-input"
              defaultValue="fashion"
            />
            <label htmlFor="filter-5" className="filter-text">
              Мода
            </label>
          </div>
          <button className="filter-btn">Применить</button>
        </div>
        <div className="container">
          <div className="cards" style={{ maxWidth: 940 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={NewsLine} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-date">
                    29.11.2022 <i class="bx bx-heart card-icon1"></i>
                  </p>
                  <h5 className="card-title">Заголовок новости</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate <br /> libero et velit interdum, ac aliquet
                    odio mattis. Class aptent tacitia sociosqu torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <a href="" className="card-link">
                    Читать дальше{">>"}
                  </a>
                  <i class="bx bx-share-alt card-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="cards" style={{ maxWidth: 940 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={NewsLineTwo} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-date">
                    29.11.2022 <i class="bx bx-heart card-icon1"></i>
                  </p>
                  <h5 className="card-title">Заголовок новости</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate <br /> libero et velit interdum, ac aliquet
                    odio mattis. Class aptent tacitia sociosqu torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <a href="" className="card-link">
                    Читать дальше{">>"}
                  </a>
                  <i class="bx bx-share-alt card-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="cards" style={{ maxWidth: 940 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={NewsLineThree} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-date">
                    29.11.2022 <i class="bx bx-heart card-icon1"></i>
                  </p>
                  <h5 className="card-title">Заголовок новости</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate <br /> libero et velit interdum, ac aliquet
                    odio mattis. Class aptent tacitia sociosqu torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <a href="" className="card-link">
                    Читать дальше{">>"}
                  </a>
                  <i class="bx bx-share-alt card-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="cards" style={{ maxWidth: 940 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={NewsLineFour} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-date">
                    29.11.2022 <i class="bx bx-heart card-icon1"></i>
                  </p>
                  <h5 className="card-title">Заголовок новости</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate <br /> libero et velit interdum, ac aliquet
                    odio mattis. Class aptent tacitia sociosqu torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                  <a href="" className="card-link">
                    Читать дальше{">>"}
                  </a>
                  <i class="bx bx-share-alt card-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="cards" style={{ maxWidth: 940, paddingBottom: 124 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={NewsLineFive} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-date">
                    29.11.2022 <i class="bx bx-heart card-icon1"></i>
                  </p>
                  <h5 className="card-title">Заголовок новости</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate <br /> libero et velit interdum, ac aliquet
                    odio mattis. Class aptent tacitia sociosqu torquent per
                    conubia nostra, per inceptos himenaeos.
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

export default ContentPage;
