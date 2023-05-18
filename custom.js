const observeTree = new MutationObserver(() => {
  handleSuggestWidgetMargin();
});

observeTree.observe(document, {
  childList: true,
  subtree: true,
});

function handleSuggestWidgetMargin() {
    // Container = displays a code's docs
    const container = document.querySelector('.suggest-details-container');
    let widget = null

    // Widget = list of code suggestions
    const activeWidgets = document.querySelectorAll('.suggest-widget')

    for (const activeWidget of activeWidgets) {
        if (activeWidget.style.display === "block") {
            widget = activeWidget
        }
    }

    if (container) {
        container.style.marginTop = '0px';
        container.style.marginLeft = '0px';
    }

    if (container && widget) {
        const containerRect = container.getBoundingClientRect();
        const widgetRect = widget.getBoundingClientRect();

        if (
            widgetRect.y < containerRect.y &&
            widgetRect.left === containerRect.left
        ) {
            container.style.marginTop = '8px';
        } else if (widgetRect.x > containerRect.x) {
            container.style.marginLeft = '-8px';
        } else {
            container.style.marginLeft = '8px';
        }

    }
}
