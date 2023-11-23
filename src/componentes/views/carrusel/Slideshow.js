const React = require('react');
const { styled } = require('@mui/material/styles');
const { Button, Tooltip } = require('@mui/material');
const KeyboardArrowLeftIcon = require('@mui/icons-material/KeyboardArrowLeft');
const KeyboardArrowRightIcon = require('@mui/icons-material/KeyboardArrowRight');

const Slideshow = ({
	children,
	controles = false,
	autoplay = false,
	velocidad = "700",
	intervalo = "5000"
}) => {
	const slideshow = React.useRef(null);
	const intervaloSlideshow = React.useRef(null);

	const siguiente = React.useCallback(() => {
		if (slideshow.current && slideshow.current.children && slideshow.current.children.length > 0) {
			console.log('Siguiente');

			const primerElemento = slideshow.current.children[0];
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(primerElemento);
				slideshow.current.removeEventListener('transitionend', transicion);
			};

			slideshow.current.addEventListener('transitionend', transicion);
		}
	}, [velocidad]);

	const anterior = () => {
		console.log('Anterior');
		if (slideshow.current.children.length > 0) {
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};

	React.useEffect(() => {
		if (autoplay) {
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);

			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});

			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		ContenedorPrincipal(null,
			ContenedorSlideshow({ ref: slideshow }, children),
			controles && Controles(null,
				Tooltip({ title: "Imagen anterior", arrow: true, placement: 'right' },
					Boton({ onClick: anterior, 'aria-label': 'ver imagen anterior' },
						KeyboardArrowLeftIcon({ fontSize: 'large' })
					)
				),
				Tooltip({ title: "Imagen siguiente", arrow: true, placement: 'left' },
					Boton({ derecho: "true", onClick: siguiente, 'aria-label': 'ver imagen siguiente' },
						KeyboardArrowRightIcon({ fontSize: 'large' })
					)
				)
			)
		)
	);
};

const ContenedorPrincipal = styled('div')({
	position: 'relative',
});

const ContenedorSlideshow = styled("div")({
	display: "flex",
	flexWrap: "nowrap",
});

const Slide = styled("div")({
	minWidth: "100%",
	overflow: "hidden",
	transition: `0.3s ease all`,
	zIndex: 10,
	height: "90vh",
	position: "relative",

	"@media screen and (max-width: 899px)": {
		height: "65vh",
		'&': {
			img: {
				objectFit: "contain",
			}
		},
	},

	img: {
		width: "100%",
		height: "100%",
		verticalAlign: "top",
		objectFit: "cover",
		objectPosition: "center",
		filter: "brightness(70%) contrast(110%)",
	},
});

const TextoSlide = styled("div")(({ colorFondo, colorTexto }) => ({
	background: colorFondo ? colorFondo : "rgba(0,0,0,.3)",
	color: colorTexto ? colorTexto : "#fff",
	width: "100%",
	padding: "10px 60px",
	textAlign: "center",
	fontSize: "1.5rem",
	position: "absolute",
	bottom: 0,
	pointerEvents: "none",

	display: "flex",
	justifyContent: "space-between",

	"@media screen and (max-width: 899px)": {
		fontSize: "2rem",
		lineHeight: "2rem",
		'& > p': {
			margin: 0,
		},
		justifyContent: "center",
		'& > p:nth-of-type(2)': {
			display: "none",
		}
	},

	"@media screen and (max-width: 599px)": {
		lineHeight: "63vh",
		fontSize: "1.5rem",
	},

	"@media screen and (max-width: 280px)": {
		fontSize: "1rem",
	},
}));

const Controles = styled("div")({
	position: "absolute",
	top: 0,
	zIndex: 20,
	width: "100%",
	height: "100%",
	pointerEvents: "none",
});

const Boton = styled(Button)(({ derecho, theme }) => ({
	pointerEvents: "all",
	background: theme.palette.background.paper,
	border: "none",
	cursor: "pointer",
	outline: "none",
	width: "50px",
	height: "70px",
	top: "50%",
	transform: derecho ? "translate(30%, -50%)" : "translate(-30%, -50%)",
	borderRadius: derecho ? "100% 0 0 100%" : "0 100% 100% 0",
	textAlign: "center",
	position: "absolute",
	transition: "0.3s ease all",

	"@media screen and (max-width: 599px)": {
		background: "none"
	},

	path: {
		filter: derecho
			? "drop-shadow(-2px 0px 0px #fff)"
			: "drop-shadow(2px 0px 0px #fff)",
	},
	...(derecho ? { right: 0 } : { left: 0 }),
}));

module.exports = { Slideshow, Slide, TextoSlide };
