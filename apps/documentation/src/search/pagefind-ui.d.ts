/** Public constructor surface of @pagefind/default-ui, which ships JavaScript without declarations. */
declare module "@pagefind/default-ui" {
  export class PagefindUI {
    constructor(options: { element: HTMLElement; bundlePath: string; showSubResults: boolean });
    destroy(): void;
  }
}
