export default function useClassName(block: string): (element?: string, modifier?: string) => string {
    return function (element?: string, modifier?: string) {
        let className = block;

        if (element) {
            className += `__${element}`;
        }
        if (modifier) {
            className += `--${modifier}`;
        }
        return className;
    }
}