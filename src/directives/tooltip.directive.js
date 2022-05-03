export default {
    bind(domNode, { value }) {
        M.Tooltip.init(domNode, { html: value });
    },
    unbind(domNode) {
        const tooltip = M.Tooltip.getInstance(domNode);

        if (tooltip && tooltip.destroy) {
            tooltip.destroy();
        }
    }
}
