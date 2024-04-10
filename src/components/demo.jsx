export default function Button({children, ...props}) {
  let cssClass = `button ${props.mode}-button`;
  return <button className={cssClass}>
  <span>{children}</span>
  // (Icon ? <Icon/> : null)
  </button>
}
