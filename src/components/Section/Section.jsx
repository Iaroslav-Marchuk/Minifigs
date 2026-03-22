import css from './Section.module.css';

function Section({ children, className = '' }) {
  return <div className={`${css.section} ${className}`}>{children}</div>;
}

export default Section;
