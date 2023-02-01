import React from 'react';
import './Projects.scss';
import Formula from'./Images/Formula1.png';
import BudgetApp from './Images/BudgetApp.png';
import Catalog from './Images/Catalog.png';
import Oceans from './Images/Oceans.png';
import Recipe from './Images/Recipes.png';

console.clear();

const slides = [
  {
    title: "Formula 1",
    subtitle: "Stats and info",
    btnHub: "https://github.com/Flunavgt/formula1_capstone", 
    image: Formula
  },
  {
    title: "Moon App",
    subtitle: "Budget oriented",
    btnHub: "https://github.com/Flunavgt/budget-app", 
    image: BudgetApp
  },
  {
    title: "Catalog of my things",
    subtitle: "Inventory",
    btnHub: "https://github.com/Flunavgt/catalog_of_my_things", 
    image: Catalog
  },
  {
    title: "Oceans and Trails",
    subtitle: "Reserve a cruise",
    btnHub: "https://github.com/Flunavgt/oceans_and_trails_frontend", 
    image: Oceans
  },
  {
    title: "Recipes",
    subtitle: "Kitchen utilities",
    btnHub: "https://github.com/Flunavgt/recipe_app", 
    image: Recipe
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `'${slide.image}'`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <a href={slide.btnHub} className='btn-primary btn' target='_blank' rel='noreferrer'>GitHub</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides" id='Projects' >
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export default Projects;