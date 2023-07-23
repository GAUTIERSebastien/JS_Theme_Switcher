/**
   * Creates a DOM element, adds text to it, places it as the last
   * child of the parent, and adds an attribute using the attribute parameter.
   * @param {String} markupname 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Array[Object]} attributes (should include the properties name and value)
   * @returns domElement
   */
export function createMarkup(markupname, text, parent, attributes = []) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (const attribute of attributes) {
    for (let key in attribute) {
      markup.setAttribute(key, attribute[key]);
    }
  }
  return markup;
}
