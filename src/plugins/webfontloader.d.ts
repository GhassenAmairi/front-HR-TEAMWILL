declare module 'webfontloader' {
    interface WebFontLoader {
      load: (config: {
        google?: { families: string[] };
        custom?: { families: string[]; urls: string[] };
        typekit?: { id: string };
      }) => void;
    }
  
    const WebFontLoader: WebFontLoader;
    export default WebFontLoader;
  }