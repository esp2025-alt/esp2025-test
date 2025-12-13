
export function useIntersection(
    node: HTMLElement,
    options: IntersectionObserverInit,
    callback: () => void
) {
    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(node); // Unobserve the node after callback is triggered
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
