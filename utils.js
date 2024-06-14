export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}
export function css(styles = {}) {
    if (typeof styles === 'string') return styles
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
    return `
    <form name="${type}">
      <h5>${type}</h5>
<!--      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>-->
    <a class="btn btn-primary" href="index.html" role="button">главная</a>
    <a class="btn btn-primary" href="index1.html" role="button">страница1</a>
    <a class="btn btn-primary" href="index2.html" role="button">страница2</a>
    <a class="btn btn-primary" href="index3.html" role="button">страница3</a>
    <a class="btn btn-primary" href="index4.html" role="button">страница4</a>
    <a class="btn btn-primary" href="index5.html" role="button">страница5</a>
    <a class="btn btn-primary" href="index6.html" role="button">страница6</a>
    </form>
    <hr />
  `
}