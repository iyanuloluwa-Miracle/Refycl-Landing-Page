// Configuration for Refyul Landing Page
const CONFIG = {
    // Waitlist Settings
    waitlist: {
        maxSignups: 1000,
        currentSignups: 847,
        discountPercentage: 50
    },

    // API Endpoints (when backend is ready)
    api: {
        baseUrl: 'https://api.refyul.com',
        endpoints: {
            signup: '/waitlist/signup',
            status: '/waitlist/status'
        }
    },

    // Social Media Links
    social: {
        twitter: 'https://twitter.com/refyul',
        instagram: 'https://instagram.com/refyul',
        facebook: 'https://facebook.com/refyul',
        linkedin: 'https://linkedin.com/company/refyul'
    },

    // Contact Information
    contact: {
        email: 'hello@refyul.com',
        phone: '+234 XXX XXX XXXX',
        address: 'Lagos, Nigeria'
    },

    // Feature Flags
    features: {
        enableWaitlist: true,
        showProgress: true,
        enableAnalytics: false
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
