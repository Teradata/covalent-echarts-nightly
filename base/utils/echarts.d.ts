/**
 * Function used to register a theme into echarts
 * Theme name and theme object needed as stated in
 * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.registerTheme
 */
export declare function registerTheme(themeName: string, theme: Object): void;
/**
 * Function to register all default themes
 * @internal
 */
export declare function registerDefaultThemes(): void;
/**
 * Returns all the theme names bundled with covalent echarts.
 */
export declare function getThemes(): string[];
