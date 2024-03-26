export default class LinkButtonModel {

  text
  textColor
  color
  link
  iconName
  disabled

  constructor({text, textColor, color, link, iconName, disabled}) {
    this.text = text
    this.textColor = textColor ?? 'white'
    this.color = color
    this.link = link ?? 'www.google.com'
    this.iconName = iconName
    this.disabled = !!disabled
  }
}