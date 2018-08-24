function trim(str) {
  return str.replace(/^\s+|\s+$/gm, "");
}

export function rgbaToHex(rgba) {
  if (!!rgba) {
    var parts = rgba.substring(rgba.indexOf("(")).split(","),
      r = parseInt(trim(parts[0].substring(1)), 10),
      g = parseInt(trim(parts[1]), 10),
      b = parseInt(trim(parts[2]), 10),
      a = !!parts[3]
        ? parseFloat(trim(parts[3].substring(0, parts[3].length - 1))).toFixed(
            2
          )
        : 1;

    return (
      "#" +
      r.toString(16) +
      g.toString(16) +
      b.toString(16) +
      (a * 255).toString(16).substring(0, 2)
    );
  } else {
    return "Select Color";
  }
}
