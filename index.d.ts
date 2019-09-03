declare module '@yz1311/react-native-http-cache' {
    export function clearCache(): Promise<void>;

    export function getHttpCacheSize(): Promise<void>;

    export function getImageCacheSize(): Promise<void>;

    export function clearImageCache(): Promise<void>;
}