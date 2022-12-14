/*
default

inverted

google sign in
*/
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
   google: 'google-sign-in',
   inverted: 'inverted'
}

export default function Button({children, buttonTypes, ...otherProps}) {
  return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonTypes]}`} {...otherProps}>{children}</button>;
}