import {LitElement} from '../../node_modules/@polymer/lit-element/lit-element.js'
import {render, html} from '../../node_modules/lit-html/lib/lit-extended.js';

export class UploadFile extends LitElement {
    static get properties() {
        return {
            file: {
                type: String,
                reflectToAttribute: true,
                notify: true
            },
            // processing: {
            //     type: Boolean,
            //     notify: true
            // },
            // progress: {
            //     type: String,
            //     notify: true
            // },
            message: {
                type: String,
                notify: true
            },
            filename: {
                type: String,
                notify: true
            },
            maxHeight: {
                type: Number,
            },
            maxWidth: {
                type: Number,
            },
            maxSize: {
                type: Number,
            },
        }
    }

    constructor() {
      super();
      this.maxHeight = 48;
      this.maxWidth = 320;
      this.maxSize = 30;
    }

    startProcessing() {
      this.dispatchEvent(new CustomEvent("processing", {
            bubbles: true,
            composed: true,
            detail: {
                processing: true,
            }
        }));
    }

    endProcessing() {
      this.dispatchEvent(new CustomEvent("processing", {
            bubbles: true,
            composed: true,
            detail: {
                processing: false,
            }
        }));
    }

    updateProgress(str) {
      this.dispatchEvent(new CustomEvent("progress", {
            bubbles: true,
            composed: true,
            detail: {
                progress: str,
            }
        }));
    }

    updateFilename(str) {
      this.filename = str;
      this.dispatchEvent(new CustomEvent("filename", {
            bubbles: true,
            composed: true,
            detail: {
                filename: str,
            }
        }));
    }

    fileUploaded(shrinked) {
      self.file = shrinked;
      this.dispatchEvent(new CustomEvent("file", {
            bubbles: true,
            composed: true,
            detail: {
                file: shrinked,
            }
        }));
    }

    open(file) {

        console.log(file);

        var fileVal = file;
        if (this.fileIsImage(file)) {
            this.updateFilename(file.name);

            this.startProcessing();
            this.processImage(file);
        } else {
            this.message = "The file you chose is either not an image or it is an unsupported format, please try again using images of the type jpg, png, or gif";
            // this.clearFileInput(e.target);
        }

    }

    fileIsImage(file) {
        return file.type.match(/jpeg/) || file.type.match(/jpg/) || file.type.match(/png/) || file.type.match(/gif/) || file.type.match(/svg/);
    }

    clearFileInput(input) {
        var input = $(input);
        if (input.value) {
            input.parentNode.replaceChild(input.cloneNode(true), input);
        }
    }

    processImage(file) {
        var self = this,
            reader = new FileReader();

        reader.onloadend = function() {
            // shrink image
            var image = document.createElement('img');
            image.src = reader.result;

            image.onload = function() {
                var canvas = document.createElement('canvas'),
                    resized = document.createElement('canvas'),
                    ctx = canvas.getContext('2d'),
                    size = self.fitImage(image, file);

                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0, image.width, image.height);

                resized.width = size.width;
                resized.height = size.height;
                self.canvasResize(canvas, resized, function() {
                    var shrinked = resized.toDataURL('image/png');
                    self.fileUploaded(shrinked);
                    // self.processing = false;
                    self.endProcessing();
                    canvas = undefined;
                    resized = undefined;
                });
            };
        };

        reader.readAsDataURL(file); // convert file to base64
    }

    /*
        fitImage, BY Charlie Mitchell
    */
    fitImage(img, file) {
        var width = img.width,
            height = img.height,
            ratio = Math.min(this.maxWidth / width, this.maxHeight / height);
        
        var fileSize = file.size;
        return {
            width: width * ratio,
            height: height * ratio
        };
        // }
    }
    canvasResize(original, canvas, next) {
        /*
            # SOME PARTS OF THIS FUNCTION IS TAKEN FROM...
                 * MIT License
                 *  You may use this code as long as you retain this notice.  Use at your own risk! :)
                 *  rahttps://github.com/danschumann/limby-resize
            # Other Parts and adaptations by Charlie Mitchell
        */
        var
            w1 = original.width,
            h1 = original.height,
            w2 = canvas.width,
            h2 = canvas.height,
            i,
            img = original.getContext("2d").getImageData(0, 0, w1, h1),
            img2 = canvas.getContext("2d").getImageData(0, 0, w2, h2),
            progressTotal = h1,
            progress = 0,
            seft = this;

        // seft.progress = '0 out of ' + progressTotal + ' Objects';
        seft.updateProgress('0 out of ' + progressTotal + ' Objects');

        if (w2 > w1 || h2 > h1) {
            canvas.getContext('2d').drawImage(original, 0, 0, w2, h2);
            return;
        }

        var data = img.data,
            // we don't use this much, as working with doubles isn't great
            _data2 = img2.data,
            // We enforce float type for every entity in the array
            // this prevents weird faded lines when things get rounded off
            data2 = new Array(_data2.length);
        for (i = 0; i < _data2.length; i++) {
            data2[i] = 0.0;
        }

        // We track alphas, since we need to use alphas to correct colors later on
        var alphas = new Array(_data2.length >> 2);
        for (i = 0; i < _data2.length >> 2; i++) {
            alphas[i] = 1;
        }

        // when resizing down, this will be decimal
        var xScale = w2 / w1;
        var yScale = h2 / h1;
        var alphaOffset;

        // For every pixel in the original, we tally it up in the new one
        var nextY = function(y1) {

            for (var x1 = 0; x1 < w1; x1++) {

                var

                    // the original pixel is split between two pixels in the output, we do an extra step
                    extraX = false,
                    extraY = false,

                    // the output pixel
                    targetX = Math.floor(x1 * xScale),
                    targetY = Math.floor(y1 * yScale),

                    // The percentage of this pixel going to the output pixel
                    xFactor = xScale,
                    yFactor = yScale,

                    // The percentage of this pixel going to the right neighbor or bottom neighbor
                    bottomFactor = 0,
                    rightFactor = 0,

                    // positions of pixels in the array
                    offset = (y1 * w1 + x1) * 4,
                    targetOffset = (targetY * w2 + targetX) * 4;

                // Right side goes into another pixel
                if (targetX < Math.floor((x1 + 1) * xScale)) {

                    rightFactor = (((x1 + 1) * xScale) % 1);
                    xFactor -= rightFactor;

                    extraX = true;

                }

                // Bottom side goes into another pixel
                if (targetY < Math.floor((y1 + 1) * yScale)) {

                    bottomFactor = (((y1 + 1) * yScale) % 1);
                    yFactor -= bottomFactor;

                    extraY = true;

                }

                var a;

                a = (data[offset + 3] / 255);

                alphaOffset = targetOffset / 4;

                if (extraX) {

                    // Since we're not adding the color of invisible pixels,  we multiply by a
                    data2[targetOffset + 4] += data[offset] * rightFactor * yFactor * a;
                    data2[targetOffset + 5] += data[offset + 1] * rightFactor * yFactor * a;
                    data2[targetOffset + 6] += data[offset + 2] * rightFactor * yFactor * a;

                    data2[targetOffset + 7] += data[offset + 3] * rightFactor * yFactor;

                    // if we left out the color of invisible pixels(fully or partly)
                    // the entire average we end up with will no longer be out of 255
                    // so we subtract the percentage from the alpha ( originally 1 )
                    // so that we can reverse this effect by dividing by the amount.
                    // ( if one pixel is black and invisible, and the other is white and visible,
                    // the white pixel will weight itself at 50% because it does not know the other pixel is invisible
                    // so the total(color) for the new pixel would be 128(gray), but it should be all white.
                    // the alpha will be the correct 128, combinging alphas, but we need to preserve the color
                    // of the visible pixels )
                    alphas[alphaOffset + 1] -= (1 - a) * rightFactor * yFactor;
                }

                if (extraY) {
                    data2[targetOffset + w2 * 4] += data[offset] * xFactor * bottomFactor * a;
                    data2[targetOffset + w2 * 4 + 1] += data[offset + 1] * xFactor * bottomFactor * a;
                    data2[targetOffset + w2 * 4 + 2] += data[offset + 2] * xFactor * bottomFactor * a;

                    data2[targetOffset + w2 * 4 + 3] += data[offset + 3] * xFactor * bottomFactor;

                    alphas[alphaOffset + w2] -= (1 - a) * xFactor * bottomFactor;
                }

                if (extraX && extraY) {
                    data2[targetOffset + w2 * 4 + 4] += data[offset] * rightFactor * bottomFactor * a;
                    data2[targetOffset + w2 * 4 + 5] += data[offset + 1] * rightFactor * bottomFactor * a;
                    data2[targetOffset + w2 * 4 + 6] += data[offset + 2] * rightFactor * bottomFactor * a;

                    data2[targetOffset + w2 * 4 + 7] += data[offset + 3] * rightFactor * bottomFactor;

                    alphas[alphaOffset + w2 + 1] -= (1 - a) * rightFactor * bottomFactor;
                }

                data2[targetOffset] += data[offset] * xFactor * yFactor * a;
                data2[targetOffset + 1] += data[offset + 1] * xFactor * yFactor * a;
                data2[targetOffset + 2] += data[offset + 2] * xFactor * yFactor * a;

                data2[targetOffset + 3] += data[offset + 3] * xFactor * yFactor;

                alphas[alphaOffset] -= (1 - a) * xFactor * yFactor;
            }

            if (y1++ < h1) {
                progress += 1;
                // seft.progress = ((progress / progressTotal) * 100).toFixed(1) + '%';
                seft.updateProgress(((progress / progressTotal) * 100).toFixed(1) + '%');
                setTimeout(nextY.bind(this, y1), 0); // this allows other processes to tick
            } else {
                done();
            }

        };

        nextY(0);

        var done = function() {
            // fully distribute the color of pixels that are partially full because their neighbor is transparent
            for (var i = 0; i < (_data2.length >> 2); i++) {
                if (alphas[i] && alphas[i] < 1) {
                    data2[(i << 2)] /= alphas[i]; // r
                    data2[(i << 2) + 1] /= alphas[i]; // g
                    data2[(i << 2) + 2] /= alphas[i]; // b
                }
            }

            // re populate the actual imgData
            for (i = 0; i < data2.length; i++) {
                _data2[i] = Math.round(data2[i]);
            }

            var context = canvas.getContext("2d");
            context.putImageData(img2, 0, 0);
            next();
        };
    }

    render() {
        return html`
             <style include="shared-styles">
             #paperToggle {
                 min-height: 40px;
                 min-width: 40px;
             }
             
             :host {
                 display: block;
                 padding: 0;
                 margin: 0;
                 width: 0;
                 height: 0;
             }
             
             input {
                 padding: 0;
                 margin: 0;
                 width: 0;
                 height: 0;
             }
             </style>`
    }

}
customElements.define('upload-file', UploadFile);