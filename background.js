chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const originalUrl = details.url;
    
    // Check if the URL starts with fluent.info
    if (originalUrl.includes('fluent.info')) {
        try {
            const urlObj = new URL(originalUrl);
            // Replace domain with testwp.test
            urlObj.hostname = 'testwp.test';
            const newUrl = urlObj.toString();
            
            // Redirect to the new URL
            chrome.tabs.update(details.tabId, { url: newUrl });
            
        } catch (e) {
            console.error('Invalid URL:', originalUrl, e);
        }
    }
}, { url: [{ hostContains: 'fluent.info' }] });