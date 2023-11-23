const { Box } = require('@mui/material');
const { Slideshow, Slide, TextoSlide } = require("../carrusel/Slideshow");
const React = require('react');
const { Link } = require('react-router-dom');
const img1 = require("./imagenes/3.jpeg");
const img2 = require("./imagenes/2.jpeg");
const img3 = require("./imagenes/1.jpeg");

export const Carrusel=()=>{
  return (
    React.createElement(Box, { component: "main", sx: {
        width: "100%",
        overflow: "hidden",
    } }, 
        React.createElement(Slideshow, { controles: true, autoplay: true },
            React.createElement(Slide, null,                
                React.createElement(Link, { to: '/tematicas' },
                    React.createElement("img", { src: img1, alt: 'img-carrusel-catedral-de-huejutla' })
                ),                
                React.createElement(TextoSlide, null,
                    React.createElement("p", null, "Catedral de Huejutla"),
                    React.createElement("p", null, React.createElement("i", null, "Imagen por Ceci Mandujano"))
                )
            ),

            React.createElement(Slide, null,
                React.createElement(Link, { to: '/sobre-nosotros' },
                    React.createElement("img", { src: img2, alt: 'img-carrusel-huejutla-centro' })
                ),
                React.createElement(TextoSlide, null,
                    React.createElement("p", null, "Huejutla Centro"),
                    React.createElement("p", null, React.createElement("i", null, "Imagen por Nadhiezda Cruz"))
                )
            ),

            React.createElement(Slide, null,
                React.createElement(Link, { to: '/tienda' },
                    React.createElement("img", { src: img3, alt: 'img-carrusel-mural-emblematico' })
                ),
                React.createElement(TextoSlide, null,
                    React.createElement("p", null, "Mural Emblematico"),
                    React.createElement("p", null, React.createElement("i", null, "Imagen por Salomón Hernández"))
                )
            )
        )
    )
  );
};

