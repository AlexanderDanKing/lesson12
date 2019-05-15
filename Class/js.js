class Options {
 constructor(height, width, bg, fontSize, textAlign) {
  this.height = height + 'px';
  this.width = width + 'px';
  this.bg = bg;
  this.fontSize = fontSize + 'px';
  this.textAlign = textAlign;
 }
 makeDiv() {
  let div = document.createElement('div');
  div.textContent = 'Сюда помещается любой текст';
  div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
  document.body.appendChild(div);
 }
}

let newDiv = new Options(200, 250, 'yellow', 12, 'center');

newDiv.makeDiv();