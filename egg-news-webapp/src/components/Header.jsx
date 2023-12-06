import React from "react";
import LogoNews from "../assets/LogoNews.png";
import { Link } from "react-router-dom";
import IconoHome from "../assets/IconHome.svg";
import IconoNews from "../assets/IconNews.svg";
import IconoAdmin from "../assets/IconAdmin.svg";
import IconoPanel from "../assets/IconPanel.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container-logo">
          <Link to={"/home"}>
            <img src={LogoNews} alt="LogoNews" className="LogoNews nav-logo" />
            <h1 className="title-newsLive">News Live</h1>
          </Link>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-home-link nav-link active ">
                  <img src={IconoHome} alt="IconoHome" className="Icono-home" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/home/news"}
                  className="nav-news-link nav-link active"
                >
                  <img
                    src={IconoNews}
                    alt="IconoNews"
                    className="Icono-noticia"
                  />
                  Noticias
                </Link>
              </li>
              <Link to={"/home/panel-admin"}>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle active"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={IconoAdmin} alt="IconoAdmin" /> Panel de
                    administracion
                  </div>

                  <div className="dropdown-menu">
                    <Link
                      to={"/home/panel-admin/crear-noticia"}
                      className="dropdown-item"
                    >
                      <img src={IconoPanel} alt="IconoPanel" />
                      Crear noticia
                    </Link>
                    <Link
                      to={"/home/panel-admin/list-news"}
                      className="dropdown-item"
                    >
                      <img src={IconoPanel} alt="IconoPanel" />
                      Listado de noticias
                    </Link>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="form-search">
        <form className="d-flex">
          <input
            className="input-buscar form-control me-sm-2 "
            type="search"
            placeholder="Buscar noticia"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>
      </div>

    </>
  );
}
