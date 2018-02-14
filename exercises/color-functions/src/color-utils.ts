//TODO: Implement hexToRgb
export function hexToRgb(hex: string): {r: number, g: number, b: number} {
  if (hex.length < 6) {
      return {
          r: parseInt(hex[0] + hex[0], 16),
          g: parseInt(hex[1] + hex[1], 16),
          b: parseInt(hex[2] + hex[2], 16)
      };
  }
  return {
      r: parseInt(hex.slice(0,2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4), 16)
  };
}

//TODO: Implement rgbToHex
export function rgbToHex(red: number, green: number, blue: number): string {
    return [red, green, blue]
      .map(colorInt => Math.max(0, Math.min(255, colorInt)).toString(16))
      .map(hexCh => hexCh.length === 1 ? `0${hexCh}` : hexCh)
      .join('');
}