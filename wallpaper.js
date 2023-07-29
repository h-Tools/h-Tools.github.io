function get(id) {
	return document.getElementById(id);
}
get("convert").onclick = function() {
    let dot = 0, line = 0, colour = 0, dot2 = 0, sizeX = 0, sizeY = 0, length1 = 0;
    sizeX = get("x").value, sizeY = get("y").value;
    const image1 = new Uint8ClampedArray(4*sizeX*sizeY)
    for (let y = 0; y < sizeY; y++) {
        line += 1
        colour = line*3
        dot = line*-3
        for (let x = 0; x < sizeX; x++) {
            dot += 1
            colour += 1
            let rgb = [255,255,255,255]
            for (let j = -1; j < 2; j++) {
                for (let i = -1; i < 2; i++) {
                    dot2 = dot + 4*i + j
                    colour2 = colour + 3*i + j
                    if (!(j === 0 && (i === -1 || i === 1))) {
                        if (dot2 % 7 === 0) {
                            if (colour2 % 4 === 0) {
                                rgb = [255,153,170,255]
                            }
                            if (colour2 % 4 === 1) {
                                rgb = [81,233,244,255]
                            }
                            else if (colour2 % 4 === 2) {
                                rgb = [126,237,86,255]
                            }
                            else if (colour2 % 4 === 3) {
                                rgb = [255,214,53,255]
                            }
                            break;
                        } 
                    }

                }
            }
            for (let k = 0; k < 4; k++) {
                image1[length1] = rgb[k]
                length1 += 1
            }
        }
    }
    image2 = new ImageData(image1,sizeX,sizeY);
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = sizeX;
    canvas.height = sizeY;
    ctx.putImageData(image2, 0, 0, 0, 0, sizeX, sizeY);
    url1 = canvas.toDataURL();
    image3 = document.getElementById("hello");
    image3.src=url1;
    image3.style.display = 'block';
    document.getElementById("hello2").href=url1;
    document.getElementById("hello2").download=('H_'+ sizeX.toString() + 'x' + sizeY.toString() + 'px.png');
    }
