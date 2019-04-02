/*
 * hex -> rgba
 * #ff00ff -> rgba(255, 0, 255, 1)
 */

function hex2rgba(hex, opacity = 1) {
  let color;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    color = hex.substring(1).split('');
    if (color.length === 3) {
        color= [color[0], color[0], color[1], color[1], color[2], color[2]];
    }
    color = '0x' + color.join('');
    return 'rgba(' + [(color >> 16) & 255, (color >> 8) & 255, color & 255].join(', ') + `, ${opacity})`;
  }
  throw new Error('Bad Hex');
}

hex2rgba('#ef45ae', 0.5);
