import tinycolor from 'tinycolor2';

export default (hash) => {
    const [r, g, b] = hash.substr(0,3).split('').map(char => (char.charCodeAt(0) > 255 ? 127 : char.charCodeAt(0)));
    const color = tinycolor({r, g, b}).lighten(20).toHexString();
    const colorLighten = tinycolor({r, g, b}).lighten(40).toHexString();
    return { color, colorLighten};
};