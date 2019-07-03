/**
 *    _____ __
 *   / ___// /_  _____
 *   \__ \/ / / / / _ \
 *  ___/ / / /_/ /  __/
 * /____/_/\__, /\___/
 *       /____/
 *       Copyright 2019 Parsa Ghadimi. All Rights Reserved.
 */

import { FontBase } from "./interfaces";

const fonts: FontBase[] = [];

/**
 * Add a new font to the font registry.
 *
 * @param {FontBase} font Font object
 * @returns {void}
 */
export function registerFont(font: FontBase): void {
  fonts.push(font);
}

/**
 * Returns a list of all the registered fonts.
 *
 * @returns {FontBase[]}
 */
export function getFonts(): FontBase[] {
  return [...fonts];
}

export function getFont(name: string): FontBase {
  for (const font of fonts)
    if (font.name === name) return font;
}
